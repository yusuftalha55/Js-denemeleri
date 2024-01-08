// App.jsx
import React, { useState } from "react"; // useState'i React'ten içe aktar

import Square from "./square";
import "./App.css";

function App() {
  const playerX = "X";
  const playerO = "O";

  const [whichPlayer, setWhichPlayer] = useState(playerX);

  function squareClick() {
    if (whichPlayer === playerX) {
      setWhichPlayer(playerO);
    } else if (whichPlayer === playerO) {
      setWhichPlayer(playerX);
    }
  }

  return (
    <div>
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
              <Square value={playerX} onClick={squareClick} />
              <Square value={playerO} onClick={squareClick} />
              <Square value={playerX} onClick={squareClick} />
            </div>
            <div className="boardRow">
              <Square value={playerO} onClick={squareClick} />
              <Square value={playerX} onClick={squareClick} />
              <Square value={playerO} onClick={squareClick} />
            </div>
            <div className="boardRow">
              <Square value={playerX} onClick={squareClick} />
              <Square value={playerO} onClick={squareClick} />
              <Square value={playerX} onClick={squareClick} />
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

