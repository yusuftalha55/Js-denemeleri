import React from "react";
import Image from "next/image";
import kross from "../../app/public/img/kross.png";

export default function Messages() {
  return (
    <div className="messagesContainers">
      <div className="messagesContainersTop">
        <Image src={kross} className="containersMainLogoImg" alt="answer" />
      </div>
    </div>
  );
}
