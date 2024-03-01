import React from 'react';
import './App.css';
import DataPage from './data';
import ToggleButton from './DarkModeToggleButton';

function App() {
  return (
    
      <div className='main'>
        <DataPage/>
        <ToggleButton/>
      </div>
    
  );
}

export default App;
