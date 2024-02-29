import { useState } from "react";
import { createContext } from "react";

export const DarkModeContext = createContext();
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState("#faebd7");
  return (
    <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </DarkModeContext.Provider>
  );
};