import React from "react";
import TrendsContainer from "@/app/components/trendsContainer";
import SearchButtonSearchSections from "@/app/components/searchButtonPageSearchContainer";

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
      </div>
    </div>
  );
}
