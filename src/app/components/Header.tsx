"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[100px] bg-black text-white flex justify-between items-center font-[cursive] px-6 py-4 sticky top-0 shadow-lg z-10">
      <div className="text-[33px] font-bold">
        <a href="/" className="flex items-center no-underline">
          <Image
            src="/image/pf-logo.png"
            width={100}
            height={100}
            alt="Logo"
            className="logo"
          />
          <h1 className="ml-2 line-clamp-1">Blog Man</h1>
        </a>
      </div>

      {/* Hamburger Menu Button for Mobile */}
      <button
        className="flex flex-col text-black gap-[5px] md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`menu-bar w-[25px] h-[3px] bg-white transition-all ${
            isMenuOpen ? "rotate-45 translate-y-[8px]" : ""
          }`}
        ></span>
        <span
          className={`menu-bar w-[25px] h-[3px] bg-white transition-all ${
            isMenuOpen ? "hidden" : ""
          }`}
        ></span>
        <span
          className={`menu-bar w-[25px] h-[3px] bg-white transition-all ${
            isMenuOpen ? "-rotate-45 translate-y-[0.5px]" : ""
          }`}
        ></span>
      </button>

      {/* Navigation Links */}
      <ul
        className={`flex md:flex-row flex-col  gap-[20px] list-none text-xl md:gap-[30px] md:opacity-100 md:visible absolute md:relative md:flex ${isMenuOpen ? "top-[100px] right-0 w-full text-center py-4 opacity-70" : "hidden"}`}
      >
        <li className="hover:px-8 hover:py-2 hover:text-[25px] hover:rounded-[10px] transition-all duration-500">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:px-8 hover:py-2 hover:text-[25px] hover:rounded-[10px] transition-all duration-500">
          <Link href={`/all-post`}>Blogs</Link>
        </li>
        <li className="hover:px-8 hover:py-2 hover:text-[25px] hover:rounded-[10px] transition-all duration-500">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <ul className= "text-2xl ">
        <li>
          <Link href={"/login"}>
            <FaUserCircle />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
