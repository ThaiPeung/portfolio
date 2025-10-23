"use client";

import React, { useEffect, useState } from "react";
import { CameraProps, Canvas } from "@react-three/fiber";

//-| Mui
import { Box } from "@mui/material";
import { OrbitControls, Stage, Stars } from "@react-three/drei";
import { darkModeType } from "@/stores/redux/darkMode";
import { useSelector } from "react-redux";

//-| Mui icon(s)

//-| Project

export default function layout({ children }: { children: React.ReactNode }) {
  //-| Redux
  const darkMode: darkModeType = useSelector(
    (configureStoreReducer: any) => configureStoreReducer.darkMode.val
  );

  //-| useState

  return (
    <>
      <Box
        sx={{
          boxSizing: "border-box",
          width: "100%",
          height: "auto",
          minHeight: "max-content",
          display: "grid",
          placeItems: "center",
          paddingTop: "min(50px, 4%)",
          paddingLeft: "min(150px, 8%)",
          paddingRight: "min(150px, 8%)",
          paddingBottom: "min(150px, 8%)",
        }}
      >
        {children}
      </Box>
    </>
  );
}
