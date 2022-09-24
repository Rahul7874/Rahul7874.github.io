import React from "react";

const Stats = ()=>{
    return(
        <div
        name="contact"
        className="contact w-full h-screen bg-slate-200 to-gray-800 p-4 text-black"
      >
         <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
            <div>
              <p className="text-4xl text-blue-600 font-bold border-b-4 border-gray-500 p-2 inline">
              My GitHub Stats
              </p>
             
            </div>
            <div className="mt-20">
        <p align="left"> <img src="https://komarev.com/ghpvc/?username=rahul7874&label=Profile%20views&color=0e75b6&style=flat" alt="rahul7874" /> </p>
        <p>
            <img align="left" src="https://github-readme-stats.vercel.app/api?username=rahul7874&show_icons=true&locale=en&theme=dark" alt="rahul7874"  height="139" />
            <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=rahul7874&layout=compact&exclude_repo=Lybrate-Website-Clone-Version-2.0,Lybrate-Website-Clone,Adidas-Clone&hide=Shell&border_radius=0&theme=dark" alt="rahul7874" height="139" />
        </p>
        <img src="https://activity-graph.herokuapp.com/graph?username=Rahul7874&theme=xcode" height ="307"/>
        </div>
        </div>
        </div>
    )
}

export default Stats