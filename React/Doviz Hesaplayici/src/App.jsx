import { useState, useEffect } from "react";

function App() {
  const [moneyList, setMoneyList] = useState([""]);
  const [resultState, setResultState] = useState();
  const TRY = (resultState / 30);
  

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "2dab30615cmshc5b0542dbd9da36p1f0fd6jsn4fc63c166db4",
          "X-RapidAPI-Host": "currency-conversion-and-exchange-rates.p.rapidapi.com",
        },
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
      <div className="usdDiv">
        <h2>{resultState}</h2>

      </div>
      {moneyList.map((money, index) => (
        <p key={index}>{money}</p>
      ))}
    </div>
  );
}

export default App;