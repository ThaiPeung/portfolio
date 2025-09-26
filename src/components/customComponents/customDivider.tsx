import { Box } from "@mui/material";
import React from "react";

const CustomDivider = () => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: "100%",
        border: "1px solid #fff",
        boxShadow:
          "0 0 .1rem #fff, 0 0 .1rem #fff, 0 0 .5rem #00bfa5, 0 0 0.2rem #00bfa5,0 0 .3rem #00bfa5,inset 0 0 .35rem #00bfa5",
      }}
    />
  );
};

export default CustomDivider;
