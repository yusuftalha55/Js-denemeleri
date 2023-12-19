import { useState } from 'react';
import './App.css';

function App() {
  const [flipNumber, setFlipNumber] = useState(0);
  const [yaziNumber, setYaziNumber] = useState(0);
  const [turaNumber, setTuraNumber] = useState(0);
  const [coinSide, setCoinSide] = useState();
  const [image, setImage] = useState('src/assets/img/1TL_reverse.png');

  const flipClick = () => {
    const binaryValue = Math.round(Math.random());
    setCoinSide(binaryValue);

    if (binaryValue === 1) {
      setYaziNumber((prevYaziNumber) => prevYaziNumber + 1);
      setImage('src/assets/img/1TL_obverse.png');
    } else {
      setTuraNumber((prevTuraNumber) => prevTuraNumber + 1);
      setImage('src/assets/img/1TL_reverse.png');
    }

    setFlipNumber((prevFlipNumber) => prevFlipNumber + 1);
  };

  return (
    <div className='main'>
      <div className='title'>
        <h2>Hadi Yazı Tura Atalım</h2>
      </div>
      <div className='image'>
        <img src={image} alt='para gösterilemedi' />
      </div>
      <div className='button'>
        <button onClick={flipClick}>Bas ve Gör</button>
      </div>
      <div className='result'>
        <p>
          {flipNumber} kere yazı tura atıldı, {yaziNumber} kere yazı geldi, {turaNumber} kere tura geldi.
        </p>
      </div>
    </div>
  );
}

export default App;
