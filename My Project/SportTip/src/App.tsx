// App.tsx

import React from 'react';
import './App.css';
import DataPage from './data';
import { DarkModeProvider } from './DarkModeContext';
import DarkModeToggleButton from './DarkModeToggleButton'; // Koyu modu açıp kapatan düğmeyi içe aktarın

function App() {
  return (
    <DarkModeProvider>
      <div className='main'>
        <DataPage />
        <DarkModeToggleButton />
      </div>
    </DarkModeProvider>
  );
}

export default App;
