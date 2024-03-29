import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstTenimage, setFirstTenimage] = useState([]);

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
        const firstTenImage = data.results.slice(0, 10);
        setFirstTenimage(firstTenImage);
        console.log(firstTenImage);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="main">
        {firstTenimage.map((image, index) => (
          <div className="imageMain" key={index}>
            <img className="image" src={image.image} alt="" />
            <h2 className="h2Id">Resmin Id'si: {image.id}</h2>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default App;
