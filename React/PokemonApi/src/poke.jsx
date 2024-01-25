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
      console.log(pokemonList);
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
      const data = await response.json();
  
      // "abilities" dizisinden ilk yeteneği alalım
      const firstAbility = data.abilities[0];
  
      // İlk yeteneğin "ability" nesnesinden "name" özelliğini alalım
      const abilityName = firstAbility.ability.name;
      setPokemonAbility(abilityName);
  
      console.log("Ability Name:", abilityName);
    };
  
    fetchData();
  }, []);
  
  

  const handleButtonClick = () => {
    
  };

  


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
