// App.tsx
import { useState } from "react";
import './App.css';
import DataPage from './data';
import { ChangeBackGroundColor } from './DarkModeToggleButton';

function App() {
  const [backGroundColor, setBackGroundColor] = useState("#faebd7");
  const [ChangeButtonName, setChangeButtonName] = useState("Aydınlık Mod");
  const [textColor ,setTextColor] = useState("black");

  function changeButton() {
    setChangeButtonName(ChangeButtonName === "Karanlık Mod" ? "Aydınlık Mod" : "Karanlık Mod");
    setBackGroundColor(backGroundColor === "#faebd7" ? "#404040" : "#faebd7");
    setTextColor(textColor === "black" ? "white" : "black" );
  }
  return (
    <ChangeBackGroundColor.Provider
      value={{ backGroundColor, setBackGroundColor }}
    >
      <div className='main' style={{ backgroundColor: backGroundColor }}>
        <DataPage/>
        <div>
          <button onClick={changeButton}  style={{ backgroundColor: backGroundColor, color: textColor, height:50, borderRadius:15, boxShadow: "5px 3px 15px rgba(209, 1, 1, 0.5)", fontSize:15, fontWeight:"bold" }}>Toggle Dark Mode</button>
        </div>
      </div>
      </ChangeBackGroundColor.Provider>
  );
}

export default App;

