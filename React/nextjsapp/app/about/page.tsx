"use client";
import React from "react";
import Link from "next/link";

export default function About () {
    return (
        <main>
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