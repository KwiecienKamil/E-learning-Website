"use client";
import Link from "next/link";
import React from "react";
import { FaLaptopCode } from "react-icons/fa6";
import NavLinks from "./NavLinks";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 h-[80px] bg-whiteGray w-full flex items-center justify-between xl:px-[250px] px-[5%] z-20">
      <Link href="/" className="flex items-center">
        <span>
          <FaLaptopCode size={30} className="text-primary" />
        </span>
        <h1 className="font-logo font-bold text-2xl">ModernCoder</h1>
      </Link>
      <NavLinks />
    </div>
  );
};

export default Header;
