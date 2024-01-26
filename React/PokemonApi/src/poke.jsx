import React, { useState, useEffect } from "react";
import "./App.css";

function Pokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonAbility, setPokemonAbility] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      const firstTenPokemon = data.results.slice(0, 10);
      setPokemonList(firstTenPokemon);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/1/"
      );
      const data = await response.json();

      
      const firstAbility = data.abilities[0];

      

      const baseExperience = firstAbility.base_experience;

      console.log(baseExperience);

      const abilityName = firstAbility.ability.name;
      setPokemonAbility(abilityName);

      
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    pokemonAbility;
  };

  return (
    <div className="main">
      <div className="container">
        <div className="pokemonContent">
          {pokemonList.map((pokemon, index) => (
            <div className="content-inside" key={index}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                alt={pokemon.name}
              />
              <h2 className="name">{pokemon.name}</h2>
              <button onClick={handleButtonClick}>Go to Abilities</button>
              <div className="abilitesContent">
                <p>{pokemonAbility}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
