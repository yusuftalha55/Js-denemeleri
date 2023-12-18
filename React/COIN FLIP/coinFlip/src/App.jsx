import { useState } from 'react'
import './App.css'

function App() {
  return(
    <div className='main'>
      <div className='title'>
        <h2>Hadi Yazı Tura Atalım</h2>
      </div>
      <div className='image'>
        <img src="src\assets\img\1TL_obverse.png" alt="para gösterilemedi" />
      </div>
      <div className='button'>
        <button>Bas ve Gör</button>
      </div>
      <div className='result'>
        <p>{}  kere yazı tura atıldı, {} kere yazı geldi, {} kere tura geldi.</p>

      </div>

    </div>
  )
}

export default App
