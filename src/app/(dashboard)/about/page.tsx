"use client";

import React, { Suspense } from "react";
import { CameraProps, Canvas } from "@react-three/fiber";
import ThreeLoader from "@/components/ThreeLoader";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import Skills from "@/components/about/Skills";
import { CameraRig } from "@/components/crud/share/CameraRig";
import { Leva } from "leva";
import { Vector3 } from "three";
import Contact from "@/components/about/Contact";
import CameraControl from "./cameraControl";

export type originalCameraPosType = {
  number: number[];
  vector: Vector3;
};

const AboutPage = () => {
  const originalCameraPos = {
    number: [0, 0, 23],
    vector: new Vector3(0, 0, 23),
  };
  const cameraSetting: CameraProps = {
    fov: 25,
    near: 0.1,
    far: 200,
    position: originalCameraPos.vector,
    rotation: [0, 0, 0],
  };

  return (
    <Canvas
      className="r3f"
      camera={cameraSetting}
      flat
      shadows
      style={{
        outline: "none",
        position: "fixed",
        top: 64,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <color args={["#caf0f8"]} attach="background" />

      {/* <OrbitControls /> */}

      <Environment preset="city" />

      <Suspense fallback={<ThreeLoader />}>
        <CameraControl originalCameraPos={originalCameraPos}/>
        <Skills originalCameraPos={originalCameraPos} />
        {/* <Contact originalCameraPos={originalCameraPos} /> */}
      </Suspense>
    </Canvas>
  );
};

export default AboutPage;
