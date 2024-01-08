// App.jsx
import React, { useState } from "react";
import Square from "./Square";
import "./App.css";

function App() {
  const playerX = "X";
  const playerO = "O";

  const [whichPlayer, setWhichPlayer] = useState(playerX);

  function squareClick(setValue) {
    if (whichPlayer === playerX) {
      setWhichPlayer(playerO);
      setValue(playerX);
    } else if (whichPlayer === playerO) {
      setWhichPlayer(playerX);
      setValue(playerO);
    }
  }

  return (
    <div style={{}}>
      <div className="main">
        <div className="title">
          <h1>Tic Tac Toe Game</h1>
        </div>
        <div className="Game">
          <div className="whichPlayerClass">
            <h3>Next Player: {whichPlayer}</h3>
          </div>
          <div className="gameBoard">
            <div className="boardRow">
              <Square onClick={(value) => squareClick(value)} />
              <Square onClick={(value) => squareClick(value)} />
              <Square onClick={(value) => squareClick(value)} />
            </div>
            <div className="boardRow">
              <Square onClick={(value) => squareClick(value)} />
              <Square onClick={(value) => squareClick(value)} />
              <Square onClick={(value) => squareClick(value)} />
            </div>
            <div className="boardRow">
              <Square onClick={(value) => squareClick(value)} />
              <Square onClick={(value) => squareClick(value)} />
              <Square onClick={(value) => squareClick(value)} />
            </div>
          </div>

          <div className="winning player">
            <h3>Winning Player: {}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
