import { useState } from 'react'
import './App.css'

function App() {
  const [flipNumber, setFlipNumber] = useState(0);
  const [yaziNumber, setYaziNumber] = useState(0);
  const [turaNumber, setTuraNumber] = useState(0);




  const flipClick = () => {

  }
  return(
    <div className='main'>
      <div className='title'>
        <h2>Hadi Yazı Tura Atalım</h2>
      </div>
      <div className='image'>
        <img src="src\assets\img\1TL_obverse.png" alt="para gösterilemedi" />
      </div>
      <div className='button'>
        <button onClick={flipClick}>Bas ve Gör</button>
      </div>
      <div className='result'>
        <p>{flipNumber}  kere yazı tura atıldı, {yaziNumber} kere yazı geldi, {turaNumber} kere tura geldi.</p>

      </div>

    </div>
  )
}

export default App
