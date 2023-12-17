import React, { useState } from "react";
import qBank from "./Qbank";

const App = () => {
  const [whichQuestionState, setWhichQuestionState] = useState(1);
  const [questionState, setQuestionState] = useState("What is the capital of Haryana?");
  const [option1State, setOption1State] = useState("Yamunanagar");
  const [option2State, setOption2State] = useState("Panipat");
  const [option3State, setOption3State] = useState("Gurgaon");
  const [option4State, setOption4State] = useState("Chandigarh");
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const option1 = "option1";
  const option2 = "option2";
  const option3 = "option3";
  const option4 = "option4";

  const submitClick = () => {
    if(selectedOption === option4 && whichQuestionState ===1){
      setScore(score + 1);
    }
    else if(selectedOption === option4 && whichQuestionState ===2){
      setScore(score + 1);
    }
    else if(selectedOption === option1 && whichQuestionState ===3){
      setScore(score + 1);
    }
    else if(selectedOption === option3 && whichQuestionState ===4){
      setScore(score + 1);
    }
    else if(selectedOption === option2 && whichQuestionState ===5){
      setScore(score + 1);
    }


    if (whichQuestionState <= 4) {
      const nextQuestionId = whichQuestionState + 1;
      const nextQuestion = getQuestionById(nextQuestionId);
  
      setWhichQuestionState(nextQuestionId);

      console.log(selectedOption)
  
      if (nextQuestion) {
        setQuestionState(nextQuestion.question);
        setOption1State(nextQuestion.options[0]);
        setOption2State(nextQuestion.options[1]);
        setOption3State(nextQuestion.options[2]);
        setOption4State(nextQuestion.options[3]);
        setSelectedOption(null);
  
        
        
      }
    } else {
      
    }
  };
  

  const getQuestionById = (id) => {
    const question = qBank.find(item => item.id === id);
    return question || null;
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div style={{ backgroundColor: "Bisque", textAlign: "center", width: 500, marginLeft: "100%" }}>
      <div className="title">QUIZ APP</div>
      <div className="questions">
        <div className="whichQuestion">
          <h2>{"Question " + whichQuestionState}</h2>
        </div>
        <div className="contentQuestion">
          <h3>{questionState}</h3>
        </div>
        <div className="answers">
          <div className="answer1">
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            <h4>{option1State}</h4>
          </div>
          <div className="answer2">
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            <h4>{option2State}</h4>
          </div>
          <div className="answer3">
            <input
              type="radio"
              value="option3"
              checked={selectedOption === "option3"}
              onChange={handleOptionChange}
            />
            <h4>{option3State}</h4>
          </div>
          <div className="answer4">
            <input
              type="radio"
              value="option4"
              checked={selectedOption === "option4"}
              onChange={handleOptionChange}
            />
            <h4>{option4State}</h4>
          </div>
        </div>
        <div className="submit">
          <button onClick={submitClick}>Submit</button>
        </div>
        <div className="showScore">
          <h3>{score}</h3>
        </div>
      </div>
    </div>
  );
};

export default App;
