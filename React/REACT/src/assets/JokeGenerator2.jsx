import React, { useState, useRef } from "react";

function JokeGenerator() {
  const [joke, setJoke] = useState("");
  const jokeHtml = useRef(null);

  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke);
        jokeHtml.current.innerText = data.joke;
      });
  };

  return (
    <div style={{ margin: 400 }}>
      <div className="title">
        <h1>JokeGenarator</h1>
      </div>

      <div className="button">
        <button onClick={fetchApi}>Click to generate a joke</button>
      </div>

      <h3 ref={jokeHtml} className="joke"></h3>
    </div>
  );
}

// export default JokeGenerator;
