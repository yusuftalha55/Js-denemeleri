// import React, { createContext, useContext, useState } from 'react';

// const ThemeContext = createContext();

// export const useTheme = () => {
//   return useContext(ThemeContext);
// };

// export const ThemeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setDarkMode(prevMode => !prevMode);
//   };

//   const backgroundColor = darkMode ? "#404040" : "#faebd7";

//   return (
//     <ThemeContext.Provider value={{ darkMode, toggleTheme, backgroundColor }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeContext;
