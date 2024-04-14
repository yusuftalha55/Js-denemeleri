"use client";
import React from "react";
import Link from "next/link";

export default function Detaylar () {
    return (
        <main>
            <h1>
                <Link href="/">Ana Sayfa</Link>
                <Link href="/about">About</Link>
            </h1>
            <h2>Detaylar</h2>
        </main>
    );
}