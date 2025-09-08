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
        <CustomDialog/>
        <ConfirmDialog />
        <body style={{ height: "100vh" }}>{children}</body>
      </Provider>
    </html>
  );
}
