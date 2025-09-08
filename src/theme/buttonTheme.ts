import { Theme } from "@emotion/react";
import { Components } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    warningYellow: true;
  }
}

export const buttonDarkTheme: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: {},
    outlined: {
      borderRadius: "5px",
      padding: "8px",
    },
    outlinedPrimary: {
      border: "1px solid #fff",
      boxShadow:
        "0 0 2px #fff, 0 0 2px #fff, 0 0 5px #2196f3, 0 0 8px #2196f3,0 0 10px #2196f3,inset 0 0 7px #2196f3",
    },
    outlinedSuccess: {
      border: "1px solid #fff",
      boxShadow:
        "0 0 4px #fff, 0 0 4px #fff, 0 0 5px #4caf50, 0 0 8px #4caf50,0 0 10px #4caf50,inset 0 0 7px #4caf50",
    },
    outlinedWarning: {
      border: "1px solid #fff",
      boxShadow:
        "0 0 4px #fff, 0 0 4px #fff, 0 0 5px #ffeb3b, 0 0 8px #ffeb3b,0 0 10px #ffeb3b,inset 0 0 7px #ffeb3b",
    },
    outlinedError: {
      border: "1px solid #fff",
      boxShadow:
        "0 0 4px #fff, 0 0 4px #fff, 0 0 5px #f44336, 0 0 8px #f44336,0 0 10px #f44336,inset 0 0 7px #f44336",
    },
  },
};

export const buttonLightTheme: Components<Theme>["MuiButton"] = {
  styleOverrides: {
    root: {},
  },
};
