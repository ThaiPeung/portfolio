"use client";

import React from "react";
import { useRouter } from "next/router";

// -| Mui
import { Box, Grid, Rating, Typography } from "@mui/material";

// -| Mui icon(s)

// -| Project

const page = () => {
  const router = useRouter();
  return <p>Post: {router.query.slug}</p>;
};

export default page;
