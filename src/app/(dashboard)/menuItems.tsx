import { JSX } from "react";

// - Mui
import PublicIcon from "@mui/icons-material/Public";
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';

type menuItemsType = {
  title: string;
  path?: string,
  icon?: JSX.Element;
};

export const MenuItems: menuItemsType[] = [
  {
    title: "About",
    path: "about",
    icon: <InfoIcon />,
  },
  {
    title: "Earth",
    path: "earth",
    icon: <PublicIcon />,
  },
  {
    title: "Game",
    path: "game",
    icon: <PublicIcon />,
  },
  {
    title: "Laptop",
    path: "laptop",
    icon: <LaptopMacIcon />,
  },
  {
    title: "CRUD",
    path: "crud/login",
    icon: <ArticleIcon />,
  },
];
