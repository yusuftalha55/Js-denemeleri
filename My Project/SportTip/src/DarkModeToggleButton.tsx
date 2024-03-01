import React, { useState } from 'react';

const ToggleButton: React.FC = () => {
  const [backGroundColor, setBackGroundColor] = useState("#faebd7");
  const [ChangeButtonName, setChangeButtonName] = useState("Aydınlık Mod");

  function ChangeBackgroundFunction() {
    setChangeButtonName(ChangeButtonName === "Karanlık Mod" ? "Aydınlık Mod" : "Karanlık Mod");
    setBackGroundColor(backGroundColor === "#faebd7" ? "#a9a9a9" : "#faebd7");
  }

  return (
    <div>
      <button onClick={ChangeBackgroundFunction} style={{ backgroundColor: backGroundColor }}>
        {ChangeButtonName}
      </button>
    </div>
  );
}

export default ToggleButton;
