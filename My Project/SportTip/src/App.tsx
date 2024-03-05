// App.tsx
import React from 'react';
import './App.css';
import DataPage from './data';
import ThemeProvider from './ToggleButton'; // ThemeProvider'ı doğru şekilde import edin

function App() {
  return (
    <ThemeProvider> {/* ThemeProvider'ı burada kullanın */}
      <div className='main'>
        <DataPage/>
        {/* <ToggleDarkModeButton/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;

