"use client";
import { useState, useContext } from "react";
import React from "react";
import Image from "next/image";
import answer from "../../app/public/img/answer.png";
import reTweet from "../../app/public/img/arrow.png";
import like from "../../app/public/img/like.png";
import views from "../../app/public/img/statistics.png";
import favorites from "../../app/public/img/favorites.png";
import share from "../../app/public/img/share.png";
import ronaldo from "../../app/public/img/ronaldo.png";
import messi from "../../app/public/img/messi.png";
import kross from "../../app/public/img/kross.png";
import neymar from "../../app/public/img/neymar.png";
import { textContext } from "./context";

export default function Containers() {
  const [viewsCount, setViewsCount] = useState(15);
  // const [changeTextContext, setChangeTextContext] = useContext(
  //   textContext
  // );
  return (
    <div className="conatinersMain">
      <div className="conatinersMainTop">
        <div className="conatinersMainLogo"><Image src={ronaldo} className="conatinersMainLogoImg" alt="answer" /></div>
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
        <div className="favorites"><Image src={favorites} className="favoritesImg" alt="views" /></div>
        <div className="share"><Image src={share} className="shareImg" alt="views" /></div>
      </div>
    </div>
  );
}
