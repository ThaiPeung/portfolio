"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

// -| Mui
import {
  Box,
  Button,
  Chip,
  Dialog,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { apiURL } from "@/env";
import CustomPagination from "@/components/customComponents/customPagination";
import {
  paginationType,
  reviewType,
} from "@/components/crud/types/reviewTypes";
import CustomCard from "@/components/customComponents/customCard";

// -| Mui icon(s)
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DateRangeIcon from "@mui/icons-material/DateRange";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";

// -| Project
import Reviews from "@/components/crud/home/review/reviews";
import customAxios from "@/services/customAxios";
import CustomDialog from "@/components/customComponents/customDialog";
import useUser from "@/stores/useUser";

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

  // -| Response Dialog
  const [openDialog, setOpenDialog] = useState(false);
  const [apiResTitle, setAPIResTitle] = useState("");
  const [apiResMsg, setAPIResMsg] = useState("");
  const [apiResType, setAPIResType] = useState("");

  // -| useState api input
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(9);

  // -| useState user input
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  // -| function
  const getBookDetail = async () => {
    try {
      const response = await customAxios.get(`/books/${params.id}`);

      let data: bookDetailType = response.data;
      if (response.status === 200) {
        setBookDetail(data);
      }
    } catch (error) {
      setAPIResType("error");
      setAPIResTitle("Error!");
      if (axios.isAxiosError(error)) {
        setAPIResMsg(`Error: ${error.response?.data || error.message}`);
      } else {
        setAPIResMsg("An unexpected error occurred.");
      }
    }
  };

  const getBookReviews = async () => {
    try {
      const response = await customAxios.get(
        `/reviewsByBook/${params.id}?page=${page}&size=${pageSize}`
      );

      let data: paginationType = response.data;
      if (response.status === 200) {
        setContents(data);
      }
    } catch (error) {
      setAPIResType("error");
      setAPIResTitle("Error!");
      if (axios.isAxiosError(error)) {
        setAPIResMsg(`Error: ${error.response?.data || error.message}`);
      } else {
        setAPIResMsg("An unexpected error occurred.");
      }
    }
  };

  const getUserReview = async () => {
    try {
      const response = await customAxios.get(
        `/reviewByUserAndBook/${params.id}`
      );

      let data: reviewType = response.data;
      if (response.status === 200) {
        setUserReviewId(data.id);
        setRating(data.rating);
        setComment(data.comment);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.status !== 404) {
          setAPIResType("error");
          setAPIResTitle("Error!");
          setAPIResMsg(`Error: ${error.response?.data || error.message}`);
          setOpenDialog(true);
        }
      } else {
        setAPIResType("error");
        setAPIResTitle("Error!");
        setAPIResMsg("An unexpected error occurred.");
        setOpenDialog(true);
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
      const response = await customAxios.post(`/reviews`, body);

      let data: reviewType = response.data;
      if (response.status === 200) {
        setRating(data.rating);
        setComment(data.comment);
        getBookDetail();
        getBookReviews();
        getUserReview();
        setAPIResType("success");
        setAPIResTitle("Success");
        setAPIResMsg(`Successfully add / edit review: ${data.comment}`);
        setOpenDialog(true);
      }
    } catch (error) {
      setAPIResType("error");
      setAPIResTitle("Error!");
      if (axios.isAxiosError(error)) {
        setAPIResMsg(`Error: ${error.response?.data || error.message}`);
      } else {
        setAPIResMsg("An unexpected error occurred.");
      }
      setOpenDialog(true);
    }
  };

  const deleteReviews = async (idFromAdmin?: number) => {
    try {
      const response = await customAxios.delete(
        `/reviews/${idFromAdmin || userReviewId}`
      );

      let data: string = response.data;
      if (response.status === 200) {
        getBookDetail();
        getBookReviews();
        getUserReview();
        setUserReviewId(undefined);
        setRating(0);
        setComment("");
        setAPIResType("success");
        setAPIResTitle("Success");
        setAPIResMsg(data);
        setOpenDialog(true);
      } else {
        setAPIResType("error");
        setAPIResTitle("Error!");
        setAPIResMsg(data);
        setOpenDialog(true);
      }
    } catch (error) {
      setAPIResType("error");
      setAPIResTitle("Error!");
      if (axios.isAxiosError(error)) {
        setAPIResMsg(`Error: ${error.response?.data || error.message}`);
      } else {
        setAPIResMsg("An unexpected error occurred.");
      }
      setOpenDialog(true);
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

  // -| function
  const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  return (
    <>
      <CustomDialog
        open={openDialog}
        setOpenDialog={setOpenDialog}
        title={apiResTitle}
        msg={apiResMsg}
        type={apiResType}
      />

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
            {/* --------------- Add review --------------- */}
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
                  label="Review"
                  size="small"
                  onChange={handleChangeComment}
                  value={comment}
                  multiline
                />
                <Grid
                  container
                  columns={2}
                  spacing={3}
                  sx={{
                    width: "100%",
                  }}
                >
                  <Grid size="grow" sx={{ alignContent: "center" }}>
                    <Rating
                      value={rating || 0}
                      precision={0.5}
                      size="large"
                      onChange={(event, newValue) => {
                        setRating(newValue || 0);
                      }}
                    />
                  </Grid>
                  <Grid
                    size="auto"
                    sx={{
                      alignContent: "center",
                    }}
                  >
                    <Button
                      onClick={postUserReviews}
                      variant="outlined"
                      size="small"
                      disabled={!comment}
                      startIcon={userReviewId ? <EditIcon /> : <AddIcon />}
                    >
                      {userReviewId ? "Edit " : "Add "} review
                    </Button>
                  </Grid>
                  <Grid
                    size="auto"
                    sx={{
                      alignContent: "center",
                    }}
                  >
                    <Button
                      onClick={() => deleteReviews()}
                      variant="outlined"
                      size="small"
                      color="error"
                      disabled={!userReviewId}
                      startIcon={<DeleteIcon />}
                    >
                      Delete review
                    </Button>
                  </Grid>
                </Grid>
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
                deleteReviews={deleteReviews}
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default page;
