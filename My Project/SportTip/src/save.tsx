import React, { useState, useContext } from "react";
import "./App.css";
import { DataItem } from "./data";
import { MainSavedData } from "./DarkModeToggleButton";

const SavePage: React.FC<{ data: DataItem }> = (props) => {
  const { savedData, setSavedData} = useContext(MainSavedData);
  

  function dataSave() {
    setSavedData([...savedData, props.data]);
  }

  return (
    <div>
      <div className="saveButton">
        <button onClick={dataSave} className="save-button">
          Kaydet {props.data.id}
        </button>
      </div>
    </div>
  );
};

export default SavePage;
