import * as THREE from "three";
import React, { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  Outline,
  Select,
  Selection,
  SMAA,
} from "@react-three/postprocessing";

type Meteor = {
  life: number;
  maxLife: number;
  size: number;
  speed: number;
  pos: THREE.Vector3;
  velocity: THREE.Vector3;
};

type MeteorShowerProps = {
  luminanceThreshold: number;
  count?: number;
  //-| Spawn volume (tweak to match your scene scale)
  spawnBox?: {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    zMin: number;
    zMax: number;
  };
  //-| Direction “cone” randomness
  dirJitter?: { x: number; y: number; z: number };
  //-| Speeds
  speedRange?: { min: number; max: number };
};

function makeTailGradientTexture(width = 128) {
  //-| 1D gradient stored as width x 1 RGBA texture:
  //-| head = opaque white, tail = transparent
  const data = new Uint8Array(width * 4);

  for (let i = 0; i < width; i++) {
    const t = i / (width - 1); //-| 0 (head) -> 1 (tail)
    const alpha = Math.pow(1 - t, 2.2); //-| smooth fade
    data[i * 4 + 0] = 255;
    data[i * 4 + 1] = 255;
    data[i * 4 + 2] = 255;
    data[i * 4 + 3] = Math.floor(alpha * 255);
  }

  const tex = new THREE.DataTexture(data, width, 1, THREE.RGBAFormat);
  tex.needsUpdate = true;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipMapLinearFilter;
  return tex;
}

