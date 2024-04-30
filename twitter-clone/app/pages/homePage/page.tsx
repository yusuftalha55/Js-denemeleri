import Home from "@/app/page";
import Image from "next/image";
import React from "react";
import sendSection from "@/app/components/sendSection";
import xLogo from "../../../app/public/img/xLogo.png";


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
          <button className="chapterThreeMainPageButtonInButton"><Image src={xLogo} width={30} height={25} alt="Ana Sayfa" /></button>
        </div>
      </div>
      <div className="sendMainPage">
        <sendSection />
      </div>
      <div className="newFlowMainPage">
        <h1>Flow</h1>
      </div>
      <div className="containersMainPage">
        <h1>Containers</h1>
      </div>
    </div>
  );
}
