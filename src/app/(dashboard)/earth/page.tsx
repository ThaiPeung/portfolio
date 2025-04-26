"use client";

import Earth from "@/components/models/Earth";
import SimplePortfolio from "@/components/Laptop";
import { Loader, OrbitControls } from "@react-three/drei";
import { CameraProps, Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const EarthPage = () => {
  const cameraSetting: CameraProps = {
    fov: 25,
    near: 0.1,
    far: 100,
    position: [12, 5, 4],
  };

  return (
    <>
      <Canvas
        className="r3f"
        camera={cameraSetting}
        flat
        shadows
        style={{ height: "100vh" }}
      >
        {/* <Suspense fallback={<Loader />}> */}
        <OrbitControls minDistance={8} maxDistance={20} enablePan={false} />

        <Earth />
        {/* </Suspense> */}
      </Canvas>
    </>
  );
};

export default EarthPage;
