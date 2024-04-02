import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import DataPage from "./data";
import Root from "./SavedSuggestions";
import { ChangeBackGroundColor } from "./DarkModeToggleButton";
import { SavedInformations, MainSavedData } from "./DarkModeToggleButton";
import { DataItem } from "./data";

function App() {
  const [BackGroundColor, setBackGroundColor] = useState("#D1DBBD");
  const [savedCurrentData, setSavedCurrentData] = useState();
  const [savedData, setSavedData] = useState<DataItem[]>([]);

  return (
    <ChangeBackGroundColor.Provider value={{ BackGroundColor, setBackGroundColor }}>
      <MainSavedData.Provider value={{ savedData, setSavedData }}>
        <SavedInformations.Provider value={{ savedCurrentData, setSavedCurrentData }}>
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

