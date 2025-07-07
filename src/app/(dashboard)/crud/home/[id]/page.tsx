"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";

// -| Mui
import { Box, Grid, Rating, Typography } from "@mui/material";

// -| Mui icon(s)

// -| Project

const page = () => {
  const params = useParams()
  const router = useRouter();
  return <p>Post: {params.id}</p>;
};

export default page;
