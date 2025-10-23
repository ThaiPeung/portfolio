"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

//-| Mui
import {
  alpha,
  Box,
  Chip,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
  Rating,
  styled,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { apiURL } from "@/env";

//-| Mui icon(s)
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DateRangeIcon from "@mui/icons-material/DateRange";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";

//-| Project

type CustomOutlinedInput = {
  title: string;
  value: string;
  boxShadow?: string;
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClearValue: () => void;
  icon?: React.ReactNode;
};

const CustomTextField = styled(
  (props: TextFieldProps) => (
    <TextField
      slotProps={{
        input: { disableUnderline: false } as Partial<OutlinedInputProps>,
      }}
      {...props}
    />
  ),
  {
    shouldForwardProp: (prop) => prop !== "boxShadow",
  }
)(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: "20px",
    border: "1px solid #fff",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow:
        "0 0 2px #fff, 0 0 2px #fff, 0 0 5px #91ff35, 0 0 8px #91ff35,0 0 10px #91ff35,inset 0 0 7px #91ff35",
    },
    ...theme.applyStyles("dark", {
      background: "linear-gradient(135deg, #000000, #000000, #311b92)",
    }),
  },
}));

const CustomOutlinedInput: React.FC<CustomOutlinedInput> = ({
  title = "",
  value = "",
  boxShadow = "0 0 2px #fff, 0 0 2px #fff, 0 0 5px #2196f3, 0 0 8px #2196f3,0 0 10px #2196f3,inset 0 0 7px #2196f3",
  handleChangeValue,
  handleClearValue,
  icon,
}) => {
  return (
    <CustomTextField
      id={title}
      label={title}
      type="text"
      variant="filled"
      onChange={handleChangeValue}
      value={value}
      sx={{
        boxShadow: boxShadow,
        borderRadius: "20px",
      }}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={handleClearValue}>
                {icon}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default CustomOutlinedInput;
