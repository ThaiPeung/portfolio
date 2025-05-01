"use client";

import Earth from "@/components/models/Earth";
import { Box } from "@mui/material";
import { Loader, OrbitControls } from "@react-three/drei";
import { CameraProps, Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { PerspectiveCamera } from "three";

const EarthPage = () => {
  const cameraSetting: CameraProps = {
    fov: 25,
    near: 0.1,
    far: 100,
    position: [12, 5, 4],
  };

  return (
    <Canvas
      className="r3f"
      camera={cameraSetting}
      flat
      shadows
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "block", // - removes canvas inline-block whitespace
      }}
      // gl={{ antialias: true }}
      // onCreated={({ camera, gl, size }) => {
      //   // ensure camera aspect is correct on init
      //   let cam = camera as PerspectiveCamera;
      //   cam.aspect = size.width / size.height;
      //   camera.updateProjectionMatrix();
      // }}
    >
      {/* <Suspense fallback={<Loader />}> */}
      <OrbitControls minDistance={8} maxDistance={20} enablePan={false} />

      <Earth />
      {/* </Suspense> */}
    </Canvas>
  );
};

export default EarthPage;
