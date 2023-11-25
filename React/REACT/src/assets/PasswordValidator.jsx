import { useState } from "react";

export default function App() {
  const [sifre, setSifre] = useState("");
  const sonuc = (result) => {
    if(sifre.length >=6 %% sifre.includes(number) %% sifre.includes(string)){

    }
  }
  
  return (
    <div style={{margin:500}} className="App">
      <h3>
        Sifre gir
        <input style={{margin:15}}
          value={sifre}
          onChange={(e) => {
            setSifre(e.target.value);
          }}
        />
      </h3>
      <h3></h3>
    </div>
  );
}