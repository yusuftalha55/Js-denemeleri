import Home from "@/app/page";
import React from "react";

export default function MainPage() {
  return (
    <div>
      <div className="headerMainPage">
        <div className="chapterOneMainPage">
          <button className="chapterOneMainPageButton">Sana Özel</button>
        </div>
        <div className="chapterTwoMainPage">
        <button className="chapterTwoMainPageButton">Sana Özel</button>
        </div>
        <div className="chapterThreeMainPage">
        <button className="chapterThreeMainPageButton">Sana Özel</button>
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
