import React from "react";
import Image from "next/image";
import back from "../../../app/public/img/back.png";
import profilesImage from "../../../app/public/img/galataTower.jpg";
import profilesPhoto from "../../../app/public/img/profilePhoto.png";

export default function ProfilesPage() {
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
      </div>
    </div>
  );
}
