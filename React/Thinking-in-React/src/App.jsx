import { useState } from "react";
import "./App.css";

function App() {
  const [click, setClick] = useState(null);
  const [showOnlyStocked, setShowOnlyStocked] = useState(false);

  const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ];

  const buttonClick = () => {
    setShowOnlyStocked(!showOnlyStocked);
  };

  const filteredProducts = showOnlyStocked
    ? PRODUCTS.filter((product) => product.stocked)
    : PRODUCTS;

  return (
    <>
      <div className="main">
        <div className="search-bar">
          <input id="searchId" type="text" placeholder="Search..." />
        </div>
        <div className="button">
          <h3>Only show products in stock</h3>
          <button id="buttonId" onClick={buttonClick}>
            {showOnlyStocked ? "X" : ""}
          </button>
        </div>

        <div className="product-table">
          <div className="name-price">
            <h2>Name</h2>
            <h2>Price</h2>
          </div>
        </div>

        <div className="content">
          <div className="fruits">
            <div className="list">
              <table className="table-style">
                {filteredProducts.map((product) => (
                  <tr key={product.name}>
                    <td>
                      {product.stocked ? (
                        product.name
                      ) : (
                        <span style={{ color: "red" }}>{product.name}</span>
                      )}
                    </td>
                    <td>{product.price}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
