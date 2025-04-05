import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loader from "./Loader";
import Earth from "./models/Earth";
import { OrbitControls, Sky, Stars } from "@react-three/drei";

const HomePage = () => {
  return (
    <>
      <OrbitControls />

      <directionalLight position={[1, 1, 1]} intensity={2} />
      <ambientLight intensity={0.5} />

      <Earth />

    </>
  );
};

export default HomePage;
