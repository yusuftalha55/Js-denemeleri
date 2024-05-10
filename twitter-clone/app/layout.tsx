import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./containers.css"
import "./sideBar.css"
import "./trends.css"

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
