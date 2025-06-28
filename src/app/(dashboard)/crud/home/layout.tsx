"use client";

import React, { useEffect, useState } from "react";
import { CameraProps, Canvas } from "@react-three/fiber";

// -| Mui
import { Box } from "@mui/material";
import { OrbitControls, Stage, Stars } from "@react-three/drei";
import { darkModeType } from "@/stores/redux/darkMode";
import { useSelector } from "react-redux";

// -| Mui icon(s)

// -| Project

export default function layout({ children }: { children: React.ReactNode }) {
  // -| Redux
  const darkMode: darkModeType = useSelector(
    (configureStoreReducer: any) => configureStoreReducer.darkMode.val
  );

  // -| useState

  return (
    <>
      {darkMode && (
        <Canvas
          className="r3f"
          camera={{
            fov: 75,
            near: 0.5,
            far: 1000,
          }}
          style={{
            outline: "none",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {/* <OrbitControls /> */}


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
