"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useSelector } from "react-redux";
import { darkModeType } from "@/stores/redux/darkMode";

// -| Mui
import { Box, Chip, Grid, Rating, Typography } from "@mui/material";
import { apiURL } from "@/env";
import CustomCard from "@/components/customCard";

// -| Mui icon(s)
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DateRangeIcon from "@mui/icons-material/DateRange";
import StarBorderIcon from "@mui/icons-material/StarBorder";

// -| Project

const BookDetailSX = {
  display: "flex",
  gap: "5px",
  padding: "0",
};

type bookType = {
  id: string;
  imageUrl: string;
  title: string;
  author: string;
  publishedDate: string;
  genre: string;
  createBy: string;
  createAt: string;
  rating: number;
};

type MainContentType = {
  content: bookType[];
};

const MainContent: React.FC<MainContentType> = ({ content }) => {
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
              <CustomCard enableHover>
                <Box
                  sx={{
                    width: "100%",
                    padding: "10px 0px 30px 0px",
                  }}
                >
                  <Typography align="center" variant="h4">
                    {item.title}
                  </Typography>
                </Box>
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
                    <Box sx={{ height: "325px" }}>
                      {item.imageUrl !== "" &&
                        item.imageUrl?.includes("/uploads/") && (
                          <Image
                            style={{ borderRadius: "10px" }}
                            src={apiURL + item.imageUrl}
                            alt={item.title}
                            width={200}
                            height={300}
                          />
                        )}
                      {item.imageUrl === "" && (
                        <Box
                          sx={{
                            width: "200",
                            height: "300",
                            display: "grid",
                            placeItems: "center",
                            boborderRadius: "10px",
                          }}
                        >
                          <Typography>No Image</Typography>
                        </Box>
                      )}
                    </Box>
                  </Grid>
                  <Grid size="grow">
                    <Box
                      sx={{
                        display: "grid",
                        gap: "8px",
                      }}
                    >
                      <Chip label="Author" size="small" />
                      <Typography sx={BookDetailSX}>
                        <BorderColorIcon />: {item.author}
                      </Typography>
                      <Chip label="Genre" size="small" />
                      <Typography sx={BookDetailSX}>
                        <FormatListBulletedIcon />: {item.genre}
                      </Typography>
                      <Chip label="Published Date" size="small" />
                      <Typography sx={BookDetailSX}>
                        <DateRangeIcon />: {item.publishedDate}
                      </Typography>
                      <Chip label="Rating" size="small" />
                      <Typography sx={BookDetailSX}>
                        <StarBorderIcon />: {item.rating || 0}
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
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default MainContent;
