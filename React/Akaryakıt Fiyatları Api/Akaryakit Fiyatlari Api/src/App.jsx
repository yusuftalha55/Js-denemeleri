import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://gas-price.p.rapidapi.com/europeanCountries';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2dab30615cmshc5b0542dbd9da36p1f0fd6jsn4fc63c166db4',
          'X-RapidAPI-Host': 'gas-price.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
}

export default App;
