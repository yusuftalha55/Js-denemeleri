"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import xLogo from "../app/public/img/xLogo.png";
import homePage from "../app/public/img/homePage.png";
import searchButton from "../app/public/img/searchButton.png";
import notificationButton from "../app/public/img/notification.png";
import messageButton from "../app/public/img/message.png";
import ListsButton from "../app/public/img/lists.png";

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
        <div className="sideBarSearchButtonPage">
          <Link href="/pages/searchButtonPage">
            <Image src={searchButton} width={30} height={25} alt="Ara" />
          </Link>
        </div>
        <div className="sideBarNotificationPage">
          <Link href="/pages/notificationPage">
            <Image src={notificationButton} width={30} height={25} alt="Ara" />
          </Link>
        </div>
        <div className="sideBarMessagesPage">
          <Link href="/pages/messagesPage">
            <Image src={messageButton} width={30} height={25} alt="Ara" />
          </Link>
        </div>
        <div className="sideBarListsPage">
          <Link href="/pages/listsPage">
            <Image src={ListsButton} width={30} height={25} alt="Ara" />
          </Link>
        </div>
      </div>
    </div>
  );
}
