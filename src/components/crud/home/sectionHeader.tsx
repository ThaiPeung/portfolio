import React from "react";

// -| Mui
import { Box, Button, Grid, Rating, Typography } from "@mui/material";

// -| Mui Icon(s)

// -| project

interface SectionHeaderType {
  title: string;
  sectionVariant?: "linear" | "neon" | "normal";
  textNeonColor?: string;
  neonBorderColor?: string;
  textLinearColor?: string;
  linearBorderColor?: string;
}

const SectionHeader: React.FC<SectionHeaderType> = ({
  title = "",
  sectionVariant = "normal",
  textNeonColor = "0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0091ea, 0 0 82px #0091ea, 0 0 92px #0091ea, 0 0 102px #0091ea, 0 0 151px #0091ea",
  neonBorderColor = "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #00bfa5, 0 0 0.8rem #00bfa5,0 0 2.8rem #00bfa5,inset 0 0 1.3rem #00bfa5",
  textLinearColor = "",
  linearBorderColor = "",
}) => {
  return (
    <>
      {sectionVariant === "neon" && (
        <Box
          sx={{
            width: "100%",
            height: "100px",
            margin: "0px 0px 20px 0px",
            border: "0.2rem solid #fff",
            borderRadius: "2rem",
            padding: "0.4em",
            boxShadow: neonBorderColor,
            boxSizing: "border-box",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              textShadow: textNeonColor,
            }}
          >
            {title}
          </Typography>
        </Box>
      )}

      {sectionVariant === "linear" && (
        <Box
          sx={{
            width: "100%",
            height: "100px",
            border: "0.2rem solid #fff",
            borderRadius: "2rem",
            padding: "0.4em",
            boxShadow:
              "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #bc13fe, 0 0 0.8rem #bc13fe,0 0 2.8rem #bc13fe,inset 0 0 1.3rem #bc13fe",
            boxSizing: "border-box",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              backgroundImage: "linear-gradient(red, blue)",
              color: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </Typography>
        </Box>
      )}

      {sectionVariant === "normal" && (
        <Box
          sx={{
            width: "100%",
            height: "100px",
            border: "0.2rem solid #fff",
            borderRadius: "2rem",
            padding: "0.4em",
            boxShadow:
              "0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #bc13fe, 0 0 0.8rem #bc13fe,0 0 2.8rem #bc13fe,inset 0 0 1.3rem #bc13fe",
            boxSizing: "border-box",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Typography variant="h2" sx={{}}>
            {title}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default SectionHeader;
