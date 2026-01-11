"use client";

import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Float, Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import * as THREE from "three";
import { Vector3 } from "three";
import { originalCameraPosType, targetNameType } from "./types";
import { checkCurrentTargetName } from "./shared/handler";

const Experience: React.FC<{
  focusOn: boolean;
  setFocusOn: Dispatch<SetStateAction<boolean>>;
  originalCameraPos: originalCameraPosType;
  setTargetObj: Dispatch<SetStateAction<Vector3>>;
  targetName: string;
  setTargetName: Dispatch<SetStateAction<targetNameType>>;
}> = (props) => {
  const position = new Vector3(-14, -5, 0);
  const HTMLPosition = new Vector3(55, 20, 0);

  const obj = useGLTF("./models/MacBook.gltf");
  const currentTargetName = "Experience";

  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <>
      <Float
        rotationIntensity={open ? 0 : 0.6}
        floatIntensity={open ? 0 : 0.6}
        floatingRange={[-0.03, 0.03]}
        speed={open ? 0 : 1}
      >
        <primitive
          position={position}
          object={obj.scene}
          scale={1.6}
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
          {(!props.focusOn ||
            checkCurrentTargetName("Skills", props.targetName)) &&
            hover &&
            !open && (
              <Html
                position={[3, 3, 0]}
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
                    Experience
                  </Typography>
                </Box>
              </Html>
            )}
        </primitive>
      </Float>
    </>
  );
};

export default Experience;
