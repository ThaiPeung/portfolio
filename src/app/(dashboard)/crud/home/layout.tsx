"use client";

import React from "react";
import { CameraProps, Canvas } from "@react-three/fiber";

// -| Mui
import { Box } from "@mui/material";
import { Stage, Stars } from "@react-three/drei";
import { darkModeType } from "@/stores/redux/darkMode";
import { useSelector } from "react-redux";

// -| Mui icon(s)

// -| Project

export default function layout({ children }: { children: React.ReactNode }) {
  // -| Redux
  const darkMode: darkModeType = useSelector(
    (configureStoreReducer: any) => configureStoreReducer.darkMode.val
  );

  const cameraSetting: CameraProps = {
    fov: 25,
    near: 0.1,
    far: 100,
    position: [12, 5, 4],
  };
  return (
    <>
      {darkMode && (
        <Canvas
          className="r3f"
          camera={cameraSetting}
          flat
          shadows
          style={{
            outline: "none",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: "block", // -| removes canvas inline-block whitespace
            zIndex: "-10",
          }}
        >
          <color args={["#000000"]} attach={"background"} />
          <Stage intensity={0}></Stage>

          <Stars
            radius={100}
            depth={50}
            count={10000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
        </Canvas>
      )}
      <Box
        sx={{
          boxSizing: "border-box",
          width: "100%",
          height: "auto",
          minHeight: "max-content",
          display: "grid",
          placeItems: "center",
          padding: "min(150px, 8%)",
        }}
      >
        {children}
      </Box>
    </>
  );
}
