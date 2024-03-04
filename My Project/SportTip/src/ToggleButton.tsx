import React, { Children, createContext, useContext, useState} from 'react';
import './App.css'

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
      <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

