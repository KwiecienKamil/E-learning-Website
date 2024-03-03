import React from "react";
import student from "../assets/student.png";
import backgroundText from "../assets/backgroundText.png";
import vectorG from "../assets/vectorGreen.png";
import vectorY from "../assets/vectorYellow.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-gradient1 to-gradient2 overflow-hidden">
      <div className="h-full w-full xl:px-[250px] px-[5%] flex items-center justify-between ">
        <div className="flex flex-col items-center justify-center gap-4 font-semibold">
          <h2 className="lg:text-4xl text-2xl">
            Build Your Coding Skills
          </h2>
          <Link href="/lessons" className="px-4 py-2 rounded-xl bg-primary text-white hover:brightness-90 z-10">Start now</Link>
        </div>
        <Image
          src={student}
          alt="student"
          width={500}
          className="absolute bottom-0 xl:right-32 right-0 z-[10]"
        />
        <Image
        src={backgroundText}
        alt="backgroundtrext"
        className="absolute right-8 xl:max-w-[600px] max-w-[400px]"
        />
        <Image
        src={vectorY}
        alt="shape-yellow"
        className="absolute left-0 bottom-0"
        />
        <Image
        src={vectorG}
        alt="shape-yellow"
        className="absolute top-0 right-0 z-10"
        />
        
      </div>
    </div>
  );
};

export default Hero;
