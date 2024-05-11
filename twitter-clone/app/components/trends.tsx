import React from 'react'
import TrendsContainer from './trendsContainer'

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
        </div>
    </div>
  )
}
