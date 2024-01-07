import { useState } from "react";
import Square from "./square";

import "./App.css";

function App() {
  const playerX = "X";
  const playerO = "O";

  const [whichPlayer, setWhichPlayer] = useState(playerX);

  function squareClick() {

  }

  return (
    <div>
      <div className="main">
        <div className="title">
          <h1>Tic Tac Toe Game</h1>
        </div>
        <div className="Game">
          <div className="whichPlayerClass">
            <h3>Next Player: {}</h3>
          </div>
          <div className="gameBoard">
            <div className="boardRow">
              <Square value={whichPlayer} />
              <Square value={whichPlayer} />
              <Square value={whichPlayer} />
            </div>
            <div className="boardRow">
              <Square value={whichPlayer} />
              <Square value={whichPlayer} />
              <Square value={whichPlayer} />
            </div>
            <div className="boardRow">
              <Square value={whichPlayer} />
              <Square value={whichPlayer} />
              <Square value={whichPlayer} />
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
