import React from "react";
import { useState } from "react";
import Image from "next/image";
import profile from "../../../app/public/img/profilePhoto.png";
import exit from "../../../app/public/img/ximg.png";
import SendSection from "@/app/components/sendSection";

export default function SendPage() {
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
      <SendSection />
    </div>
  );
}
