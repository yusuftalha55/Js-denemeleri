"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import { ChangeBackGroundColor } from "./globalState";


export default function Home() {
  const [backGroundColor, setBackGroundColor] = useState("#D1DBBD");



  return (
    <ChangeBackGroundColor.Provider>
    <ul style={{backgroundColor: backGroundColor}}>
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
