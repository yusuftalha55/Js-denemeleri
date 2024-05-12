import Home from "@/app/page";
import Image from "next/image";
import React from "react";
import SendSection from "../../../app/components/sendSection";
import Containers from "@/app/components/containers";
import settings from "../../../app/public/img/settings.png";
import MessagesHome from "@/app/components/messagesHome";

export default function MainPage() {
  return (
    <div>
      <div className="headerMainPage">
        <div className="chapterOneMainPage">
          <button className="chapterOneMainPageButton">Sana Özel</button>
        </div>
        <div className="chapterTwoMainPage">
          <button className="chapterTwoMainPageButton">Takip edilenler</button>
        </div>
        <div className="chapterThreeMainPage">
          <button className="chapterThreeMainPageButton">
            <Image src={settings} className="chapterThreeMainPageButtonInButtonImg" alt="Ana Sayfa" />
          </button>
        </div>
      </div>

      <div className="sendMainPage">
        <div className="sendMainPageIn">
          <SendSection />
        </div>
      </div>

      <div className="newFlowMainPage">
        <button className="newFlowMainPageIn">Yeni gönderileri göster</button>
      </div>

      <div className="containersMainPage">
        <div className="containersMainPageIn">
          <Containers/>
          <Containers/>
          <Containers/>
          <Containers/>
          <Containers/>
          <Containers/>
          <Containers/>
          <Containers/>
        </div>
      </div>

    </div>
  );
}
