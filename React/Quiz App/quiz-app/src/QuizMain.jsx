import React from "react";

const QuizApp = () => {
  return (
    <div className="main">
      <div className="title">
        <h1>QUIZ APP</h1>
      </div>
      <div className="questions-title">
        <h3>Question 1</h3>
        <h2 className="questions">What is the capital of Haryana?</h2>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={() => setSelectedOption("option1")}
        />
        <button style={{width:45, height:25}}>Submit</button>
      </div>
    </div>
  );
};

export default QuizApp
