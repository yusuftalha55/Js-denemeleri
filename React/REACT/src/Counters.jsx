import React, { useState } from "react";

function MyButton() {
  const [sayac1, setSayac1] = useState(0);

  function handleClick() {
    setSayac1(sayac1 + 1);
  }

  return (
    <div>
      <h2>Counters that uptade separatly</h2>
      <button onClick={handleClick}>{sayac1} kere bastınız</button>
      <button onClick={handleClick}>{sayac1} kere bastınız</button>
    </div>
  );
}

export default MyButton;

