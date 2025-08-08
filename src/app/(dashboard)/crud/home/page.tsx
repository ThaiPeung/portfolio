"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useSelector } from "react-redux";
import { darkModeType } from "@/stores/redux/darkMode";
import { useRouter } from "next/navigation";

// -| Mui
import { Box, Button, Grid, Rating, Typography } from "@mui/material";

// -| Mui icon(s)
import AddIcon from "@mui/icons-material/Add";

// -| Project
import CustomCard from "@/components/customComponents/customCard";
import Slider from "@/components/crud/home/slider";
import SectionHeader from "@/components/customComponents/sectionHeader";
import CustomPagination from "@/components/customComponents/customPagination";
import MainContent from "@/components/crud/home/mainContent";
import { bookType } from "@/components/crud/types/bookTypes";
import customAxios from "@/services/customAxios";
import CustomDialog from "@/components/customComponents/customDialog";
import useUser from "@/stores/useUser";
import { apiURL } from "@/env";

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
  // -| useRouter
  const router = useRouter();

  // -| Redux
  const darkMode: darkModeType = useSelector(
    (configureStoreReducer: any) => configureStoreReducer.darkMode.val
  );

  // -| zustand
  const userRole = useUser((state) => {
    return state.roles;
  });

  // -| useState
  const [contents, setContents] = useState<paginationType>();
  const [topContents, setTopContents] = useState<bookType[]>([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(9);

  // -| Response Dialog
  const [openDialog, setOpenDialog] = useState(false);
  const [apiResTitle, setAPIResTitle] = useState("");
  const [apiResMsg, setAPIResMsg] = useState("");
  const [apiResType, setAPIResType] = useState("");

  const getBooks = async () => {
    try {
      const response = await customAxios.get(
        `/books?page=${page}&size=${pageSize}`
      );

      let data: paginationType = response.data;
      if (response.status === 200) {
        setContents(data);
        if (data.first) {
          setTopContents(data.content.slice(0, 7));
        }
      }
    } catch (error) {
      setAPIResType("error");
      setAPIResTitle("Error!");
      if (axios.isAxiosError(error)) {
        setAPIResMsg(
          `Error: ${error.response?.data?.message || error.message}`
        );
      } else {
        setAPIResMsg("An unexpected error occurred.");
      }
      setOpenDialog(true);
    }
  };

  // -| Get list of books
  useEffect(() => {
    getBooks();
  }, [page, pageSize]);

  return (
    <>
      <CustomDialog
        open={openDialog}
        setOpenDialog={setOpenDialog}
        title={apiResTitle}
        msg={apiResMsg}
        type={apiResType}
      />
      <Grid container spacing={4} columns={10} sx={{ width: "100%" }}>
        <Grid size="grow">
          <SectionHeader title="Top Books" sectionVariant="neon" />
        </Grid>
        {userRole.includes("ADMIN") && (
          <Grid size={1.5}>
            <Button
              variant="outlined"
              sx={{
                height: "100px",
                width: "100%",
                borderRadius: "50px",
              }}
              startIcon={<AddIcon sx={{ scale: 3 }} />}
              onClick={() => {
                router.push(`addBook`);
              }}
            >
              <Typography fontSize={40}>Add</Typography>
            </Button>
          </Grid>
        )}
      </Grid>
      {contents?.content && (
        <>
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
