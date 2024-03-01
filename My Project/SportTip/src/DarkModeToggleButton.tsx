import React, { useState } from 'react';

const ToggleButton: React.FC = () => {
  const [backGroundColor, setBackGroundColor] = useState("#faebd7");
  const [ChangeButtonName, setChangeButtonName] = useState("Karanlıık Mod");

  function ChangeBackgroundFunction () {
    setChangeButtonName("Aydınlık Mod");
    setBackGroundColor("#a9a9a9");
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
