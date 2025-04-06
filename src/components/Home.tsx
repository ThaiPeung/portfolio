import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Loader from "./Loader";
import Earth from "./models/Earth";
import { OrbitControls, Sky, Stars } from "@react-three/drei";

const HomePage = () => {
  return (
    <>
      <OrbitControls minDistance={8} maxDistance={20} enablePan={false}/>

      <Earth />

    </>
  );
};

export default HomePage;
