import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function firstNameChange(e) {
    setFirstName(e.target.value);
  }

  function lastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <div>
      <div className="title">
        <h1>Let’s check you in</h1>
      </div>
      <div className="inputArea">
        <div>
          <p className="pClass">First Name:</p>
          <input value={firstName} onChange={firstNameChange} type="text" />
        </div>
        <div>
          <p className="pClass">Last Name:</p>
          <input value={lastName} onChange={lastNameChange} className="input" type="text" />
        </div>
      </div>
      <div className="resultArea">
        <p>Your ticket will be issued to: {firstName} {lastName}</p>
      </div>
    </div>
  );
}

export default App;
