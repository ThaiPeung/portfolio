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
    position: [-50.49, 25.60, 69.51],
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
      }}
    >
      <Grid
        container
        direction="row"
        sx={{
          height: "100%",
          width: "100%",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Grid
          size={"grow"}
          sx={{
            justifyItems: "center",
          }}
        >
          <Canvas
            flat
            shadows
            camera={cameraSetting}
            style={{
              width: "45vw",
              height: "70vh",
              borderRadius: "10px",
              border: "1px solid #000",
            }}
          >
            {/* <Suspense fallback={<Loader />}> */}
            <MedievalBook />
            {/* </Suspense> */}
          </Canvas>
        </Grid>
        <Grid
          size={"grow"}
          sx={{
            justifyItems: "center",
          }}
        >
          <LoginCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CRUDPage;
