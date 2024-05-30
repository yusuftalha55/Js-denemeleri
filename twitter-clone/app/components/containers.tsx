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
import { textContext } from "./context";
import warOne from "../../app/public/img/war1.jpg";
import warTwo from "../../app/public/img/war2.jpg";

export default function Containers({ image, text }) {
  const [viewsCount, setViewsCount] = useState(15);
  const { changeTextContext, setChangeTextContext } = useContext(textContext);
  const [changeImage, setChangeImage] = useState(image);

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
        <div className="containersMainText">{text}</div>
        <div className="containersMainImg">
          <Image src={changeImage} className="containersMainImgIn" alt="image" />
        </div>
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
          <Image src={favorites} className="favoritesImg" alt="favorites" />
        </div>
        <div className="share">
          <Image src={share} className="shareImg" alt="share" />
        </div>
      </div>
    </div>
  );
}


