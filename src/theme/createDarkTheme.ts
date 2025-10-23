import darkMode from "@/stores/redux/darkMode";
import { buttonDarkTheme, buttonLightTheme } from "@/theme/buttonTheme";
import { iconButtonDarkTheme } from "@/theme/iconButtonTheme";
import { createTheme } from "@mui/material";
import { tooltipTheme } from "./tooltipTheme";

const darkTheme = createTheme({
  components: {
    MuiButton: buttonDarkTheme,
    MuiIconButton: iconButtonDarkTheme,
    MuiTooltip: tooltipTheme,
  },
  palette: {
    mode: "dark",
  },
  typography: {
    allVariants: {
      color: "#fff",
    },
  },
});

export default darkTheme;
