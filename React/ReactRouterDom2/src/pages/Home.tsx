import React, { useContext } from "react";
import { ChangeBackGroundColor } from "../globalState";

export default function Home() {
  const { BackGroundColor, setBackGroundColor } = useContext(
    ChangeBackGroundColor
  );

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
        <button onClick={changeButton}>Change Background Color</button>
      </div>
    </div>
  );
}
