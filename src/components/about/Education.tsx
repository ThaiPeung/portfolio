"use client";

import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Float, Html, useGLTF } from "@react-three/drei";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import * as THREE from "three";
import { Object3D, Vector3 } from "three";
import { originalCameraPosType, targetNameType } from "./types";
import {
  checkCurrentTargetName,
  onClickHandler,
  onEnterHandler,
  onLeaveHandler,
} from "./shared/handler";
import { Select } from "@react-three/postprocessing";
import CustomCard2 from "../customComponents/customCard2";

const Education: React.FC<{
  focusOn: boolean;
  setFocusOn: Dispatch<SetStateAction<boolean>>;
  originalCameraPos: originalCameraPosType;
  setTargetObj: Dispatch<SetStateAction<Vector3>>;
  targetName: string;
  setTargetName: Dispatch<SetStateAction<targetNameType>>;
  setHoveredObj: Dispatch<
    SetStateAction<THREE.Group<THREE.Object3DEventMap> | Object3D | null>
  >;
}> = (props) => {
  const position = new Vector3(14, 5, 0);
  const HTMLPosition = new Vector3(55, 20, 0);
  const currentTargetName = "Education";

  const obj = useGLTF("./models/University.glb");

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
  };

  const onLeave = (e: ThreeEvent<PointerEvent>) => {
    onLeaveHandler(e, props.setHoveredObj, setHover);
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
                position={[5, 4, 0]}
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
                      fontSize: "5rem",
                      fontWeight: "600",
                      color: "#fcf300",
                    }}
                  >
                    Education
                  </Typography>
                </CustomCard2>
              </Html>
            )}
          {(props.focusOn ||
            checkCurrentTargetName("Skills", props.targetName)) &&
            open && (
              <Html
                position={[5, 4, 0]}
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
                    Education
                  </Typography>
                  <Typography
                    sx={{
                      pl: "40px",
                      fontSize: "2rem",
                      fontWeight: "600",
                      color: "",
                    }}
                  >
                    Thammasat University: GPA 3.14
                  </Typography>
                </CustomCard2>
              </Html>
            )}
        </primitive>
      </Float>
    </>
  );
};

export default Education;
