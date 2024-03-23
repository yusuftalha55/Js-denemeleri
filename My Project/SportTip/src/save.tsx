import React, { useState, useContext } from "react";
import "./App.css";
import { DataItem } from "./data";
import { MainSavedData } from "./DarkModeToggleButton";

const SavePage: React.FC<{ data: DataItem }> = (props) => {
  const { savedData, setSavedData} = useContext(MainSavedData);
  // const [savedData, setSavedData] = useState<DataItem[]>([]);
  

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
      <div>
        <h1>Kaydedilen Veriler:</h1>
        <ul>
          {savedData.map((item, index) => (
            <h3 key={index}>
              {item.id}: {item.title}
              <p>{item.description}</p>
            </h3>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SavePage;
