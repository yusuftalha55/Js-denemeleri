import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import DataPage from "./data";
import Root from "./pages/SavedSuggestions";
import { ChangeBackGroundColor } from "./DarkModeToggleButton";

function App() {

  const [BackGroundColor, setBackGroundColor] = useState("#faebd7");

  return (
    <ChangeBackGroundColor.Provider value={{ BackGroundColor, setBackGroundColor }}>
      <nav>
        <NavLink className="navlinkHome" to="/">Ana Sayfa</NavLink>
        <NavLink className="navlinkContact" to="/save">Kaydedilenler</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<DataPage />} />
        <Route path="/save" element={<Root />} />
      </Routes>
    </ChangeBackGroundColor.Provider>
  );
}

export default App;