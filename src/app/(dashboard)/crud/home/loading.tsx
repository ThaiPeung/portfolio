"use client";

import React, { useEffect, useRef, useState } from "react";

//-| Mui
import { Box, Button, duration, Grid, Rating, Typography } from "@mui/material";

//-| Mui Icon(s)

//-| project
import styles from "./loading.module.css";

const loading = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      //-| 0 → 360deg over 'duration' ms, then loop
      const angle = ((elapsed % 5000) / 5000) * 360;
      ref.current?.style.setProperty("--deg", `${angle}deg`);
      requestAnimationFrame(step);
    };

    const rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    // <Box
    //   ref={ref}
    //   sx={{
    //     width: "1100%",
    //     height: "100%",
    //     display: "grid",
    //     placeItems: "center",
    //     backgroundColor: "rgba(255, 255, 255, 0.75);",
    //   }}
    // >
    //   <Box
    //     sx={{
    //       width: "100px",
    //       height: "100px",
    //       boxSizing: "border-box",
    //       position: "relative",
    //       borderRadius: "10px",
    //       "&::before, &::after": {
    //         content: '""',
    //         width: "100%",
    //         height: "100%",
    //         top: "50%",
    //         left: "50%",
    //         translate: "-50% -50%",
    //         boxSizing: "content-box",
    //         position: "absolute",
    //         borderRadius: "inherit",
    //         padding: "3px",
    //         backgroundImage: `conic-gradient(from var(--deg), #2962ff, #000 )`,
    //         zIndex: "-1",
    //       },
    //     }}
    //   >
    //     <Box
    //       sx={{
    //         width: "98px",
    //         height: "98px",
    //         boxSizing: "border-box",
    //         position: "relative",
    //         padding: "20px",
    //         borderRadius: "10px",
    //         backgroundImage:
    //           "linear-gradient(135deg, #000000, #212121, #000000)",
    //       }}
    //     />
    //   </Box>
    // </Box>

    <div className="flex justify-center items-center">
      <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 rounder-full animate-spin"></div>
    </div>
  );
};

export default loading;
