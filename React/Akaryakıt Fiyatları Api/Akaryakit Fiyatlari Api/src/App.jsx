import { useEffect, useState } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("https://api.collectapi.com/gasPrice/stateUsaPrice?state=WA", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: "apikey your_token",
      },
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return <></>;
}

export default App;
