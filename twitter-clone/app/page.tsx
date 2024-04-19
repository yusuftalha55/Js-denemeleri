"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import xLogo from "../app/public/img/xLogo.png";
import homePage from "../app/public/img/homePage.png";

export default function Home() {
  return (
    <div className="main">
      <div className="sideBar">
        <div className="sideBarHomePage">
          <Link href="/pages/homePage">
            <Image src={xLogo} width={30} height={25} alt="Ana Sayfa" />
          </Link>
        </div>
        <div className="sideBarHomePage">
          <Link href="/pages/homePage">
            <Image src={homePage} width={30} height={25} alt="Ana Sayfa" />
          </Link>
        </div>
      </div>
    </div>
  );
}
