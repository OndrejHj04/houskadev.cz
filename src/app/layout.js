"use client";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        document.title = "Houska dev";
      } else {
        document.title = "Programujeme weby";
      }
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="sA_Y9uRtjtkf9Zq8tEQhNuJI5Qy94RCzROdc8oJUUoE"
        />
        <title>Houska dev</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
