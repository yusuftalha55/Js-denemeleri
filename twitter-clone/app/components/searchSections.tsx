import React from "react";
import Image from "next/image";
import searchButton from "../../app/public/img/searchButton.png";

export default function SearchSections() {
  return (
    <div className="searchSection">
      <Image className="searchSectionSearchButtonImg"
        src={searchButton}
        alt="arama"
      />
      <input className="searchSectionInput"></input>
    </div>
  );
}
