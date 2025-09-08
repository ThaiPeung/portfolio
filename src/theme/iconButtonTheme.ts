import { Theme } from "@emotion/react";
import { Components } from "@mui/material";

export const iconButtonDarkTheme: Components<Theme>["MuiIconButton"] = {
  styleOverrides: {
    root: {
      styles: {
        boxSizing: "border-box",
        position: "relative",
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
          backgroundImage: `conic-gradient(#2962ff, #2962ff, #0091ea, #00b8d4, #304ffe, #2962ff)`,
          zIndex: "-1",
        },
        "&::before": {
          filter: `blur(1rem)`,
          opacity: 0.75,
        },
        "&:hover": {},
      },
    },
  },
};

export const iconButtonLightTheme: Components<Theme>["MuiIconButton"] = {
  styleOverrides: {
    root: {},
  },
};
