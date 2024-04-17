"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { ChangeBackGroundColor } from "../globalState";

export default function BlogPost() {
  const { BackGroundColor, setBackGroundColor } = useContext(
    ChangeBackGroundColor
  );
  function changeColor() {
    const newColor = BackGroundColor === "#D1DBBD" ? "#193441" : "#D1DBBD";
    document.body.style.backgroundColor = newColor;
    setBackGroundColor(newColor);
  }

  return (
    <main>
      <h1 >
        <Link href="/">Ana Sayfa</Link>
      </h1>
      <h2 >Blog Post</h2>
      <div className="buttonMain">
        <button onClick={changeColor}>Koyu Mod Aç / Kapa</button>
      </div>
    </main>
  );
}
