import { useState } from "react";


export default function App() {
  const [sifre, setSifre] = useState("");
  return (
    <div className="App">
      <h3>
        Sifre gir
        <input
          value={sifre}
          onChange={(e) => {
            setSifre(e.target.value);
          }}
        />
      </h3>
      <h3>{sifre.length >= 6 ? "sifre guclu" : "sifre gucsuz"}</h3>
    </div>
  );
}





