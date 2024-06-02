import React from "react";
import Image from "next/image";
import { useState } from "react";
import profilePhotos from "../../app/public/img/profilePhoto.png";

export default function SendSection() {
  const [text, setText] = useState('Neler oluyor?');


  return (
    <div className="mainSendSection">
      <div className="mainSendSectionImg">
        <button className="mainSendSectionImgButton">
          <Image
            className="mainSendSectionImgButtonIn"
            src={profilePhotos}
            width={30}
            height={25}
            alt="Profil"
          />
        </button>
      </div>
      <div className="mainSendSectionInputArea">
        <label>
          <textarea className="mainSendSectionInputAreaIn" value={text} onChange={(e) => setText(e.target.value)} />
        </label>
      </div>
      <div className="mainSendSectionSendButton">
        <button className="mainSendSectionSendButtonIn">Gönder</button>
      </div>
    </div>
  );
}
