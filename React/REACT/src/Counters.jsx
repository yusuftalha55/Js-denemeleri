import { useState } from "react";

function MyButton() {
  const [sayac, setSayac] = useState(0);
  function handleClick() {
    setSayac(sayac + 1);
  }

  return <button onClick={handleClick}>{sayac} kere bastınız</button>;
}
