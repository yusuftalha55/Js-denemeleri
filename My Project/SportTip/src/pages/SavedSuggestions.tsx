import React, { useContext } from "react";
import { ChangeBackGroundColor } from "../DarkModeToggleButton";
import SavePage from "../save";


export default function Root() {
  
  const { BackGroundColor, setBackGroundColor } = useContext(ChangeBackGroundColor);

  function changeButton() {
    const newColor = BackGroundColor === "#faebd7" ? "#404040" : "#faebd7";
    document.body.style.backgroundColor = newColor;
    setBackGroundColor(newColor);
  }

 

  return (
    <div style={{ backgroundColor: BackGroundColor }}>
      
      {/* <div key={currentData.id}>
        <div className="container">
          <h2>{currentData.title}</h2>
          <p>{currentData.description}</p>
        </div>
      </div> */}
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
