import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="title">
        <h1>City Quiz</h1>
      </div>
      <div className="question">
        <p>
          In which city is there a billboard that turns air into drinkable
          water?
        </p>
      </div>
      <div className="inputArea">
        <textarea />
      </div>
      <div className="submitButton">
        <button style={{ margin: 15 }}>Submit</button>
      </div>
    </div>
  );
}

export default App;
