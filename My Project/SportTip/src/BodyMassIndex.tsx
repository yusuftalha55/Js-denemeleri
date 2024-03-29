import React from "react";
import "./App.css";

const BodyIndex = () => {
    return(
        <div className="bodyIndexclass">
            <h1>Vücut Kitle Endeksi</h1>
            <div className="inputBodyClass">
                <h3>Boyunuzu giriniz</h3>
                <input type="number" min={0}/>
                <h3>Kilonuzu giriniz</h3>
                <input type="number" min={0}/>
            </div>
        </div>
    )
}

export default BodyIndex;