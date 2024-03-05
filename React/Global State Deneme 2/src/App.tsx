import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { GlobalStateProvider, useGlobalContext } from './globalState';

function ColorChanger() {
  const { backgroundColor, changeBackgroundColor } = useGlobalContext();

  return (
    <div style={{ backgroundColor }}>
      <h2>Background Color: {backgroundColor}</h2>
      <button onClick={() => changeBackgroundColor("#404040")}>Change to Gray</button>
      <button onClick={() => changeBackgroundColor("#faebd7")}>Change to Default</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <GlobalStateProvider>
      <div className="App" style={{backgroundColor:"backgroundColor"}}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <ColorChanger />
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </GlobalStateProvider>
  );
}

export default App;

