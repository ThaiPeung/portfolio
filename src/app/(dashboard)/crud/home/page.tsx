"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// -| Mui
import { Box, Grid, Rating, Typography } from "@mui/material";
import { darkModeType } from "@/stores/redux/darkMode";
import { useSelector } from "react-redux";
import CustomCard from "@/components/customCard";
import Slider from "@/components/crud/home/slider";
import axios from "axios";
import { apiURL } from "@/env";
import SectionHeader from "@/components/crud/home/sectionHeader";

// -| Mui icon(s)

// -| Project

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

const page = () => {
  // -| Redux
  const darkMode: darkModeType = useSelector(
    (configureStoreReducer: any) => configureStoreReducer.darkMode.val
  );

  const [contents, setContents] = useState<bookType[]>([
    {
      id: "1",
      imageUrl: "",
      title: "Card",
      rating: 4,
      author: "test review",
      publishedDate: "24/06/2025",
      genre: "mock up",
      createBy: "Dev",
      createAt: "today",
    },
    {
      id: "2",
      imageUrl: "",
      title: "Card",
      rating: 5,
      author: "test review",
      publishedDate: "24/06/2025",
      genre: "mock up",
      createBy: "Dev",
      createAt: "today",
    },
    {
      id: "3",
      imageUrl: "",
      title: "Card",
      rating: 4.5,
      author: "test review",
      publishedDate: "24/06/2025",
      genre: "mock up",
      createBy: "Dev",
      createAt: "today",
    },
    {
      id: "4",
      imageUrl: "",
      title: "Card",
      rating: 5,
      author: "test review",
      publishedDate: "24/06/2025",
      genre: "mock up",
      createBy: "Dev",
      createAt: "today",
    },
    {
      id: "5",
      imageUrl: "",
      title: "Card",
      rating: 5,
      author: "test review",
      publishedDate: "24/06/2025",
      genre: "mock up",
      createBy: "Dev",
      createAt: "today",
    },
    {
      id: "6",
      imageUrl: "",
      title: "Card",
      rating: 4,
      author: "test review",
      publishedDate: "24/06/2025",
      genre: "mock up",
      createBy: "Dev",
      createAt: "today",
    },
    {
      id: "7",
      imageUrl: "",
      title: "Card",
      rating: 3.5,
      author: "test review",
      publishedDate: "24/06/2025",
      genre: "mock up",
      createBy: "Dev",
      createAt: "today",
    },
  ]);

  const [getBooksMsg, setGetBooksMsg] = useState<string>("");

  const getBooks = async () => {
    try {
      const response = await axios.get(apiURL + "/books", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });

      let books: bookType[] = response.data;
      console.log("books", books);
      if (response.status === 200) {
        setContents(books);
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
  }, []);

  return (
    <>
      <SectionHeader title="Top rating" sectionVariant="neon" />
      <Slider />
      <Box
        sx={{
          height: "100%",
          width: "100%",
          padding: "10px",
        }}
      >
        <Grid container direction="row" spacing={10}>
          {contents.map((content, index) => {
            console.log(content.imageUrl);
            return (
              <Grid key={index} size={{ xs: 2, sm: 3, md: 4 }}>
                <CustomCard enableHover>
                  <Grid
                    container
                    direction="row"
                    columns={2}
                    spacing={3}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Grid size="grow">
                      <Box sx={{ height: "400px" }}>
                        {content.imageUrl !== "" &&
                          content.imageUrl?.includes("/uploads/") && (
                            <Image
                              style={{ borderRadius: "10px" }}
                              src={apiURL + content.imageUrl}
                              alt={content.title}
                              width={200}
                              height={300}
                            />
                          )}
                        {content.imageUrl === "" && (
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
                          gap: "20",
                          placeItems: "center",
                        }}
                      >
                        <Typography variant="h4">{content.title}</Typography>
                        <Typography>{content.author}</Typography>
                        <Typography>{content.genre}</Typography>
                        <Typography>{content.publishedDate}</Typography>
                        <Rating
                          readOnly
                          defaultValue={content.rating}
                          size="large"
                          precision={0.5}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </CustomCard>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default page;
