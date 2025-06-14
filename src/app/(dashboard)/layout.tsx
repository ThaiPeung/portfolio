"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

// -| Mui
import {
  styled,
  useTheme,
  Theme,
  CSSObject,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import {
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
} from "@mui/material";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MenuItems } from "./menuItems";
import { Grid } from "@mui/material";

// -| Mui Icon(s)
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";

// -| Project

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

// 1. Define your own DrawerProps extending the MUI ones
interface DrawerProps extends MuiDrawerProps {
  open?: boolean;
}

// 2. Tell styled about your prop type, and use a single style callback
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<DrawerProps>(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  // 3. Merge in the open vs closed mixins directly
  ...(open
    ? {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      }
    : {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      }),
}));

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChangeMode = () => {
    setMode(!mode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box
          sx={{
            display: "flex",
            height: `calc(100vh - ${64}px)`,
          }}
        >
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <Grid container>
                <Grid size="auto">
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={[
                      {
                        marginRight: 5,
                      },
                      open && { display: "none" },
                    ]}
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid size="grow">
                <Typography variant="h6" noWrap component="div">
                  Thai
                </Typography>
              </Grid>
              <Grid size="auto">
                <IconButton onClick={handleChangeMode}>
                  {mode ? (
                    <NightsStayIcon />
                  ) : (
                    <LightModeIcon sx={{ color: "white" }} />
                  )}
                </IconButton>
              </Grid>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {MenuItems.map((item, index) => (
                <Box
                  sx={{
                    backgroundImage: pathname.includes(item.path!)
                      ? "linear-gradient(-45deg, grey, blue)"
                      : "",
                  }}
                >
                  <ListItem
                    key={index}
                    disablePadding
                    sx={{
                      display: "block",
                    }}
                  >
                    <ListItemButton
                      sx={[
                        {
                          minHeight: 48,
                          px: 2.5,
                          justifyContent: open ? "initial" : "center",
                        },
                      ]}
                      onClick={() => {
                        router.push(item.path!);
                      }}
                    >
                      <ListItemIcon
                        sx={[
                          {
                            minWidth: 0,
                            justifyContent: "center",
                            mr: open ? 3 : "auto",
                            color: pathname.includes(item.path!) ? "white" : "",
                          },
                        ]}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.title}
                        sx={[
                          {
                            opacity: open ? 1 : 0,
                            color: pathname.includes(item.path!) ? "white" : "",
                          },
                        ]}
                      />
                    </ListItemButton>
                  </ListItem>
                </Box>
              ))}
            </List>
          </Drawer>
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            <DrawerHeader />
            {children}
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default layout;
