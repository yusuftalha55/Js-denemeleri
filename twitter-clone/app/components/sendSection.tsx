import React, { useState } from "react";
import Image from "next/image";
import profilePhotos from "../../app/public/img/profilePhoto.png";

export default function SendSection() {
  const [text, setText] = useState('Neler oluyor?');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    if (text === 'Neler oluyor?') {
      setText('');
    }
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (text === '') {
      setText('Neler oluyor?');
    }
    setIsFocused(false);
  };

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
          <textarea
            className="mainSendSectionInputAreaIn"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </label>
      </div>
      <div className="mainSendSectionSendButton">
        <button className="mainSendSectionSendButtonIn">Gönder</button>
      </div>
    </div>
  );
}

