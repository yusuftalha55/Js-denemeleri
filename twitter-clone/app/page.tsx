"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import "./globals.css";
import xLogo from "../app/public/img/xLogo.png";
import homePage from "../app/public/img/homePage.png";
import searchButton from "../app/public/img/searchButton.png";
import notificationButton from "../app/public/img/notification.png";
import messageButton from "../app/public/img/message.png";
import ListsButton from "../app/public/img/lists.png";
import favoritesButton from "../app/public/img/favorites.png";
import groupsButton from "../app/public/img/groups.png";
import profilesButton from "../app/public/img/profiles.png";
import moreButton from "../app/public/img/more.png";
import sendButton from "../app/public/img/send.png";
import MainPage from "./pages/homePage/page";
import SearchButtonPage from "./pages/searchButtonPage/page";


export default function Home() {
  const [activePage, setActivePage] = useState("searchButton");

  const handlePageChange = (page) => {
    setActivePage(page);
  };


  return (
    <div className="main">
      <div className="sideBar">
        <div className="sideBarHomePage">
          <Link href="/pages/homePage">
            <Image src={xLogo} width={30} height={25} alt="Ana Sayfa" onClick={() => handlePageChange("home")}/>
          </Link>
        </div>
        <div className="sideBarHomePage">
          <Link href="/pages/homePage">
            <Image src={homePage} width={30} height={25} alt="Ana Sayfa" onClick={() => handlePageChange("home")} />
          </Link>
        </div>
        <div className="sideBarSearchButtonPage">
          <Link href="/pages/searchButtonPage">
            <Image src={searchButton} width={30} height={25} alt="Ara" onClick={() => handlePageChange("searchButton")} />
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
        <div className="sideBarFavoritesPage">
          <Link href="/pages/favoritesPage">
            <Image src={favoritesButton} width={30} height={25} alt="Ara" />
          </Link>
        </div>
        <div className="sideBarGroupsPage">
          <Link href="/pages/groupsPage">
            <Image src={groupsButton} width={35} height={30} alt="Ara" />
          </Link>
        </div>
        <div className="sideBarProfilesPage">
          <Link href="/pages/profilesPage">
            <Image src={profilesButton} width={30} height={25} alt="Ara" />
          </Link>
        </div>
        <div className="sideBarMorePage">
          <Link href="/pages/morePage">
            <Image src={moreButton} width={30} height={25} alt="Ara" />
          </Link>
        </div>
        <div className="sideBarSendPage">
          <Link href="/pages/sendPage">
            <Image className="sideBarSendPageHref" src={sendButton} width={30} height={25} alt="Ara" />
          </Link>
        </div>
      </div>
      <div className="mainShowActivePage">
        {activePage === "home" && (
          <div>
            <MainPage></MainPage>
          </div>
        )}
        {activePage === "search" && (
          <div>
            <SearchButtonPage></SearchButtonPage>
          </div>
        )}
        {/* Diğer sayfa içerikleri burada render edilmeli */}
      </div>
    </div>
  );
}
