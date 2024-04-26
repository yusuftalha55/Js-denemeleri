"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  const [activePage, setActivePage] = useState("home");

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="container">
      <div className="sideBar">
        <div className="sideBarHomePage">
          <button onClick={() => handlePageChange("home")}>
            <Image src={xLogo} width={30} height={25} alt="Ana Sayfa" />
          </button>
        </div>
        <div className="sideBarHomePage">
          <button onClick={() => handlePageChange("home")}>
            <Image src={homePage} width={30} height={25} alt="Ana Sayfa" />
          </button>
        </div>
        <div className="sideBarSearchButtonPage">
          <button onClick={() => handlePageChange("search")}>
            <Image src={searchButton} width={30} height={25} alt="Ara" />
          </button>
        </div>
        <div className="sideBarNotificationPage">
          <Link href="/pages/notificationPage">
            <Image src={notificationButton} width={30} height={25} alt="Bildirimler" />
          </Link>
        </div>
        <div className="sideBarMessagesPage">
          <Link href="/pages/messagesPage">
            <Image src={messageButton} width={30} height={25} alt="Mesajlar" />
          </Link>
        </div>
        <div className="sideBarListsPage">
          <Link href="/pages/listsPage">
            <Image src={ListsButton} width={30} height={25} alt="Listeler" />
          </Link>
        </div>
        <div className="sideBarFavoritesPage">
          <Link href="/pages/favoritesPage">
            <Image src={favoritesButton} width={30} height={25} alt="Favoriler" />
          </Link>
        </div>
        <div className="sideBarGroupsPage">
          <Link href="/pages/groupsPage">
            <Image src={groupsButton} width={35} height={30} alt="Gruplar" />
          </Link>
        </div>
        <div className="sideBarProfilesPage">
          <Link href="/pages/profilesPage">
            <Image src={profilesButton} width={30} height={25} alt="Profiller" />
          </Link>
        </div>
        <div className="sideBarMorePage">
          <Link href="/pages/morePage">
            <Image src={moreButton} width={30} height={25} alt="Daha Fazla" />
          </Link>
        </div>
        <div className="sideBarSendPage">
          <Link href="/pages/sendPage">
            <Image className="sideBarSendPageHref" src={sendButton} width={30} height={25} alt="Gönder" />
          </Link>
        </div>
      </div>
      <div className="mainShowActivePage">
        {activePage === "home" && <MainPage />}
        {activePage === "search" && <SearchButtonPage />}
      </div>
    </div>
  );
}
