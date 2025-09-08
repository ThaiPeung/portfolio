"use client";

import { darkModeType } from "@/stores/redux/darkMode";
import { Box, IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const CustomIconButton = ({
  icon,
  enableHover = true,
  width = "100%",
  height = "100%",
  margin,
  backgroundDark = "linear-gradient(135deg, #000000, #212121, #000000)",
  styledBorderDark = "#6ee7ff, #a78bfa, #f472b6, #6ee7ff",
  backgroundLight = "linear-gradient(135deg, #bdbdbd, #e0e0e0)",
  styledBorderLight = "",
  blur = "4px",
  gsap = true,
  onClick,
}: {
  icon: React.JSX.Element;
  enableHover?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  backgroundDark?: string;
  styledBorderDark?: string;
  backgroundLight?: string;
  styledBorderLight?: string;
  blur?: string;
  gsap?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  // -| Redux
  const darkMode: darkModeType = useSelector(
    (configureStoreReducer: any) => configureStoreReducer.darkMode.val
  );

  return (
    <IconButton
      onClick={onClick}
      sx={{
        zIndex: 1,
        boxSizing: "border-box",
        position: "relative",
        borderRadius: "50px",
        transition: gsap || !enableHover ? "" : "scale 0.1s ease-in",
        "&::before, &::after": {
          content: '""',
          width: "42px",
          height: "42px",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          boxSizing: "content-box",
          position: "absolute",
          borderRadius: "inherit",
          padding: "1px",
          backgroundImage: `conic-gradient(${styledBorderDark} )`,
          zIndex: -1,
        },
        "&::before": {
          filter: `blur(${blur})`,
          opacity: 0.5,
        },
        "&:hover": {
          scale: gsap || !enableHover ? "" : "1.05",
        },
      }}
    >
      <Box
        sx={{
          boxSizing: "border-box",
          width: "40px",
          height: "40px",
          position: "relative",
          borderRadius: "50px",
          border: darkMode ? "" : "1px solid #212121",
          boxShadow: darkMode ? "" : "1px 1px 1px #bdbdbd",
          background: "linear-gradient(135deg, #000000, #212121, #000000)",
          color: darkMode ? "#fff" : "",
        }}
      >
        {icon}
      </Box>
    </IconButton>
  );
};

export default CustomIconButton;
