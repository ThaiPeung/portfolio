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

// -| Project
import CustomCard from "@/components/customComponents/customCard";
import SectionHeader from "@/components/customComponents/sectionHeader";
import customAxios from "@/services/customAxios";
import CustomDialog from "@/components/customComponents/customDialog";
import dayjs, { Dayjs } from "dayjs";
import { apiURL } from "@/env";

const AddBook = () => {
  // -| useState
  const [contents, setContents] = useState();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedDate, setPublishedDate] = useState<Dayjs | null>(
    dayjs("2022-04-17")
  );
  const [genre, setGenre] = useState("");

  // -| Image file
  const [file, setFile] = useState<File>();
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [uploading, setUploading] = useState(false);

  // -| Response Dialog
  const [openDialog, setOpenDialog] = useState(false);
  const [apiResTitle, setAPIResTitle] = useState("");
  const [apiResMsg, setAPIResMsg] = useState("");
  const [apiResType, setAPIResType] = useState("");

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
    setOpenDialog(false);
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  // -| useEffect
  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    // -| cleanup
    return () => URL.revokeObjectURL(url);
  }, [file]);

  // -| Function
  const addNewBook = async () => {
    try {
      const form = new FormData();
      form.append("title", title);
      form.append("author", author);
      form.append("publishedDate", publishedDate?.toISOString() ?? "");
      form.append("genre", genre);

      if (file) {
        form.append("file", file); // match your @RequestParam("file") on the server
      }
      const response = await customAxios.post("/book", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      let data: string = response.data;
      if (response.status === 200) {
        setAPIResType("success");
        setAPIResTitle("Success");
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

  return (
    <>
      <CustomDialog
        open={openDialog}
        setOpenDialog={setOpenDialog}
        title={apiResTitle}
        msg={apiResMsg}
        type={apiResType}
      />
      <SectionHeader title="Add Book" sectionVariant="neon" />

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
          {/* --------------- Display image --------------- */}
          {previewUrl !== "" && previewUrl?.includes("/uploads/") && (
            <Image
              style={{ borderRadius: "10px" }}
              src={apiURL + previewUrl}
              alt={previewUrl}
              width={200}
              height={300}
            />
          )}
          {previewUrl === "" && (
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
          {/* --------------- Add image --------------- */}
          <CustomCard height="max-content" margin="30px 0px 0px 0px">
            <Box
              sx={{
                width: "100%",
                display: "grid",
                gap: "10px",
                placeItems: "center",
              }}
            >
              <Button size="large" variant="outlined" endIcon={<ImageIcon />}>
                <Typography>Upload Image</Typography>
                <input type="file" hidden onChange={handleUploadImage} />
              </Button>
            </Box>
          </CustomCard>
        </Grid>
        {/* --------------- Book's details --------------- */}
        <Grid size="grow">
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
                label="Title"
                size="small"
                onChange={handleChangeTitle}
                value={title}
                multiline
              />
              <TextField
                sx={{ minWidth: "200px", width: "100%" }}
                label="Title"
                size="small"
                onChange={handleChangeAuthor}
                value={author}
                multiline
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Controlled picker"
                  value={publishedDate}
                  onChange={(newValue) => setPublishedDate(newValue)}
                />
              </LocalizationProvider>
              <TextField
                sx={{ minWidth: "200px", width: "100%" }}
                label="Title"
                size="small"
                onChange={handleChangeGenre}
                value={genre}
                multiline
              />
            </Box>
          </CustomCard>
        </Grid>
      </Grid>
    </>
  );
};

export default AddBook;
