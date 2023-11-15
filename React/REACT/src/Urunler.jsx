import React from "react";

function Market() {
  const urunler = [
    { title: "elma", isMeyve: true, id: 1 },
    { title: "araba", isMeyve: false, id: 2 },
    { title: "keman", isMeyve: false, id: 3 },
    { title: "armut", isMeyve: true, id: 4 },
  ];

  const listedekiler = urunler.map((urun) => (
    <li
      key={urun.id}
      style={{
        color: urun.isMeyve ? "green" : "red",
      }}
    >
      {urun.title}
    </li>
  ));

  return <ul>{listedekiler}</ul>;
}

export default Market;
