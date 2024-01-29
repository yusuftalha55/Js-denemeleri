import { useState, useEffect } from "react";

function App() {
  const [moneyList, setMoneyList] = useState([""]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://currency-exchange.p.rapidapi.com/listquotes";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "2dab30615cmshc5b0542dbd9da36p1f0fd6jsn4fc63c166db4",
          "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMoneyList(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {moneyList.map((money, index) => (
        <h2 key={index}>{money}</h2>
      ))}
    </div>
  );
}

export default App;
