"use client";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  function goTop() {
    document.body.scrollIntoView();
  }
  const [y, setY] = useState(0);
  const onScroll = () => {
    if (typeof window !== "undefined") {
      let y = window.scrollY;
      setY(y);
      console.log(y);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);
  return (
    <html lang="en">
      <body>
        <div
          className={
            "fixed bottom-0 right-0 z-[21] duration-200 mb-10 mr-10" +
            (y > 0
              ? " opacity-full pointer-events-auto"
              : " opacity-0 pointer-events-none")
          }
        >
          <button
            onClick={goTop}
            className="ml-auto rounded-full text-white px-3 sm:px-4 bg-gradient-to-r from-[#131212] to-[#333131] cursor-pointer aspect-square grid place-items-center"
          >
            <FaArrowUp />
          </button>
        </div>
        <div className="flex flex-col bg-black text-white">
          <Navbar y={y} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
