import React, {useState} from 'react';
import './App.css';

function Square({ value }) {
  const [whichPlayer, setWhichPlayer] = useState("X");
  const [value, setvalue] = useState("");

  
   
  function handleClick() {
    if (whichPlayer === "X") {
      setWhichPlayer("O")
    }
    else{
      setWhichPlayer("X")
    }
  }
  

  return (
    <button className="kare" onClick={handleClick}>
      {value}     
    </button>
  );
}
function App() {
  return (
    <div>
      <div className="main">
        <div className="title">
          <h1>Tic Tac Toe Game</h1>
        </div>
        <div className="game">
          <h3>Next Player: {}</h3>
          <div className="boardRow">
            <Square value="" />
            <Square value="" />
            <Square value="" />
          </div>
          <div className="boardRow">
            <Square value="" />
            <Square value="" />
            <Square value="" />
          </div>
          <div className="boardRow">
            <Square value="" />
            <Square value="" />
            <Square value="" />
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