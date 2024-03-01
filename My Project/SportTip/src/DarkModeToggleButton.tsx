import React, { useContext, useState } from 'react';


export default function ToggleButton = () {
  const [backGroundColor, setBackGroundColor] = useContext("#a9a9a9");
  const [ChangeButtonName, setChangeButtonName] = ("Karanlıık Mod")

  function ChangeBackgroundFunction () {
    setChangeButtonName("Aydınlık Mod");
    setBackGroundColor("#faebd7");
  }

  return (
    <div>
      <button onClick={ChangeBackgroundFunction}>
        {ChangeButtonName}
      </button>
    </div>
  )
}