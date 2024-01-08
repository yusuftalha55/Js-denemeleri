// Square.jsx
import React, { useState } from "react";
import "./App.css";

function Square({ onClick }) {
  const [value, setValue] = useState(null);

  return (
    <button className="square" onClick={() => onClick(setValue)}>
      {value}
    </button>
  );
}

export default Square;
