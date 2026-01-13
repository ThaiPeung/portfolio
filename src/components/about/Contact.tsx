"use client";

import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Float, Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import * as THREE from "three";
import { Vector3 } from "three";
import { Outline, Select } from "@react-three/postprocessing";
import { BlendFunction, Resolution, KernelSize } from "postprocessing";
import { originalCameraPosType, targetNameType } from "./types";
import { checkCurrentTargetName } from "./shared/handler";

const Contact: React.FC<{
  focusOn: boolean;
  setFocusOn: Dispatch<SetStateAction<boolean>>;
  originalCameraPos: originalCameraPosType;
  setTargetObj: Dispatch<SetStateAction<Vector3>>;
  targetName: string;
  setTargetName: Dispatch<SetStateAction<targetNameType>>;
}> = (props) => {
  const position = new Vector3(0, 5, 0);
  const HTMLPosition = new Vector3(7, 5, 0);
  const currentTargetName = "Contact";

  const obj = useGLTF("./models/Phone.glb");
  const ref = useRef<any>(null);

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
            ref={ref}
            position={position}
            scale={0.75}
            object={obj.scene}
            onClick={(event: any) => {
              if (!props.focusOn) {
                props.setFocusOn(true);
                props.setTargetObj(position);
                setOpen(true);
                props.setTargetName("Contact");
              } else if (
                props.focusOn &&
                checkCurrentTargetName("Contact", props.targetName)
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
                checkCurrentTargetName("Contact", props.targetName)
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
                      Contact
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
