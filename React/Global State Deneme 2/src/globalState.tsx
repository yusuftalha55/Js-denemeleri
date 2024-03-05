import React, { createContext, useContext, useState } from 'react';

// Bir context oluşturuluyor
const GlobalContext = createContext();

// Context içerisinde kullanılacak bileşenlerin sağlanması
export const useGlobalContext = () => useContext(GlobalContext);

// GlobalStateProvider bileşeni, tüm uygulamaya global state sağlar
export const GlobalStateProvider = ({ children }) => {
  const [backGroundColor, setBackGroundColor] = useState("#faebd7");

  const increment = () => {
    setBackGroundColor("#404040");
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // Değerlerin sağlanması
  const value = {
    count,
    increment,
    decrement
  };

  // Global context sağlanıyor
  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
