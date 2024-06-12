import React, { useState } from "react";
import Image from "next/image";
import Containers from "@/app/components/containers";
import threeDot from "../../../app/public/img/3point.png";
import warOne from "../../../app/public/img/war1.jpg";
import warTwo from "../../../app/public/img/war2.jpg";
import galata from "../../../app/public/img/galataTower.jpg";
import sultanAhmet from "../../../app/public/img/sultanahmetCami.jpg";

export default function FavoritesPage() {
  const [following, setFollowing] = useState(15);
  const [followers, setfollowers] = useState(4);
  const data = [
    {
      image: warOne,
      text: "Savaş bir felakettir.",
      nickNameText: "atkosturanadam55",
    },
    {
      image: warTwo,
      text: "Barış için dua edin.",
      nickNameText: "atkosturanadam55",
    },
    {
      image: galata,
      text: "Gökyüzü ve Galata Kulesi.",
      nickNameText: "atkosturanadam55",
    },
    {
      image: sultanAhmet,
      text: "Ne güzel ve büyük bir cami.",
      nickNameText: "atkosturanadam55",
    },
  ];
  return (
    <div className="favoritesPage">
      <div className="favoritesPageTop">
        <h3 className="favoritesPageTopH">Yer İşaretleri</h3>
        <p className="favoritesPageTopNick">@Atkosturanadam1</p>
        <button className="favoritesPageTopButton">
          <Image
            src={threeDot}
            className="favoritesPageTopButtonImg"
            alt="threeDot"
          />
        </button>
      </div>
      <div className="favoritesPageContent">
        {data.map((item, index) => (
          <Containers
            key={index}
            image={item.image}
            text={item.text}
            nickNameText={item.nickNameText}
          />
        ))}
      </div>
    </div>
  );
}
