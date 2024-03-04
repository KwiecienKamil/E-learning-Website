import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLaptopCode, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" relative flex justify-center py-8 xl:px-[250px] px-[5%] bg-whiteGray cursor-default">
        <div className="w-screen grid md:grid-cols-4 grid-cols-2 gap-4 justify-items-center pl-8">
        <div className="flex flex-col w-[200px] gap-2 ">
         <Link href="/" className="flex items-center">
            <span>
              <FaLaptopCode size={30} className="text-primary" />
            </span>
            <h5 className="font-logo font-bold text-2xl">ModernCoder</h5>
          </Link>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id quisquam sed neque ipsam rerum ex quam ullam.</p>
        </div>
        </div>
        <div className="flex flex-col pt-1 gap-4 text-sm">
        <h6 className="font-semibold text-md">GET HELP</h6>
        <div className="flex flex-col gap-1">
            <p>Contact Us</p>
            <p>Latest Articles</p>
            <p>FAQ</p>
        </div>
        </div>
        <div className="w-[180px] flex flex-col gap-4 pt-1 text-sm mr-6 md:mr-0">
        <h6 className="font-semibold text-md">CONTACT US</h6>
        <div className="flex flex-col gap-1">
            <p>Address: 2321 Programming Str, Warsaw</p>
            <p>Tel: +(123) 2500-567-8988</p>
            <p>Email: moderncoder.com</p>
            <div className="flex items-center gap-2">
                <span><FaFacebook size="1.2em"/></span>
                <span><FaYoutube size="1.2em"/></span>
                <span><FaLinkedin size="1.2em"/></span>
                <span><FaInstagram size="1.2em"/></span>
            </div>
        </div>
        </div>
        <div className="flex flex-col pt-1 gap-4 text-sm">
        <h6 className="font-semibold text-md">PROGRAMMS</h6>
        <div className="flex flex-col gap-1">
            <p>Art & Design</p>
            <p>Business</p>
            <p>It & Software</p>
            <p>Langages</p>
            <p>Programming</p>
        </div>
        </div>
       
         </div>
         </div>

  );
};

export default Footer;
