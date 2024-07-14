"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import answer from "../../app/public/img/answer.png";
import reTweet from "../../app/public/img/arrow.png";
import like from "../../app/public/img/like.png";
import views from "../../app/public/img/statistics.png";
import favorites from "../../app/public/img/favorites.png";
import share from "../../app/public/img/share.png";
import ronaldo from "../../app/public/img/ronaldo.png";

export default function Containers({ image, text }) {
  const [viewsCount, setViewsCount] = useState(15);
  const [nickNameText, setNickNameText] = useState("");
  const [changeImage, setChangeImage] = useState(image);

  useEffect(() => {
    fetch('http://localhost:5000/api/kullanici')
      .then(response => response.json())
      .then(data => {
        const kullanici = data[0]; // Burada örnek olarak ilk kullanıcıyı aldık
        setNickNameText(kullanici.nickname);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="containersMain">
      <div className="containersMainTop">
        <div className="containersMainLogo">
          <Image src={ronaldo} className="containersMainLogoImg" alt="answer" />
        </div>
        <div className="containersMainName">{nickNameText}</div>
        <div className="containersMainTag">Tag</div>
        <div className="containersMainTime">Time</div>
        <div className="containersMainMore">More</div>
      </div>
      <div className="containersMainMiddle">
        <div className="containersMainText"><p style={{marginLeft:10}}>{text}</p></div>
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




