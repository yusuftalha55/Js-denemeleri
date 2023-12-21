import { useState } from 'react'
import './App.css'
import Container from './Container'

function App() {
  

  return (
    <div>
      <div className='search'>
        <input className='input' type="text" />
        <button className='button'>Ara</button>
      </div>
      <div className='containers'>
        <Container></Container>
        <Container></Container>
        <Container></Container>
        <Container></Container>
        <Container></Container>
        <Container></Container>
      </div>
    </div>
  
  )
}

export default App
