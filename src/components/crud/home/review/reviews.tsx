"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

// -| Mui
import { Box, Chip, Grid, Rating, Typography } from "@mui/material";
import CustomCard from "@/components/customCard";

// -| Mui icon(s)
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { paginationType, reviewType } from "../../types/reviewTypes";
import CustomPagination from "../../share/customPagination";

// -| Project

const BookDetailSX = {
  display: "flex",
  gap: "5px",
  padding: "0",
};

type MainContentType = {
  contents: paginationType;
  page: number;
  setPage: (val: number) => void;
  pageSize: number;
  setPageSize: (val: number) => void;
};

const Reviews: React.FC<MainContentType> = ({
  contents,
  page,
  setPage,
  pageSize,
  setPageSize,
}) => {

  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        size="grow"
        sx={{
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        {contents &&
          contents.content.map((item, index) => {
            return (
              <Grid key={index}>
                <CustomCard>
                  <Box sx={{ display: "flex" }}>
                    <Rating
                      value={item.rating}
                      precision={0.5}
                      size="medium"
                      readOnly
                    />
                    <Typography>{item.comment}</Typography>
                  </Box>
                </CustomCard>
              </Grid>
            );
          })}
      </Grid>

      <CustomPagination
        count={contents?.totalElements || 0}
        page={page}
        totalPages={contents?.totalPages || 0}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </Box>
  );
};

export default Reviews;
