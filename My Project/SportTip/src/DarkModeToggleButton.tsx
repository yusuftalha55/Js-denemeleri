// DarkModeToggleButton.tsx

import React from 'react';
import { useDarkMode } from './DarkModeContext';

const DarkModeToggleButton: React.FC = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Aydınlık Mod' : 'Koyu Mod'}
    </button>
  );
};

export default DarkModeToggleButton;
