import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [allMoney, setAllMoney] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [convertedValue, setConvertedValue] = useState(null);

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

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    setConvertedValue(Number(e.target.value) * money.rate);
  };

  return (
    <div>
      <div className="converter">
        <div className="usdConverter">
          <h2>Euro To Usd</h2>
          {allMoney.map((money, index) => (
            <div key={index}>
              {money.currency === "USD" && (
                <h3>
                  Sayı Giriniz:
                  <input
                    style={{ margin: 10 }}
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    min="0"
                  />
                  {inputValue} EUR = {Number(inputValue) * money.rate} USD
                </h3>
              )}
            </div>
          ))}
        </div>
        <div className="tryConverter">
          <h2>Euro To Try</h2>
          {allMoney.map((money, index) => (
            <div key={index}>
              {money.currency === "TRY" && (
                <h3>
                  Sayı Giriniz:
                  <input
                    style={{ margin: 10 }}
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    min="0"
                  />
                  {inputValue} EUR = {Number(inputValue) * money.rate} TRY
                </h3>
              )}
            </div>
          ))}
        </div>
        <div className="jpyConverter">
          <h2>Euro To Jpy</h2>
          {allMoney.map((money, index) => (
            <div key={index}>
              {money.currency === "JPY" && (
                <h3>
                  Sayı Giriniz:
                  <input
                    style={{ margin: 10 }}
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    min="0"
                  />
                  {inputValue} EUR = {Number(inputValue) * money.rate} JPY
                </h3>
              )}
            </div>
          ))}
        </div>
        <div className="gbpConverter">
          <h2>Euro To Jpy</h2>
          {allMoney.map((money, index) => (
            <div key={index}>
              {money.currency === "GBP" && (
                <h3>
                  Sayı Giriniz:
                  <input
                    style={{ margin: 10 }}
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                    min="0"
                  />
                  {inputValue} EUR = {Number(inputValue) * money.rate} GBP
                </h3>
              )}
            </div>
          ))}
        </div>
      </div>

      {allMoney.map((money, index) => (
        <div key={index}>
          <p>
            {baseCurrency} = {money.rate} :{money.currency}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
