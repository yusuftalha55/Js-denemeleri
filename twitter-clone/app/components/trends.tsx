import React from 'react'
import TrendsContainer from './trendsContainer'
import ShowMore from './showMore'

export default function Trends() {
  return (
    <div className='trendsMainIn'>
        <h4>İlgini çekebilecek gündemler</h4>
        <div>
          <TrendsContainer/>
          <TrendsContainer/>
          <TrendsContainer/>
          <TrendsContainer/>
          <TrendsContainer/>
          <TrendsContainer/>
          <TrendsContainer/>
          <TrendsContainer/>
          <ShowMore/>
        </div>
    </div>
  )
}
