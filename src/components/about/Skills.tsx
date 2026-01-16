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
import { ThreeEvent, useFrame } from "@react-three/fiber";
import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Group,
  Mesh,
  Object3D,
  Object3DEventMap,
  SkinnedMesh,
  Vector3,
} from "three";
import CustomCard2 from "../customComponents/customCard2";
import { originalCameraPosType, targetNameType } from "./types";
import {
  checkCurrentTargetName,
  onClickHandler,
  onEnterHandler,
  onLeaveHandler,
} from "./shared/handler";
import CustomDivider from "../customComponents/customDivider";
import {
  EffectComposer,
  Outline,
  Select,
  SMAA,
} from "@react-three/postprocessing";

const skillTools = [
  "Git GitHub",
  "Azure DevOps",
  "Figma",
  "Docker",
  "Cinema 4D",
  "Blender",
];
const skillProgramming = ["Javascript / Typescript", "C#", "Java", "Python"];
const skillFront = ["React", "Next JS", "Angular", "HTML5", "CSS3"];
const skillReact = [
  "Material UI",
  "Redux",
  "React router",
  "Tailwind",
  "React Three fiber",
  "React Three Drei",
];

type RefLike<T> = { current: T | null };

const Skills: React.FC<{
  focusOn: boolean;
  setFocusOn: Dispatch<SetStateAction<boolean>>;
  originalCameraPos: originalCameraPosType;
  setTargetObj: Dispatch<SetStateAction<Vector3>>;
  targetName: string;
  setTargetName: Dispatch<SetStateAction<targetNameType>>;
  setHoveredObj: Dispatch<
    SetStateAction<Group<Object3DEventMap> | Object3D | null>
  >;
}> = (props) => {
  const position = new Vector3(-14, 5, 0);
  const HTMLPosition = new Vector3(6, 2, 0);

  const obj = useGLTF("./models/ToolBox.glb");

  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const onClick = (event: any) => {
    onClickHandler(
      event,
      "Skills",
      position,
      props.targetName,
      props.focusOn,
      props.setFocusOn,
      props.setTargetObj,
      props.setTargetName,
      setOpen,
      props.setHoveredObj
    );
    // if (!props.focusOn) {
    //   props.setFocusOn(true);
    //   props.setTargetObj(position);
    //   setOpen(true);
    //   props.setTargetName("Skills");
    //   props.setHoveredObj(null);
    // } else if (
    //   props.focusOn &&
    //   checkCurrentTargetName("Skills", props.targetName)
    // ) {
    //   props.setFocusOn(false);
    //   setOpen(false);
    //   props.setTargetName("");
    // }

    // //-| prevent the event from going futhere to object(s) behide the target object
    // event.stopPropagation();
  };

  const onEnter = (e: ThreeEvent<PointerEvent>) => {
    onEnterHandler(
      e,
      "Skills",
      open,
      props.targetName,
      props.focusOn,
      props.setHoveredObj,
      setHover,
      obj.scene
    );
    // e.stopPropagation();
    // if (!props.focusOn || checkCurrentTargetName("Skills", props.targetName)) {
    //   document.body.style.cursor = "pointer";
    //   setHover(true);
    //   if (!open) {
    //     props.setHoveredObj(obj.scene);
    //   }
    // }
  };

  const onLeave = (e: ThreeEvent<PointerEvent>) => {
    onLeaveHandler(e, props.setHoveredObj, setHover);
    // e.stopPropagation();
    // document.body.style.cursor = "default";
    // setHover(false);
    // props.setHoveredObj(null);
  };

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
          onClick={onClick}
          onPointerEnter={onEnter}
          onPointerLeave={onLeave}
        >
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
                <CustomCard2
                  height="max-content"
                  width="800px"
                  padding="3rem 3rem 5rem 3rem"
                >
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
                    {/* Left side */}
                    <Grid size={7}>
                      <Typography
                        sx={{
                          fontSize: "2rem",
                          fontWeight: "600",
                          marginTop: "10px",
                          color: "",
                        }}
                      >
                        Programming language
                      </Typography>
                      <Stack spacing={1}>
                        {skillProgramming.map((item) => (
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
                        sx={{
                          fontSize: "2rem",
                          fontWeight: "600",
                          marginTop: "10px",
                          color: "",
                        }}
                      >
                        Front-end
                      </Typography>
                      <Stack spacing={1}>
                        {skillFront.map((item) => (
                          <>
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
                            {item === "React" &&
                              skillReact.map((subItem) => (
                                <Typography
                                  display="block"
                                  sx={{
                                    paddingLeft: "3rem",
                                    fontSize: "1.3rem",
                                    fontWeight: "600",
                                  }}
                                >
                                  {"-- " + subItem}
                                </Typography>
                              ))}
                          </>
                        ))}
                      </Stack>
                    </Grid>

                    {/* Right side */}
                    <Grid size={5}>
                      <Typography
                        sx={{
                          fontSize: "2rem",
                          fontWeight: "600",
                          marginTop: "10px",
                          color: "",
                        }}
                      >
                        Back-end
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
                        sx={{
                          fontSize: "2rem",
                          fontWeight: "600",
                          marginTop: "10px",
                          color: "",
                        }}
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
                        sx={{
                          fontSize: "2rem",
                          fontWeight: "600",
                          marginTop: "10px",
                          color: "",
                        }}
                      >
                        Tools
                      </Typography>
                      <Stack spacing={1}>
                        {skillTools.map((item) => (
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
        </primitive>
      </Float>
    </>
  );
};

export default Skills;
