"use client";

import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Float, Html, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import * as THREE from "three";
import { Vector3 } from "three";
import { originalCameraPosType, targetNameType } from "./types";
import { checkCurrentTargetName } from "./shared/handler";

const Summary: React.FC<{
  focusOn: boolean;
  setFocusOn: Dispatch<SetStateAction<boolean>>;
  originalCameraPos: originalCameraPosType;
  setTargetObj: Dispatch<SetStateAction<Vector3>>;
  targetName: string;
  setTargetName: Dispatch<SetStateAction<targetNameType>>;
}> = (props) => {
  const position = new Vector3(0, -3, 0);
  const HTMLPosition = new Vector3(55, 30, 0);

  const obj = useGLTF("./models/medieval_fantasy_book.glb");
  const animations = useAnimations(obj.animations, obj.scene);
  const currentTargetName = "Summary";

  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const action = animations.actions["The Life"];
    action?.reset().fadeIn(0.5).play();

    return () => {
      action?.fadeOut(0.5);
    };
  }, []);

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
          scale={0.1}
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
                    width: "800px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "3rem",
                      fontWeight: "600",
                      color: "#fcf300",
                    }}
                  >
                    Summary
                  </Typography>
                  <Typography
                    sx={{ fontSize: "2rem", fontWeight: "600", color: "" }}
                  >
                    A dedicated full-stack developer with over 3 years of
                    experience in designing, developing, and maintaining
                    internal web applications. Skilled in React, ASP.NET Core,
                    Angular, and MSSQL, with experience in building and
                    improving web applications. Adept at collaborating with
                    cross-functional teams to drive business objectives, while
                    continuously updating skills to embrace emerging
                    technologies.
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
                    Summary
                  </Typography>
                </Box>
              </Html>
            )}
        </primitive>
      </Float>
    </>
  );
};

export default Summary;
