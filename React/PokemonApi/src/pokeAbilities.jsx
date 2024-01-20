import React, { useState, useEffect } from "react";
import "./App.css";

function PokeAbilities() {
  const [pokemonAbilities, setPokemonAbilities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
      const data = await response.json();
      const firstTenPokemonAbilities = data.abilities.ability;
      setPokemonAbilities(firstTenPokemonAbilities);
    };
    fetchData();
  }, []);
}

export default PokeAbilities;
