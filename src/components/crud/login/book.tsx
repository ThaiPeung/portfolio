"use client";

import {
  Float,
  OrbitControls,
  Sky,
  Stage,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { useEffect } from "react";

// -| MUI

// -| MUI Icons

// -| Projects

const MedievalBook = () => {
  const MedievalFantasyBook = useGLTF("/models/medieval_fantasy_book.glb");
  const animations = useAnimations(
    MedievalFantasyBook.animations,
    MedievalFantasyBook.scene
  );

  useEffect(() => {
    const action = animations.actions["The Life"];
    action?.reset().fadeIn(0.5).play();

    return () => {
      action?.fadeOut(0.5);
    };
  }, []);

  const { camera } = useThree();
  return (
    <>
      <OrbitControls
        minDistance={65}
        maxDistance={150}
        enablePan={false}
        onChange={() => {
          // console.log(
          //   'camera pos:',
          //   camera.position.x.toFixed(2),
          //   camera.position.y.toFixed(2),
          //   camera.position.z.toFixed(2)
          // )
        }}
      />
      <directionalLight castShadow position={[4, 4, 1]} intensity={4.5} />
      <ambientLight intensity={1} />
      <Stage>
        <Float floatIntensity={1} rotationIntensity={0.25}>
          <primitive object={MedievalFantasyBook.scene} position-y={20} />
        </Float>
      </Stage>
      <Sky
        distance={450000}
        sunPosition={[1, 1, -1040]}
        inclination={0}
        mieCoefficient={0.029}
        mieDirectionalG={0.73}
        // turbidity={}
      />
    </>
  );
};

export default MedievalBook;
