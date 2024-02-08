import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const url = "https://free-images-api.p.rapidapi.com/images/wallpaper";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "2dab30615cmshc5b0542dbd9da36p1f0fd6jsn4fc63c166db4",
          "X-RapidAPI-Host": "free-images-api.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        const firstTenPokemon = data.results.slice(0, 10);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>
    {/* <div className="main">
      {result.map(()=>{
        <h2 key={index}>
          {result}
        </h2>
      })}

    </div> */}
  </div>;
}

export default App;



