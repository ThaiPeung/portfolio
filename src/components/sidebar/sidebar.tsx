"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

// -| Mui
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// -| Mui Icon(s)

// -| Project
import { menuItemsType } from "@/app/(dashboard)/menuItems";

type sidebarType = {
  item: menuItemsType;
  open: boolean;
};

const Sidebar: React.FC<sidebarType> = (props) => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Box
      sx={
        pathname.includes(props.item.path!)
          ? {
              margin: "10px",
              boxShadow:
                "0 0 .1rem #fff, 0 0 .1rem #fff, 0 0 1rem #00bfa5, 0 0 0.4rem #00bfa5,0 0 .6rem #00bfa5,inset 0 0 .7rem #00bfa5",
              backgroundImage: "linear-gradient(-45deg, #0D0B1E, #17142C)",
              borderRadius: "10px",
            }
          : {
              margin: "10px",
            }
      }
    >
      <ListItem
        disablePadding
        sx={{
          display: "block",
        }}
      >
        <ListItemButton
          sx={[
            {
              minHeight: 48,
              px: 2.5,
              justifyContent: props.open ? "initial" : "center",
            },
          ]}
          onClick={() => {
            router.push(props.item.path!);
          }}
        >
          <ListItemIcon
            sx={[
              {
                minWidth: 0,
                justifyContent: "center",
                mr: props.open ? 3 : "auto",
                color: pathname.includes(props.item.path!) ? "#fff" : "#b39ddb",
              },
            ]}
          >
            {props.item.icon}
          </ListItemIcon>
          <ListItemText
            primary={props.item.title}
            sx={{
              ".MuiTypography-root": {
                opacity: props.open ? 1 : 0,
                color: pathname.includes(props.item.path!) ? "#fff" : "#b39ddb",
              },
            }}
          />
        </ListItemButton>
      </ListItem>
    </Box>
  );
};

export default Sidebar;
