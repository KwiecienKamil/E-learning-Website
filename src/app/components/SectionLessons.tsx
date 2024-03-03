import React from "react";
import LessonCard from "./LessonCard";
import { FaGithub } from "react-icons/fa6";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";

const SectionLessons = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-[320px] pt-16">
        <div>
          <h3 className="font-semibold text-xl">Top Lessons</h3>
          <p>Explore our popular lessons</p>
        </div>
        <div>
            <button className="px-4 py-2 rounded-full border-gray-400 border-[1px] font-semibold">All categories</button>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 grid-cols-2 gap-4 px-[320px] py-4 mt-8">
        <LessonCard icon={<FaGithub size="2em"/>} title="Pushing To Repository on Github" text="Basic" id="1"/>
        <LessonCard icon={<IoLogoJavascript size="2em"/>} title="5 JavaScript interview questions" text="Intermidiate" id="2"/>
        <LessonCard icon={<IoLogoCss3 size="2em"/>} title="Changing Background Color On Website" text="Basic" id="3"/>
        <LessonCard icon={<IoLogoCss3 size="2em"/>} title="Centering a div" text="Basic" id="4"/>
      </div>
    </div>
  );
};

export default SectionLessons;
