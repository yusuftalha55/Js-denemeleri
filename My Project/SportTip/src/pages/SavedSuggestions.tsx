import React, { useContext, useState } from "react";
import { ChangeBackGroundColor, SavedInformations } from "../DarkModeToggleButton";
import SavePage from "../save";
import { DataItem } from "../data";


const Root: React.FC<{ data: DataItem }> = (props) => {
  
  const { BackGroundColor, setBackGroundColor } = useContext(ChangeBackGroundColor);
  const [savedData, setSavedData] = useState<DataItem[]>([]);
  const { savedCurrentData, setSavedCurrentData} = useContext(SavedInformations);

  function changeButton() {
    const newColor = BackGroundColor === "#faebd7" ? "#404040" : "#faebd7";
    document.body.style.backgroundColor = newColor;
    setBackGroundColor(newColor);
  }

 

  return (
    <div style={{ backgroundColor: BackGroundColor }}>
      
      <div>
        <div className="containerSaved">
         <h3>{savedCurrentData}</h3>
        </div>
      </div>
      <div className="active">
        <button
          onClick={changeButton}
          style={{
            height: 50,
            borderRadius: 15,
            boxShadow: "5px 3px 15px rgba(209, 1, 1, 0.5)",
            fontSize: 15,
            fontWeight: "bold",
            marginLeft:15,
          }}
        >
          Change Background Color
        </button>
      </div>
    </div>
  );
}

export default Root;
