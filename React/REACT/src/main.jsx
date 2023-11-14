import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MyButton from "./MyButton.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <h1>Welcome to my app</h1>
    <MyButton></MyButton>

    {/* <App /> */}
  </div>
);
