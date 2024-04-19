"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div className="main">
      <div className="sideBar">
        <Link href="/pages/homePage">
          <img src="img/xLogo.png" alt="Ana Sayfa" />
        </Link>
      </div>

    </div>
  );
}
