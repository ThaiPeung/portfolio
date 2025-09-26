"use client";

import { Provider } from "react-redux";
import "./globals.css";
import React from "react";
import { store } from "@/stores/redux/redux";
// Mui

// Project
import CustomDialog from "@/components/customComponents/customDialog";
import useResDialog from "@/stores/zustand/useResDialog";
import ConfirmDialog from "@/components/customComponents/confirmDialog";
import { GlobalStyles } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // -| zustand
  const resDialog = useResDialog((state) => {
    return state;
  });

  return (
    <html lang="en">
      <Provider store={store}>
        <CustomDialog />
        <ConfirmDialog />
        <GlobalStyles
          styles={{
            'input[type="password"]::-ms-reveal, input[type="password"]::-ms-clear':
              {
                display: "none",
              },
            'input[type="password"]::-webkit-credentials-auto-fill-button': {
              display: "none",
            },
            'input[type="password"]::-webkit-textfield-decoration-container': {
              display: "none",
            },
          }}
        />
        <body style={{ height: "100vh" }}>{children}</body>
      </Provider>
    </html>
  );
}
