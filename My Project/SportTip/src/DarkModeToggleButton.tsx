import React, { useState } from 'react';

const ToggleButton: React.FC = () => {
  const [backGroundColor, setBackGroundColor] = useState("#faebd7");
  const [ChangeButtonName, setChangeButtonName] = useState("Aydınlık Mod");

  function ChangeBackgroundFunction() {
    setChangeButtonName(ChangeButtonName === "Karanlık Mod" ? "Aydınlık Mod" : "Karanlık Mod");
    setBackGroundColor(backGroundColor === "#faebd7" ? "#212121" : "#faebd7");
  }

  return (
    <div>
      <button onClick={ChangeBackgroundFunction} style={{ backgroundColor: backGroundColor, color: 'blue' }}>
        {ChangeButtonName}
      </button>
    </div>
  );
}

export default ToggleButton;
