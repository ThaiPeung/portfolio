"use client";

import Laptop from "@/components/Laptop";
import { Loader, OrbitControls } from "@react-three/drei";
import { CameraProps, Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const LaptopPage = () => {
  return (
    <>
      <Canvas
        className="r3f"
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
      >
        {/* <Suspense fallback={<Loader />}> */}
        <Laptop />
        {/* </Suspense> */}
      </Canvas>
    </>
  );
};

export default LaptopPage;
