import React, { useState } from "react";
import "./App.css";

function Square({ onClick, value }) {
  return (
    <button className="kare" onClick={onClick}>
      {value}
    </button>
  );
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [whichPlayer, setWhichPlayer] = useState(0);

  const handleClick = (i) => {
    if (squares[i] === null) {
      const newSquares = squares.slice();
      newSquares[i] = whichPlayer === 0 ? "X" : "O";
      setSquares(newSquares);
      setWhichPlayer((prevPlayer) => (prevPlayer === 0 ? 1 : 0));
    }
  };

  return (
    <div>
      <div className="main">
        <div className="title">
          <h1>Tic Tac Toe Game</h1>
        </div>
        <div className="game">
          <h3>Next Player: {whichPlayer}</h3>
          <div className="boardRow">
            {squares.map((square, i) => (
              <Square key={i} value={square} onClick={() => handleClick(i)} />
            ))}
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

