"use client";

import earthVertexShader from "./earthShaders/vertex.glsl";
import earthFragmentShader from "./earthShaders/fragment.glsl";

import atmosphereVertexShader from "./atmosphereShaders/vertex.glsl";
import atmosphereFragmentShader from "./atmosphereShaders/fragment.glsl";

import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Float, Html, useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import React, {
  Dispatch,
  SetStateAction,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";
import { Vector3 } from "three";
import { ShaderMaterial, TextureLoader } from "three";
import { originalCameraPosType, targetNameType } from "./types";
import { checkCurrentTargetName } from "./shared/handler";
import { Select } from "@react-three/postprocessing";

type earthParametersType = {
  atmosphereDayColor: string;
  atmosphereTwilightColor: string;
};

const Language: React.FC<{
  focusOn: boolean;
  setFocusOn: Dispatch<SetStateAction<boolean>>;
  originalCameraPos: originalCameraPosType;
  setTargetObj: Dispatch<SetStateAction<Vector3>>;
  targetName: string;
  setTargetName: Dispatch<SetStateAction<targetNameType>>;
}> = (props) => {
  const earthRef = useRef<THREE.Mesh>(null);

  const HTMLPosition = new Vector3(3, 3, 0);
  const position = new Vector3(14, -2.7, 0);
  const currentTargetName = "Language";

  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

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
  const debugSunRef = useRef<THREE.Mesh>(null);

  let phi = Math.PI * 0.5;
  let theta = 0;
  let atmosphereDayColor = "#00aaff";
  let atmosphereTwilightColor = "#ff6600";

  useFrame((state, delta) => {
    // - Rotate earth
    earthRef!.current!.rotation.y += delta * 0.05;

    // - Debug sun
    const sunSpherical = new THREE.Spherical(1, phi, theta);
    const sunDirection = new THREE.Vector3().setFromSpherical(sunSpherical);

    // - Sun position
    debugSunRef.current?.position.copy(sunDirection).multiplyScalar(30);

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
      {/* Earth */}
      <mesh
        ref={earthRef}
        position={position}
        material={earthMaterial}
        onClick={(event: any) => {
          if (!props.focusOn) {
            props.setFocusOn(true);
            props.setTargetObj(position);
            setOpen(true);
            props.setTargetName("Education");
          } else if (
            props.focusOn &&
            checkCurrentTargetName("Education", props.targetName)
          ) {
            props.setFocusOn(false);
            setOpen(false);
            props.setTargetName("");
          }

          //-| prevent the event from going futhere to object(s) behide the target object
          event.stopPropagation();
        }}
        onPointerEnter={() => {
          if (
            !props.focusOn ||
            checkCurrentTargetName("Education", props.targetName)
          ) {
            document.body.style.cursor = "pointer";
            setHover(true);
          }
        }}
        onPointerLeave={() => {
          document.body.style.cursor = "default";
          setHover(false);
        }}
      >
        <sphereGeometry args={[2.5, 64, 64]} />
        {(props.focusOn ||
          checkCurrentTargetName("Skills", props.targetName)) &&
          open && (
            <Html
              position={HTMLPosition}
              center
              distanceFactor={6}
              occlude={[]}
              style={{
                background: "none",
              }}
            >
              <Box
                sx={{
                  padding: "20px",
                  backgroundColor: "#072ac8",
                  borderRadius: "20px",
                  width: "600px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "3rem",
                    fontWeight: "600",
                    color: "#fcf300",
                  }}
                >
                  Language
                </Typography>
                <Typography
                  sx={{
                    pl: "40px",
                    fontSize: "2rem",
                    fontWeight: "600",
                    color: "",
                  }}
                >
                  Thai
                </Typography>
                <Typography
                  sx={{
                    pl: "40px",
                    fontSize: "2rem",
                    fontWeight: "600",
                    color: "",
                  }}
                >
                  English
                </Typography>
              </Box>
            </Html>
          )}
        {(!props.focusOn ||
          checkCurrentTargetName("Skills", props.targetName)) &&
          hover &&
          !open && (
            <Html
              position={HTMLPosition}
              center
              distanceFactor={6}
              occlude={[]}
              style={{
                background: "none",
              }}
            >
              <Box
                sx={{
                  padding: "20px",
                  backgroundColor: "#072ac8",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "5rem",
                    fontWeight: "600",
                    color: "#fcf300",
                  }}
                >
                  Skills
                </Typography>
              </Box>
            </Html>
          )}
      </mesh>

      {/* Atmosphere */}
      <mesh
        material={atmosphereMaterial}
        scale={[1.32, 1.32, 1.32]}
        position={position}
      >
        <sphereGeometry args={[2, 64, 64]} />
      </mesh>
    </>
  );
};

export default Language;
