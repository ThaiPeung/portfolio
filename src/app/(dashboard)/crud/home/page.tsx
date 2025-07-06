"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useSelector } from "react-redux";
import { darkModeType } from "@/stores/redux/darkMode";

// -| Mui
import { Box, Grid, Rating, Typography } from "@mui/material";

// -| Mui icon(s)

// -| Project
import CustomCard from "@/components/customCard";
import Slider from "@/components/crud/home/slider";
import { apiURL } from "@/env";
import SectionHeader from "@/components/crud/home/sectionHeader";
import CustomPagination from "@/components/crud/home/customPagination";
import MainContent from "@/components/crud/home/mainContent";

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

type paginationType = {
  content: bookType[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
  first: true;
  last: false;
};

const page = () => {
  // -| Redux
  const darkMode: darkModeType = useSelector(
    (configureStoreReducer: any) => configureStoreReducer.darkMode.val
  );

  // -| useState
  const [contents, setContents] = useState<paginationType>();
  const [topContents, setTopContents] = useState<bookType[]>([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(9);

  const [getBooksMsg, setGetBooksMsg] = useState<string>("");

  const getBooks = async () => {
    try {
      const response = await axios.get(
        apiURL + `/books?page=${page}&size=${pageSize}`,
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );

      let data: paginationType = response.data;
      console.log("books", data);
      if (response.status === 200) {
        setContents(data);
        if (data.first) {
          setTopContents(data.content.slice(0, 7));
        }
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

  // -| Get list of books
  useEffect(() => {
    getBooks();
  }, [page, pageSize]);

  return (
    <>
      {contents?.content && (
        <>
          <SectionHeader title="Top Books" sectionVariant="neon" />
          <Slider contents={topContents} />
          <MainContent content={contents?.content} />
          <CustomPagination
            count={contents?.totalElements || 0}
            page={page}
            totalPages={contents?.totalPages || 0}
            setPage={setPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
          />
        </>
      )}
    </>
  );
};

export default page;
