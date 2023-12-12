import React, { useState, useRef } from "react";
import questionValues from "./QuestionsValue";

const QuizApp = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [selectedQuestionId, setSelectedQuestionId] = useState(1);
  const [whichQNumber, setWhichQNumber] = useState(1);

  const currentQuestionValues = questionValues(selectedQuestionId);
  const whichQ = useRef();
  const questionRef = useRef();
  const [answer1, setAnswer1] = useState("Yamunanagar");
  const [answer2, setAnswer2] = useState("Panipat");
  const [answer3, setAnswer3] = useState("Gurgaon");
  const [answer4, setAnswer4] = useState("Chandigarh");

  const submitClick = () => {
    if (selectedQuestionId < 5) {
      setSelectedQuestionId(selectedQuestionId + 1);
      setWhichQNumber(whichQNumber + 1);
      whichQ.current.innerText = `Question ${whichQNumber + 1}`;

      const currentQuestion = questionValues(selectedQuestionId + 1);
      questionRef.current.innerText = currentQuestion.questionText;

      setAnswer1(currentQuestion.options[0]);
      setAnswer2(currentQuestion.options[1]);
      setAnswer3(currentQuestion.options[2]);
      setAnswer4(currentQuestion.options[3]);

      if (selectedAnswer === currentQuestionValues.answer) {
        setScore(score + 1);
      }
    }
  };

  return (
    <div style={{ textAlign: "center", marginLeft: 500 }} className="main">
      <div className="title">
        <h1>QUIZ APP</h1>
      </div>
      <div className="questions">
        <div className="whichQ">
          <h2 ref={whichQ}>Question {whichQNumber}</h2>
        </div>
        <div className="question">
          <h3 ref={questionRef}>What is the capital of Haryana?</h3>
        </div>
        <div className="answers">
          <div
            style={{ display: "inline-block", width: 150 }}
            className="answersOne"
          >
            <input
              type="radio"
              value="answer1"
              checked={selectedAnswer === "answer1"}
              onChange={() => setSelectedAnswer("answer1")}
            />
            <h4>{answer1}</h4>
          </div>

          <div
            style={{ display: "inline-block", width: 150 }}
            className="answersTwo"
          >
            <input
              type="radio"
              value="answer2"
              checked={selectedAnswer === "answer2"}
              onChange={() => setSelectedAnswer("answer2")}
            />
            <h4>{answer2}</h4>
          </div>

          <div
            style={{ display: "inline-block", width: 150 }}
            className="answersThree"
          >
            <input
              type="radio"
              value="answer3"
              checked={selectedAnswer === "answer3"}
              onChange={() => setSelectedAnswer("answer3")}
            />
            <h4>{answer3}</h4>
          </div>

          <div
            style={{ display: "inline-block", width: 150 }}
            className="answersFor"
          >
            <input
              type="radio"
              value="answer4"
              checked={selectedAnswer === "answer4"}
              onChange={() => setSelectedAnswer("answer4")}
            />
            <h4>{answer4}</h4>
          </div>
        </div>
        <div className="submit">
          <button onClick={submitClick}>SUBMIT</button>
        </div>
      </div>
      <div className="result">
        <h1>Score: {score}</h1>
      </div>
    </div>
  );
};

export default QuizApp;

