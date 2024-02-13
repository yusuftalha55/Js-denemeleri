import { useState } from "react";
import "./App.css";

function App() {
  const [answer, setAnswer] = useState("");

  function submitClick() {
    if (answer === "lima") {
      return <h2>Answer is True</h2>;
    } else if (answer !== "lima") {
      return <h1>Answer is False</h1>;
    }
  }

  function textAreaValue(e) {
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
    </div>
  );
}

export default App;
