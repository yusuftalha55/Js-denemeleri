import React, { createContext, useState } from "react";

export const textContext = createContext({});

export const TextProvider = ({ children }) => {
  const [changeTextContext, setChangeTextContext] = useState("Initial Text");

  return (
    <textContext.Provider value={{ changeTextContext, setChangeTextContext }}>
      {children}
    </textContext.Provider>
  );
};
