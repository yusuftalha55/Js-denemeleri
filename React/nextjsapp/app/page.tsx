// @ts-nocheck
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { ChangeBackGroundColor } from "./globalState";
import React, {useState, useEffect} from "react";

export default function Home() {
  // const [backGroundColor, setBackGroundColor] = useState("#D1DBBD");



  return (
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
  );
}
