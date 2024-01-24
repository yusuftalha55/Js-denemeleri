import React, { useState, useEffect } from "react";
import "./App.css";
import PokeAbilities from "./pokeAbilities";

function Pokemon() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      const firstTenPokemon = data.results.slice(0, 10);
      setPokemonList(firstTenPokemon);
      console.log(pokemonList);
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    
  };

  PokeAbilities();


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
              <p>{}</p>
              <button onClick={() => handleButtonClick(pokemon.url.name)}>Go to Abilities</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
