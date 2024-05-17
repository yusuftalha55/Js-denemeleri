import React from "react";
import Image from "next/image";
import searchButton from "../../app/public/img/searchButton.png";

export default function SearchButtonSearchSections() {
  return (
    <div className="searchSection">
      <div>
        <Image
          className="searchSectionSearchButtonImg"
          src={searchButton}
          alt="arama"
        />
      </div>
      <div>
        <input className="searchSectionInput"></input>
      </div>
    </div>
  );
}
