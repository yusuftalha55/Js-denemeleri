import React, { useContext } from "react"
import { ChangeBackGroundColor } from "../globalState"

export default function Home() {
    
    const {BackGroundColor, setBackGroundColor} = useContext(ChangeBackGroundColor);

    return (
        <div>
            Home Page
        </div>
    )
}