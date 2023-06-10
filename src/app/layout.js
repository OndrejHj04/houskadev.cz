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
        document.title = "Pojeďte s námi 🌍";
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
