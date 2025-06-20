"use client";

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import classes from "./loginCard.module.css";

// -| MUI
import {
  Box,
  BoxProps,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  styled,
  TextField,
  Typography,
} from "@mui/material";

// -| MUI Icons
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import { AppDispatch } from "@/stores/redux";
import { darkModeType } from "@/stores/redux/darkMode";
import { useDispatch, useSelector } from "react-redux";

// -| Projects

const LoginCard = () => {
  // -| Redux
  const darkMode: darkModeType = useSelector(
    (configureStoreReducer: any) => configureStoreReducer.darkMode.val
  );

  // -| useState
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loginMsg, setLoginMsg] = useState<string>("");

  // -| useRouter
  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        username: username,
        password: password,
      });

      let token: string = response.data;
      const decoded = jwtDecode(token);
      router.push("home");
      console.log(decoded);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        setLoginMsg(`Error: ${error.response?.data?.message || error.message}`);
      } else {
        setLoginMsg("An unexpected error occurred.");
      }
    }
  };

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let start: number | null = null;
    const duration = 5000; // 2 seconds per full rotation

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      // 0 → 360deg over `duration` ms, then loop
      const angle = ((elapsed % duration) / duration) * 360;
      ref.current?.style.setProperty("--deg", `${angle}deg`);
      requestAnimationFrame(step);
    };

    const rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        height: "100%",
        width: "400px",
        padding: "20px",
        borderRadius: "10px",
        border: darkMode ? "" : "1px solid #212121",
        boxShadow: darkMode ? "" : "3px 3px 3px #bdbdbd",
        backgroundImage: darkMode
          ? "linear-gradient(135deg, #212121, #616161)"
          : "linear-gradient(#fff)",
        "&::before, &::after": {
          content: '""',
          width: "calc(100% + 8px)",
          height: "calc(100% + 8px)",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          position: "absolute",
          borderRadius: "inherit",
          backgroundImage: darkMode
            ? "conic-gradient(from var(--deg),#ff4545, #00ff49, #006aff, #ff0095, #ff4545)"
            : "",
          zIndex: "-1",
        },
        "&::before": {
          filter: "blur(1.5rem)",
          opacity: 0.5,
        },
      }}
    >
      <Grid container columns={1} spacing={3}>
        <Grid size={1}>
          <TextField
            sx={{ width: "300px" }}
            label="Username"
            size="small"
            onChange={handleChangeUsername}
            value={username}
          />
        </Grid>
        <Grid size={1}>
          <TextField
            sx={{ width: "300px" }}
            label="Password"
            type={showPassword ? "text" : "password"}
            onChange={handleChangePassword}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            size="small"
            value={password}
          />
        </Grid>
        <Grid
          size={1}
          sx={{
            justifyItems: "center",
          }}
        >
          <Button
            variant="contained"
            size="small"
            onClick={() => router.push("home")}
            endIcon={<LoginIcon />}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginCard;
