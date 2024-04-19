"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import xLogo from "../app/public/img/xLogo.png";

export default function Home() {
  return (
    <div className="main">
      <div className="sideBar">
        <Link href="/pages/homePage">
          <Image src={xLogo} width={30} height={30} alt="Ana Sayfa" />
        </Link>
      </div>
    </div>
  );
}
