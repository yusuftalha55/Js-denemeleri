import React from 'react';
import './App.css';

function Square({ value }) {
  
   
  function handleClick() {
    console.log(`Tıklandı! Değer: ${value}`);
  }

  return (
    <button className="kare" onClick={handleClick}>
      
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
            <Square value="1" />
            <Square value="2" />
            <Square value="3" />
          </div>
          <div className="boardRow">
            <Square value="4" />
            <Square value="5" />
            <Square value="6" />
          </div>
          <div className="boardRow">
            <Square value="7" />
            <Square value="8" />
            <Square value="9" />
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