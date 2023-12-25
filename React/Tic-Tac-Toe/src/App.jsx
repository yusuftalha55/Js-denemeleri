import { useState } from 'react'
import './App.css'

function App() {
  const Square = () => {
    return (
      <button className="square">1</button>
    )
  }






  return (
    <div>
      <div className='main'>
        <div className='title'>
          <h1>Tic Tac Toe Game</h1>
        </div>
        <div className='game'>
          <h3>Next Player: {}</h3>
          <div className='boardRow'>
            <Square></Square>
            <Square></Square>
            <Square></Square>
          </div>
          <div className='boardRow'>
            <Square></Square>
            <Square></Square>
            <Square></Square>
          </div>
          <div className='boardRow'>
            <Square></Square>
            <Square></Square>
            <Square></Square>
          </div>

          <div className='score'>
            <h2>Winning Player: {}</h2> 

          </div>

          


        </div>

      </div>
    </div>
  )

}

export default App
