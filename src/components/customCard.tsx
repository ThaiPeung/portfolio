"use client";

import { darkModeType } from "@/stores/redux/darkMode";
import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const CustomCard = ({
  children,
  animation = false,
  duration = 5000,
  enableHover = false,
  width = "100%",
  height = "100%",
  margin,
  backgroundDark = "linear-gradient(135deg, #212121, #424242)",
  styledBorderDark = "#2962ff, #0091ea, #00b8d4, #304ffe, #2962ff",
  backgroundLight = "linear-gradient(135deg, #bdbdbd, #e0e0e0)",
  styledBorderLight = "",
  gsap = false,
}: {
  children: React.ReactNode;
  animation?: boolean;
  duration?: number;
  enableHover?: boolean;
  width?: string;
  height?: string;
  margin?: string;
  backgroundDark?: string;
  styledBorderDark?: string;
  backgroundLight?: string;
  styledBorderLight?: string;
  gsap?: boolean;
}) => {
  // -| Redux
  const darkMode: darkModeType = useSelector(
    (configureStoreReducer: any) => configureStoreReducer.darkMode.val
  );

  const ref = useRef<HTMLDivElement>(null);

  const [playAnimation, setPlayAnimation] = useState(animation);

  useEffect(() => {
    if (playAnimation) {
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (start === null) start = timestamp;
        const elapsed = timestamp - start;
        // -| 0 → 360deg over 'duration' ms, then loop
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
      onMouseEnter={() => {
        if (enableHover) {
          setPlayAnimation(true);
        }
      }}
      onMouseLeave={() => {
        if (enableHover) {
          setPlayAnimation(false);
        }
      }}
      sx={{
        width: width,
        height: height,
        margin: margin || "20px 0px 0px 0px",
        boxSizing: "border-box",
        position: "relative",
        borderRadius: "10px",
        transition: gsap || !enableHover ? "" : "scale 0.1s ease-in",
        "&::before, &::after": darkMode
          ? {
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
              backgroundImage: playAnimation
                ? `conic-gradient(from var(--deg), ${styledBorderDark} )`
                : `conic-gradient(#2962ff,${styledBorderDark}  )`,
              zIndex: "-1",
            }
          : {},
        "&::before": darkMode
          ? {
              filter: backgroundDark !== "none" ? "blur(1.5rem)" : "",
              opacity: 0.75,
            }
          : {},
        "&:hover": gsap || !enableHover ? {} : { scale: "1.05" },
      }}
    >
      <Box
        sx={{
          width: width,
          height: height,
          boxSizing: "border-box",
          position: "relative",
          padding: "20px",
          borderRadius: "10px",
          border: darkMode ? "" : "1px solid #212121",
          boxShadow: darkMode ? "" : "3px 3px 3px #bdbdbd",
          backgroundImage: darkMode ? backgroundDark : backgroundLight,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CustomCard;