const MeteorShower: React.FC<MeteorShowerProps> = ({
  luminanceThreshold,
  count = 6,
  spawnBox = { xMin: -25, xMax: 75, yMin: 15, yMax: 20, zMin: -20, zMax: 0 },
  dirJitter = { y: 0.3, z: 0.05 },
  speedRange = { min: 50, max: 75 },
}) => {
  const meteorMaxLife = 1;
  const colorBloom = luminanceThreshold + 5;

  const headRef = useRef<THREE.InstancedMesh>(null!);
  const tailRef = useRef<THREE.InstancedMesh>(null!);

  const gradientTex = useMemo(() => makeTailGradientTexture(128), []);

  //-| Reused temps to avoid allocations in the render loop
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const direction = useMemo(() => new THREE.Vector3(), []);
  const tmpPos = useMemo(() => new THREE.Vector3(), []);
  const tmpColor = useMemo(() => new THREE.Color(), []);
  const AXIS_Y = useMemo(() => new THREE.Vector3(0, 1, 0), []);

  const meteors = useMemo<Meteor[]>(() => {
    const arr: Meteor[] = [];
    for (let i = 0; i < count; i++) {
      const meteor: Meteor = {
        life: 0,
        maxLife: meteorMaxLife,
        size: 0.1,
        speed: 30,
        pos: new THREE.Vector3(),
        velocity: new THREE.Vector3(),
      };
      respawnMeteor(meteor, true);
      //-| Stagger start times so they don’t all spawn together
      meteor.life = Math.random() * meteor.maxLife;
      arr.push(meteor);
    }
    return arr;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  function respawnMeteor(meteor: Meteor, initial = false) {
    meteor.life = 0;
    meteor.maxLife = THREE.MathUtils.randFloat(
      meteorMaxLife,
      meteorMaxLife + 2,
    );
    meteor.size = THREE.MathUtils.randFloat(0.03, 0.07);
    meteor.speed = THREE.MathUtils.randFloat(speedRange.min, speedRange.max);

    //-| Spawn position
    meteor.pos.set(
      THREE.MathUtils.randFloat(spawnBox.xMin, spawnBox.xMax),
      THREE.MathUtils.randFloat(spawnBox.yMin, spawnBox.yMax),
      THREE.MathUtils.randFloat(spawnBox.zMin, spawnBox.zMax),
    );

    //-| Base direction: mostly down and toward camera (+Z)
    //-| Add jitter so each meteor is a bit different
    direction
      .set(
        THREE.MathUtils.randFloat(-0.9, -0.91),
        -THREE.MathUtils.randFloat(0.9, 1.3) -
          (initial ? 0 : Math.random() * dirJitter.y),
        THREE.MathUtils.randFloat(0.1, 0.3) +
          (initial ? 0 : Math.random() * dirJitter.z),
      )
      .normalize();

    meteor.velocity.copy(direction).multiplyScalar(meteor.speed);
  }

  //-| Ensure instanceColor attributes exist early (helps avoid “why color not changing?” confusion)
  useEffect(() => {
    for (let i = 0; i < count; i++) {
      headRef.current.setColorAt(i, new THREE.Color(1, 1, 1));
      tailRef.current.setColorAt(i, new THREE.Color(1, 1, 1));
    }
    headRef.current.instanceMatrix.needsUpdate = true;
    tailRef.current.instanceMatrix.needsUpdate = true;

    if (headRef.current.instanceColor)
      headRef.current.instanceColor.needsUpdate = true;
    if (tailRef.current.instanceColor)
      tailRef.current.instanceColor.needsUpdate = true;
  }, [count]);

  useFrame((_, delta) => {
    const head = headRef.current;
    const tail = tailRef.current;

    //-| Visual tuning knobs (keep these together)
    const headStretch = 1.6; //-| stretches the head along motion
    const tailLenFactor = 0.3; //-| tail length ~ speed * factor
    const tailRadiusFactor = 0.25; //-| tail radius relative to meteor size

    for (let i = 0; i < meteors.length; i++) {
      const meteor = meteors[i];

      meteor.life += delta;
      meteor.pos.addScaledVector(meteor.velocity, delta);

      //-| Respawn if expired or out of bounds
      if (
        meteor.life > meteor.maxLife
        // ||
        // meteor.pos.y < -30 ||
        // meteor.pos.z > 80
      ) {
        respawnMeteor(meteor);
      }

      //-| Direction (normalized)
      direction.copy(meteor.velocity).normalize();

      //-| Fade out over lifetime
      const time = THREE.MathUtils.clamp(meteor.life / meteor.maxLife, 0, 1);

      //-| bloom stays strong until ~80% life, then fades to 0 by the end
      const fade = 1 - THREE.MathUtils.smoothstep(time, 0.8, 1.0);

      //-| ---------- HEAD INSTANCE ----------
      dummy.position.copy(meteor.pos);
      dummy.quaternion.setFromUnitVectors(AXIS_Y, direction);

      //-| scale: slightly stretched along direction axis
      dummy.scale.set(meteor.size, meteor.size * headStretch, meteor.size);
      dummy.updateMatrix();
      head.setMatrixAt(i, dummy.matrix);

      //-| Color brightness controls “emission feel” (with additive blending + bloom)
      //-| Slightly bluish-white; multiply by fade.
      tmpColor.setRGB(0.9 * fade, 0.95 * fade, 1.0 * fade);
      head.setColorAt(i, tmpColor);

      //-| ---------- TAIL INSTANCE ----------
      const tailLen = THREE.MathUtils.clamp(
        meteor.speed * tailLenFactor,
        2.0,
        10.0,
      );

      //-| Place tail behind the head: center of tail is half-length behind
      tmpPos.copy(meteor.pos).addScaledVector(direction, -tailLen * 0.5);
      dummy.position.copy(tmpPos);
      dummy.quaternion.setFromUnitVectors(AXIS_Y, direction);

      //-| Tail geometry is height=1 along Y, so scale Y to tailLen
      const r = meteor.size * tailRadiusFactor;
      dummy.scale.set(r, tailLen, r);
      dummy.updateMatrix();
      tail.setMatrixAt(i, dummy.matrix);

      //-| Tail brightness can be slightly dimmer than head
      tmpColor.setRGB(0.6 * fade, 0.7 * fade, 1.0 * fade);
      tail.setColorAt(i, tmpColor);
    }

    head.instanceMatrix.needsUpdate = true;
    tail.instanceMatrix.needsUpdate = true;
    if (head.instanceColor) head.instanceColor.needsUpdate = true;
    if (tail.instanceColor) tail.instanceColor.needsUpdate = true;
  });

  return (
    <>
      <group>
        {/* HEADS */}
        <instancedMesh ref={headRef} args={[undefined, undefined, count]}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            color={[colorBloom, colorBloom, colorBloom]}
          />
        </instancedMesh>

        {/* TAILS: thin cone with alpha gradient */}
        <instancedMesh ref={tailRef} args={[undefined, undefined, count]}>
          {/* Cone height is along +Y. radiusTop=0 makes a pointy tail end. */}
          <coneGeometry
            args={[1, 1, THREE.MathUtils.randFloat(8, 12), 1, true]}
          />
          <meshBasicMaterial
            map={gradientTex}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            side={THREE.DoubleSide}
            color={[colorBloom, colorBloom, colorBloom]}
          />
        </instancedMesh>
      </group>
    </>
  );
};

export default MeteorShower;
