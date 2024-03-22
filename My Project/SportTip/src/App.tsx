import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import DataPage from "./data";
import Root from "./pages/SavedSuggestions";
import { ChangeBackGroundColor } from "./DarkModeToggleButton";
import { SavedInformations } from "./DarkModeToggleButton";
import { MainSavedData } from "./DarkModeToggleButton";

function App() {
  const [BackGroundColor, setBackGroundColor] = useState("#faebd7");
  const [savedCurrentData, setSavedCurrentData] = useState();
  const [savedData, setSavedData] = useState();

  return (
    <ChangeBackGroundColor.Provider
      value={{ BackGroundColor, setBackGroundColor }}
    >
      <MainSavedData.Provider value={{ savedData, setSavedData }}>
        <SavedInformations.Provider value={(savedCurrentData, setSavedCurrentData)}>
          <nav>
            <NavLink className="navlinkHome" to="/">
              Ana Sayfa
            </NavLink>
            <NavLink className="navlinkContact" to="/save">
              Kaydedilenler
            </NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<DataPage />} />
            <Route path="/save" element={<Root />} />
          </Routes>
        </SavedInformations.Provider>
      </MainSavedData.Provider>
    </ChangeBackGroundColor.Provider>
  );
}

export default App;
