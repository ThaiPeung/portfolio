"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

// -| Mui
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// -| Mui icon(s)
import ImageIcon from "@mui/icons-material/Image";
import AddIcon from "@mui/icons-material/Add";

// -| Project
import CustomCard from "@/components/customComponents/customCard";
import SectionHeader from "@/components/customComponents/sectionHeader";
import customAxios from "@/services/customAxios";
import CustomDialog from "@/components/customComponents/customDialog";
import dayjs, { Dayjs } from "dayjs";
import { apiURL } from "@/env";
import useResDialog from "@/stores/zustand/useResDialog";

const AddBook = () => {
  // -| useState
  const [contents, setContents] = useState();
  const [title, setTitle] = useState("Healthy Food");
  const [author, setAuthor] = useState("Jeremy Norman");
  const [genre, setGenre] = useState("Food");
  const [publishedDate, setPublishedDate] = useState<Dayjs | null>(
    dayjs("2022-04-17")
  );

  // -| zustand
  const resDialog = useResDialog((state) => {
    return state;
  });

  // -| Image file
  const [file, setFile] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [uploading, setUploading] = useState(false);

  // -| Function
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleChangeAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };
  const handleChangeGenre = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(e.target.value);
  };

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  // -| useEffect
  useEffect(() => {
    if (!file?.name) return;
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    // -| cleanup
    return () => URL.revokeObjectURL(url);
  }, [file?.name]);

  // -| Function
  const addNewBook = async () => {
    try {
      const form = new FormData();
      form.append("title", title);
      form.append("author", author);
      form.append("publishedDate", publishedDate?.toISOString() ?? "");
      form.append("genre", genre);

      if (file) {
        form.append("file", file);
      }

      const response = await customAxios.post("/book", form);

      let data: string = response.data;
      if (response.status === 201) {
        resDialog.setType("success");
        resDialog.setTitle("Success");
        resDialog.setMsg(data);
        resDialog.setOpenDialog(true);
      }
    } catch (error) {
      resDialog.setType("error");
      resDialog.setTitle("Error!");
      if (axios.isAxiosError(error)) {
        resDialog.setMsg(`Error: ${error.response?.data || error.message}`);
      } else {
        resDialog.setMsg("An unexpected error occurred.");
      }
      resDialog.setOpenDialog(true);
    }
  };

  return (
    <>
      <SectionHeader title="Add New Book" sectionVariant="neon" />

      <Grid
        container
        direction="row"
        spacing={5}
        sx={{
          justifyContent: "center",
          alignItems: "top",
        }}
      >
        <Grid size="grow">
          {/* --------------- Add image --------------- */}
          <CustomCard height="max-content" margin="30px 0px 0px 0px">
            <Box
              sx={{
                width: "100%",
                display: "grid",
                gap: "20px",
                placeItems: "center",
              }}
            >
              {/* --------------- Display image --------------- */}
              {previewUrl !== "" && (
                <Image
                  style={{ borderRadius: "10px" }}
                  src={previewUrl}
                  alt={previewUrl}
                  width={200}
                  height={300}
                />
              )}
              {previewUrl === "" && (
                <Box
                  sx={{
                    width: "200px",
                    height: "300px",
                    display: "grid",
                    placeItems: "center",
                    boborderRadius: "10px",
                  }}
                >
                  <Typography>No Image</Typography>
                </Box>
              )}
              <Button
                component="label" // -| Importan for upload file button
                size="large"
                variant="outlined"
                endIcon={<ImageIcon />}
              >
                <Typography>Upload Image</Typography>
                <input type="file" hidden onChange={handleUploadImage} />
              </Button>
            </Box>
          </CustomCard>
        </Grid>
        {/* --------------- Book's details --------------- */}
        <Grid size="grow">
          <CustomCard
            height="max-content"
            width="400px"
            margin="30px 0px 0px 0px"
          >
            <Box
              sx={{
                display: "grid",
                gap: "30px",
                placeItems: "center",
              }}
            >
              <TextField
                sx={{ minWidth: "200px", width: "100%" }}
                label="Title"
                size="small"
                onChange={handleChangeTitle}
                value={title}
                multiline
              />
              <TextField
                sx={{ minWidth: "200px", width: "100%" }}
                label="Author"
                size="small"
                onChange={handleChangeAuthor}
                value={author}
                multiline
              />
              <TextField
                sx={{ minWidth: "200px", width: "100%" }}
                label="Genre"
                size="small"
                onChange={handleChangeGenre}
                value={genre}
                multiline
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Published Date"
                  value={publishedDate}
                  onChange={(newValue) => setPublishedDate(newValue)}
                />
              </LocalizationProvider>
              <Button
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: "5px",
                }}
                endIcon={<AddIcon sx={{ scale: 2 }} />}
                onClick={addNewBook}
              >
                <Box sx={{ width: "85%" }}>
                  <Typography fontSize={32}>Add</Typography>
                </Box>
              </Button>
            </Box>
          </CustomCard>
        </Grid>
      </Grid>
    </>
  );
};

export default AddBook;
