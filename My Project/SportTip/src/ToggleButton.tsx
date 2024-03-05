import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(); // ThemeContext'i export ettiğinizden emin olun

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

export default ThemeProvider;

