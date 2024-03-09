import React, { useState, createContext, useContext } from 'react';

export const ChangeBackGroundColor = createContext({});

export function useChangeBackGroundColor() {
  return useContext(ChangeBackGroundColor);
}

export function DarkModeToggleButton() {
  const { backGroundColor, setBackGroundColor } = useChangeBackGroundColor();

  function changeButton() {
    setBackGroundColor(backGroundColor === "#faebd7" ? "#404040" : "#faebd7");
  }

  return (
    <div>
      <button onClick={changeButton}>Toggle Dark Mode</button>
    </div>
  );
}

