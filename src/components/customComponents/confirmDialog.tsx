"use client";

import React, { useState } from "react";

// -| Mui
import { Box, Dialog, Grid, Stack, Typography } from "@mui/material";
import CustomCard from "@/components/customComponents/customCard";

// -| Mui icon(s)
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

// -| Project
import { darkModeType } from "@/stores/redux/darkMode";
import { useSelector } from "react-redux";
import useConfirmDialog from "@/stores/zustand/useConfirmDialog";
import CustomIconButton from "./customIconButton";
import customAxios from "@/services/customAxios";
import useResDialog from "@/stores/zustand/useResDialog";
import axios from "axios";
import { useRouter } from "next/navigation";

const ConfirmDialog = ({
  styledBorderDark = "#2962ff, #0091ea, #00b8d4, #304ffe, #2962ff",
}: {
  styledBorderDark?: string;
}) => {
  // -| Redux
  const darkMode: darkModeType = useSelector(
    (configureStoreReducer: any) => configureStoreReducer.darkMode.val
  );
  // -| zustand
  const confirmDialog = useConfirmDialog((state) => {
    return state;
  });

  // -| useRouter
  const router = useRouter();

  const resDialog = useResDialog((state) => {
    return state;
  });

  const [borderDark, setBorderDark] = useState(styledBorderDark);

  const deleteBook = async () => {
    try {
      const response = await customAxios.delete(
        `/books/${confirmDialog.input}`
      );

      let data: string = response.data;
      if (response.status === 200) {
        router.back();
        resDialog.setType("success");
        resDialog.setTitle("Success");
        resDialog.setMsg(data);
        resDialog.setOpenDialog(true);
        confirmDialog.setOpenDialog(false);
      } else {
        resDialog.setType("error");
        resDialog.setTitle("Error!");
        resDialog.setMsg(data);
        resDialog.setOpenDialog(true);
      }
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

  return (
    <Dialog
      open={confirmDialog.open}
      onClose={() => {
        confirmDialog.setOpenDialog(false);
      }}
      slotProps={{
        paper: {
          sx: {
            minWidth: "300px",
            minHeight: "400px",
            padding: "50px",
            background: "none",
            boxShadow: "none",
            boxSizing: "border-box",
          },
        },
      }}
    >
      <CustomCard styledBorderDark={borderDark} animation={true}>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gap: "10px",
            placeItems: "center",
          }}
        >
          <Stack
            direction="column"
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: darkMode ? "#fff" : "#000" }}>
              {confirmDialog.title}
            </Typography>
            <Typography sx={{ color: darkMode ? "#fff" : "#000" }}>
              {confirmDialog.msg}
            </Typography>
            <Grid
              container
              spacing={5}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid size="grow">
                <CustomIconButton
                  styledBorderDark="#1b5e20, #76ff03, #00e676, #1b5e20"
                  icon={<CheckIcon />}
                  onClick={() => {
                    if (confirmDialog.task === "deleteBook") {
                      deleteBook();
                    }
                  }}
                />
              </Grid>
              <Grid size="grow">
                <CustomIconButton
                  styledBorderDark="#b71c1c, #e65100, #dd2c00, #b71c1c"
                  icon={<CloseIcon />}
                  onClick={() => {
                    confirmDialog.setOpenDialog(false);
                    confirmDialog.setDefault();
                  }}
                />
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </CustomCard>
    </Dialog>
  );
};

export default ConfirmDialog;
