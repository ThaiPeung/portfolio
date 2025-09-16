"use client";

import React, { useEffect, useState } from "react";

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
  const confirmDialogZus = useConfirmDialog((state) => {
    return state;
  });

  // -| Clean dialog
  useEffect(() => {
    if (confirmDialogZus.open === false) {
      confirmDialogZus.setDefault();
    }
  }, [confirmDialogZus.open]);

  const [borderDark, setBorderDark] = useState(styledBorderDark);

  return (
    <Dialog
      open={confirmDialogZus.open}
      onClose={() => {
        confirmDialogZus.setOpenDialog(false);
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
              {confirmDialogZus.title}
            </Typography>
            <Typography sx={{ color: darkMode ? "#fff" : "#000" }}>
              {confirmDialogZus.msg}
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
                    confirmDialogZus.setPressConfirm(true);
                  }}
                />
              </Grid>
              <Grid size="grow">
                <CustomIconButton
                  styledBorderDark="#b71c1c, #e65100, #dd2c00, #b71c1c"
                  icon={<CloseIcon />}
                  onClick={() => {
                    confirmDialogZus.setOpenDialog(false);
                    confirmDialogZus.setDefault();
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
