import React, { useState } from "react";
import Image from "next/image";
import Containers from "@/app/components/containers";
import back from "../../../app/public/img/back.png";
import profilesImage from "../../../app/public/img/galataTower.jpg";
import profilesPhoto from "../../../app/public/img/profilePhoto.png";
import warOne from "../../../app/public/img/war1.jpg";
import warTwo from "../../../app/public/img/war2.jpg";
import galata from "../../../app/public/img/galataTower.jpg";
import sultanAhmet from "../../../app/public/img/sultanahmetCami.jpg";

export default function ProfilesPage() {
  const [following, setFollowing] = useState(15);
  const [followers, setfollowers] = useState(4);
  const data = [
    { image: warOne, text: "Savaş bir felakettir.", nickNameText: "atkosturanadam55" },
    { image: warTwo, text: "Barış için dua edin.", nickNameText: "atkosturanadam55" },
    { image: galata, text: "Gökyüzü ve Galata Kulesi.", nickNameText: "atkosturanadam55" },
    { image: sultanAhmet, text: "Ne güzel ve büyük bir cami.", nickNameText: "atkosturanadam55" },
  ];


  return (
    <div className="profilesPageMain">
      <div className="profilesPageTop">
        <div className="profilesPageTopBackButton">
          <button className="profilesPageTopBackButtonAction">
            <Image
              src={back}
              alt="settings"
              className="profilesPageTopBackButtonIn"
            />
          </button>
          <h3 className="profilesPageTopBackButtonText">Atkosturanadam</h3>
        </div>
        <div className="profilesPageTopProfilesImg">
          <Image
            src={profilesImage}
            alt="settings"
            className="profilesPageTopProfilesImgIn"
          />
        </div>
        <div className="profilesPageTopMainSection">
          <div className="profilesPageTopMainSectionProfilesPhoto">
            <Image
              src={profilesPhoto}
              alt="settings"
              className="profilesPageTopMainSectionProfilesPhotoImg"
            />
          </div>
        </div>
        <div className="profilesPageTopMainSectionProfilesSettings">
          <button className="profilesPageTopMainSectionProfilesSettingsButton">
            <h4>Profili düzenle</h4>
          </button>
        </div>
        <div className="profilesPageTopMiddle">
          <h2>Atkosturanadam</h2>
          <p>@Atkosturanadam1</p>
          <div className="followersNumbers">
            <button className="followersNumbersFollowing">
              {following} Takip edilen
            </button>
            <button className="followersNumbersFollowers">
              {followers} Takipçi
            </button>
          </div>
        </div>
        <div className="profilesPageTopBottom">
          <p className="profilesPageTopBottomOne">Gönderiler</p>
          <p className="profilesPageTopBottomTwo">Yanıtlar</p>
          <p className="profilesPageTopBottomThree">Öne Çıkanlar</p>
          <p className="profilesPageTopBottomFour">Makaleler</p>
          <p className="profilesPageTopBottomFive">Medya</p>
          <p className="profilesPageTopBottomSix">Beğeni</p>
        </div>
      </div>
      <div className="profilePageBottom">
        <div className="mainContent">
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
    </div>
  );
}
