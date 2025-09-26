"use client";

import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

// -| MUI
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

// -| MUI Icons
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import CustomIconButton from "@/components/customComponents/customIconButton";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

// -| Projects
import { darkModeType } from "@/stores/redux/darkMode";
import CustomCard from "@/components/customComponents/customCard";
import customAxios, { login } from "@/services/customAxios";
import useUser from "@/stores/zustand/useUser";
import useResDialog from "@/stores/zustand/useResDialog";

type jwtPayload = {
  exp: number;
  iat: number;
  roles: string[];
  sub: string;
};

const LoginCard = () => {
  // -| Redux
  const darkMode: darkModeType = useSelector(
    (configureStoreReducer: any) => configureStoreReducer.darkMode.val
  );

  // -| zustand
  const resDialog = useResDialog((state) => {
    return state;
  });

  // -| useState
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState<string>("Bill");
  const [password, setPassword] = useState<string>("NotSimple");

  const [loginMsg, setLoginMsg] = useState<string>("");

  // -| useUser from (zustand)
  const setUser = useUser((state) => state.setUser);

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

  const userLogin = async () => {
    setLoginMsg("");
    try {
      const resLogin = await login(username, password);
      let token: string = resLogin;
      const decoded = jwtDecode<jwtPayload>(token);
      setUser({ username: decoded.sub, roles: decoded.roles });

      router.push("home");
    } catch (error) {
      resDialog.setType("error");
      resDialog.setTitle("Error!");
      if (axios.isAxiosError(error)) {
        resDialog.setMsg(`Error: ${error.response?.data || error.message}`);
      } else {
        resDialog.setMsg("An unexpected error occurred.");
      }
      resDialog.setOpenDialog(true);
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
      duration={20000}
      backgroundDark={"linear-gradient(135deg, #000000, #212121)"}
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
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              router.push("register");
            }}
            endIcon={<AppRegistrationIcon />}
          >
            Register
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={userLogin}
            endIcon={<LoginIcon />}
          >
            Login
          </Button>
          <Typography color="error" sx={{ marginTop: "10px" }}>
            {loginMsg}
          </Typography>
        </Grid>
      </Grid>
    </CustomCard>
  );
};

export default LoginCard;
