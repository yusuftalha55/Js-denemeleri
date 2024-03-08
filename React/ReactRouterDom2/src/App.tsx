import { Routes, Route, Link, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blog" element={<Blog/>}/>
    </Routes>
  )
}

export default App
