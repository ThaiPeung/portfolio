"use client";

import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Float, Html, useGLTF } from "@react-three/drei";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import * as THREE from "three";
import { Group, Mesh, Object3D, Object3DEventMap, Vector3 } from "three";
import { originalCameraPosType, targetNameType } from "./types";
import {
  checkCurrentTargetName,
  onClickHandler,
  onEnterHandler,
  onLeaveHandler,
} from "./shared/handler";
import CustomCard2 from "../customComponents/customCard2";

const Experience: React.FC<{
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
  const position = new Vector3(-14, -5, 0);
  const HTMLPosition = new Vector3(18, 12, 0);

  const obj = useGLTF("./models/Laptop.glb");
  const ref = useRef<any>(null);

  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const onClick = (event: any) => {
    onClickHandler(
      event,
      "Contact",
      position,
      props.targetName,
      props.focusOn,
      props.setFocusOn,
      props.setTargetObj,
      props.setTargetName,
      setOpen,
      props.setHoveredObj,
    );
  };

  const onEnter = (e: ThreeEvent<PointerEvent>) => {
    onEnterHandler(
      e,
      "Contact",
      open,
      props.targetName,
      props.focusOn,
      props.setHoveredObj,
      setHover,
      obj.scene,
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
          ref={ref}
          position={position}
          scale={0.35}
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
                      fontSize: "5rem",
                      fontWeight: "600",
                      color: "#fcf300",
                    }}
                  >
                    Experience
                  </Typography>
                </CustomCard2>
              </Html>
            )}
        </primitive>
      </Float>
    </>
  );
};

export default Experience;
