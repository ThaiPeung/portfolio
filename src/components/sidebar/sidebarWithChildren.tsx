"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

// -| Mui
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Collapse, List } from "@mui/material";

// -| Mui Icon(s)
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// -| Project
import CustomDivider from "../customComponents/customDivider";
import { menuItemsType } from "@/app/(dashboard)/menuItems";

type sidebarType = {
  item: menuItemsType;
  open: boolean;
};

const SidebarWithChildren: React.FC<sidebarType> = (props) => {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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
          onClick={handleClick}
          sx={[
            {
              minHeight: 48,
              px: 2.5,
              justifyContent: props.open ? "initial" : "center",
            },
          ]}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              justifyContent: "center",
              mr: props.open ? 3 : "auto",
              color: open ? "#fff" : "#b39ddb",
            }}
          >
            {props.item.icon}
          </ListItemIcon>
          <ListItemText
            primary="CRUD"
            sx={{
              ".MuiTypography-root": {
                opacity: props.open ? 1 : 0,
                color: open ? "#fff" : "#b39ddb",
              },
            }}
          />
          {props.open && <>{open ? <ExpandLess /> : <ExpandMore />}</>}
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.item.children!.map((childItem) => (
            <ListItemButton
              key={childItem.title}
              sx={[
                {
                  minHeight: 48,
                  px: 2.5,
                  justifyContent: props.open ? "initial" : "center",
                },
              ]}
              onClick={() => {
                router.push(childItem.path!);
              }}
            >
              <ListItemIcon
                sx={[
                  {
                    minWidth: props.open ? "56px" : 0,
                    color: pathname.includes(props.item.path!)
                      ? "#fff"
                      : "#b39ddb",
                  },
                ]}
              >
                {childItem.icon}
              </ListItemIcon>
              {props.open && (
                <>
                  <ListItemText
                    primary={childItem.title}
                    sx={{
                      ".MuiTypography-root": {
                        opacity: props.open ? 1 : 0,
                        color: pathname.includes(props.item.path!)
                          ? "#fff"
                          : "#b39ddb",
                      },
                    }}
                  />
                </>
              )}
            </ListItemButton>
          ))}
        </List>
      </Collapse>
      <CustomDivider />
    </Box>
  );
};

export default SidebarWithChildren;
