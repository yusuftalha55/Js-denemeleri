import React, { useState } from "react";
import Image from "next/image";
import back from "../../../app/public/img/back.png";
import profilesImage from "../../../app/public/img/galataTower.jpg";
import profilesPhoto from "../../../app/public/img/profilePhoto.png";

export default function ProfilesPage() {
  const [following, setFollowing ] = useState(15);
  const [followers, setfollowers ] = useState(4);
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
            <p className="followersNumbersFollowing">{following} Takip edilen</p>
            <p className="followersNumbersFollowers">{followers} Takipçi</p>
          </div>
        </div>
        <div className="profilesPageTopBottom">
          <p>Gönderiler</p>
          <p>Yanıtlar</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>

        </div>
      </div>
    </div>
  );
}
