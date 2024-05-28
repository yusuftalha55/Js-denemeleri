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
  const { changeTextContext, setChangeTextContext } = useContext(textContext);

  return (
    <div className="containersMain">
      <div className="containersMainTop">
        <div className="containersMainLogo">
          <Image src={ronaldo} className="containersMainLogoImg" alt="answer" />
        </div>
        <div className="containersMainName">Name</div>
        <div className="containersMainTag">Tag</div>
        <div className="containersMainTime">Time</div>
        <div className="containersMainMore">More</div>
      </div>
      <div className="containersMainMiddle">
        <div className="containersMainText">{changeTextContext}</div>
        <div className="containersMainImg">Img</div>
      </div>
      <div className="containersMainBottom">
        <div className="answer">
          <Image src={answer} className="answerImg" alt="answer" />
        </div>
        <div className="rTweet">
          <Image src={reTweet} className="reTweetImg" alt="reTweet" />
        </div>
        <div className="like">
          <Image src={like} className="likeImg" alt="like" />
        </div>
        <div className="views">
          <Image src={views} className="viewsImg" alt="views" />
          {viewsCount}
        </div>
        <div className="favorites">
          <Image src={favorites} className="favoritesImg" alt="views" />
        </div>
        <div className="share">
          <Image src={share} className="shareImg" alt="views" />
        </div>
      </div>
    </div>
  );
}




