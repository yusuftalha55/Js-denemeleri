import React, { useState } from "react";
import Image from "next/image";
import heart from "../../app/public/img/kalp.png";
import galata from "../../app/public/img/galataTower.jpg";

export default function NotificationPageContainers() {
  const [person, setPerson] = useState("ahmet");

  return (
    <div className="NotificationPageContainersMain">
      <button className="NotificationPageContainersMainButton">
        <div className="NotificationPageContainersMainButtonPhotos">
          <Image
            src={heart}
            alt="beğeni"
            className="NotificationPageContainersMainButtonLike"
          />
          <button className="NotificationPageContainersMainButtonInButton">
            <Image
              src={galata}
              alt="profilFoto"
              className="NotificationPageContainersMainButtonProfilePhoto"
            />
          </button>
        </div>
        <div className="personİnformation">
          <h3 className="personİnformationState">{person}</h3>
          <p className="personİnformationText">yanıtını beğendi</p>
        </div>
        <div className="NotificationPageContainersMainButtonContent">
          <p>
            Güne taze bir fincan kahve ve yeni fikirlerle başlamak harika! ☕️✨
            Bugünü verimli ve pozitif geçirelim. #SabahMotivasyonu
            #KahveSeverler
          </p>
        </div>
      </button>
    </div>
  );
}
