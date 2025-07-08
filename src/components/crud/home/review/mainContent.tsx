"use client";

import React, {  } from "react";
import { useRouter } from "next/navigation";

// -| Mui
import { Box, Chip, Grid, Rating, Typography } from "@mui/material";
import CustomCard from "@/components/customCard";

// -| Mui icon(s)
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { reviewType } from "../../types/reviewTypes";

// -| Project

const BookDetailSX = {
  display: "flex",
  gap: "5px",
  padding: "0",
};

type MainContentType = {
  content: reviewType[];
};

const MainContent: React.FC<MainContentType> = ({ content }) => {
  // -| useRouter
  const router = useRouter();

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        padding: "10px",
      }}
    >
      <Grid container direction="row" spacing={10}>
        {content?.map((item, index) => {
          return (
            <Grid key={index} size={{ xs: 2, sm: 3, md: 4 }}>
              <Box
                onClick={() => {
                  router.push(`home/${item.id}`);
                }}
                sx={{
                  cursor: "pointer",
                }}
              >
                <CustomCard enableHover>
                  <Grid
                    container
                    direction="row"
                    columns={2}
                    spacing={3}
                    sx={{
                      justifyContent: "center",
                      alignItems: "top",
                    }}
                  >
                    <Grid size="grow">
                      <Box
                        sx={{
                          display: "grid",
                          gap: "8px",
                        }}
                      >
                        <Chip label="Author" size="small" />
                        <Typography sx={BookDetailSX}>
                          <BorderColorIcon />: {item.comment}
                        </Typography>
                        <Chip label="Genre" size="small" />
                        <Typography sx={BookDetailSX}>
                          <FormatListBulletedIcon />: {item.createdAt}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  <Box sx={{ display: "grid", placeItems: "center" }}>
                    <Rating
                      sx={{ fontSize: "3rem" }}
                      readOnly
                      value={item.rating || 0}
                      precision={0.5}
                    />
                  </Box>
                </CustomCard>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default MainContent;
