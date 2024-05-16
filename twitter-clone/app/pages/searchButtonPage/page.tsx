import React from "react";
import TrendsContainer from "@/app/components/trendsContainer";
import SearchSections from "@/app/components/searchSections";

export default function SearchButtonPage() {
  return (
    <div>
      <div>
        <SearchSections/>


      </div>
      <div>
        <TrendsContainer />
        <TrendsContainer />
        <TrendsContainer />
        <TrendsContainer />
        <TrendsContainer />
      </div>
    </div>
  );
}
