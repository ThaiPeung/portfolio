'use client'

import { JSX } from "react";

// - Mui
import PublicIcon from "@mui/icons-material/Public";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ArticleIcon from "@mui/icons-material/Article";
import InfoIcon from "@mui/icons-material/Info";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import HomeIcon from "@mui/icons-material/Home";
import AdjustIcon from "@mui/icons-material/Adjust";
import useUser from "@/stores/zustand/useUser";

export type menuItemsType = {
  title: string;
  path?: string;
  icon?: JSX.Element;
  children?: {
    title: string;
    path?: string;
    icon?: JSX.Element;
  }[];
};

export const MenuItems: menuItemsType[] = [
  {
    title: "About",
    path: "/about",
    icon: <InfoIcon />,
  },
  {
    title: "TempCity",
    path: "/tempCity",
    icon: <InfoIcon />,
  },
  {
    title: "Earth",
    path: "/earth",
    icon: <PublicIcon />,
  },
  {
    title: "Game",
    path: "/game",
    icon: <SportsSoccerIcon />,
  },
  {
    title: "Laptop",
    path: "/laptop",
    icon: <LaptopMacIcon />,
  },
  {
    title: "CRUD",
    icon: <ArticleIcon />,
    children: [
      {
        title: "User",
        path: "/crud/login",
        icon: <HomeIcon />,
      },
    ],
  },
];

export const MenuItemsAdmin: menuItemsType[] = [
  {
    title: "About",
    path: "/about",
    icon: <InfoIcon />,
  },
  {
    title: "Earth",
    path: "/earth",
    icon: <PublicIcon />,
  },
  {
    title: "Game",
    path: "/game",
    icon: <SportsSoccerIcon />,
  },
  {
    title: "Laptop",
    path: "/laptop",
    icon: <LaptopMacIcon />,
  },
  {
    title: "CRUD",
    icon: <ArticleIcon />,
    children: [
      {
        title: "User",
        path: "/crud/login",
        icon: <HomeIcon />,
      },
      {
        title: "Admin",
        path: "/crud/admin/manageUser",
        icon: <AdjustIcon />,
      },
    ],
  },
];
