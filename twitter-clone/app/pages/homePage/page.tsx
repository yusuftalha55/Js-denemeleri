import Home from "@/app/page";
import Image from "next/image";
import React from "react";
import SendSection from "../../../app/components/sendSection";
import Containers from "@/app/components/containers";
import settings from "../../../app/public/img/settings.png";
import MessagesHome from "@/app/components/messagesHome";
import answer from "../../../app/public/img/answer.png";
import warOne from "../../../app/public/img/war1.jpg";
import warTwo from "../../../app/public/img/war2.jpg";
import galata from "../../../app/public/img/galataTower.jpg";
import sultanAhmet from "../../../app/public/img/sultanahmetCami.jpg";


const data = [
  { image: warOne, text: "Savaş bir felakettir." },
  { image: warTwo, text: "Barış için dua edin." },
  { image: galata, text: "Gökyüzü ve Galata Kulesi." },
  { image: sultanAhmet, text: "Ne güzel ve büyük bir cami." },
];

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
          {data.map((item, index) => (
            <Containers key={index} image={item.image} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

