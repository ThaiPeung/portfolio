"use client";

import { originalCameraPosType } from "@/app/(dashboard)/about/page";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Float, Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import * as THREE from "three";
import { Vector3 } from "three";

const Contact: React.FC<{
  setFocusOn: Dispatch<SetStateAction<boolean>>;
  originalCameraPos: originalCameraPosType;
  setTargetObj: Dispatch<SetStateAction<Vector3>>;
}> = (props) => {
  const ToolBox = useGLTF("./models/MacBook.gltf");
  const meshRef = useRef<THREE.Object3D>(null!);

  const [open, setOpen] = useState(false);

  return (
    <>
      <Float rotationIntensity={0.4} floatIntensity={0.4} speed={1}>
        <primitive
          ref={meshRef}
          position={[-7, 2.5, 0]}
          object={ToolBox.scene}
          onClick={(event: any) => {
            props.setFocusOn((prev) => !prev);
            props.setTargetObj(new Vector3(-7, 2.5, 0));
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
