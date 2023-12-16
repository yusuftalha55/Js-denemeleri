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

  const submitClick = () => {
    const question = getQuestionById(whichQuestionState);
    if(whichQuestionState <=4) {
      setWhichQuestionState(whichQuestionState + 1);

    }

    
    if (question && question.id >= 1) {
      setQuestionState(question.question);
    }
    
    
    
      
      setOption1State(question.options[0]);
      setOption2State(question.options[1]);
      setOption3State(question.options[2]);
      setOption4State(question.options[3]);
      
    
  };

  const getQuestionById = (id) => {
    const question = qBank.find(item => item.id === id);
    return question || null;
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div style={{ backgroundColor: "Bisque", textAlign:"center", width:500, marginLeft:"100%" }}>
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
      </div>
    </div>
  );
};

export default App;
