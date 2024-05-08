"use client";
import React, { useState } from "react";

export default function Navbar({ y }) {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);
  return (
    <div
      className={`mainNav fixed top-0 w-full z-40 flex items-center justify-between sm:px-16 px-0 sm:py-8 py-6 border-b-[1px] border-b-solid ${
        y > 0
          ? !toggle
            ? "bg-black border-[#494949]"
            : "bg-black border-transparent"
          : "bg-transparent border-transparent"
      }`}
    >
      <a
        href="/"
        className="flex flex-col items-center sm:z-0 z-40 sm:pl-0 pl-10"
      >
        <span className="font-bold text-xl">GDSC</span>
        <span className="text-[#A7A7A7] text-sm">TCET</span>
      </a>
      <div className="sm:flex hidden gap-16 items-center">
        <div className="flex gap-12 items-center text-[#AFAFAF]">
          <a href="/">Home</a>
          <a href="/team">Team</a>
          <a href="/events">Events</a>
        </div>
        <a
          href="https://gdsc.community.dev/thakur-college-of-engineering-and-technology-mumbai-india/"
          target="_blank"
          className="text-center border-[1.5px] border-solid border-[#494949] rounded-3xl px-6 py-1.5 bg-gradient-to-r from-black to-[#333131]"
        >
          <img src="/gdscLogo.png" alt="GDSC Logo" className="w-[25px] h-[15px] inline-block mr-2" />
          Community
        </a>
      </div>
      <div className="sm:hidden block z-40 pr-10" onClick={handleClick}>
        <img
          src={toggle ? "/close.svg" : "/menu.svg"}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
        />
      </div>
      <div
        className={
          toggle
            ? "pt-24 pb-8 fixed top-0 bg-black shadow-sm z-20 w-full px-8 sm:hidden flex flex-col items-center gap-5 text-white border-b-[1px] border-solid border-[#494949]"
            : "hidden"
        }
      >
        <a href="/">Home</a>
        <a href="/team">Team</a>
        <a href="/events">Events</a>
        <a
          href="https://gdsc.community.dev/thakur-college-of-engineering-and-technology-mumbai-india/"
          target="_blank"
          className="text-center border-[1.5px] border-solid border-[#494949] rounded-3xl px-6 py-1.5 bg-gradient-to-r from-black to-[#333131] flex gap-2 items-center justify-center"
        >
          <img src="/gdscLogo.png" alt="GDSC Logo" className="w-[25px] h-[15px]" />
          Community
        </a>
      </div>
    </div>
  );
}
