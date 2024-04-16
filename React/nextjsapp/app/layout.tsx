"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { useState } from "react";
import { ChangeBackGroundColor } from "./globalState";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // State'i ve context provider'ını burada tanımlayın
  const [BackGroundColor, setBackGroundColor] = useState("#D1DBBD");

  return (
    // Context provider ile tüm children'ları sarmalayın
    <ChangeBackGroundColor.Provider value={{ BackGroundColor, setBackGroundColor }}>
      <html lang="en" style={{ backgroundColor: BackGroundColor }}>
        <body className={inter.className}>{children}</body>
      </html>
    </ChangeBackGroundColor.Provider>
  );
}

