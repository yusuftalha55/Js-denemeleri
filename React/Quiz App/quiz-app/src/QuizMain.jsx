import React, { useState, useRef} from "react";
import qBank from "./QuestionBank";

const QuizApp = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const questionRef = useRef();
  const questinContentRef = useRef();
  const answerRef1 = useRef();
  const answerRef2 = useRef();
  const answerRef3 = useRef();
  const answerRef4 = useRef();
  const [score, setScore] = useState(0);
  const [whichQuestion, setWhichQuestion] = useState(1);
  const option4 = "option4";
  const resultRef = useRef();


  const submitClick = () => {
    if (selectedOption === option4) {
      setScore(score + 1);
    }

    // Bir sonraki soruya geçelim
    setWhichQuestion(whichQuestion + 1);

    // Eğer tüm sorular gösterildiyse, sonuçları göster
    if (whichQuestion >= qBank.length) {
      resultRef.current.innerText = "RESULT:" + score;
    } else {
      // Soruları ref ve state'ler aracılığıyla ekrana yerleştirelim
      const currentQuestion = qBank[whichQuestion];
      questionRef.current.innerText = `Question ${currentQuestion.id}`;
      questinContentRef.current.innerText = currentQuestion.question;
      answerRef1.current.innerText = currentQuestion.options[0];
      answerRef2.current.innerText = currentQuestion.options[1];
      answerRef3.current.innerText = currentQuestion.options[2];
      answerRef4.current.innerText = currentQuestion.options[3];
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: 150,
        backgroundColor: "CadetBlue",
        width: 750,
        margin: "0 auto",
      }}
      className="main"
    >
      <div className="title">
        <h1>QUIZ APP</h1>
      </div>
      <div className="questions-title">
        <h3 ref={questionRef}>Question 1</h3>
        <h2 ref={questinContentRef} className="questions">What is the capital of Haryana?</h2>
        <div style={{ display: "flex", alignItems: "center", marginLeft: 250 }}>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={() => setSelectedOption("option1")}
          />
          <h3 ref={answerRef1} style={{ marginLeft: 10 }}>Yamunanagar</h3>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginLeft: 250 }}>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={() => setSelectedOption("option2")}
          />
          <h3 ref={answerRef2} style={{ marginLeft: 10 }}>Panipat</h3>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginLeft: 250 }}>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={() => setSelectedOption("option3")}
          />
          <h3 ref={answerRef3} style={{ marginLeft: 10 }}>Gurgaon</h3>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginLeft: 250 }}>
          <input
            type="radio"
            value="option4"
            checked={selectedOption === "option4"}
            onChange={() => setSelectedOption("option4")}
          />
          <h3 ref={answerRef4} style={{ marginLeft: 10 }}>Chandigarh</h3>
        </div>
        <button
          onClick={submitClick}
          style={{
            margin: 30,
            width: 150,
            height: 45,
            backgroundColor: "aliceblue",
          }}
        >
          Submit
        </button>
        <div className="result">
          <h1 ref={resultRef}></h1>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
