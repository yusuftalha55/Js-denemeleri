import React, { createContext, useContext, useState } from 'react';
import './App.css';

// Context'i oluştur
const ThemeContext = createContext();

// Tema sağlayıcısı bileşeni
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// Dark mode / light mode geçiş düğmesi bileşeni
const ToggleButton = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

// Ana uygulama bileşeni
const App = () => {
  return (
    <ThemeProvider>
      <header>
        <h1>Dark Mode / Light Mode Toggle</h1>
        <ToggleButton />
      </header>
      <main>
        <p>This is a simple website with dark mode and light mode toggle.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, justo sit amet pulvinar
          vehicula, enim quam sollicitudin lectus, ac cursus nisi mi et nunc.
        </p>
        <p>
          Vestibulum efficitur eros sit amet ipsum malesuada, et vehicula leo convallis. Pellentesque scelerisque
          scelerisque consectetur. Integer hendrerit justo at ipsum tincidunt, sed tempor odio fermentum.
        </p>
      </main>
      <footer>
        <p>&copy; 2024 Simple Website</p>
      </footer>
    </ThemeProvider>
  );
}

export default App;



