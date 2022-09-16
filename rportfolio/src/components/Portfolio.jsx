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
      des:"Jio-Mart-Clone"
    },
    {
      id: 2,
      src: insta,
      link: 'https://incandescent-sorbet-09fd5e.netlify.app/',
      repo: 'https://github.com/itsme-brijeshrai/InstaCart-Clone'
    },
    {
      id: 3,
      src: Bewakoof,
      link: 'https://nimble-heliotrope-49fd9a.netlify.app/index.html',
      repo: 'https://github.com/Rahul7874/Bewakoof.com-clone'
    },
    
  ];

  return (
    <div
      name="projects"
       className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo, des }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <p>{des}</p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Live
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
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
