import React, { useState } from 'react';

const ToggleButton: React.FC = () => {
  const [backGroundColor, setBackGroundColor] = useState("#faebd7");
  const [ChangeButtonName, setChangeButtonName] = useState("Aydınlık Mod");
  const [textColor ,setTextColor] = useState("black");

  function ChangeBackgroundFunction() {
    setChangeButtonName(ChangeButtonName === "Karanlık Mod" ? "Aydınlık Mod" : "Karanlık Mod");
    setBackGroundColor(backGroundColor === "#faebd7" ? "#212121" : "#faebd7");
    setTextColor(textColor === "black" ? "white" : "black" );
  }

  return (
    <div>
      <button onClick={ChangeBackgroundFunction} style={{ backgroundColor: backGroundColor, color: textColor, height:50 }}>
        {ChangeButtonName}
      </button>
    </div>
  );
}

export default ToggleButton;
