import React, { useContext, useState } from "react";
import {
  ChangeBackGroundColor,
  SavedInformations,
} from "./DarkModeToggleButton";
import { DataItem } from "./data";
import { MainSavedData } from "./DarkModeToggleButton";
import "./App.css";

const Root: React.FC<{ data: DataItem }> = (props) => {
  const { BackGroundColor, setBackGroundColor } = useContext(
    ChangeBackGroundColor
  );
  const { savedData, setSavedData } = useContext(MainSavedData);

  function changeButton() {
    const newColor = BackGroundColor === "#D1DBBD" ? "#193441" : "#D1DBBD";
    document.body.style.backgroundColor = newColor;
    setBackGroundColor(newColor);
  }
  function DeleteToSavedData(indexToDelete) {
    const updatedData = [...savedData];
    updatedData.splice(indexToDelete, 1);
    setSavedData(updatedData);
  }
  

  return (
    <div style={{ backgroundColor: BackGroundColor }}>
      <div>
        <div className="containerSaved">
          {savedData.map((item, index) => (
            <div key={index} className="containerItem">
              <h3>
                {item.id}: {item.title}
              </h3>
              <p>{item.description}</p>
              <div className="deleteButtonMain">
                <button className="deleteButton" onClick={() => DeleteToSavedData(index)}
                >
                  Kaydedileni sil
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="active">
        <button className="backgroundColorButton"
          onClick={changeButton}
        >
          Change Background Color
        </button>
      </div>
    </div>
  );
};

export default Root;
