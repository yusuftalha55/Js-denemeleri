import React, { useState } from "react";
import qBank from "./Qbank";

const App = () => {
  const [whichQuestionState, setWhichQuestionState] = useState(1);
  const [questionState, setQuestionState] = useState("What is the capital of Haryana?");
  const [option1State, setoption1State] = useState ("Yamunanagar");
  const [option2State, setoption2State] = useState ("Panipat");
  const [option3State, setoption3State] = useState ("Gurgaon");
  const [option4State, setoption4State] = useState ("Chandigarh"); 
  const getQuestionById = (id) => {
    const question = qBank.find(item => item.id === id);
    return;
  }  

  const submitClick = () => {
    setWhichQuestionState(whichQuestionState +1);


    
    
  }



  return (
    <div style={{backgroundColor:Bisque}}>
      <div className="title">QUIZ APP</div>
      <div className="questions">
        <div className="whichQuestion">
          <h2>{"Question" + whichQuestionState}</h2>
        </div>
        <div className="contentQuestion">
          <h3>{questionState}</h3>
        </div>
        <div className="answers">
          <div className="answer1">
            <input type="radio"
             value="option1"
             checked={selectedOption === "option1"}
             />
            <h4>{option1State}</h4>
          </div>
          <div className="answer2">
          <input type="radio"
             value="option2"
             checked={selectedOption === "option2"}
             />
            <h4>{option2State}</h4>
          </div>
          <div className="answer3">
          <input type="radio"
             value="option3"
             checked={selectedOption === "option3"}
             />
            <h4>{option3State}</h4>
          </div>
          <div className="answer4">
          <input type="radio"
             value="option4"
             checked={selectedOption === "option4"}
             />
            <h4>{option4State}</h4>
          </div>
        </div>
        <div className="submit">
          <button onClick={submitClick}>Submit</button>
        </div>

      </div>
    </div>
  )

}

export default App