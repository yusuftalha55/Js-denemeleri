"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import answer from "../../app/public/img/answer.png";
import reTweet from "../../app/public/img/arrow.png";
import like from "../../app/public/img/like.png";
import views from "../../app/public/img/statistics.png";

export default function Containers() {
  const [viewsCount, setViewsCount] = useState(15);
  return (
    <div className="conatinersMain">
      <div className="conatinersMainTop">
        <div className="conatinersMainLogo">Logo</div>
        <div className="conatinersMainName">Name</div>
        <div className="conatinersMainTag">Tag</div>
        <div className="conatinersMainTime">Time</div>
        <div className="conatinersMainMore">More</div>
      </div>
      <div className="conatinersMainMiddle">
        <div className="conatinersMainText">Text</div>
        <div className="conatinersMainImg">İmg</div>
      </div>
      <div className="conatinersMainBottom">
        <div className="answer"><Image src={answer} className="answerImg" alt="answer" /></div>
        <div className="rTweet"><Image src={reTweet} className="reTweetImg" alt="reTweet" /></div>
        <div className="like"><Image src={like} className="likeImg" alt="like" /></div>
        <div className="views"><Image src={views} className="viewsImg" alt="views" />{viewsCount}</div>
        <div className="favorites">Favorites</div>
        <div className="share">Share</div>
      </div>
    </div>
  );
}
