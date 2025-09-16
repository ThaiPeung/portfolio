"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { darkModeType } from "@/stores/redux/darkMode";
import { useRouter } from "next/navigation";

// -| Mui
import { Button, Grid, Typography } from "@mui/material";

// -| Mui icon(s)
import AddIcon from "@mui/icons-material/Add";

// -| Project
import Slider from "@/components/crud/home/slider";
import SectionHeader from "@/components/customComponents/sectionHeader";
import CustomPagination from "@/components/customComponents/customPagination";
import MainContent from "@/components/crud/home/mainContent";
import { bookType } from "@/components/crud/types/bookTypes";
import customAxios from "@/services/customAxios";
import CustomDialog from "@/components/customComponents/customDialog";
import useUser from "@/stores/zustand/useUser";
import BookFilters from "@/components/crud/home/bookFilters";

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

  const getBooks = async (
    title: string = "",
    author: string = "",
    genre: string = ""
  ) => {
    try {
      let newURL = `/books?page=${page}&size=${pageSize}
                    ${title !== "" ? `&title=${title}` : ""}
                    ${author !== "" ? `&author=${author}` : ""}
                    ${genre !== "" ? `&genre=${genre}` : ""}`;

      const response = await customAxios.get(newURL);

      let data: paginationType = response.data;
      if (response.status === 200) {
        setContents(data);
        if (data.first && [title, author, genre].every((item) => item === "")) {
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
      <Grid container spacing={4} columns={10} sx={{ width: "100%" }}>
        <Grid size="grow">
          <SectionHeader title="Top Books" sectionVariant="neon" />
        </Grid>
        {userRole.includes("ROLE_ADMIN") && (
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
                router.push(`home/addBook`);
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
          <BookFilters getBooks={getBooks} />
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
