import React from "react";
import student from "../assets/student.png";
import backgroundText from "../assets/backgroundText.png";
import vectorG from "../assets/vectorGreen.png";
import vectorY from "../assets/vectorYellow.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative lg:h-[500px] md:h-[400px] h-[300px] bg-gradient-to-r from-gradient1 to-gradient2 overflow-hidden">
      <div className="h-full w-full xl:px-[280px] sm:px-[5%] px-[3%] flex items-center justify-between ">
        <div className="flex flex-col items-center justify-center gap-4 font-semibold">
          <h2 className="lg:text-4xl md:text-xl sm:text-lg text-md">
            Build Your Coding Skills
          </h2>
          <Link href="/lessons" className="xl:text-xl lg:text-md text-[12px] md:px-4 md:py-2 px-2 py-1 sm rounded-xl bg-primary text-white hover:brightness-90 z-10">Start now</Link>
        </div>
        <Image
          src={student}
          alt="student"
          className="lg:w-[500px] md:w-[400px] w-[300px] absolute bottom-0 xl:right-32 lg:right-0 md:-right-20 sm:right-0 -right-12 z-[10]"
        />
        <Image
        src={backgroundText}
        alt="backgroundtrext"
        className="absolute lg:right-8 md:right-0 right-4 2xl:max-w-[800px] xl:max-w-[600px] lg:max-w-[500px] md:max-w-[400px] sm:max-w-[200px] max-w-[150px]"
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
