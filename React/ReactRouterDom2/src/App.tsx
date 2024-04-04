// import { Routes, Route, NavLink } from "react-router-dom";
// import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Blog from "./pages/Blog";
import { ChangeBackGroundColor } from "./globalState";
import { useState } from "react";
import Link from "next/link";

function App() {
  const [BackGroundColor, setBackGroundColor] = useState("#faebd7");

  return (
    <ChangeBackGroundColor.Provider
      value={{ BackGroundColor, setBackGroundColor }}
    >
      <div style={{ backgroundColor }}>
        <h1>Sayfa adları</h1>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/blog">Blog</Link>
      </div>

      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes> */}
    </ChangeBackGroundColor.Provider>
  );
}

export default App;
