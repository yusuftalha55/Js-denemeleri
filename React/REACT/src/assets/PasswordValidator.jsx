import React, { useState } from "react";

function PasswordCheck() {
    function inputCheck(){
        
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
      <div ref={inputCheck} className="check"></div>
    </div>
  );
}
