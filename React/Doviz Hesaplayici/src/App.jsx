import { useState, useEffect } from "react";

function App() {
  const [allMoney, setAllMoney] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "2dab30615cmshc5b0542dbd9da36p1f0fd6jsn4fc63c166db4",
          "X-RapidAPI-Host":
            "currency-conversion-and-exchange-rates.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();

        const resultArray = Object.entries(result.rates).map(
          ([currency, rate]) => ({ currency, rate })
        );
        setAllMoney(resultArray);

        setBaseCurrency(result.base);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Base Currency: {baseCurrency}</p>

      <div className="converter">
        <div className="usdConverter">
          {allMoney.map((money, index) => (
            <div key={index}>
              {money.currency === "USD" && (
                <p>
                  <input type="number" />
                  EUR = {money.rate} USD
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="eurConverter"></div>
      </div>

      {allMoney.map((money, index) => (
        <div key={index[0]}>
          {console.log(money)}
          <p>
            {baseCurrency} = {money.rate} :{money.currency}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
