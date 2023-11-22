import React, { useState, useRef } from "react";

function JokeGenarator() {
    const jokeRef = useRef();
    const [joke, setJoke] = useState("");
    function buttonClick(){
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then(response => response.json())
        .then(data => {
            setJoke(data.joke);
            jokeRef.current.innerHTML = joke;        
        });
        
    }
  return (
    <div style={{margin:500}} className="main">
      <div className="header">
        <h1>Joke Generator Using React and Joke API</h1>
      </div>

      <div className="button">
        <button onClick={buttonClick}>Click to generate a joke.</button>
      </div>

      <div className="content">
        <h3 ref={jokeRef}></h3>
      </div>
    </div>
  );
}

export default JokeGenarator;
