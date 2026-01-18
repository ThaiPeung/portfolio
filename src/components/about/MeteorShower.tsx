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
  vel: THREE.Vector3;
};

type MeteorShowerProps = {
  count?: number;
  //-| Spawn volume (tweak to match your scene scale)
  spawnBox?: {
    x: number;
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

const MeteorShower: React.FC<{}> = ({
  count = 60,
  spawnBox = { x: 120, yMin: 20, yMax: 80, zMin: -180, zMax: -40 },
  dirJitter = { x: 0.35, y: 0.3, z: 0.35 },
  speedRange = { min: 30, max: 60 },
}: MeteorShowerProps) => {
  const headRef = useRef<THREE.InstancedMesh>(null!);
  const tailRef = useRef<THREE.InstancedMesh>(null!);

  const gradientTex = useMemo(() => makeTailGradientTexture(128), []);

  //-| Reused temps to avoid allocations in the render loop
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const dir = useMemo(() => new THREE.Vector3(), []);
  const tmpPos = useMemo(() => new THREE.Vector3(), []);
  const tmpColor = useMemo(() => new THREE.Color(), []);
  const AXIS_Y = useMemo(() => new THREE.Vector3(0, 1, 0), []);

  const meteors = useMemo<Meteor[]>(() => {
    const arr: Meteor[] = [];
    for (let i = 0; i < count; i++) {
      const m: Meteor = {
        life: 0,
        maxLife: 1,
        size: 0.2,
        speed: 30,
        pos: new THREE.Vector3(),
        vel: new THREE.Vector3(),
      };
      respawn(m, true);
      //-| Stagger start times so they don’t all spawn together
      m.life = Math.random() * m.maxLife;
      arr.push(m);
    }
    return arr;
    //-| eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  function respawn(m: Meteor, initial = false) {
    m.life = 0;
    m.maxLife = THREE.MathUtils.randFloat(0.6, 1.5);
    m.size = THREE.MathUtils.randFloat(0.12, 0.28);
    m.speed = THREE.MathUtils.randFloat(speedRange.min, speedRange.max);

    //-| Spawn position
    m.pos.set(
      THREE.MathUtils.randFloatSpread(spawnBox.x),
      THREE.MathUtils.randFloat(spawnBox.yMin, spawnBox.yMax),
      THREE.MathUtils.randFloat(spawnBox.zMin, spawnBox.zMax),
    );

    //-| Base direction: mostly down and toward camera (+Z)
    //-| Add jitter so each meteor is a bit different
    dir
      .set(
        THREE.MathUtils.randFloat(-dirJitter.x, dirJitter.x),
        -THREE.MathUtils.randFloat(0.9, 1.3) -
          (initial ? 0 : Math.random() * dirJitter.y),
        THREE.MathUtils.randFloat(1.4, 2.4) +
          (initial ? 0 : Math.random() * dirJitter.z),
      )
      .normalize();

    m.vel.copy(dir).multiplyScalar(m.speed);
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

  useFrame((_, dt) => {
    const head = headRef.current;
    const tail = tailRef.current;

    // Visual tuning knobs (keep these together)
    const headStretch = 1.6; // stretches the head along motion
    const tailLenFactor = 0.12; // tail length ~ speed * factor
    const tailRadiusFactor = 0.55; // tail radius relative to meteor size

    for (let i = 0; i < meteors.length; i++) {
      const m = meteors[i];

      m.life += dt;
      m.pos.addScaledVector(m.vel, dt);

      //-| Respawn if expired or out of bounds
      if (m.life > m.maxLife || m.pos.y < -30 || m.pos.z > 80) {
        respawn(m);
      }

      //-| Direction (normalized)
      dir.copy(m.vel).normalize();

      //-| Fade out over lifetime
      const t = THREE.MathUtils.clamp(m.life / m.maxLife, 0, 1);
      const fade = 1 - t;

      //-| ---------- HEAD INSTANCE ----------
      dummy.position.copy(m.pos);
      dummy.quaternion.setFromUnitVectors(AXIS_Y, dir);

      //-| scale: slightly stretched along direction axis
      dummy.scale.set(m.size, m.size * headStretch, m.size);
      dummy.updateMatrix();
      head.setMatrixAt(i, dummy.matrix);

      //-| Color brightness controls “emission feel” (with additive blending + bloom)
      //-| Slightly bluish-white; multiply by fade.
      tmpColor.setRGB(0.9 * fade, 0.95 * fade, 1.0 * fade);
      head.setColorAt(i, tmpColor);

      //-| ---------- TAIL INSTANCE ----------
      const tailLen = THREE.MathUtils.clamp(m.speed * tailLenFactor, 2.0, 10.0);

      //-| Place tail behind the head: center of tail is half-length behind
      tmpPos.copy(m.pos).addScaledVector(dir, -tailLen * 0.5);
      dummy.position.copy(tmpPos);
      dummy.quaternion.setFromUnitVectors(AXIS_Y, dir);

      //-| Tail geometry is height=1 along Y, so scale Y to tailLen
      const r = m.size * tailRadiusFactor;
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
      <EffectComposer autoClear={false} multisampling={16}>
        <Bloom
          intensity={1.1}
          mipmapBlur
          luminanceThreshold={0.35}
          luminanceSmoothing={0.2}
        />
        <SMAA />
      </EffectComposer>
      <group>
        {/* HEADS */}
        <instancedMesh ref={headRef} args={[undefined, undefined, count]}>
          <sphereGeometry args={[1, 10, 10]} />
          <meshBasicMaterial
            vertexColors
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </instancedMesh>

        {/* TAILS: thin cone with alpha gradient */}
        <instancedMesh ref={tailRef} args={[undefined, undefined, count]}>
          {/* Cone height is along +Y. radiusTop=0 makes a pointy tail end. */}
          <coneGeometry args={[1, 1, 6, 1, true]} />
          <meshBasicMaterial
            vertexColors
            map={gradientTex}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
            side={THREE.DoubleSide}
          />
        </instancedMesh>
      </group>
    </>
  );
};

export default MeteorShower;
