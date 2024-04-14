"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { ChangeBackGroundColor } from "../globalState";

export default function About () {
    const { BackGroundColor, setBackGroundColor} = useContext( ChangeBackGroundColor);
    return (
        <main style={{ backgroundColor:BackGroundColor}}>
            <h1>
                <Link href="/">Ana Sayfa</Link>
                
            </h1>
            
            <h2>
                About
            </h2>
            <h2>
                <Link href="about/details">Detaylar</Link>
            </h2>
        </main>
    );
}