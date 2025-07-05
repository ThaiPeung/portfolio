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
import CustomCard from "@/components/customCard";
import { apiURL } from "@/env";

// -| Projects

const LoginCard = () => {
  // -| Redux
  const darkMode: darkModeType = useSelector(
    (configureStoreReducer: any) => configureStoreReducer.darkMode.val
  );

  // -| useState
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState<string>("Bill");
  const [password, setPassword] = useState<string>("NotSimple");

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
      const response = await axios.post(apiURL + "/login", {
        username: username,
        password: password,
      });

      let token: string = response.data;
      const decoded = jwtDecode(token);
      router.push("home");
      localStorage.setItem("token", token);
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

  return (
    <CustomCard
      animation={true}
      height={"100%"}
      width={"400px"}
      backgroundDark={"linear-gradient(135deg, #212121, #616161)"}
      styledBorderDark={"#ff4545, #00ff49, #006aff, #ff0095, #ff4545"}
      backgroundLight={"linear-gradient(#fff)"}
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
            onClick={login}
            // onClick={() => router.push("home")}
            endIcon={<LoginIcon />}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default LoginCard;
