import { useState } from "react";
import { createContext } from "react";

export const DarkModeContext = createContext();
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState("#000000");
  return (
    <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </DarkModeContext.Provider>
  );
};