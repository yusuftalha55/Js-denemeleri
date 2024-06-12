import React from "react";
import Image from "next/image";
import threeDot from "../../../app/public/img/3point.png";

export default function FavoritesPage() {
  return (
    <div className="favoritesPage">
      <div className="favoritesPageTop">
        <h3 className="favoritesPageTopH">Yer İşaretleri</h3>
        <p className="favoritesPageTopNick">@Atkosturanadam1</p>
        <button className="favoritesPageTopButton">
          <Image
            src={threeDot}
            className="messagesContainersTopImg"
            alt="profilePhoto"
          />
        </button>
      </div>
      <div className="favoritesPageContent"></div>
    </div>
  );
}
