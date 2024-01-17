import React, { useState, useEffect } from "react";

function Pokemon() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      const firstTenPokemon = data.results.slice(0, 10);
      setPokemonList(firstTenPokemon);
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="container">
        <div className="title">
          {pokemonList.map((pokemon, index) => (
            <h2 key={index}>{pokemon.name}</h2>
          ))}
        </div>
        <div className="attributes"></div>
      </div>
    </div>
  );
}

export default Pokemon;
