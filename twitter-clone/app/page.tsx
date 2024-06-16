"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { textContext } from "./components/context";
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
import NotificationPage from "./pages/notificationPage/page";
import MessagePage from "./pages/messagesPage/page";
import FavoritesPage from "./pages/favoritesPage/page";
import ProfilesPage from "./pages/profilesPage/page";
import MorePage from "./pages/morePage/page";
import SendPage from "./pages/sendPage/page";
import SearchSections from "./components/searchSections";
import Trends from "./components/trends";
import MessagesHome from "./components/messagesHome";

export default function Home() {
  const [activePage, setActivePage] = useState("home");
  const [changeTextContext, setChangeTextContext] = useState("TEXT Deneme");
  const [showMorePage, setShowMorePage] = useState(false);
  const [showSendPage, setShowSendPage] = useState(false);

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const moreClick = (e) => {
    e.stopPropagation();
    setShowMorePage(true);
  };

  const sendClick = (e) => {
    e.stopPropagation();
    setShowSendPage(true);
  };

  const closeOverlay = () => {
    setShowMorePage(false);
    setShowSendPage(false);
  };

  useEffect(() => {
    if (showMorePage) {
      document.addEventListener("click", closeOverlay);
    } else {
      document.removeEventListener("click", closeOverlay);
    }

    return () => {
      document.removeEventListener("click", closeOverlay);
    };
  }, [showMorePage]);

  useEffect(() => {
    if (showSendPage) {
      document.addEventListener("click", closeOverlay);
    } else {
      document.removeEventListener("click", closeOverlay);
    }

    return () => {
      document.removeEventListener("click", closeOverlay);
    };
  }, [showSendPage]);

  return (
    <textContext.Provider value={{ changeTextContext, setChangeTextContext }}>
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
            <button onClick={() => handlePageChange("notification")}>
              <Image
                src={notificationButton}
                width={30}
                height={25}
                alt="Bildirimler"
              />
            </button>
          </div>
          <div className="sideBarMessagesPage">
            <button onClick={() => handlePageChange("messages")}>
              <Image
                src={messageButton}
                width={30}
                height={25}
                alt="Mesajlar"
              />
            </button>
          </div>
          <div className="sideBarFavoritesPage">
            <button onClick={() => handlePageChange("favorites")}>
              <Image
                src={favoritesButton}
                width={30}
                height={25}
                alt="Favoriler"
              />
            </button>
          </div>
          <div className="sideBarProfilesPage">
            <button onClick={() => handlePageChange("profiles")}>
              <Image
                src={profilesButton}
                width={30}
                height={25}
                alt="Profiller"
              />
            </button>
          </div>
          <div className="sideBarMorePage">
            <button onClick={moreClick}>
              <Image src={moreButton} width={30} height={25} alt="Daha Fazla" />
            </button>
          </div>
          <div className="sideBarSendPage">
            <button onClick={sendClick}>
              <Image
                className="sideBarSendPageHref"
                src={sendButton}
                width={30}
                height={25}
                alt="Gönder"
              />
            </button>
          </div>
        </div>
        <div className="mainShowActivePage">
          {activePage === "home" && <MainPage />}
          {activePage === "search" && <SearchButtonPage />}
          {activePage === "notification" && <NotificationPage />}
          {activePage === "messages" && <MessagePage />}
          {activePage === "favorites" && <FavoritesPage />}
          {activePage === "profiles" && <ProfilesPage />}
        </div>
        {activePage !== "search" && (
          <div className="searchSection">
            <SearchSections />
          </div>
        )}

        {activePage !== "search" && (
          <div className="trendsMain">
            <Trends />
          </div>
        )}

        <div className="messagesHome">
          <h2 className="">Mesajlar</h2>
          {/* <MessagesHome /> */}
        </div>

        {showMorePage && (
          <div className="morePageOverlay" onClick={(e) => e.stopPropagation()}>
            <MorePage />
          </div>
        )}

        {showSendPage && (
          <div className="sendPageOverlay" onClick={(e) => e.stopPropagation()}>
            <SendPage />
          </div>
        )}
      </div>
    </textContext.Provider>
  );
}
