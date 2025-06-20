"use client";

import React, { useEffect, useRef } from "react";

// -| Mui
import { Box } from "@mui/material";
import { darkModeType } from "@/stores/redux/darkMode";
import { useSelector } from "react-redux";

// -| Mui icon(s)

// -| Project

const page = () => {
  // -| Redux
  const darkMode: darkModeType = useSelector(
    (configureStoreReducer: any) => configureStoreReducer.darkMode.val
  );


  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        position: "relative",
        padding: "20px",
        borderRadius: "10px",
        border: darkMode ? "" : "1px solid #212121",
        boxShadow: darkMode ? "" : "3px 3px 3px #bdbdbd",
        backgroundImage: darkMode
          ? "linear-gradient(135deg, #212121, #424242)"
          : "linear-gradient(135deg, #bdbdbd, #e0e0e0)",
        "&::before, &::after": {
          content: '""',
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          position: "absolute",
          borderRadius: "inherit",
          padding: "3px",
          backgroundImage: darkMode
            ? "conic-gradient(#ff4545, #00ff49, #006aff, #ff0095, #ff4545)"
            : "",
          zIndex: "-1",
        },
        "&::before": {
          filter: "blur(1.5rem)",
          opacity: 0.5,
        },
      }}
    >
      <Box sx={{height: "1000px"}}>

      home
      </Box>
    </Box>
  );
};

export default page;
