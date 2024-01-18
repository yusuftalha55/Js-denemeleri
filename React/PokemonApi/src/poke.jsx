import React, { useState, useEffect } from "react";
import "./App.css";

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
        <div className="pokemonContent">
          {pokemonList.map((pokemon, index) => (
            <div className="content-inside" key={index}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name}
              />
              <h2 className="name">{pokemon.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
