import React from "react";
import TrendsContainer from "@/app/components/trendsContainer";
import SearchButtonSearchSections from "@/app/components/searchButtonPageSearchContainer";
import ShowMore from "@/app/components/showMore";

export default function SearchButtonPage() {
  return (
    <div>
      <div className="searchSectionInTheSearchButtonPage">
        <SearchButtonSearchSections/>
      </div>
      <div className="trendsContainerSearchButtonPage">
        <TrendsContainer />
        <TrendsContainer />
        <TrendsContainer />
        <TrendsContainer />
        <TrendsContainer />
        <ShowMore/>
      </div>
    </div>
  );
}
