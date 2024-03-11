import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import { ChangeBackGroundColor } from "./globalState";
import { useState } from "react";

function App() {

  const [BackGroundColor, setBackGroundColor] = useState("#faebd7");

  return (
    <ChangeBackGroundColor.Provider value={{ BackGroundColor, setBackGroundColor }}>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </ChangeBackGroundColor.Provider>
  );
}

export default App;
