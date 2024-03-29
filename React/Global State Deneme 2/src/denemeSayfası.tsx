import { useState } from "react";
import { ChangeBackGroundColor } from "./globalState";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Deneme() {
  const [count, setCount] = useState(0);
  const [backGroundColor, setBackGroundColor] = useState("#faebd7");

  function changeButton() {
    if (backGroundColor === "#faebd7") {
      setBackGroundColor("#404040");
    } else {
      setBackGroundColor("#faebd7");
    }
  }

  return (
    <ChangeBackGroundColor.Provider value={{ backGroundColor, setBackGroundColor }}>
      <div style={{ backgroundColor: backGroundColor }}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Deneme</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <div>
          <button onClick={changeButton}>Toggle Dark Mode</button>
        </div>
      </div>
    </ChangeBackGroundColor.Provider>
  );
}

export default Deneme;
