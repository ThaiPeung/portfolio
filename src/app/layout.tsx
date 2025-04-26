import "./globals.css";
import React from "react";

// Mui
import DescriptionIcon from "@mui/icons-material/Description";
import { NextAppProvider } from "@toolpad/core/nextjs";
import { Branding, Navigation } from "@toolpad/core/AppProvider";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import PublicIcon from '@mui/icons-material/Public';
import ComputerIcon from '@mui/icons-material/Computer';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

// Project

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "earth",
    title: "Earth",
    icon: <PublicIcon />,
  },
  {
    segment: "laptop",
    title: "Laptop",
    icon: <ComputerIcon />,
  },
  {
    segment: "crud",
    title: "CRUD",
    icon: <ManageSearchIcon />,
  },
  {
    segment: "about",
    title: "About me",
    icon: <DescriptionIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  // {
  //   segment: "reports",
  //   title: "Reports",
  //   icon: <BarChartIcon />,
  //   children: [
  //     {
  //       segment: "project",
  //       title: "Project",
  //       icon: <DescriptionIcon />,
  //     },
  //     {
  //       segment: "traffic",
  //       title: "Traffic",
  //       icon: <DescriptionIcon />,
  //     },
  //   ],
  // },
];

const BRANDING: Branding = {
  title: "Thai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-toolpad-color-scheme="light">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <NextAppProvider navigation={NAVIGATION} branding={BRANDING}>
            {children}
          </NextAppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
