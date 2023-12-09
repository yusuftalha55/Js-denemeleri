import React, { useState, useRef } from "react";
import qBank from "./Qbank";
import questionValues from "./QuestionsValue";

const QuizApp = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState("0");
  const [selectedQuestionId, setSelectedQuestionId] = useState(1);
  const [whichQNumber, setWhichQNumber] = useState(2);

  const currentQuestionValues = questionValues(selectedQuestionId);
  const whichQ = useRef();
  const questionRef = useRef();
  const answer1Ref = useRef();
  const answer2Ref = useRef();
  const answer3Ref = useRef();
  const answer4Ref = useRef();

  const submitClick = () => {
    setSelectedQuestionId(selectedQuestionId + 1);
    setWhichQNumber(whichQNumber + 1);
    whichQ.current.innerText = `Question ${whichQNumber}`;

    const currentQuestion = questionValues(selectedQuestionId + 1);
    questionRef.current.innerText = currentQuestion.questionText;

    answer1Ref.current.innerText = currentQuestion.options[0];
    answer2Ref.current.innerText = currentQuestion.options[1];
    answer3Ref.current.innerText = currentQuestion.options[2];
    answer4Ref.current.innerText = currentQuestion.options[3];
  };

  return (
    <div style={{ textAlign: "center", marginLeft: 500 }} className="main">
      <div className="title">
        <h1>QUIZ APP</h1>
      </div>
      <div className="questions">
        <div className="whichQ">
          <h2 ref={whichQ}>Questions 1</h2>
        </div>
        <div className="question">
          <h3 ref={questionRef}>What is the capital of Haryana?</h3>
        </div>
        <div className="answers">
          <div style={{ display: "inline-block", width:150 }} className="answersOne">
            <input
              type="radio"
              value="answer1"
              checked={selectedAnswer === "answer1"}
              onChange={() => setSelectedAnswer("answer1")}
            />
            <h4 ref={answer1Ref}>Yamunanagar</h4>
          </div>

          <div style={{ display: "inline-block", width:150 }} className="answersTwo">
            <input
              type="radio"
              value="answer2"
              checked={selectedAnswer === "answer2"}
              onChange={() => setSelectedAnswer("answer2")}
            />
            <h4 ref={answer2Ref}>Panipat</h4>
          </div>

          <div style={{ display: "inline-block", width:150 }} className="answersThree">
            <input
              type="radio"
              value="answer3"
              checked={selectedAnswer === "answer3"}
              onChange={() => setSelectedAnswer("answer3")}
            />
            <h4 ref={answer3Ref}>Gurgaon</h4>
          </div>

          <div style={{ display: "inline-block", width:150 }} className="answersFor">
            <input
              type="radio"
              value="answer4"
              checked={selectedAnswer === "answer4"}
              onChange={() => setSelectedAnswer("answer4")}
            />
            <h4 ref={answer4Ref}>Chandigarh</h4>
          </div>
        </div>
        <div className="submit">
          <button onClick={submitClick}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
