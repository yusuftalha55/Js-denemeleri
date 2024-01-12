import { useState } from "react";
import "./App.css";

function App() {
  const [click, setClick] = useState(null);

  const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];

  const buttonClick = () => {
    if (click === null) {
      setClick("X");
    } else if (click === "X") {
      setClick(null);
    }
  };

  return (
    <>
      <div className="main">
        <div className="search-bar">
          <input id="searchId" type="text" placeholder="Search..." />
        </div>
        <div className="button">
          <button id="buttonId" onClick={buttonClick}>
            {click}
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
            <div style={{textAlign:"center", marginLeft:-70}} className="title">
              <h2>Fruits</h2>
            </div>
            <div className="list">
              <p>Apple</p>
              <p>1$</p> 
              <p>Dragonfruit</p>
              <p>1$</p> 
              <p>PassionFruit</p> 
              <p>2$</p> 
            </div>
          </div>

          <div className="Vegetables">
            <div style={{textAlign:"center", marginLeft:-70}} className="title">
              <h2>Vegetables</h2>
            </div>
            <div className="list">
              <p>Spinach</p>
              <p>2$</p> 
              <p>Pumpkin</p>
              <p>4$</p> 
              <p>Peas</p> 
              <p>1$</p> 
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
