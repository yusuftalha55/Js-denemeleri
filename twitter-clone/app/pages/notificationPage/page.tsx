import React from 'react'
import settings from "../../../app/public/img/settings.png";
import Image from 'next/image';

export default function NotificationPage() {
  return (
    <div>
      <div className='NotificationPageTop'>
        <h2 className='NotificationPageTopHeader'>Bildirimler</h2>
        <button className='NotificationPageTopButton'><Image src={settings} alt='settings' className='NotificationPageTopImg'/></button>
      </div>
      <div className='NotificationPageMiddle'>
        3 chapter
      </div>
      <div className='NotificationPageBottom'>
        Bildirims
      </div>
    </div>
  )
}
