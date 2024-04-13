"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { ChangeBackGroundColor } from "../globalState";

export default function BlogPost () {
    const { backGroundColor, setBackGroundColor } = useContext(ChangeBackGroundColor);

    return (
        <main style={{backgroundColor:backGroundColor}}>
            <h1 style={{backgroundColor:backGroundColor}}>
                <Link href="/">Ana Sayfa</Link>
            </h1>
            <h2 style={{backgroundColor:backGroundColor}}>Blog Post</h2>
        </main>
    );
}