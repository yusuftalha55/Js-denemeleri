import React, { useState } from "react";
import "./App.css";
import { DataItem } from "./data";

const SavePage: React.FC<{ data: DataItem }> = (props) => {
  const [savedData, setSavedData] = useState<DataItem[]>([]);

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
            <li key={index}>
              {item.id}: {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SavePage;
