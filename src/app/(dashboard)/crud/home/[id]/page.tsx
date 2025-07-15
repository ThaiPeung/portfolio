"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

// -| Mui
import {
  Box,
  Button,
  Chip,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { apiURL } from "@/env";
import CustomPagination from "@/components/crud/share/customPagination";
import {
  paginationType,
  reviewType,
} from "@/components/crud/types/reviewTypes";
import CustomCard from "@/components/customCard";

// -| Mui icon(s)
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DateRangeIcon from "@mui/icons-material/DateRange";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Reviews from "@/components/crud/home/review/reviews";
import customAxios from "@/services/customAxios";

// -| Project

const BookDetailSX = {
  display: "flex",
  gap: "5px",
  padding: "0",
};

type bookDetailType = {
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

const page = () => {
  const params = useParams();
  const router = useRouter();

  // -| useState data
  const [bookDetail, setBookDetail] = useState<bookDetailType>();
  const [contents, setContents] = useState<paginationType>();
  const [userReviewId, setUserReviewId] = useState<number>();

  const [apiResMsg, setAPIResMsg] = useState<string>("");

  // -| useState api input
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(9);

  // -| useState user input
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  // -| function
  const getBookDetail = async () => {
    try {
      const response = await axios.get(apiURL + `/books/${params.id}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });

      let data: bookDetailType = response.data;
      if (response.status === 200) {
        setBookDetail(data);
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        setAPIResMsg(
          `Error: ${error.response?.data?.message || error.message}`
        );
      } else {
        setAPIResMsg("An unexpected error occurred.");
      }
    }
  };

  const getBookReviews = async () => {
    try {
      const response = await customAxios.get(
        apiURL + `/reviewsByBook/${params.id}?page=${page}&size=${pageSize}`,
      );

      let data: paginationType = response.data;
      console.log("getBookReviews", data);
      if (response.status === 200) {
        setContents(data);
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        setAPIResMsg(
          `Error: ${error.response?.data?.message || error.message}`
        );
      } else {
        setAPIResMsg("An unexpected error occurred.");
      }
    }
  };

  const getUserReview = async () => {
    try {
      const response = await axios.get(
        apiURL + `/reviewByUserAndBook/${params.id}`,
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );

      let data: reviewType = response.data;
      if (response.status === 200) {
        setUserReviewId(data.id);
        setRating(data.rating);
        setComment(data.comment);
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        setAPIResMsg(
          `Error: ${error.response?.data?.message || error.message}`
        );
      } else {
        setAPIResMsg("An unexpected error occurred.");
      }
    }
  };

  const postUserReviews = async () => {
    try {
      const body = {
        id: userReviewId,
        bookId: params.id,
        userId: null,
        rating: rating,
        comment: comment,
        createdAt: null,
      };
      const response = await axios.post(apiURL + `/reviews`, body, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });

      let data: reviewType = response.data;
      if (response.status === 200) {
        setRating(data.rating);
        setComment(data.comment);
        getBookDetail();
        getBookReviews();
        getUserReview();
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        setAPIResMsg(
          `Error: ${error.response?.data?.message || error.message}`
        );
      } else {
        setAPIResMsg("An unexpected error occurred.");
      }
    }
  };

  // -| Get book detail and user reviews
  useEffect(() => {
    getBookDetail();
    getUserReview();
  }, []);

  // -| Get reviews
  useEffect(() => {
    getBookReviews();
  }, [page, pageSize]);

  useEffect(() => {
    console.log("contents", contents);
  }, [contents]);

  // -| function
  const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Grid
          container
          direction="row"
          columns={3}
          spacing={5}
          sx={{
            justifyContent: "center",
            alignItems: "top",
          }}
        >
          <Grid size={1}>
            {/* --------------- Book detail --------------- */}
            {bookDetail && (
              <CustomCard height="max-content">
                <Box
                  sx={{
                    width: "100%",
                    padding: "10px 0px 30px 0px",
                  }}
                >
                  <Typography align="center" variant="h4">
                    {bookDetail.title}
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
                    <Box
                      sx={{
                        height: "310px",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      {bookDetail.imageUrl !== "" &&
                        bookDetail.imageUrl?.includes("/uploads/") && (
                          <Image
                            style={{ borderRadius: "10px" }}
                            src={apiURL + bookDetail.imageUrl}
                            alt={bookDetail.title}
                            width={200}
                            height={300}
                          />
                        )}
                      {bookDetail.imageUrl === "" && (
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
                        <BorderColorIcon />: {bookDetail.author}
                      </Typography>
                      <Chip label="Genre" size="small" />
                      <Typography sx={BookDetailSX}>
                        <FormatListBulletedIcon />: {bookDetail.genre}
                      </Typography>
                      <Chip label="Published Date" size="small" />
                      <Typography sx={BookDetailSX}>
                        <DateRangeIcon />: {bookDetail.publishedDate}
                      </Typography>
                      <Chip label="Rating" size="small" />
                      <Rating
                        size="small"
                        readOnly
                        value={bookDetail.rating || 0}
                        precision={0.5}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </CustomCard>
            )}
            {/* --------------- Add comment --------------- */}
            <CustomCard height="max-content" margin="30px 0px 0px 0px">
              <Box
                sx={{
                  width: "100%",
                  display: "grid",
                  gap: "10px",
                  placeItems: "center",
                }}
              >
                <TextField
                  sx={{ minWidth: "200px", width: "100%" }}
                  label="Comment"
                  size="small"
                  onChange={handleChangeComment}
                  value={comment}
                  multiline
                />
                <Rating
                  value={rating || 0}
                  precision={0.5}
                  size="large"
                  onChange={(event, newValue) => {
                    setRating(newValue || 0);
                  }}
                />
                <Button onClick={postUserReviews} variant="contained">
                  Add / Edit comment
                </Button>
              </Box>
            </CustomCard>
          </Grid>
          {/* --------------- Reviews --------------- */}
          <Grid size="grow">
            {contents && (
              <Reviews
                contents={contents}
                page={page}
                setPage={setPage}
                pageSize={pageSize}
                setPageSize={setPageSize}
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default page;
