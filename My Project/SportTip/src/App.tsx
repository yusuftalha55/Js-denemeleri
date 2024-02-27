import { useState } from 'react'
import './App.css'
import DataPage from './data'

function App() {
  return (
    <div className='main'>
      {/* Örnek bir title ve description props'u ile DataPage bileşenini çağırın */}
      <DataPage 
        title="Antrenman" 
        description="Spor yaparken, doğaya çıkın ve açık havada egzersiz yapın. Doğa yürüyüşleri, bisiklet sürme veya dağ tırmanışı gibi aktiviteler size zihinsel ve fiziksel olarak fayda sağlar." 
      />
    </div>
  );
}

export default App;
