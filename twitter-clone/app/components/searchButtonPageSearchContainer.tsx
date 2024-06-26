import React from "react";
import Image from "next/image";
import searchButton from "../../app/public/img/searchButton.png";
import settingsButton from "../../app/public/img/settings.png";

export default function SearchButtonSearchSections() {
  return (
    <div className="searchButtonSearchSections">
      <div>
        <Image
          className="searchButtonSearchSectionsImg"
          src={searchButton}
          alt="arama"
        />
      </div>
      <div>
        <input
          placeholder="Ara"
          className="searchButtonSearchSectionInput"
        ></input>
      </div>
      <div className="searchButtonSettings">
        <Image
          className="searchButtonSettingsImg"
          src={settingsButton}
          alt="arama"
        />
      </div>
    </div>
  );
}
