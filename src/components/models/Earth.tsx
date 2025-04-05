"use client";

import {
  shaderMaterial,
  Texture,
  useAnimations,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { extend, useFrame, useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { ShaderMaterial, TextureLoader } from "three";

import earthVertexShader from "./earthShaders/vertex.glsl";
import earthFragmentShader from "./earthShaders/fragment.glsl";

import atmosphereVertexShader from "./atmosphereShaders/vertex.glsl";
import atmosphereFragmentShader from "./atmosphereShaders/fragment.glsl";

type earthParametersType = {
  atmosphereDayColor: string;
  atmosphereTwilightColor: string;
};

const Earth = () => {
  // ------------------------------ Earth ------------------------------
  const earthRef = useRef<THREE.Mesh>(null);

  const [earthParameters, setEarthParameters] = useState<earthParametersType>({
    atmosphereDayColor: "#00aaff",
    atmosphereTwilightColor: "#ff6600",
  });

  const earthDayTexture = useLoader(
    TextureLoader,
    "./models/Earth/textures/day.jpg"
  );
  earthDayTexture.colorSpace = THREE.SRGBColorSpace;
  earthDayTexture.anisotropy = 8;

  const earthNightTexture = useLoader(
    TextureLoader,
    "./models/Earth/textures/night.jpg"
  );
  earthNightTexture.colorSpace = THREE.SRGBColorSpace;
  earthNightTexture.anisotropy = 8;

  const earthSpecularCloudsTexture = useLoader(
    TextureLoader,
    "./models/Earth/textures/specularClouds.jpg"
  );
  earthSpecularCloudsTexture.colorSpace = THREE.SRGBColorSpace;
  earthSpecularCloudsTexture.anisotropy = 8;

  // - Memoize your ShaderMaterial so it isn’t recreated on every render.
  const earthMaterial = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          uDayTexture: { value: earthDayTexture },
          uNightTexture: { value: earthNightTexture },
          uSpecularCloudsTexture: {
            value: earthSpecularCloudsTexture,
          },
          uSunDirection: {
            value: new THREE.Vector3(0, 0, 1),
          },
          uAtmosphereDayColor: {
            value: new THREE.Color(earthParameters.atmosphereDayColor),
          },
          uAtmosphereTwilightColor: {
            value: new THREE.Color(earthParameters.atmosphereTwilightColor),
          },
        },
        vertexShader: earthVertexShader,
        fragmentShader: earthFragmentShader,
      }),
    [
      earthDayTexture,
      earthNightTexture,
      earthSpecularCloudsTexture,
      earthParameters,
    ]
  );

  // ------------------------------ Atmosphere ------------------------------
  // - Memoize your ShaderMaterial so it isn’t recreated on every render.
  const atmosphereMaterial = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          uSunDirection: {
            value: new THREE.Vector3(0, 0, 1),
          },
          uAtmosphereDayColor: {
            value: new THREE.Color(earthParameters.atmosphereDayColor),
          },
          uAtmosphereTwilightColor: {
            value: new THREE.Color(earthParameters.atmosphereTwilightColor),
          },
        },
        side: THREE.BackSide,
        transparent: true,
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
      }),
    [
      earthParameters,]
  );

  // ------------------------------ Sun ------------------------------
  const debugSunRef = useRef<THREE.Mesh>(null);

  const { phi, theta, atmosphereDayColor, atmosphereTwilightColor } =
    useControls({
      phi: {
        value: Math.PI * 0.5,
        min: 0,
        max: Math.PI,
      },
      theta: {
        value: 0,
        min: -Math.PI,
        max: Math.PI,
      },
      atmosphereDayColor: {
        value: "#00aaff",
      },
      atmosphereTwilightColor: {
        value: "#ff6600",
      },
    });

  useFrame((state, delta) => {
    // - rotate earth
    earthRef!.current!.rotation.y += delta * 0.05;

    // - Debug sun
    const sunSpherical = new THREE.Spherical(1, phi, theta);
    const sunDirection = new THREE.Vector3().setFromSpherical(sunSpherical);

    debugSunRef.current?.position.copy(sunDirection).multiplyScalar(15);

    // - Uniform
    earthMaterial.uniforms.uSunDirection.value.copy(sunDirection);
    atmosphereMaterial.uniforms.uSunDirection.value.copy(sunDirection);

    setEarthParameters({
      atmosphereDayColor: atmosphereDayColor,
      atmosphereTwilightColor: atmosphereTwilightColor,
    });
  });

  return (
    <>
      <mesh ref={earthRef} material={earthMaterial}>
        <sphereGeometry args={[2, 64, 64]} />
      </mesh>

      <mesh material={atmosphereMaterial} scale={[1.04, 1.04, 1.04]}>
        <sphereGeometry args={[2, 64, 64]} />
      </mesh>

      <mesh ref={debugSunRef}>
        <icosahedronGeometry args={[0.1, 2]} />
        <meshBasicMaterial />
      </mesh>
    </>
  );
};

export default Earth;
