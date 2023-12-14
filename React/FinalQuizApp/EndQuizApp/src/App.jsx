import React from "react";
import qBank from "./Qbank";

const App = () => {
  const submitClick = () => {

  }



  return (
    <div style={{backgroundColor:Bisque}}>
      <div className="title">QUIZ APP</div>
      <div className="questions">
        <div className="whichQuestion">
          <h2></h2>
        </div>
        <div className="contentQuestion">
          <h3></h3>
        </div>
        <div className="answers">
          <div className="answer1">
            <input type="radio" />
            <h4></h4>
          </div>
          <div className="answer2">
            <input type="radio" />
            <h4></h4>
          </div>
          <div className="answer3">
            <input type="radio" />
            <h4></h4>
          </div>
          <div className="answer4">
            <input type="radio" />
            <h4></h4>
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