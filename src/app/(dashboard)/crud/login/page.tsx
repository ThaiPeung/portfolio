"use client";

import React, { Suspense } from "react";

// -| MUI
import { Box, Grid } from "@mui/material";
import { CameraProps, Canvas } from "@react-three/fiber";
import LoginCard from "@/components/crud/login/loginCard";
import MedievalBook from "@/components/crud/login/book";
import { useGLTF } from "@react-three/drei";

// -| MUI Icons

// -| Projects

const CRUDPage = () => {
  const cameraSetting: CameraProps = {
    near: 0.1,
    far: 1000,
    position: [-50.54, 77.21, 74.24],
  };  
  
  return (
    <Box sx={{ height: "100%" }}>
      <Grid
        container
        spacing={2}
        sx={{
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid size={"grow"}>
          <Box
            sx={{
              justifyItems: "center",
              alignItems: "center",
            }}
          >
            <Canvas
              flat
              shadows
              camera={cameraSetting}
              style={{
                width: "45vw",
                height: "80vh",
              }}
            >
              {/* <Suspense fallback={<Loader />}> */}
                <MedievalBook />
              {/* </Suspense> */}
            </Canvas>
          </Box>
        </Grid>
        <Grid size={"grow"}>
          <LoginCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CRUDPage;
