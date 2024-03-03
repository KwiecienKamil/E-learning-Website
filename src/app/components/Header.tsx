'use client'
import Link from "next/link";
import React from "react";
import { FaLaptopCode } from "react-icons/fa6";
import NavLinks from "./NavLinks";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
    const loginLink = [{
      title: "Login / Register",
      path: "/login"
    }]
  
  return (
    <div className="fixed top-0 left-0 h-[80px] bg-whiteGray w-full flex items-center justify-between px-[320px] z-20">
      <Link href="/" className="flex items-center">
       <span><FaLaptopCode size={30} className="text-primary" /></span>
        <h1 className="font-logo font-bold text-2xl">ModernCoder</h1>
      </Link>
      <NavLinks />
      {loginLink.map((link) => {
        const isActive = (path:string) => path === pathname
        return(
          <Link href={link.path} key={link.title} className={isActive(link.path) ? "h-full flex items-center px-4 text-primary bg-navHover font-semibold" : "h-full flex items-center px-4 hover:text-primary hover:bg-navHover transition-all duration-300 font-semibold"}>{link.title}</Link>
        )
        
      }
      )}
    </div>
  );
};

export default Header;
