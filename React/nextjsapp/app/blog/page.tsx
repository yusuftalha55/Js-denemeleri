"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { ChangeBackGroundColor } from "../globalState";

export default function BlogPost () {
    const { BackGroundColor, setBackGroundColor } = useContext(ChangeBackGroundColor);

    return (
        <main style={{backgroundColor:BackGroundColor}}>
            <h1 style={{backgroundColor:BackGroundColor}}>
                <Link href="/">Ana Sayfa</Link>
            </h1>
            <h2 style={{backgroundColor:BackGroundColor}}>Blog Post</h2>
        </main>
    );
}