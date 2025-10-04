"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

// -| Mui
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
import { DataGrid } from "@mui/x-data-grid";

// -| Mui icon(s)
import ImageIcon from "@mui/icons-material/Image";
import AddIcon from "@mui/icons-material/Add";

// -| Project
import CustomCard from "@/components/customComponents/customCard";
import SectionHeader from "@/components/customComponents/sectionHeader";
import customAxios from "@/services/customAxios";
import CustomDialog from "@/components/customComponents/customDialog";
import dayjs, { Dayjs } from "dayjs";
import { apiURL } from "@/env";
import useResDialog from "@/stores/zustand/useResDialog";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import useConfirmDialog from "@/stores/zustand/useConfirmDialog";
import { paginationType, userType } from "@/components/crud/types/userTypes";

const ManageUser = () => {
  const rows = [
    {
      id: 1,
      username: "@MUI",
      age: 38,
      desk: "D-546",
    },
    {
      id: 2,
      username: "@MUI-X",
      age: 25,
      desk: "D-042",
    },
  ];

  // -| zustand
  const resDialogZus = useResDialog((state) => {
    return state;
  });
  const confirmDialogZus = useConfirmDialog((state) => {
    return state;
  });

  // -| useState
  const [users, setUsers] = useState<paginationType>();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(9);

  const getUsers = async (
    username: string = "",
    email: string = "",
  ) => {
    try {
      let newURL = `/users?page=${page}&size=${pageSize}
                      ${username !== "" ? `&title=${username}` : ""}
                      ${email !== "" ? `&author=${email}` : ""}`;

      const response = await customAxios.get(newURL);

      let data: paginationType = response.data;
      if (response.status === 200) {
        setUsers(data);
      }
    } catch (error) {
      resDialogZus.setType("error");
      resDialogZus.setTitle("Error!");
      if (axios.isAxiosError(error)) {
        resDialogZus.setMsg(`Error: ${error.response?.data || error.message}`);
      } else {
        resDialogZus.setMsg("An unexpected error occurred.");
      }
      resDialogZus.setOpenDialog(true);
    }
  };

  return (
    <>
      <SectionHeader title="Manage User" sectionVariant="neon" />

      <CustomCard height="max-content" width="100%" margin="30px 0px 0px 0px">
        <Box
          sx={{
            width: "80vw",
            overflow: "auto",
          }}
        >
          <DataGrid
            slotProps={{
              toolbar: {
                printOptions: { disableToolbarButton: true },
                csvOptions: { disableToolbarButton: true },
              },
            }}
            columns={[
              { field: "username", hideable: false },
              { field: "age" },
              { field: "desk" },
            ]}
            rows={rows}
            showToolbar
          />
        </Box>
      </CustomCard>
    </>
  );
};

export default ManageUser;
