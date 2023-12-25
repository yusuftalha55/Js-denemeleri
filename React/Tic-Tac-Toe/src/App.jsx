import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <div className='main'>
        <div className='title'>
          <h1>Tic Tac Toe Game</h1>
        </div>
        <div className='game'>
          <h3>Next Player: {}</h3>
          <div className='boardRow'>
            <button className="square">1</button>
            <button className="square">2</button>
            <button className="square">3</button>
          </div>
          <div className='boardRow'>
            <button className="square">4</button>
            <button className="square">5</button>
            <button className="square">6</button>
          </div>
          <div className='boardRow'>
            <button className="square">7</button>
            <button className="square">8</button>
            <button className="square">9</button>
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
