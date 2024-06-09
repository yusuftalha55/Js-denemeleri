import React, { useState } from "react";
import Image from 'next/image';
import setting from "../../app/public/img/settings.png";
import message from "../../app/public/img/message.png";

export default function MessagesHome() {

  const [text, setText] = useState('Neler oluyor?');

  const handleFocus = () => {
    if (text === 'Neler oluyor?') {
      setText('');
    }
  };



  return (
    <div className='MessagesHomeMain'>
      <div className='MessagesHomeMainTop'>
        <h3>Mesajlar</h3>
        <button>
        <Image src={setting} className="MessagesHomeMainTopImgSetting" alt="answer" />
        </button>
        <button><Image src={message} className="MessagesHomeMainTopImgMessage" alt="answer" /></button>
      </div>
      <div className='MessagesHomeMainSearch'>
      <textarea
            className="mainSendSectionInputAreaIn"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={handleFocus}
          />
      </div>
    </div>
  )
}
