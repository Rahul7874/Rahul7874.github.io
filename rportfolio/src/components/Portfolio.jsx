import React from "react";

import Bewakoof from "../assets/portfolio/bewkoof.png";
import jio from "../assets/portfolio/jio.png"
import insta from "../assets/portfolio/insta.png"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: jio,
      link: 'https://eloquent-raindrop-7553d5.netlify.app/',
      repo: 'https://github.com/faizanghani2222/saucy-horses-1675',
      des:"Jio-Mart-Clone",
      desc:"JioMart is an Indian e-commerce company which initially focused on online sales such as fashion, home essentials, and lifestyle products.",
      tech:"HTML | CSS | Javascript | JSON"
    },
    {
      id: 2,
      src: insta,
      link: 'https://incandescent-sorbet-09fd5e.netlify.app/',
      repo: 'https://github.com/itsme-brijeshrai/InstaCart-Clone',
      des:"Instacart-Clone",
      desc:"Instacart is an American company that operates a grocery delivery and pick-up service in the United States and Canada. Its really fast",
      tech:"HTML | CSS | Javascript | JSON"
    },
    {
      id: 3,
      src: Bewakoof,
      link: 'https://nimble-heliotrope-49fd9a.netlify.app/index.html',
      repo: 'https://github.com/Rahul7874/Bewakoof.com-clone',
      des:"Bewkoof-Clone",
      desc:"Bewakoof Limited provides online shopping platforms. The Company retails clothing, shoes, bags, and other fashion accessories for men and women.",
      tech:"HTML | CSS | Javascript | JSON"
    },
    
  ];

  return (
    <div
      name="projects"
       className="bg-slate-200 w-full text-black md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-blue-600 font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo, des, desc, tech }) => (
            <div key={id} className="shadow-md shadow-white bg-white	 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <p style={{textAlign:"center", marginTop:"10px"}} className="text-2xl sm:text-1xl font-bold text-black">{des}</p>
              <p style={{textAlign:"center", marginTop:"10px"}}>{desc}</p>
              <p style={{textAlign:"center", marginTop:"10px",color:"#2b67eb"}}>`Tech stack:-{tech}`</p>
              <div className="flex items-center justify-center">
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... rounded-md w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white" onClick={ () => window.open(link, '_blank')}>
                  Live
                </button>
                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... rounded-md w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white" onClick={ () => window.open(repo, '_blank')}>
                  Source
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
