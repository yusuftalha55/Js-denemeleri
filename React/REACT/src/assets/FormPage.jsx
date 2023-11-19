import React, { useRef } from "react";

function HandleCheck() {
  const MaleCheckboxRef = useRef();
  const FemaleCheckRef = useRef();
  const OtherCheckRef = useRef();
}

function Form() {
    return(  <div style={{ width: 750 , textAlign:"center", backgroundColor:"green", margin:300 }}>
        <div className="header">
          <h2>Form in React</h2>
        </div>
        <div style={{backgroundColor:"lightblue"}} className="main">
          <div className="container">
            <div className="mainInput">
              <h3>First Name*</h3>
              <input type="text" />
              <br></br>
    
              <h3>Last Name*</h3>
              <input type="text" />
              <br></br>
    
              <h3>Enter Email*</h3>
              <input type="text" />
              <br></br>
    
              <h3>Contact*</h3>
              <input type="number" />
              <br></br>
            </div>
    
            <div className="checkBox">
              <input type="checkbox" name="Male" ref={maleCheckboxRef} />
              <p>Male</p>
              <input type="checkbox" name="Female" />
              <p>Female</p>
              <input type="checkbox" name="Other" />
              <p>Other</p>
            </div>
          </div>
        </div>
      </div>)
}

export default Form;
