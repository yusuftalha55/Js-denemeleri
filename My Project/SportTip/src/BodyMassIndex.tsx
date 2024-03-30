import React, { useState } from "react";
import "./App.css";

const BodyIndex = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bodyIndex, setBodyIndex] = useState(0);



    function mathButton () {
       const parsedWeight = parseFloat(weight);
       const parsedHeight = parseFloat(height);
       const parsedResult = parsedWeight/((parsedHeight/100) * (parsedHeight/100));
       setBodyIndex(parsedResult);
    }
    return(
        <div className="bodyIndexclass">
            <h1>Vücut Kitle Endeksi</h1>
            <div className="inputBodyClass">
                <h3>Boyunuzu giriniz</h3>
                <input type="number" min={0} value={height} onChange={(e)=> setHeight(e.target.value)}/>
                <h3>Kilonuzu giriniz</h3>
                <input type="number" min={0} value={weight} onChange={(e)=> setWeight(e.target.value)}/>
            </div>
            <button onClick={mathButton}>Hesapla</button>
            <div className="output">
                <h3>Vücut kitle endeksiniz: {bodyIndex}</h3>
            </div>
        </div>
    )
}

export default BodyIndex;