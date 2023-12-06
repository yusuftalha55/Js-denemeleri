import React,{useState, useRef} from "react";
import qBank from "./Qbank";
import questionValues from "./QuestionsValue";

const quizApp = () => {
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const whichQ = useRef();
    const question = useRef();
    const answer1 = useRef();
    const answer2 = useRef();
    const answer3 = useRef();
    const answer4 = useRef();

    return(
        <div className="main">
            <div className="title">
                <h1>QUIZ APP</h1>
            </div>
            <div className="questions">
                <div className="whichQ">
                    <h2 ref={whichQ}></h2>
                </div>
                <div className="question">
                    <h3 ref={question}></h3>
                </div>
                <div className="answers">
                    <input type="radio" 
                    value="answer1"
                    checked = {selectedAnswer === answer1}
                    onChange={() = selectedAnswer("answer1")}
                    />
                    <h4 ref={answer1}></h4>

                    <input type="radio" 
                    value="answer2"
                    checked = {selectedAnswer === answer2}
                    onChange={() = selectedAnswer("answer2")}
                    />
                    <h4 ref={answer2}></h4>

                    <input type="radio" 
                    value="answer3"
                    checked = {selectedAnswer === answer3}
                    onChange={() = selectedAnswer("answer3")}
                    />
                    <h4 ref={answer3}></h4>

                    <input type="radio" 
                    value="answer4"
                    checked = {selectedAnswer === answer4}
                    onChange={() = selectedAnswer("answer4")}
                    />
                    <h4 ref={answer4}></h4>
                    

                </div>

            </div>

        </div>
    )

}