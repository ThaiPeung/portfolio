import "./globals.css";
import React from "react";

// Mui

// Project

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ height: "100vh" }}>{children}</body>
    </html>
  );
}
