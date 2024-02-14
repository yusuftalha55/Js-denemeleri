import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="title">
        <h1>Let’s check you in</h1>
      </div>
      <div className="inputArea">
        <div>
          <p className="pClass">Fİrst Name:</p>
          <input type="text" />
        </div>
        <div>
          <p className="pClass">Last Name:</p>
          <input className="input" type="text" />
        </div>
      </div>
      <div className="resultArea">
        <p>Your ticket will be issued to: {}</p>
      </div>
    </div>
  );
}

export default App;
