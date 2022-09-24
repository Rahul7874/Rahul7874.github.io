import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/tailwind.png";
import github from "../assets/git.png";
// import node from "../assets/node.png";
// import express from "../assets/ExpressJS.png"
// import mongodb from "../assets/mongodb.png"
import redux from "../assets/redux.png"
// import postman from "../assets/postman.png"
// import mongoose from "../assets/mongoose.png"
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: nextjs,
      title: "Tailwind",
      style: "shadow-cyan-400",
    },
    
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-orange-200",
    },
    {
      id: 12,
      src: redux,
      title: "Redux",
      style: "shadow-purple-500",
    },
    
  ];

  return (
    <div
      name="skills"
      className="bg-slate-100	 w-full h-screen experience"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div>
          <p className="text-4xl text-blue-600 font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="text-4xl text-blue-600 font-bold border-b-4 border-gray-500 p-2 inline">
            Frontend
          </p>
          <p className="py-6">These are the technologies I've worked with and used them in my projects.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`bg-white shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
