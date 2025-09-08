"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// -| Mui
import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { apiURL } from "@/env";

// -| Mui icon(s)
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DateRangeIcon from "@mui/icons-material/DateRange";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import SearchIcon from "@mui/icons-material/Search";

// -| Project
import { bookType } from "../types/bookTypes";
import CustomCard from "@/components/customComponents/customCard";
import { paginationType } from "../types/reviewTypes";
import customAxios from "@/services/customAxios";
import CustomOutlinedInput from "@/components/customComponents/customOutlinedInput";

const BookDetailSX = {
  display: "flex",
  gap: "5px",
  padding: "0",
};

type BookFiltersType = {
  getBooks: (title?: string, author?: string, genre?: string) => void;
};

const BookFilters: React.FC<BookFiltersType> = ({ getBooks }) => {
  // -| useState
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  // -| functions
  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleClearTitle = () => {
    setTitle("");
  };

  const handleChangeAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleClearAuthor = () => {
    setAuthor("");
  };

  const handleChangeGerne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(e.target.value);
  };

  const handleClearGerne = () => {
    setGenre("");
  };

  return (
    <Box
      sx={{
        marginBottom: "40px",
        padding: "10px",
      }}
    >
      <CustomCard
        backgroundDark="linear-gradient(135deg, #000000, #212121, #000000, #212121)"
        animation
      >
        <Grid
          container
          direction="row"
          spacing={3}
          sx={{
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Grid size="auto">
            <CustomOutlinedInput
              title="Title"
              value={title}
              handleChangeValue={handleChangeTitle}
              handleClearValue={handleClearTitle}
              icon={<CleaningServicesIcon />}
            />
          </Grid>
          <Grid size="auto">
            <CustomOutlinedInput
              title="Author"
              value={author}
              handleChangeValue={handleChangeAuthor}
              handleClearValue={handleClearAuthor}
              icon={<CleaningServicesIcon />}
            />
          </Grid>
          <Grid size="auto">
            <CustomOutlinedInput
              title="Genre"
              value={genre}
              handleChangeValue={handleChangeGerne}
              handleClearValue={handleClearGerne}
              icon={<CleaningServicesIcon />}
            />
          </Grid>

          <Grid size="auto">
            <IconButton
              size="large"
              sx={{
                border: "1px solid #fff",
                boxShadow:
                  "0 0 2px #fff, 0 0 2px #fff, 0 0 5px #2196f3, 0 0 8px #2196f3,0 0 10px #2196f3,inset 0 0 7px #2196f3",
              }}
              onClick={() => {
                getBooks(title, author, genre);
              }}
            >
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CustomCard>
      <Grid container direction="row" spacing={10}>
        <Grid size={{ xs: 2, sm: 3, md: 4 }}></Grid>
      </Grid>
    </Box>
  );
};

export default BookFilters;
