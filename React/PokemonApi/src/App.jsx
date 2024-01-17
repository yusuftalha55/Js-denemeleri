import { useState } from "react";
import "./App.css";
import Pokemon from "./poke";

function App() {
  
  return (
    <>
      <div className="main">
        <div className="title">
          <h1>Pokemon Api</h1>
        </div>
        <div className="content">
          <Pokemon></Pokemon>
        </div>
      </div>
    </>
  );
}

export default App;
