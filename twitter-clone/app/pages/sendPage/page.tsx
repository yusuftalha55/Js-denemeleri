import React from "react";
import { useState } from "react";
import Image from "next/image";
import profile from "../../../app/public/img/profilePhoto.png";
import exit from "../../../app/public/img/ximg.png";

export default function SendPage() {
  const [text, setText] = useState("Neler oluyor?");
  const [isFocused, setIsFocused] = useState(false);
  const [messages, setMessages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFocus = () => {
    if (text === "Neler oluyor?") {
      setText("");
    }
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (text === "") {
      setText("Neler oluyor?");
    }
    setIsFocused(false);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSend = () => {
    if (text !== "Neler oluyor?" || selectedImage) {
      setMessages([...messages, { text, image: selectedImage }]);
      setText("Neler oluyor?");
      setSelectedImage(null);
    }
  };

  return (
    <div className="sendPageMain">
      <div className="sendPageMainTop">
        <button className="sendPageMainTopButton">
          <Image
            className="sendPageMainTopButtonImg"
            src={exit}
            width={30}
            height={25}
            alt="exit"
          />
        </button>
      </div>

      <div className="sendPageMainInput">
        <Image
          className="mainSendSectionImgButtonIn"
          src={profile}
          width={30}
          height={25}
          alt="Profil"
        />
        <textarea
          className="mainSendSectionInputAreaIn"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>

      <div className="sendPageMainSend">
        <button className="sendPageMainSendButton">Gönder</button>
      </div>
    </div>
  );
}
