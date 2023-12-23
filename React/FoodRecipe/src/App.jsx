import { useState } from "react";
import "./App.css";
import ContainerDrinks from "./ContainerDrinks";
import ContainerBreakfast from "./ContainerBreakfast";
import ContainerDinner from "./ContainerDinner";

function App() {
  const [showScreen, setShowScreen] = useState();
  
  const All = () => {
    return(
      <div> 
      <ContainerBreakfast></ContainerBreakfast>
      <ContainerDrinks></ContainerDrinks>
      <ContainerDinner></ContainerDinner>
      </div>
      
    )
  } 
  



  const searchClick = () => {

  };

  return (
    <div>
      <div className="search">
        <input className="input" type="text" />
        <button className="button" onClick={searchClick}>
          Ara
        </button>
      </div>
      <div className="containers">
        <p>{showScreen}</p>        
      </div>
    </div>
  );
}

export default App;
