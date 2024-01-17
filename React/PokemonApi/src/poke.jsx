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
            <div key={index}>
              <h2>{pokemon.name}</h2>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name}
              />
            </div>
          ))}
        </div>
        <div className="attributes"></div>
      </div>
    </div>
  );
}

export default Pokemon;
