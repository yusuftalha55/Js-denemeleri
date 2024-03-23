import React, { useContext, useState } from "react";
import { ChangeBackGroundColor, SavedInformations } from "../DarkModeToggleButton";
import { DataItem } from "../data";
import { MainSavedData } from "../DarkModeToggleButton";


const Root: React.FC<{ data: DataItem }> = (props) => {
  
  const { BackGroundColor, setBackGroundColor } = useContext(ChangeBackGroundColor);
  const { savedData, setSavedData} = useContext(MainSavedData);
  

  function changeButton() {
    const newColor = BackGroundColor === "#faebd7" ? "#404040" : "#faebd7";
    document.body.style.backgroundColor = newColor;
    setBackGroundColor(newColor);
  }

 

  return (
    <div style={{ backgroundColor: BackGroundColor }}>
      
      <div>
        <div className="containerSaved">
        <div>
          {savedData.map((item, index) => (
            <p key={index}>
              <h3>{item.id}: {item.title}</h3>
              <p>{item.description}</p>
            </p>
          ))}
        </div>
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
