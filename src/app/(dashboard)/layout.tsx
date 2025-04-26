"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Mui
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import {
  Button,
  Divider,
  LinearProgress,
  ListSubheader,
  MenuItem,
  ThemeProvider,
} from "@mui/material";
import { NextAppProvider } from "@toolpad/core/nextjs";
import { Branding, Navigation } from "@toolpad/core/AppProvider";

// Project
import theme from "../theme";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();

  return (
    <>
      <DashboardLayout>{children}</DashboardLayout>
    </>
  );

  // <Button onClick={() => router.push("/crud")}>crud</Button>
  // <Button onClick={() => router.push("/about")}>about</Button>
  // <Button onClick={() => router.push("/earth")}>earth</Button>
};

export default layout;
