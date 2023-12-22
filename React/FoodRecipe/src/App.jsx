import { useState } from 'react'
import './App.css'
import ContainerDrinks from './ContainerDrinks'
import ContainerBreakfast from './ContainerBreakfast'

function App() {
  

  return (
    <div>
      <div className='search'>
        <input className='input' type="text" />
        <button className='button'>Ara</button>
      </div>
      <div className='containers'>
        <ContainerBreakfast></ContainerBreakfast>
        <ContainerDrinks></ContainerDrinks>
        
      </div>
    </div>
  
  )
}

export default App
