import { useState } from "react";
import Square from "./square";

import "./App.css";

function App() {
  return (
    <div >
      <div className="main">
        <div className="title">
          <h1>Tic Tac Toe Game</h1>
        </div>
        <div className="Game">
          <div className="whichPlayer">
            <h3>Next Player</h3>
          </div>
          <div className="gameBoard">
            <div className="boardRow"> 
               <Square/>
               <Square/>
               <Square/>
            </div>
            <div className="boardRow"> 
               <Square/>
               <Square/>
               <Square/>
            </div>
            <div className="boardRow"> 
               <Square/>
               <Square/>
               <Square/>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
