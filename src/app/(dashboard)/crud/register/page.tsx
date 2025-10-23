"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

//-| Mui
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

//-| Mui icon(s)
import ImageIcon from "@mui/icons-material/Image";
import AddIcon from "@mui/icons-material/Add";

//-| Project
import CustomCard from "@/components/customComponents/customCard";
import SectionHeader from "@/components/customComponents/sectionHeader";
import customAxios from "@/services/customAxios";
import CustomDialog from "@/components/customComponents/customDialog";
import dayjs, { Dayjs } from "dayjs";
import { apiURL } from "@/env";
import useResDialog from "@/stores/zustand/useResDialog";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Register = () => {
  //-| useState
  const [username, setUsername] = useState("Jame");
  const [password, setPassword] = useState("TestPass");
  const [confirmPassword, setConfirmPassword] = useState("TestPass");
  const [email, setEmail] = useState("Test@test.t");

  //-| zustand
  const resDialog = useResDialog((state) => {
    return state;
  });

  //-| Image file
  const [file, setFile] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [uploading, setUploading] = useState(false);

  //-| passowrd field
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmShowPassword] = useState(false);

  //-| Function

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setConfirmShowPassword((show) => !show);

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

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleChangeConfirmPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  //-| useEffect
  useEffect(() => {
    if (!file?.name) return;
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    //-| cleanup
    return () => URL.revokeObjectURL(url);
  }, [file?.name]);

  //-| Function
  const addUser = async () => {
    try {
      const response = await customAxios.post("/register", {
        username,
        password,
        email,
      });
      console.log(response);

      let data: string = response.data;
      if (response.status === 200) {
        resDialog.setType("success");
        resDialog.setTitle("Success");
        resDialog.setMsg(data);
        resDialog.setOpenDialog(true);
      }
    } catch (error) {
      resDialog.setType("error");
      resDialog.setTitle("Error!");
      if (axios.isAxiosError(error)) {
        if (error.status === 409) {
          resDialog.setMsg(`Error: ${error.response?.data.message}`);
        } else {
          resDialog.setMsg(`Error: ${error.response?.data || error.message}`);
        }
      } else {
        resDialog.setMsg("An unexpected error occurred.");
      }
      resDialog.setOpenDialog(true);
    }
  };
  return (
    <>
      <SectionHeader title="Register" sectionVariant="neon" />

      <Grid
        container
        direction="row"
        spacing={5}
        sx={{
          justifyContent: "center",
          alignItems: "top",
        }}
      >
        <Grid size="grow">
          <CustomCard
            height="max-content"
            width="400px"
            margin="30px 0px 0px 0px"
          >
            <Box
              sx={{
                display: "grid",
                gap: "30px",
                placeItems: "center",
              }}
            >
              <TextField
                sx={{ minWidth: "200px", width: "100%" }}
                label="Title"
                size="small"
                onChange={handleChangeUsername}
                value={username}
                multiline
              />
              <TextField
                sx={{ minWidth: "200px", width: "100%" }}
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
              <TextField
                sx={{ minWidth: "200px", width: "100%" }}
                label="Password"
                type={showConfirmPassword ? "text" : "password"}
                onChange={handleChangeConfirmPassword}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showConfirmPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
                size="small"
                value={confirmPassword}
              />
              {password !== confirmPassword && (
                <Typography color="error">Password not matched.</Typography>
              )}
              <TextField
                sx={{ minWidth: "200px", width: "100%" }}
                label="E-mail"
                size="small"
                onChange={handleChangeEmail}
                value={email}
                multiline
              />
              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: "5px",
                }}
                endIcon={<AddIcon sx={{ scale: 2 }} />}
                onClick={addUser}
                disabled={
                  password !== confirmPassword ||
                  username === "" ||
                  email === ""
                }
              >
                <Box sx={{ width: "85%" }}>
                  <Typography fontSize={32}>Register</Typography>
                </Box>
              </Button>
            </Box>
          </CustomCard>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
