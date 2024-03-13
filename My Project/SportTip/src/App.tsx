import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import DataPage from "./data";
import Root from "./pages/Root";
import { ChangeBackGroundColor } from "./DarkModeToggleButton";

function App() {

  const [BackGroundColor, setBackGroundColor] = useState("#faebd7");

  return (
    <ChangeBackGroundColor.Provider value={{ BackGroundColor, setBackGroundColor }}>
      <nav>
        <NavLink className="navlinkHome" to="/">Home</NavLink>
        <NavLink className="navlinkContact" to="/contact">Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<DataPage />} />
        <Route path="/contact" element={<Root />} />
      </Routes>
    </ChangeBackGroundColor.Provider>
  );
}

export default App;