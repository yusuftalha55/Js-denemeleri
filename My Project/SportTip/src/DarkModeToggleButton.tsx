import React, { useContext, useState } from 'react';


export default function ToggleButton = () {
  const [backGroundColor, setBackGroundColor] = useContext("#a9a9a9");

  return (
    <div>
      <button>{ChangeButtonName}</button>
    </div>
  )
}