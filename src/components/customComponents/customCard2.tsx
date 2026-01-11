"use client";

import { darkModeType } from "@/stores/redux/darkMode";
import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const CustomCard2 = ({
  children,
  animation = false,
  duration = 5000,
  enableHover = false,
  width = "100%",
  height = "100%",
  padding = "2rem",
  margin,
  backgroundDark = "linear-gradient(135deg, #000000, #212121, #000000)",
  styledBorderDark = "#2962ff, #0091ea, #00b8d4, #304ffe, #2962ff",
  backgroundLight = "linear-gradient(135deg, #bdbdbd, #e0e0e0)",
  styledBorderLight = "",
  blur = "1.5rem",
  gsap = false,
}: {
  children: React.ReactNode;
  animation?: boolean;
  duration?: number;
  enableHover?: boolean;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  backgroundDark?: string;
  styledBorderDark?: string;
  backgroundLight?: string;
  styledBorderLight?: string;
  blur?: string;
  gsap?: boolean;
}) => {
  //-| Redux
  const ref = useRef<HTMLDivElement>(null);

  const [playAnimation, setPlayAnimation] = useState(animation);

  useEffect(() => {
    if (playAnimation) {
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (start === null) start = timestamp;
        const elapsed = timestamp - start;
        //-| 0 → 360deg over 'duration' ms, then loop
        const angle = ((elapsed % duration) / duration) * 360;
        ref.current?.style.setProperty("--deg", `${angle}deg`);
        requestAnimationFrame(step);
      };

      const rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    }
  }, [playAnimation]);

  return (
    <Box
      ref={ref}
      sx={{
        width: width,
        height: height,
        padding: padding,
        margin: margin || "20px 0px 0px 0px",
        boxSizing: "border-box",
        position: "relative",
        borderRadius: "1rem",
        backgroundColor: "hsla(240, 15%, 9%, 1)",
        backgroundImage: `radial-gradient(
            at 88% 40%,
            hsla(240, 15%, 9%, 1) 0px,
            transparent 85%
          ),
          radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
          radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
          radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%),
          radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%),
          radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%)`,
        boxShadow: "0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset",
        "&::before, &::after": {
          content: '""',
          width: "100%",
          height: "100%",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          boxSizing: "content-box",
          position: "absolute",
          borderRadius: "inherit",
          padding: "3px",
          backgroundImage: `linear-gradient(
            0deg,
            hsl(0, 0%, 100%) -50%,
            hsl(0, 0%, 40%) 100%
          )`,
          zIndex: "-1",
        },
        "&::before": {
          filter: `blur(${blur})`,
          opacity: 0.4,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default CustomCard2;
