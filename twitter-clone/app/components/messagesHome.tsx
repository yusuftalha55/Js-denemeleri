import React, { useState } from "react";
import Image from "next/image";
import Messages from "./messages";
import setting from "../../app/public/img/settings.png";
import message from "../../app/public/img/message.png";

export default function MessagesHome() {
  const [text, setText] = useState("Direkt mesajlarda ara");
  const [isTextAreaFocus, setIsTextAreaFocus] = useState(true);

  const handleFocus = () => {
    if (text === "Direkt mesajlarda ara") {
      setText("");
    }
    setIsTextAreaFocus(true);
  };

  const handleBlur = () => {
    if (text === "") {
      setText("Direkt mesajlarda ara");
    }
    setIsTextAreaFocus(false);
  };

  return (
    <div className="MessagesHomeMain">
      <div className="MessagesHomeMainTop">
        <h3>Mesajlar</h3>
        <button className="MessagesHomeMainTopButtonSetting">
          <Image
            src={setting}
            className="MessagesHomeMainTopImgSetting"
            alt="answer"
          />
        </button>
        <button className="MessagesHomeMainTopButtonMessage">
          <Image
            src={message}
            className="MessagesHomeMainTopImgMessage"
            alt="answer"
          />
        </button>
      </div>
      <div className="MessagesHomeMainSearch">
        <textarea
          className="MessagesHomeMainSearchTextArea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div className="messagesArea">
        <Messages />
        <Messages />
        <Messages />
      </div>
    </div>
  );
}
