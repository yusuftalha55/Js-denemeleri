import React, { useRef } from "react";

function HandleCheck() {
  const MaleCheckboxRef = useRef();
  const FemaleCheckRef = useRef();
  const OtherCheckRef = useRef();

  if(maleCheckboxRef.current.checked === true){
    FemaleCheckRef.current.checked=false;
    OtherCheckRef.current.checked=false;
  }
  else if(FemaleCheckRef.current.checked === true){
    OtherCheckRef.current.checked=false;
    MaleCheckboxRef.current.checked=false;
  }
  else{
    FemaleCheckRef.current.checked=false;
    MaleCheckboxRef.current.checked=false;
  }
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
              <input type="checkbox" name="Male" ref={MaleCheckboxRef} />
              <p>Male</p>
              <input type="checkbox" name="Female" ref={FemaleCheckRef} />
              <p>Female</p>
              <input type="checkbox" name="Other" ref={OtherCheckRef} />
              <p>Other</p>
            </div>
          </div>
        </div>
      </div>)
}

export default Form;
