"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import { ChangeBackGroundColor } from "./globalState";
import "./globals.css";

export default function Home() {
  const [BackGroundColor, setBackGroundColor] = useState("#D1DBBD");

  function changeColor() {
    const newColor = BackGroundColor === "#D1DBBD" ? "#193441" : "#D1DBBD";
    document.documentElement.style.backgroundColor = newColor;
    document.body.style.backgroundColor = newColor;
    setBackGroundColor(newColor);
}


  return (
    <ChangeBackGroundColor.Provider
      value={{ BackGroundColor, setBackGroundColor }}
    >
      <div>
        <ul>
          <li>
            <h2>
              <Link href="/">Home</Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link href="/about">About Us</Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link href="/blog">Blog Post</Link>
            </h2>
          </li>
        </ul>
        <div className="buttonMain">
          <button onClick={changeColor}>Koyu Mod Aç / Kapa</button>
        </div>
      </div>
    </ChangeBackGroundColor.Provider>
  );
}
