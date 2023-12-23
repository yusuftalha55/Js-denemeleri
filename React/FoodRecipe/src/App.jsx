import React, { useState, useRef } from "react";
import "./App.css";
import ContainerDrinks from "./ContainerDrinks";
import ContainerBreakfast from "./ContainerBreakfast";
import ContainerDinner from "./ContainerDinner";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [showScreen, setShowScreen] = useState();
  const containersRef = useRef();

  const searchClick = () => {
    const searchInputLower = searchInput.toLowerCase();
  
    if (searchInputLower === "breakfast") {
      setShowScreen(<ContainerBreakfast />);
    } else if (searchInputLower === "drinks") {
      setShowScreen(<ContainerDrinks />);
    } else if (searchInputLower === "dinner") {
      setShowScreen(<ContainerDinner />);
    } 
  };
  

  return (
    <div>
      <div className="search">
        <input
          className="input"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button className="button" onClick={searchClick}>
          Ara
        </button>
      </div>
      <div ref={containersRef} className="containers">
        {showScreen || (
          <>
            <ContainerBreakfast />
            <ContainerDrinks />
            <ContainerDinner />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
