"use client";

import React, { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

// -| MUI
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

// -| MUI Icons
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// -| Projects

const LoginCard = () => {
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

  return (
    <Card sx={{ maxWidth: "max-content" }} variant="outlined" raised={true}>
      <CardContent>
        <Grid sx={{ width: "300px" }} container columns={1} spacing={3}>
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
        </Grid>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "end" }}>
        <Button variant="contained" size="small" onClick={login}>
          Login
        </Button>
      </CardActions>
    </Card>
  );
};

export default LoginCard;
