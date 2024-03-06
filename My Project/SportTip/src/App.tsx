// App.tsx
import { useState } from "react";
import './App.css';
import DataPage from './data';
import { ChangeBackGroundColor } from './DarkModeToggleButton';

function App() {
  const [backGroundColor, setBackGroundColor] = useState("#faebd7");

  function changeButton() {
    if (backGroundColor === "#faebd7") {
      setBackGroundColor("#404040");
    } else {
      setBackGroundColor("#faebd7");
    }
  }
  return (
    <ChangeBackGroundColor.Provider
      value={{ backGroundColor, setBackGroundColor }}
    >
      <div className='main' style={{ backgroundColor: backGroundColor }}>
        <DataPage/>
        <div>
          <button onClick={changeButton}>Toggle Dark Mode</button>
        </div>
      </div>
      </ChangeBackGroundColor.Provider>
  );
}

export default App;

