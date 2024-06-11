import React from "react";
import Image from "next/image";
import kross from "../../app/public/img/kross.png";

export default function Messages() {
  return (
    <div className="messagesContainers">
      <div className="messagesContainersTop">
        <Image src={kross} className="messagesContainersTopImg" alt="profilePhoto" />
        <h5 className="messagesContainersTopPerson">Ahmet Yılmaz</h5>
        <p className="messagesContainersTopNick">@ahmet55</p>
      </div>
    </div>
  );
}
