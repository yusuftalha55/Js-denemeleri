import React, { createContext, useState } from 'react';

// Context oluşturma
export const textContext = createContext({});

// Provider bileşeni
export const TextProvider = ({ children }) => {
  const [changeTextContext, setChangeTextContext] = useState("Initial Text");

  return (
    <textContext.Provider value={{ changeTextContext, setChangeTextContext }}>
      {children}
    </textContext.Provider>
  );
};
