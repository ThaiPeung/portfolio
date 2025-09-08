"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

// -| Mui
import { Box, Button, Chip, Grid, Rating, Typography } from "@mui/material";
import CustomCard from "@/components/customComponents/customCard";

// -| Mui icon(s)
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DeleteIcon from "@mui/icons-material/Delete";

// -| Project
import { paginationType, reviewType } from "../../types/reviewTypes";
import CustomPagination from "../../../customComponents/customPagination";
import useUser from "@/stores/zustand/useUser";

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
  deleteReviews: (idFromAdmin?: number) => void;
};

const Reviews: React.FC<MainContentType> = ({
  contents,
  page,
  setPage,
  pageSize,
  setPageSize,
  deleteReviews,
}) => {
  // -| zustand
  const userRole = useUser((state) => {
    return state.roles;
  });

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Grid container direction={"column"} spacing={4} sx={{ height: "100%" }}>
        <Grid
          size="grow"
          sx={{
            padding: "2rem",
            overflow: "auto",
            scrollbarColor: "#304ffe #0091ea",
            scrollbarWidth: "thin",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <Grid container direction={"column"} size="grow" spacing={1.5}>
            {contents &&
              contents.content.map((item, index) => {
                return (
                  <Grid>
                    <CustomCard blur="10px">
                      <Grid
                        container
                        spacing={3}
                        sx={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Grid>
                          <Rating
                            value={item.rating}
                            precision={0.5}
                            size="medium"
                            readOnly
                            sx={{
                              paddingTop: "4px",
                            }}
                          />
                        </Grid>
                        <Grid size="grow">
                          <Typography>{item.comment}</Typography>
                        </Grid>
                        {userRole.includes("ROLE_ADMIN") && (
                          <Grid>
                            <Button
                              variant="outlined"
                              color="error"
                              size="small"
                              startIcon={<DeleteIcon sx={{ scale: 1.2 }} />}
                              onClick={() => deleteReviews(item.id)}
                            >
                              Delete
                            </Button>
                          </Grid>
                        )}
                      </Grid>
                    </CustomCard>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
        <Grid
          size="auto"
          sx={{
            padding: "2rem",
          }}
        >
          <CustomPagination
            count={contents?.totalElements || 0}
            page={page}
            totalPages={contents?.totalPages || 0}
            setPage={setPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reviews;
