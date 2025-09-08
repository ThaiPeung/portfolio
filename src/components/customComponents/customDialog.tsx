"use client";

import React, { useEffect, useState } from "react";

// -| Mui
import { Box, Dialog, Paper, Typography } from "@mui/material";
import CustomCard from "@/components/customComponents/customCard";

// -| Mui icon(s)
import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import WarningTwoToneIcon from "@mui/icons-material/WarningTwoTone";
import { darkModeType } from "@/stores/redux/darkMode";
import { useSelector } from "react-redux";
import useResDialog from "@/stores/zustand/useResDialog";

// -| Project

const CustomDialog = ({
  width = "100%",
  height = "100%",
  margin,
  styledBorderDark = "#2962ff, #0091ea, #00b8d4, #304ffe, #2962ff",
}: {
  width?: string;
  height?: string;
  margin?: string;
  styledBorderDark?: string;
}) => {
  // -| Redux
  const darkMode: darkModeType = useSelector(
    (configureStoreReducer: any) => configureStoreReducer.darkMode.val
  );
  // -| zustand
  const resDialog = useResDialog((state) => {
    return state;
  });

  const [icon, setIcon] = useState(<></>);
  const [borderDark, setBorderDark] = useState(styledBorderDark);

  useEffect(() => {
    if (resDialog.type?.includes("error")) {
      setBorderDark("#b71c1c, #ffc400, #d50000, #ffc400, #ffc400, #b71c1c");
      setIcon(<ErrorTwoToneIcon color="error" sx={{ fontSize: "8rem" }} />);
    } else if (resDialog.type?.includes("success")) {
      setBorderDark("#64dd17, #64ffda, #00c853, #64ffda, #64ffda, #64dd17");
      setIcon(
        <CheckCircleTwoToneIcon color="success" sx={{ fontSize: "8rem" }} />
      );
    } else {
      setBorderDark("#ffd600, #616161, #ffff00, #616161, #616161, #ffd600");
      setIcon(<WarningTwoToneIcon color="warning" sx={{ fontSize: "8rem" }} />);
    }
  }, [resDialog.type]);

  return (
    <Dialog
      open={resDialog.open}
      onClose={() => {
        resDialog.setOpenDialog(false);
      }}
      slotProps={{
        paper: {
          sx: {
            width: "300px",
            height: "400px",
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
          {icon}
          <Typography sx={{ color: darkMode ? "#fff" : "#000" }}>
            {resDialog.title}
          </Typography>
          <Typography sx={{ color: darkMode ? "#fff" : "#000" }}>
            {resDialog.msg}
          </Typography>
        </Box>
      </CustomCard>
    </Dialog>
  );
};

export default CustomDialog;
