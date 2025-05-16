"use client";

import {
  shaderMaterial,
  Stage,
  Stars,
  Texture,
  useAnimations,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { extend, useFrame, useLoader } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { ShaderMaterial, TextureLoader } from "three";

import earthVertexShader from "./earthShaders/vertex.glsl";
import earthFragmentShader from "./earthShaders/fragment.glsl";

import atmosphereVertexShader from "./atmosphereShaders/vertex.glsl";
import atmosphereFragmentShader from "./atmosphereShaders/fragment.glsl";

import moonVertexShader from "./moonShaders/vertex.glsl";
import moonFragmentShader from "./moonShaders/fragment.glsl";

import { Lensflare, LensflareElement } from "three/addons/objects/Lensflare.js";

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
    "./models/Earth/textures/8k_earth_daymap.jpg"
  );
  earthDayTexture.colorSpace = THREE.SRGBColorSpace;
  earthDayTexture.anisotropy = 8;

  const earthNightTexture = useLoader(
    TextureLoader,
    "./models/Earth/textures/8k_earth_nightmap.jpg"
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
    [earthParameters]
  );

  // ------------------------------ Sun ------------------------------
  const debugSunRef = useRef<THREE.Mesh>(null);

  let phi = Math.PI * 0.5;
  let theta = 0;
  let moonPhi = Math.PI * 0.5;
  let moonTheta = -Math.PI * 0.5;
  let atmosphereDayColor = "#00aaff";
  let atmosphereTwilightColor = "#ff6600";

  // const {
  //   phi,
  //   theta,
  //   moonPhi,
  //   moonTheta,
  //   atmosphereDayColor,
  //   atmosphereTwilightColor,
  // } = useControls({
  //   phi: {
  //     value: Math.PI * 0.5,
  //     min: 0,
  //     max: Math.PI,
  //   },
  //   theta: {
  //     value: 0,
  //     min: -Math.PI,
  //     max: Math.PI,
  //   },
  //   moonPhi: {
  //     value: Math.PI * 0.5,
  //     min: 0,
  //     max: Math.PI,
  //   },
  //   moonTheta: {
  //     value: -Math.PI * 0.5,
  //     min: -Math.PI,
  //     max: Math.PI,
  //   },
  //   atmosphereDayColor: {
  //     value: "#00aaff",
  //   },
  //   atmosphereTwilightColor: {
  //     value: "#ff6600",
  //   },
  // });

  // ------------------------------ Moon ------------------------------
  const debugMoonRef = useRef<THREE.Mesh>(null);

  //- for animate moon rotating around
  const moonThetaRef = useRef(-Math.PI * 0.5);

  const moonTexture = useLoader(
    TextureLoader,
    "./models/Moon/textures/moon.jpg"
  );
  moonTexture.colorSpace = THREE.SRGBColorSpace;
  moonTexture.anisotropy = 8;

  const moonDarkTexture = useLoader(
    TextureLoader,
    "./models/Moon/textures/Dark.jpg"
  );
  moonTexture.colorSpace = THREE.SRGBColorSpace;

  const moonMaterial = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          uMoonTexture: { value: moonTexture },
          uMoonDarkTexture: { value: moonDarkTexture },
          uSunDirection: {
            value: new THREE.Vector3(0, 0, 1),
          },
        },
        vertexShader: moonVertexShader,
        fragmentShader: moonFragmentShader,
      }),
    [moonTexture, moonDarkTexture]
  );

  // ------------------------------ lensflares ------------------------------
  const pointLightRef = useRef<THREE.Mesh>(null);

  const textureLoader = new THREE.TextureLoader();

  const textureFlare0 = textureLoader.load(
    "./models/Earth/lenses/lensflare0.png"
  );
  const textureFlare1 = textureLoader.load(
    "./models/Earth/lenses/lensflare1.png"
  );

  // Create the Lensflare instance with multiple elements.
  const lensflare = useMemo(() => {
    const light = new THREE.PointLight(0xffffff, 1.5, 2000, 0);
    light.color.setHSL(1, 1, 1);

    const lensflare = new Lensflare();
    lensflare.addElement(
      new LensflareElement(textureFlare0, 350, 0, light.color)
    );
    lensflare.addElement(new LensflareElement(textureFlare1, 30, 0.6));
    lensflare.addElement(new LensflareElement(textureFlare1, 35, 0.7));
    lensflare.addElement(new LensflareElement(textureFlare1, 60, 0.9));
    lensflare.addElement(new LensflareElement(textureFlare1, 35, 1));
    return lensflare;
  }, [textureFlare0, textureFlare1]);

  useFrame((state, delta) => {
    // - Rotate earth
    earthRef!.current!.rotation.y += delta * 0.05;
    debugMoonRef!.current!.rotation.y += delta * 0.05;

    // - Debug sun
    const sunSpherical = new THREE.Spherical(1, phi, theta);
    const sunDirection = new THREE.Vector3().setFromSpherical(sunSpherical);

    // - Sun position
    debugSunRef.current?.position.copy(sunDirection).multiplyScalar(30);

    // - Debug moon
    moonThetaRef.current += delta * 0.03;
    const moonSpherical = new THREE.Spherical(1, moonPhi, moonThetaRef.current);
    const moonDirection = new THREE.Vector3().setFromSpherical(moonSpherical);

    // - Moon position
    debugMoonRef.current?.position.copy(moonDirection).multiplyScalar(15);

    // - Lensflare position
    pointLightRef.current?.position.copy(sunDirection).multiplyScalar(29.9);
    pointLightRef.current?.translateY(0.1);

    // - Uniform
    earthMaterial.uniforms.uSunDirection.value.copy(sunDirection);
    atmosphereMaterial.uniforms.uSunDirection.value.copy(sunDirection);
    moonMaterial.uniforms.uSunDirection.value.copy(sunDirection);

    setEarthParameters({
      atmosphereDayColor: atmosphereDayColor,
      atmosphereTwilightColor: atmosphereTwilightColor,
    });
  });

  return (
    <>
      <color args={["#000000"]} attach={"background"} />
      <Stage intensity={0}>
        <pointLight ref={pointLightRef}>
          <primitive object={lensflare} />
        </pointLight>

        {/* Earth */}
        <mesh ref={earthRef} material={earthMaterial}>
          <sphereGeometry args={[2, 64, 64]} />
        </mesh>

        {/* Atmosphere */}
        <mesh material={atmosphereMaterial} scale={[1.04, 1.04, 1.04]}>
          <sphereGeometry args={[2, 64, 64]} />
        </mesh>

        {/* Sun */}
        <mesh ref={debugSunRef}>
          <icosahedronGeometry args={[0.1, 2]} />
          <meshBasicMaterial />
        </mesh>

        {/* Moon */}
        <mesh ref={debugMoonRef} material={moonMaterial}>
          <sphereGeometry args={[0.24, 32, 32]} />
        </mesh>
      </Stage>

      <Stars
        radius={100}
        depth={50}
        count={10000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
};

export default Earth;
