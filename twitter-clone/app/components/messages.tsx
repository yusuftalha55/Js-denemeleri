import React from "react";
import Image from "next/image";
import kross from "../../app/public/img/kross.png";
import dot3 from "../../app/public/img/3point.png";

export default function Messages() {
  return (
    <div className="messagesContainers">
      <div className="messagesContainersTop">
        <Image
          src={kross}
          className="messagesContainersTopImg"
          alt="profilePhoto"
        />
        <h5 className="messagesContainersTopPerson">Ahmet Yılmaz</h5>
        <p className="messagesContainersTopNick">@ahmet55</p>
        <button className="messagesContainersTopButton">
          <Image
            src={dot3}
            className="messagesContainersTopButtonImg"
            alt="3point"
          />
        </button>
      </div>
      <div className="messagesContainersContent">
        <p className="messagesContainersContentText">
          Proje şu an güzel ilerliyor umarım yakın zamanda iş bulmak için işime
          yarar.
        </p>
      </div>
    </div>
  );
}
