// theme.ts
import { createTheme } from "@mui/material/styles";
import NextLink from "next/link";

const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: NextLink,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: NextLink,
      },
    },
  },
});

export default theme;
