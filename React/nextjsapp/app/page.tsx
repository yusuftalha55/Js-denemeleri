"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import { ChangeBackGroundColor } from "./globalState";


export default function Home() {
  const [BackGroundColor, setBackGroundColor] = useState("#D1DBBD");



  return (
    <ChangeBackGroundColor.Provider value={{BackGroundColor, setBackGroundColor}}>
    <ul style={{backgroundColor: BackGroundColor}}>
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
    </ChangeBackGroundColor.Provider>
  );
}
