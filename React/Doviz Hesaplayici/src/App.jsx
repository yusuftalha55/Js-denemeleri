import { useState, useEffect } from 'react'; 

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://currency-exchange.p.rapidapi.com/listquotes';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2dab30615cmshc5b0542dbd9da36p1f0fd6jsn4fc63c166db4',
          'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div>
      {}
    </div>
  );
}

export default App;

