"use client";
import Link from "next/link";
import React from "react";
import { FaLaptopCode } from "react-icons/fa6";
import NavLinks from "./NavLinks";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 h-[80px] bg-whiteGray w-full flex items-center justify-between xl:px-[280px] sm:px-[5%] px-[3%] z-20">
      <Link href="/" className="flex items-center">
        <span>
          <FaLaptopCode className="text-primary xl:text-3xl text-xl" />
        </span>
        <h1 className="font-logo font-bold xl:text-2xl text-xl">ModernCoder</h1>
      </Link>
      <NavLinks />
    </div>
  );
};

export default Header;
