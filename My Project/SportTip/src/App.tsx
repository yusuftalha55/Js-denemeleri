import React from 'react';
import './App.css';
import DataPage from './data';
import DarkModeToggleButton from './DarkModeToggleButton'; 

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
