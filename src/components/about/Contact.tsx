"use client";

import { originalCameraPosType } from "@/app/(dashboard)/about/page";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Float, Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";

const Contact: React.FC<{ originalCameraPos: originalCameraPosType }> = (
  props
) => {
  const ToolBox = useGLTF("./models/ToolBox.glb");
  const meshRef = useRef<THREE.Object3D>(null!);

  const [open, setOpen] = useState(false);

  //-| Smoothed cameras setup
  const [smoothedCameraPosition] = useState(() => new THREE.Vector3(0, 0, 50));
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3());

  useFrame((state, delta) => {
    //-| Camera.
    if (meshRef.current && open) {
      const bodyPosition = meshRef.current.position;

      const cameraPosition = new THREE.Vector3(
        props.originalCameraPos.number[0],
        props.originalCameraPos.number[1],
        props.originalCameraPos.number[2]
      );
      cameraPosition.copy(bodyPosition);
      cameraPosition.z += 15;

      const cameraTarget = new THREE.Vector3();
      cameraTarget.copy(bodyPosition);

      //-| Make camera move smooter.
      smoothedCameraPosition.lerp(cameraPosition, 3 * delta);
      smoothedCameraTarget.lerp(cameraTarget, 3 * delta);

      state.camera.position.copy(smoothedCameraPosition);
      state.camera.lookAt(smoothedCameraTarget);
    } else {
      const cameraPosition = new THREE.Vector3(
        props.originalCameraPos.number[0],
        props.originalCameraPos.number[1],
        props.originalCameraPos.number[2]
      );
      cameraPosition.copy(props.originalCameraPos.vector);
      cameraPosition.z += 2;

      const cameraTarget = new THREE.Vector3();
      cameraTarget.copy(props.originalCameraPos.vector);

      //-| Make camera move smooter.
      smoothedCameraPosition.lerp(cameraPosition, 4 * delta);
      smoothedCameraTarget.lerp(cameraTarget, 4 * delta);

      state.camera.position.copy(smoothedCameraPosition);
      state.camera.lookAt(smoothedCameraTarget);
    }
  });

  return (
    <>
      <Float rotationIntensity={0.4} floatIntensity={0.4} speed={1}>
        <primitive
          ref={meshRef}
          position={[-7, 2.5, 0]}
          object={ToolBox.scene}
          scale={0.5}
          onClick={(event: any) => {
            console.log(event.object);
            setOpen((prev) => !prev);
            //-| prevent the event from going futhere to object(s) behide the target object
            event.stopPropagation();
          }}
          onPointerEnter={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={() => {
            document.body.style.cursor = "default";
          }}
        >
          {open && (
            <Html
              position={[6, 4, 0]}
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
                  width: "400px",
                }}
              >
                <Typography
                  sx={{ fontsize: "3rem", fontWeight: "600", color: "#fcf300" }}
                >
                  Contact
                </Typography>
              </Box>
            </Html>
          )}
        </primitive>
      </Float>
    </>
  );
};

export default Contact;
