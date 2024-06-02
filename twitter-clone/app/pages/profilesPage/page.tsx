import React from "react";
import Image from "next/image";
import back from "../../../app/public/img/back.png";

export default function ProfilesPage() {
  return (
    <div className="profilesPageMain">
      <div className="profilesPageTop">
        <div className="profilesPageTopBackButton">
          <button className="profilesPageTopBackButtonAction">
            <Image
              src={back}
              alt="settings"
              className="profilesPageTopBackButtonIn"
            />
          </button>
          <h3 className="profilesPageTopBackButtonText">Atkosturanadam</h3>
        </div>
        <div className="profilesPageTopProfilesImg">
          <h1>asfsafsaf</h1>
        </div>
        <div className="profilesPageTopMainSection">
          <h1>asfsafsaf</h1>
        </div>
      </div>
    </div>
  );
}
