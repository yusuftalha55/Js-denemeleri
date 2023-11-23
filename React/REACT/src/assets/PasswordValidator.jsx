import React, { useState, useRef } from "react";

function PasswordCheck() {
    const inputOut = useRef("");
    const [password, setPassword] = useState(""); 
    function inputCheck(){
        if(inputOut.current.length >=6 && typeof inputOut.current === "string" && typeof inputOut.current === "number" ){
            
        }


    }
  return (
    <div className="main">
      <div className="title">
        <h1>checking Password Strenght in ReactJS</h1>
      </div>
      <div className="input">
        <h3>Enter Password: </h3>
        <input type="text" />
      </div>
      <div className="check">
        <h3 ref={inputOut} style={{color:"red"}}></h3>
      </div>
    </div>
  );
}
