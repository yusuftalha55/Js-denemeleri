import React, { useContext } from "react";
import { ChangeBackGroundColor } from "../globalState";

export default function Home() {
  const { BackGroundColor, setBackGroundColor } = useContext(ChangeBackGroundColor);

  function changeButton() {
    if (BackGroundColor === "#faebd7") {
      setBackGroundColor("#404040");
    } else {
      setBackGroundColor("#faebd7");
    }
  }
  return (
    <div style={{ backgroundColor: BackGroundColor }}>
      <div className="title">
        <h1>Home Page</h1>
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
          }}
        >
          Change Background Color
        </button>
      </div>
    </div>
  );
}
