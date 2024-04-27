import Home from "@/app/page";
import React from "react";

export default function MainPage() {
  return (
    <div>
      <div className="headerMainPage">
        <div className="chapterOneMainPage">
          <h1>Sana Özel</h1>
        </div>
        <div className="chapterTwoMainPage">
          <h1>Takip edilenler</h1>
        </div>
        <div className="chapterThreeMainPage">
          <button>ayarlar</button>
        </div>
      </div>
      <div className="sendMainPage">
        <h1>Send</h1>
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
