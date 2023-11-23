import React, { useState, useRef } from "react";

function PasswordCheck() {
    const [password, setPassword] = useState(""); 
    function inputCheck(){
        if(password.current.length >=6 && typeof password.current === "string" && typeof password.current === "number" ){
            "Is strong password"
        }
        else{
           "Is not strong password"
        }


    }
  return (
    <div className="main">
      <div className="title">
        <h1>checking Password Strenght in ReactJS</h1>
      </div>
      <div className="input">
        <h3>Enter Password: </h3>
        <input onChange={(e) => {
            setPassword(e.target.value)
        }} type="text" />
      </div>
      <div className="check">
        <h3 style={{color:"red"}}>{inputCheck()}</h3>
      </div>
    </div>
  );
}

export default PasswordCheck;
