"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

// -| Mui
import { Box, Grid, Rating, Typography } from "@mui/material";
import axios from "axios";
import { apiURL } from "@/env";
import CustomPagination from "@/components/crud/share/customPagination";
import { reviewType } from "@/components/crud/types/reviewTypes";

// -| Mui icon(s)

// -| Project

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

type paginationType = {
  content: reviewType[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  first: true;
  last: false;
};

const page = () => {
  const params = useParams();
  const router = useRouter();

  // -| useState
  const [bookDetail, setBookDetail] = useState<bookDetailType>();
  const [contents, setContents] = useState<paginationType>();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(9);

  const [getBooksMsg, setGetBooksMsg] = useState<string>("");

  const getBookDetail = async () => {
    try {
      const response = await axios.get(apiURL + `/books/${params.id}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });

      let data: bookDetailType = response.data;
      console.log("book", data);
      if (response.status === 200) {
        setBookDetail(data);
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        setGetBooksMsg(
          `Error: ${error.response?.data?.message || error.message}`
        );
      } else {
        setGetBooksMsg("An unexpected error occurred.");
      }
    }
  };

  const getBookReviews = async () => {
    try {
      const response = await axios.get(
        apiURL + `/reviewsByBook/${params.id}?page=${page}&size=${pageSize}`,
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );

      let data: paginationType = response.data;
      console.log("reviews", data);
      if (response.status === 200) {
        setContents(data);
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        setGetBooksMsg(
          `Error: ${error.response?.data?.message || error.message}`
        );
      } else {
        setGetBooksMsg("An unexpected error occurred.");
      }
    }
  };

  // -| Get book detail
  useEffect(() => {
    getBookDetail();
  }, []);

  // -| Get reviews
  useEffect(() => {
    getBookReviews();
  }, [page, pageSize]);

  return (
    <>
      <p>Post: {params.id}</p>

      <CustomPagination
        count={contents?.totalElements || 0}
        page={page}
        totalPages={contents?.totalPages || 0}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </>
  );
};

export default page;
