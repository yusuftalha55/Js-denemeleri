"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { ChangeBackGroundColor } from "../globalState";

export default function BlogPost () {
    const { backGroundColor, setBackGroundColor } = useContext(ChangeBackGroundColor);

    return (
        <main style={{backgroundColor:backGroundColor}}>
            <h1>
                <Link href="/">Ana Sayfa</Link>
            </h1>
            <h2>Blog Post</h2>
        </main>
    );
}