import { Theme } from "@emotion/react";
import { Components } from "@mui/material";

export const tooltipTheme: Components<Theme>["MuiTooltip"] = {
  styleOverrides: {
    tooltip: {
      fontSize: "1rem",
    },
  },
};
