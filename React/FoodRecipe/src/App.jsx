import { useState } from 'react'
import './App.css'
import ContainerDrinks from './ContainerDrinks'
import ContainerBreakfast from './ContainerBreakfast'
import ContainerDinner from './ContainerDinner'

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
        <ContainerDinner></ContainerDinner>
        
      </div>
    </div>
  
  )
}

export default App
