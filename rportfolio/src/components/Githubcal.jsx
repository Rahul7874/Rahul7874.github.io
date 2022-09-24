import React from "react";
import postman from "../assets/postman.png"
import mongoose from "../assets/mongoose.png"
import node from "../assets/node.png";
import express from "../assets/ExpressJS.png"
import mongodb from "../assets/mongodb.png"

let GitHubcle =()=>{
    const teche =[
        {
            id: 1,
            src: node,
            title: "NodeJs",
            style: "shadow-green-400",
          },
          {
            id: 2,
            src: express,
            title: "Express",
            style: "shadow-yellow-400",
          },
          {
            id: 3,
            src: mongodb,
            title: "MongoDB",
            style: "shadow-green-500",
          },
          {
            id: 4,
            src: postman,
            title: "Postman",
            style: "shadow-orange-500",
          },
          {
            id: 5,
            src: mongoose,
            title: "Mongoose",
            style: "shadow-red-500",
          },

    ]
    return (
        <div
          name="skill"
          className="bg-slate-100	 w-full h-100%  experience"
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
            <div>
              <p className="text-4xl text-blue-600 font-bold border-b-4 border-gray-500 p-2 inline">
               Backend
              </p>
             
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
              {teche.map(({ id, src, title, style }) => (
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
}

export default GitHubcle;





//   <h2><i>My GitHub Stats</i></h2>
// <p align="left"> <img src="https://komarev.com/ghpvc/?username=rahul7874&label=Profile%20views&color=0e75b6&style=flat" alt="rahul7874" /> </p>
// <p>
//     <img align="left" src="https://github-readme-stats.vercel.app/api?username=rahul7874&show_icons=true&locale=en&theme=dark" alt="rahul7874"  height="139" />
//     <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=rahul7874&layout=compact&exclude_repo=Lybrate-Website-Clone-Version-2.0,Lybrate-Website-Clone,Adidas-Clone&hide=Shell&border_radius=0&theme=dark" alt="rahul7874" height="139" />
// </p>
// <img src="https://activity-graph.herokuapp.com/graph?username=Rahul7874&theme=xcode" height ="307"/>