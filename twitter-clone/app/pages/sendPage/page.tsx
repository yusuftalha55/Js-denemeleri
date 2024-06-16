import React from "react";
import Image from "next/image";
import profile from "../../../app/public/img/profilePhoto.png";

export default function SendPage() {
  return (
    <div className="sendPageMain">
      <div className="sendPageMainTop">
        <button className="sendPageMainTopButton"></button>
      </div>

      <div className="sendPageMainInput">
        <Image
          className="mainSendSectionImgButtonIn"
          src={profile}
          width={30}
          height={25}
          alt="Profil"
        />
      </div>

      <div className="sendPageMainSend">
        <button className="sendPageMainSendButton">Gönder</button>
      </div>
    </div>
  );
}
