"use client";

import { originalCameraPosType } from "@/app/(dashboard)/about/page";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Float, Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import * as THREE from "three";
import { Vector3 } from "three";

const Skills: React.FC<{
  setFocusOn: Dispatch<SetStateAction<boolean>>;
  originalCameraPos: originalCameraPosType;
  setTargetObj: Dispatch<SetStateAction<Vector3>>;
}> = (props) => {
  const ToolBox = useGLTF("./models/ToolBox.glb");
  const meshRef = useRef<THREE.Object3D>(null!);

  const [open, setOpen] = useState(false);

  return (
    <>
      <Float
        rotationIntensity={open ? 0 : 0.6}
        floatIntensity={open ? 0 : 0.6}
        speed={open ? 0 : 1}
      >
        <primitive
          ref={meshRef}
          position={[-14, 5, 0]}
          object={ToolBox.scene}
          onClick={(event: any) => {
            props.setFocusOn((prev) => !prev);
            props.setTargetObj(new Vector3(-14, 5, 0));
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
              position={[5, 4, 0]}
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
                  sx={{ fontSize: "3rem", fontWeight: "600", color: "#fcf300" }}
                >
                  Skills
                </Typography>
                <Typography
                  sx={{ fontSize: "2rem", fontWeight: "600", color: "" }}
                >
                  Programming language
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText primary="Javascript / Typescript" />
                  </ListItem>
                </List>
              </Box>
            </Html>
          )}
        </primitive>
      </Float>
    </>
  );
};

export default Skills;
