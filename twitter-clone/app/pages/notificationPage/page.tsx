import React from "react";
import settings from "../../../app/public/img/settings.png";
import Image from "next/image";
import NotificationPageContainers from "@/app/components/notificationPageContainers";

export default function NotificationPage() {
  return (
    <div className="NotificationPageMain">
      <div className="NotificationPageTop">
        <h2 className="NotificationPageTopHeader">Bildirimler</h2>
        <button className="NotificationPageTopButton">
          <Image
            src={settings}
            alt="settings"
            className="NotificationPageTopImg"
          />
        </button>
      </div>
      <div className="NotificationPageMiddle">
        <div className="NotificationPageMiddleChapterOne">
          Tümü
        </div>
        <div className="NotificationPageMiddleChapterTwo">
          Onaylanmış
        </div>
        <div className="NotificationPageMiddleChapterThree">
          Bahsedenler
        </div>
      </div>
      <div className="NotificationPageBottom">
        <NotificationPageContainers/>
        <NotificationPageContainers/>
        <NotificationPageContainers/>
      </div>
    </div>
  );
}
