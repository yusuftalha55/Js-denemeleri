import React from "react";

function JokeGenerator() {
    const 
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
