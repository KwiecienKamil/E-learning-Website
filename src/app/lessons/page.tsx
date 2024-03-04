import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";

export const lessons = [
  {
    id: "1",
    key: "Lesson 1",
    title: "Pushing To Repository on Github",
    icon: <FaGithub size="2em" />,
    level: "Basic",
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20220831170024/GitPush3.jpg",
    topics: [
      {
        desc: "The git init command creates a new Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository. Most other Git commands are not available outside of an initialized repository, so this is usually the first command you'll run in a new project.",
        usage: "git init"
      },
      {
        desc: "The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way—changes are not actually recorded until you run git commit.",
        usage: "git add ."
      },
      {
        desc: "The git commit command captures a snapshot of the project's currently staged changes. Committed snapshots can be thought of as “safe” versions of a project—Git will never change them unless you explicitly ask it to.",
        usage: 'git commit -m "commit message"'
      },
      {
        desc: "To add a new remote, use the git remote add command on the terminal, in the directory your repository is stored at The git remote add command takes two arguments A remote name, for example, origin and remote URL",
        usage: 'git remote add origin "remote URL"'
      },
      {
        desc: "The git push command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo.",
        usage: "git push <remote> <branch>"
      }
    ],
  },
  {
    id: "2",
    key: "Lesson 2",
    title: "5 JavaScript interview questions",
    icon: <IoLogoJavascript size="2em" />,
    level: "Intermidiate",
    image:"https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png",
      topics: [
        {
          desc: 'Explain the concept of "hoisting" in JavaScript"',
          usage: "Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase."
        },
        {
          desc: "Explain the concept of closures in JavaScript",
          usage: `'A closure is created when a function is defined within another function, allowing the inner function to access variables from the outer (enclosing) function's scope. The inner function "closes over" the variables, preserving their values even after the outer function has finished execution.'`
        },
        {
          desc: 'What is the purpose of setTimeout in JavaScript, and how does it work',
          usage: 'setTimeout is a function used to execute a specified function or code block after a specified delay (in milliseconds). It allows asynchronous execution, enabling non-blocking behavior in the code.'
        },
        {
          desc: "Explain the difference between == and === in JavaScript",
          usage: `== (loose equality) compares values after performing type coercion if necessary, meaning it can convert the operands to the same type before making the comparison.
          === (strict equality) compares both value and type, without performing type coercion. It returns true only if both the value and the type are the same.`
        },
        {
          desc: "What is JavaScript and where can it be used",
          usage: "JavaScript is a versatile programming language primarily used for adding interactivity to web pages. It can be executed in web browsers to create dynamic and interactive user interfaces. Additionally, JavaScript can be used on the server-side (Node.js) for building scalable and efficient server applications."
        }
      ]
  },
  
  {
    id: "3",
    key: "Lesson 3",
    title: "Changing Background Color On Website",
    icon: <IoLogoCss3 size="2em" />,
    level: "Basic",
    image:"https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg",
    topics: [
      {
        desc: "Add CSS to your index.html",
        usage: 'To add CSS styling use <style></style> or create new css file and link it to your index.html by putting <link rel="stylesheet" href="NameOfYourFile.css"> between <head></head> or add inline style to your body like this <body style=""</body>'
      },
      {
        desc: "Change color",
        usage: 'background-color: "red"'
      },
    ]

  },
  {
    id: "4",
    key: "Lesson 4",
    title: "Centering a div",
    icon: <IoLogoCss3 size="2em" />,
    level: "Basic",
    image:"https://acciojob.com/blog/content/images/2023/02/Screenshot-2023-02-06-at-7.28.31-PM.png",
    topics: [
      {
        desc: "Using Transform",
        usage: 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);'
      },
      {
        desc: "Using Flexbox",
        usage: 'display: "flex"; align-items: "center"; justify-content:"center"'
      },
      {
        desc: "Using Grid",
        usage: "display: grid; place-items: center;"
      },
    ]
  },
];

const Lessons = () => {
  return (
    <div className="pt-[80px] flex flex-col items-center justify-center gap-8 my-8">
      {lessons.map((lesson) => (
        <div
          className="flex gap-8 border-[2px] border-gray-200 rounded-xl overflow-hidden shadow-sm py-4 md:py-0"
          key={lesson.key}
        >
          <div className="flex flex-col items-center justify-center lg:w-[400px] w-[300px]">
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
          <div className="lg:w-[500px] sm:w-[350px] rounded-r-xl shadow-sm md:block hidden">
            <img src={lesson.image} alt="lesson Image" className=""/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lessons;
