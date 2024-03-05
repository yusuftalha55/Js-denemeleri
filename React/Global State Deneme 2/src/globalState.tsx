import React, { createContext, useContext, useState } from 'react';

// Bir context oluşturuluyor
const GlobalContext = createContext();

// Context içerisinde kullanılacak bileşenlerin sağlanması
export const useGlobalContext = () => useContext(GlobalContext);

// GlobalStateProvider bileşeni, tüm uygulamaya global state sağlar
export const GlobalStateProvider = ({ children }) => {
  const [backgroundColor, setBackgroundColor] = useState("#faebd7");

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  // Değerlerin sağlanması
  const value = {
    backgroundColor,
    changeBackgroundColor
  };

  // Global context sağlanıyor
  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

