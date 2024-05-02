import React from "react";
import Image from "next/image";
import profilePhotos from "../../app/public/img/profilePhoto.png";

export default function SendSection() {
  return (
    <div className="mainSendSection">
      <div className="mainSendSectionImg">
        <button className="mainSendSectionImgButton">
          <Image className="mainSendSectionImgButtonIn" src={profilePhotos} width={30} height={25} alt="Profil" />
        </button>
      </div>
      <div className="mainSendSectionSendButton">
        <button className="mainSendSectionSendButtonIn">Gönder</button>
      </div>
    </div>
  );
}
