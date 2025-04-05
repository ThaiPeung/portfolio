"use client";

import HomePage from "@/components/Home";
import Loader from "@/components/Loader";
import SimplePortfolio from "@/components/SimplePortfolio";
import { Stage } from "@react-three/drei";
import { CameraProps, Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

export default function Home() {

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
      style={{ height: "100vh" }}
    >
      <Suspense fallback={<Loader />}>
        <HomePage />
      </Suspense>
      {/* <SimplePortfolio /> */}
    </Canvas>
  );
}
