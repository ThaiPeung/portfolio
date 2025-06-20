"use client"

import { Provider } from "react-redux";
import "./globals.css";
import React from "react";
import { store } from "@/stores/redux";

// Mui

// Project

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body style={{ height: "100vh" }}>{children}</body>
      </Provider>
    </html>
  );
}
