"use client";
import * as THREE from "three";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const SpaceBackground = () => {
  const texture = useTexture("/textures/stars_milky_way.jpg");
  const { scene } = useThree();

  useEffect(() => {
    // Make the texture behave like a 360° equirectangular background
    texture.mapping = THREE.EquirectangularReflectionMapping;

    // Use as the scene background
    scene.background = texture;

    return () => {
      scene.background = null;
    };
  }, [scene, texture]);

  return (
    <mesh>
      <sphereGeometry args={[750, 64, 64]} />
      <meshBasicMaterial
        map={texture}
        side={THREE.BackSide}
        depthWrite={false}
        toneMapped={false}
      />
    </mesh>
  );
};

export default SpaceBackground;
