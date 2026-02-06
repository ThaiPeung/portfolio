"use client";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import { RootState, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Mesh } from "three";

const SpaceBackground = () => {
  const sphereRef = useRef<Mesh>({} as Mesh);
  const texture = useTexture("/textures/stars_milky_way.jpg");
  const { scene } = useThree();

  // useEffect(() => {
  //   // Make the texture behave like a 360° equirectangular background
  //   texture.mapping = THREE.EquirectangularReflectionMapping;

  //   // Use as the scene background
  //   scene.background = texture;

  //   return () => {
  //     scene.background = null;
  //   };
  // }, [scene, texture]);

  // useFrame((state: RootState, delta) => {
  //   sphereRef!.current!.rotation.y += delta * 0.002;
  // });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[200, 64, 64]} />
      <meshBasicMaterial
        map={texture}
        side={THREE.BackSide}
        depthWrite={false}
      />
    </mesh>
  );
};

export default SpaceBackground;
