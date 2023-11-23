import React, { useState, useRef } from "react";

function PasswordCheck() {
    const inputOut = useRef("");
    const outPut = useRef("");
    const [password, setPassword] = useState(""); 
    function inputCheck(){
        if(inputOut.current.length >=6 && typeof inputOut.current === "string" && typeof inputOut.current === "number" ){
            outPut.current.innerText = "Is strong password"
        }
        else{
            outPut.current.innerText = "Is not strong password"
        }


    }
  return (
    <div className="main">
      <div className="title">
        <h1>checking Password Strenght in ReactJS</h1>
      </div>
      <div className="input">
        <h3>Enter Password: </h3>
        <input ref={inputOut}  type="text" />
      </div>
      <div className="check">
        <h3  ref={outPut}  style={{color:"red"}}></h3>
      </div>
    </div>
  );
}

export default PasswordCheck;
