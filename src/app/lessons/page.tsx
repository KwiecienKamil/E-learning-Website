import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";

const Lessons = () => {
  const lessons = [
    {
      id: 1,
      key: "Lesson 1",
      title: "Pushing To Repository on Github",
      icon: <FaGithub size="2em" />,
      level: "Basic",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20220831170024/GitPush3.jpg",
    },
    {
      id: 2,
      key: "Lesson 2",
      title: "5 JavaScript interview questions",
      icon: <IoLogoJavascript size="2em" />,
      level: "Intermidiate",
      image:
        "https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png",
    },
    {
      id: 3,
      key: "Lesson 3",
      title: "Changing Background Color On Website",
      icon: <IoLogoCss3 size="2em" />,
      level: "Basic",
      image:
        "https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg",
    },
    {
      id: 4,
      key: "Lesson 4",
      title: "Centering a div",
      icon: <IoLogoCss3 size="2em" />,
      level: "Basic",
      image:
        "https://acciojob.com/blog/content/images/2023/02/Screenshot-2023-02-06-at-7.28.31-PM.png",
    },
  ];
  return (
    <div className="pt-[80px] flex flex-col items-center justify-center gap-8 my-8">
      {lessons.map((lesson) => (
        <div
          className="flex gap-8 border-[2px] border-gray-200 rounded-xl overflow-hidden"
          key={lesson.key}
        >
          <div className="flex flex-col items-center justify-center w-[400px]">
            <div className="flex items-center gap-4">
              <span>{lesson.icon}</span>
              <p className="text-xl font-semibold">{lesson.key}</p>
            </div>
            <h2 className="py-1">{lesson.title}</h2>
            <div className="flex items-center gap-4 pt-4">
              <p className="p-2 border-[1px] border-gray-300 rounded-full cursor-default">
                {lesson.level}
              </p>
              <Link
                href={`/lessons/${lesson.id}`}
                className="px-4 py-2 bg-green-500 rounded-xl hover:brightness-90"
              >
                Start now
              </Link>
            </div>
          </div>
          <div className="w-[500px] rounded-r-xl">
            <img src={lesson.image} alt="lesson Image" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lessons;
