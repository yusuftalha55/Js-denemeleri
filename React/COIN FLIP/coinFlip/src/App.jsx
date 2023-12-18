import { useState } from 'react'
import './App.css'

function App() {
  return(
    <div className='main'>
      <div className='title'>
        <h2>Hadi Yazı Tura Atalım</h2>
      </div>
      <div className='image'>
        <img src="" alt="para gösterilemedi" />
      </div>
      <div className='button'>
        <h3>Bas ve Gör</h3>
      </div>
      <div className='result'>
        <p>{}  kere yazı tura atıldı, {} kere yazı geldi, {} kere tura geldi.</p>

      </div>

    </div>
  )
}

export default App
