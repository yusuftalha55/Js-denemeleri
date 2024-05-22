import React from "react";
import TrendsContainer from "@/app/components/trendsContainer";
import SearchButtonSearchSections from "@/app/components/searchButtonPageSearchContainer";
import ShowMore from "@/app/components/showMore";
import SearchButtonPageOptions from "@/app/components/searchButtonPageOptions";

export default function SearchButtonPage() {
  return (
    <div>
      <div className="searchSectionInTheSearchButtonPage">
        <SearchButtonSearchSections />
      </div>
      <div className="searchSectionInTheOptions">
        <SearchButtonPageOptions />
      </div>
      <div className="trendsContainerSearchButtonPage">
        <h2 style={{marginLeft:10}}>İlgini çekebilecek gündemler</h2>
        <TrendsContainer />
        <TrendsContainer />
        <TrendsContainer />
        <TrendsContainer />
        <TrendsContainer />
        <ShowMore />
      </div>
    </div>
  );
}
