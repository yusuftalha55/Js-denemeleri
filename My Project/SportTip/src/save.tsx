import React, { useState } from "react";
import "./App.css";
import { DataItem } from "./data";

const SavePage: React.FC<{ data: DataItem }> = (props) => {
  const [savedData, setSavedData] = useState<DataItem[]>([]);


  function dataSave () {
    setSavedData([...savedData, props.data]);
  }

  return (
    <div>
      {/* Stil sınıfını className özelliği aracılığıyla belirtme */}
      <div className="saveButton">
        <button onClick={dataSave} className="save-button">Kaydet {props.data.id}</button>
      </div>
      <div>
        {/* Kaydedilen verilerin listesi */}
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

