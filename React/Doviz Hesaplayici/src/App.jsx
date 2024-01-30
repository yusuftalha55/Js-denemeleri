import { useState, useEffect } from "react";

function App() {
  const [moneyList, setMoneyList] = useState([""]);
  const [resultState, setResultState] = useState();
  const TRY = (resultState / 30);
  

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
        setResultState(result[3]);
        console.log(result[3]);
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
