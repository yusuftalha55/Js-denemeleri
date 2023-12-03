import React,{useState} from "react";

const QuizApp = () => {
  const [selectedOption,setSelectedOption] = useState("");


  const submitClick =() =>{

  }


  return (
    <div style={{textAlign: "center", marginTop: 150, backgroundColor: "CadetBlue", width: 750, margin: "0 auto"}} className="main">
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
        <button  onClick={submitClick} style={{margin:30,width:150, height:45, backgroundColor:"aliceblue"}}>Submit</button>
      </div>
    </div>
  );
};

export default QuizApp
