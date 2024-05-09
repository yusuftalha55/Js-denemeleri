import React from 'react'
import Image from 'next/image';
import searchButton from "../../app/public/img/searchButton.png";

export default function SearchSections() {
  return (
    <div className='searchSection'>
      <div>
        <div className='searchSectionSearchButtonImg'>
          <Image className="searchSectionSearchButtonImg" src={searchButton} width={30} height={25} alt="arama" />
        </div>
        <div className='searchSectionButton'>
          <input className='searchSectionButton'></input>
        </div>
      </div>
    </div>
  )
}
