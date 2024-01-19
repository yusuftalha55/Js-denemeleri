import React, { useState, useEffect } from "react";
import "./App.css";

function PokeAbilities() {
  const [pokemonAbilites, setPokemonAbilities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      
    };
  }, []);
}

export default PokeAbilities;
