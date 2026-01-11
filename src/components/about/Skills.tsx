"use client";

import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Float, Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import * as THREE from "three";
import { Vector3 } from "three";
import CustomCard2 from "../customComponents/customCard2";
import { originalCameraPosType, targetNameType } from "./types";
import { checkCurrentTargetName } from "./shared/handler";
import CustomDivider from "../customComponents/customDivider";

const Skills: React.FC<{
  focusOn: boolean;
  setFocusOn: Dispatch<SetStateAction<boolean>>;
  originalCameraPos: originalCameraPosType;
  setTargetObj: Dispatch<SetStateAction<Vector3>>;
  targetName: string;
  setTargetName: Dispatch<SetStateAction<targetNameType>>;
}> = (props) => {
  const position = new Vector3(-14, 5, 0);
  const HTMLPosition = new Vector3(5, 4, 0);

  const obj = useGLTF("./models/ToolBox.glb");

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
          onClick={(event: any) => {
            if (!props.focusOn) {
              props.setFocusOn(true);
              props.setTargetObj(position);
              setOpen(true);
              props.setTargetName("Skills");
            } else if (
              props.focusOn &&
              checkCurrentTargetName("Skills", props.targetName)
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
              checkCurrentTargetName("Skills", props.targetName)
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
                <CustomCard2 height="max-content" width="800px" padding="3rem">
                  <Typography
                    sx={{
                      fontSize: "3rem",
                      fontWeight: "600",
                      color: "#fcf300",
                    }}
                  >
                    Skills
                  </Typography>
                  <CustomDivider />
                  <Grid container spacing={8} columns={12}>
                    <Grid size={7}>
                      <Typography
                        sx={{ fontSize: "2rem", fontWeight: "600", color: "" }}
                      >
                        Programming language
                      </Typography>
                      <Stack spacing={1}>
                        {[
                          "Javascript / Typescript",
                          "C#",
                          "Java",
                          "Python",
                        ].map((item) => (
                          <Typography
                            display="block"
                            sx={{
                              paddingLeft: "1rem",
                              fontSize: "1.5rem",
                              fontWeight: "600",
                            }}
                          >
                            {"- " + item}
                          </Typography>
                        ))}
                      </Stack>
                    </Grid>
                    <Grid size={5}>
                      <Typography
                        sx={{ fontSize: "2rem", fontWeight: "600", color: "" }}
                      >
                        Backend
                      </Typography>
                      <Stack spacing={1}>
                        {["ASP.NET core", "Spring Boot"].map((item) => (
                          <Typography
                            display="block"
                            sx={{
                              paddingLeft: "1rem",
                              fontSize: "1.5rem",
                              fontWeight: "600",
                            }}
                          >
                            {"- " + item}
                          </Typography>
                        ))}
                      </Stack>

                      <Typography
                        sx={{ fontSize: "2rem", fontWeight: "600", color: "" }}
                      >
                        Database
                      </Typography>
                      <Stack spacing={1}>
                        <Typography
                          display="block"
                          sx={{
                            paddingLeft: "1rem",
                            fontSize: "1.5rem",
                            fontWeight: "600",
                          }}
                        >
                          {"- " + "MSSQL"}
                        </Typography>
                      </Stack>

                      <Typography
                        sx={{ fontSize: "2rem", fontWeight: "600", color: "" }}
                      >
                        Tools
                      </Typography>
                      <Stack spacing={1}>
                        {[
                          "Git GitHub",
                          "Azure DevOps",
                          "Figma",
                          "Docker",
                          "Cinema 4D",
                          "Blender",
                        ].map((item) => (
                          <Typography
                            display="block"
                            sx={{
                              paddingLeft: "1rem",
                              fontSize: "1.5rem",
                              fontWeight: "600",
                            }}
                          >
                            {"- " + item}
                          </Typography>
                        ))}
                      </Stack>
                    </Grid>
                  </Grid>
                </CustomCard2>
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
                <CustomCard2 height="max-content">
                  <Typography
                    sx={{
                      fontSize: "6rem",
                      fontWeight: "600",
                      color: "#fcf300",
                    }}
                  >
                    Skills
                  </Typography>
                </CustomCard2>
              </Html>
            )}
        </primitive>
      </Float>
    </>
  );
};

export default Skills;
