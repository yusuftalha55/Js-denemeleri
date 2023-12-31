import React, { useState } from "react";
import "./App.css";

function App() {
  const [whichPlayer, setWhichPlayer] = useState(0);
  const [value, setValue] = useState("");

  
  function Square() {
    function handleClick() {
      console.log(whichPlayer);
      console.log(value);
      if (whichPlayer === 0 && value === "") {
        setValue("X");
        setWhichPlayer(1);
        console.log(whichPlayer);
      } else if (whichPlayer === 1 && value === "") {
        setValue("O");
        setWhichPlayer(0);
      }
    }

    return (
      <button className="kare" onClick={handleClick}>
        {value}
      </button>
    );
  }

  return (
    <div>
      <div className="main">
        <div className="title">
          <h1>Tic Tac Toe Game</h1>
        </div>
        <div className="game">
          <h3>Next Player: {}</h3>
          <div className="boardRow">
            <Square />
            <Square />
            <Square />
          </div>
          <div className="boardRow">
            <Square />
            <Square />
            <Square />
          </div>
          <div className="boardRow">
            <Square />
            <Square />
            <Square />
          </div>

          <div className="score">
            <h2>Winning Player: {}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
