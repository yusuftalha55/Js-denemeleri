import React, { useRef } from "react";

function Form() {
  const maleCheckboxRef = useRef();
  const femaleCheckboxRef = useRef();
  const otherCheckboxRef = useRef();

  const handleCheck = (clickedCheckboxRef) => {
    maleCheckboxRef.current.checked = false;
    femaleCheckboxRef.current.checked = false;
    otherCheckboxRef.current.checked = false;

    clickedCheckboxRef.current.checked = true;
  };

  return (
    <div style={{ width: 750, textAlign: "center", backgroundColor: "green", margin: 300 }}>
      <div className="header">
        <h2>Form in React</h2>
      </div>
      <div style={{ backgroundColor: "lightblue" }} className="main">
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
            <input
              type="checkbox"
              name="Male"
              ref={maleCheckboxRef}
              onChange={() => handleCheck(maleCheckboxRef)}
            />
            <p>Male</p>
            <input
              type="checkbox"
              name="Female"
              ref={femaleCheckboxRef}
              onChange={() => handleCheck(femaleCheckboxRef)}
            />
            <p>Female</p>
            <input
              type="checkbox"
              name="Other"
              ref={otherCheckboxRef}
              onChange={() => handleCheck(otherCheckboxRef)}
            />
            <p>Other</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
