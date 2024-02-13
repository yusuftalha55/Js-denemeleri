import React, { useState, ChangeEvent, ReactElement } from "react";
import "./App.css";

function App(): ReactElement {
  const [answer, setAnswer] = useState<string>("");
  const [result, setResult] = useState<ReactElement | null>(null);

  function submitClick(): void {
    if (answer === "lima") {
      setResult(<h2>Answer is True</h2>);
    } else {
      setResult(<h2>Answer is False</h2>);
    }
  }

  function textAreaValue(e: ChangeEvent<HTMLTextAreaElement>): void {
    setAnswer(e.target.value);
  }

  return (
    <div>
      <div className="title">
        <h1>City Quiz</h1>
      </div>
      <div className="question">
        <p>
          In which city is there a billboard that turns air into drinkable
          water?
        </p>
      </div>
      <div className="inputArea">
        <textarea value={answer} onChange={textAreaValue} />
      </div>
      <div className="submitButton">
        <button onClick={submitClick} style={{ margin: 15 }}>
          Submit
        </button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
}

export default App;

