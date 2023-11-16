import { useState } from "react";


function MyButton() { 
  const [sayac1, setSayac1] = useState(0);
  const [sayac2, setSayac2] = useState(0);
  function handleClick() {
    setSayac1(sayac1 + 1);
    setSayac2(sayac2 +1);
  }

  return <button onClick={handleClick}>{sayac1} kere bastınız</button>;
}

export default MyButton;
