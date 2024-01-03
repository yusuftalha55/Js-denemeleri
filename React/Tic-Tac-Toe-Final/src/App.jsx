import { useState } from 'react'

function Square ({ value, onSquareClick}) {
  return (
    <button className='square' onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board ({ xIsNext, squares, onPlay}) {
  function handleClick (i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    }
    else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner" + winner;
  }
  else {
    status = " Next Player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className='status'>
        {status}
      </div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(0)} />
      </div>

      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(0)} />
      </div>

      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(0)} />
      </div>

    </div>
  );

}

export default function Game () {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay (nextSquares) {
    const nextHistory = [...history.slice(0, currentMove +1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo (nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let descripton;
    if (move > 0) {
      descripton = "Go to move #" + move;
    }
    else {
      descripton = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{descripton}</button>
      </li>
    );
  });




} 
