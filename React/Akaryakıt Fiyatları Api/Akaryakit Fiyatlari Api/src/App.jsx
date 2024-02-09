import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
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
          <img key={index} src={image.image} alt="" />
        ))}
      </div>
    </div>
  );
}

export default App;





