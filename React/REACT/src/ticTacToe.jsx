import React, { useState } from "react";

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "x";
    }
    else {
      nextSquares[i] = "0";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner) {
    status = "winner: " + winner;
  }
  else {
    status = "next player: " + (xIsNext ? "x" : "0");
  }

  return (
    <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick = {() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick = {() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick = {() => handleClick(2)} />
        </div>
        <div className="board-row">
        <Square value={squares[3]} onSquareClick = {() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick = {() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick = {() => handleClick(5)} />
        </div>
        <div className="board-row">
        <Square value={squares[6]} onSquareClick = {() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick = {() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick = {() => handleClick(8)} />
        </div>


    </div>
  );
}

export default function Game(){
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
}
