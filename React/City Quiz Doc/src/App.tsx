import { useState } from 'react'
import './App.css'

export default function Form () {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if(status === "success") {
    return <h1>That's right</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success")
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  }

  function handleTextAreaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <div>
      <h2>City Quiz</h2>

    </div>
  )
}
