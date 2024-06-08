import React from "react";
import Image from "next/image";
import heart from "../../app/public/img/kalp.png";
import galata from "../../app/public/img/galataTower.jpg";
import messi from "../../app/public/img/messi.png";

export default function NotificationPageContainers() {
  return (
    <div className="NotificationPageContainersMain">
      <button className="NotificationPageContainersMainButton">
        <Image src={heart} alt="beğeni" className="NotificationPageTopImg" />
        <button><Image src={galata} alt="profilFoto" className="NotificationPageTopImg" /></button>
      </button>
    </div>
  );
}
