import Link from "next/link";
import React from "react";
import { FaLaptopCode } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 h-[80px] bg-whiteGray w-full flex items-center justify-between px-[320px] z-20">
      <Link href="/" className="flex items-center">
       <span><FaLaptopCode size={30} className="text-primary" /></span>
        <h1 className="font-logo font-bold text-2xl">ModernCoder</h1>
      </Link>
      <div className="h-full flex items-center font-semibold">
        <Link
          href="/"
          className="h-full flex items-center px-4 hover:text-primary hover:bg-navHover transition-all duration-300"
        >
          Home
        </Link>
        <Link
          href="/"
          className="h-full flex items-center px-4 hover:text-primary hover:bg-navHover transition-all duration-300"
        >
          Lessons
        </Link>
        <Link
          href="/"
          className="h-full flex items-center px-4 hover:text-primary hover:bg-navHover transition-all duration-300"
        >
          About
        </Link>
      </div>
      <Link
        href="/login"
        className="h-full flex items-center px-4 hover:text-primary hover:bg-navHover transition-all duration-300 font-semibold"
      >
        Login/Register
      </Link>
    </div>
  );
};

export default Header;
