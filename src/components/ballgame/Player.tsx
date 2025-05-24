import useGame from "@/stores/useGame";
import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  RigidBody,
  useRapier,
  type RapierRigidBody,
} from "@react-three/rapier";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Player = () => {
  // -| Ref(s)
  const body = useRef<any>(null);

  // -| useKeyboardControls
  const [subscribeKeys, getKeys] = useKeyboardControls();

  // -| useRapier
  const { rapier, world } = useRapier();

  // -| Smoothed cameras setup
  const [smoothedCameraPosition] = useState(
    () => new THREE.Vector3(10, 10, 10)
  );
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3());

  // -| useGame stages from (zustand)
  const start = useGame((state) => state.start);
  const end = useGame((state) => state.end);
  const restart = useGame((state) => state.restart);
  const blocksCount = useGame((state) => state.blocksCount);

  // -| Jump function
  const jump = () => {
    if (body.current) {
      // -| get current position of the ball
      const origin = body.current.translation();
      // -| "origin" is position of center of the ball -0.31 to move it to around bellow of the ball
      origin.y -= 0.31;

      const direction = { x: 0, y: -1, z: 0 };

      // -| Cast ray from bottom of the ball downward to check the distance between the ball and the floor (think of Sonar)
      const ray = new rapier.Ray(origin, direction);
      // -| When we cast ray to "hit" (check the distance between ball and other object) something
      // -| (in this case, the whole world [every other object])
      const hit = world.castRay(ray, 10, true);

      // -| In case of ball is bouncing so we don't have to wait until the ball stop bouncing to jump again
      if (hit!.timeOfImpact < 0.15) {
        body.current.applyImpulse({ x: 0, y: 0.25, z: 0 });
      }
    }
  };

  const reset = () => {
    // -| Reset ball position
    body.current.setTranslation({ x: 0, y: 1, z: 0 });
    // -| Reset ball velocities
    body.current.setLinvel({ x: 0, y: 0, z: 0 });
    body.current.setAngvel({ x: 0, y: 0, z: 0 });
  };

  // -| Handle keyboard event
  useEffect(() => {
    // -|
    const unsubscribeReset = useGame.subscribe(
      // -| Selector: pick the "state.phase" to watch
      (state) => state.phase,
      // -| Listener: called whenever that slice changes; receives the new phase value
      (phaseVal) => {
        if (phaseVal === "ready") {
          reset();
        }
      }
    );

    // -| Handle player jump (when press spacebar)
    const unsubscribeJump = subscribeKeys(
      // -| Selector: pick the "state.jump" to watch
      (state) => state.jump,
      // -| Listener: called whenever that slice changes; receives the new phase value
      (jumpVal) => {
        if (jumpVal) {
          jump();
        }
      }
    );

    // -| Handle player start playing the game (when press any [W, A, S, D, spacebar])
    const unsubscribeAny = subscribeKeys(() => {
      start();
    });

    return () => {
      unsubscribeReset;
      unsubscribeJump;
      unsubscribeAny;
    };
  }, []);

  useFrame((state, delta) => {
    // -| Handle the ball movement.
    const { forward, backward, leftward, rightward } = getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 0.6 * delta;
    const torqueStrength = 0.2 * delta;

    if (forward) {
      impulse.z -= impulseStrength;
      torque.x -= torqueStrength;
    }

    if (rightward) {
      impulse.x += impulseStrength;
      torque.z -= torqueStrength;
    }

    if (backward) {
      impulse.z += impulseStrength;
      torque.x += torqueStrength;
    }

    if (leftward) {
      impulse.x -= impulseStrength;
      torque.z += torqueStrength;
    }

    if (body.current) {
      body.current.applyImpulse(impulse);
      body.current.applyTorqueImpulse(torque);
    }

    // -| Camera.
    if (body.current) {
      const bodyPosition = body.current.translation();

      const cameraPosition = new THREE.Vector3();
      cameraPosition.copy(bodyPosition);
      cameraPosition.z += 2.25;
      cameraPosition.y += 0.65;

      const cameraTarget = new THREE.Vector3();
      cameraTarget.copy(bodyPosition);
      cameraTarget.y += 0.25;

      // -| Make camera move smooter.
      smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
      smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

      state.camera.position.copy(smoothedCameraPosition);
      state.camera.lookAt(smoothedCameraTarget);

      // -| Phases.
      // -| Check if player is at the end of stage.
      if (bodyPosition.z < -(blocksCount * 4 + 2)) {
        end();
      }

      // -| Check if player is fall out of stage.
      if (bodyPosition.y < -4) {
        restart();
      }
    }
  });

  return (
    <>
      <RigidBody
        ref={body}
        canSleep={false}
        colliders="ball"
        restitution={0.2}
        friction={1}
        linearDamping={0.5}
        angularDamping={0.5}
        position={[0, 1, 0]}
      >
        <mesh castShadow>
          <icosahedronGeometry args={[0.3, 1]} />
          <meshStandardMaterial flatShading color={"mediumpurple"} />
        </mesh>
      </RigidBody>
    </>
  );
};

export default Player;

// -| test code for Boat movement
//   const [subscribeKeys, getKeys] = useKeyboardControls();
//   const body = useRef<RapierRigidBody>(null!);
//   const mesh = useRef<THREE.Mesh>(null!);
//   const tmpVec = new THREE.Vector3();

//   // tuning parameters
//   const thrustStrength = 10; // how hard the engine pushes
//   const turnStrength = 2; // how sharply it yaws
//   const linearDamping = 0.5; // water drag on speed
//   const angularDamping = 0.8; // water drag on rotation

//   useFrame((_, delta) => {
//     const { forward, backward, leftward, rightward } = getKeys();
//     // tuning parameters
//     const thrustStrength = 10 * delta; // forward/back thrust
//     const turnStrength = 2 * delta; // yaw torque

//     // 1) thrust forward/backward along the boat’s local Z axis
//     if (forward || backward) {
//       // get the boat’s world-forward direction
//       mesh.current.getWorldDirection(tmpVec);
//       tmpVec.normalize();
//       // forward is in the negative Z of Three.js camera conventions,
//       // so we invert if needed:
//       const dir = forward
//         ? tmpVec.clone().multiplyScalar(-thrustStrength)
//         : tmpVec.clone().multiplyScalar(thrustStrength);
//       body.current.applyImpulse({ x: dir.x, y: 0, z: dir.z }, true);
//     }

//     // 2) yaw in place by applying torque around the world-up (Y) axis
//     if (leftward)
//       body.current.applyTorqueImpulse({ x: 0, y: turnStrength, z: 0 }, true);
//     if (rightward)
//       body.current.applyTorqueImpulse({ x: 0, y: -turnStrength, z: 0 }, true);

//     // 3) optional: increase damping so the boat coasts to a stop
//     body.current.setLinvel(body.current.linvel(), true); // keep current velocity
//     body.current.setAngvel(body.current.angvel(), true); // keep current spin
//     // you can tune linearDamping & angularDamping in the RigidBody props
//   });

//   return (
//     <RigidBody
//       ref={body}
//       linearDamping={0.4}
//       angularDamping={0.8}
//       // lock pitch & roll so it only yaws:
//       lockRotations={false}
//       // optionally lock X/Z translation if you want strictly 2D surface motion:
//       lockTranslations={false}
//     >
//       <mesh ref={mesh} scale={[1, 0.2, 2]}>
//         <boxGeometry />
//         <meshStandardMaterial flatShading color={"mediumpurple"} />
//       </mesh>
//     </RigidBody>
//   );
