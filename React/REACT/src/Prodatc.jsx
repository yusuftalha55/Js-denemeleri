import React from "react";

function Products() {
  const urunler = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  const listItems = urunler.map((product) => (
    <li key={product.id} style={{ color: product.isFruit ? "green" : "red" }}>
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

// export default Products;
