import { useEffect, useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import DataPage from "./data";
import { ChangeBackGroundColor } from "./DarkModeToggleButton";
import Root from "./pages/Root";

function App() {
  const [backGroundColor, setBackGroundColor] = useState("#faebd7");
  const [ChangeButtonName, setChangeButtonName] = useState("Aydınlık Mod");
  const [textColor, setTextColor] = useState("black");

  useEffect(() => {
    document.body.style.setProperty("--background-color", backGroundColor);
  }, [backGroundColor]);

  function changeButton() {
    setChangeButtonName(
      ChangeButtonName === "Karanlık Mod" ? "Aydınlık Mod" : "Karanlık Mod"
    );
    setBackGroundColor(backGroundColor === "#faebd7" ? "#404040" : "#faebd7");
    setTextColor(textColor === "black" ? "white" : "black");
  }
  return (
    <ChangeBackGroundColor.Provider
      value={{ backGroundColor, setBackGroundColor }}
    >
      <div className="navbar">
        <nav>
          <NavLink to="/root">Kaydedilen Öneriler</NavLink>
        </nav>

        <Routes>
          <Route path="/root" element={<Root />} />
        </Routes>
      </div>
      <div className="main" style={{ backgroundColor: backGroundColor }}>
        <DataPage />
        <div>
          <button
            onClick={changeButton}
            style={{
              backgroundColor: backGroundColor,
              color: textColor,
              height: 50,
              borderRadius: 15,
              boxShadow: "5px 3px 15px rgba(209, 1, 1, 0.5)",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            Toggle Dark Mode
          </button>
        </div>
      </div>
    </ChangeBackGroundColor.Provider>
  );
}

export default App;
