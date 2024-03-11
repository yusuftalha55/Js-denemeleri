import React, { useContext } from "react"
import { ChangeBackGroundColor } from "../globalState"

export default function Home() {
    
    const {BackGroundColor, setBackGroundColor} = useContext(ChangeBackGroundColor);

    return (
        <div style={{backgroundColor:BackGroundColor}}>
           <div className="title">
             <h1>Home Page</h1>
           </div>
           <div className="active">
            <button>Change Background Color</button>
           </div>
        </div>
    )
}