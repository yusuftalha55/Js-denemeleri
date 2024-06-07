import React, { useState } from "react";
import Image from "next/image";
import profilePhotos from "../../app/public/img/profilePhoto.png";

export default function SendSection() {
  const [text, setText] = useState('Neler oluyor?');
  const [isFocused, setIsFocused] = useState(false);
  const [messages, setMessages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSend = () => {
    if (text !== 'Neler oluyor?' || selectedImage) {
      setMessages([...messages, { text, image: selectedImage }]);
      setText('Neler oluyor?');
      setSelectedImage(null);
    }
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
        <input className="mainSendSectionInputAreaInImg" type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <div className="mainSendSectionSendButton">
        <button onClick={handleSend} className="mainSendSectionSendButtonIn">Gönder</button>
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <p>{msg.text}</p>
            {msg.image && <img src={msg.image} alt="User uploaded" width={100} />}
          </div>
        ))}
      </div>
    </div>
  );
}



