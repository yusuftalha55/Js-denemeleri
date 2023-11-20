import React from "react";


function JokeGenerator() {
    const Joke = () => {
        const[Joke, setJoke] = React.useState("");
    }

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((res) => res.json())
        .then((data) => setJoke(data.Joke));
    };  
return (
    <div style={{
        textAlign:"center"
    }}>
      <div className="title">
        <h1>JokeGenerator</h1>
      </div>
      <div className="button">
        <button>Click to generate a joke.</button>
      </div>
      <h3 ref={jokeHtml} className="joke">

      </h3>
    </div>
  );
}

export default Joke;