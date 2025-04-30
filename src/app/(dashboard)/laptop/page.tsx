"use client";

import Laptop from "@/components/Laptop";
import { Loader, OrbitControls } from "@react-three/drei";
import { CameraProps, Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const LaptopPage = () => {
  return (
    <>
      <Canvas className="r3f" flat shadows style={{ height: "100vh" }}>
        {/* <Suspense fallback={<Loader />}> */}
        <Laptop />
        {/* </Suspense> */}
      </Canvas>
    </>
  );
};

export default LaptopPage;
