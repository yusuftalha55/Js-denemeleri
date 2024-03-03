import React from 'react';
import { useTheme } from './ThemeContext';

const ToggleButton = () => {
  const { darkMode, toggleTheme, backgroundColor } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ backgroundColor: backgroundColor }}>
      {darkMode ? 'Aydınlık Mod' : 'Karanlık Mod'}
    </button>
  );
};

export default ToggleButton;
