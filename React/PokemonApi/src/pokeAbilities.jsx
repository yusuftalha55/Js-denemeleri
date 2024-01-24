import React, { useState, useEffect } from "react";
import "./App.css";

function PokeAbilities() {

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
      const data = await response.json();
      
      
      console.log(data);
    };

    fetchData();
  }, []);



  return (
    <div className="main">
      <div className="table">
        <li>
          <ol>
            <h2>asfasf</h2>



          </ol>
        </li>
      </div>
    </div>
  )
  
}

export default PokeAbilities;
