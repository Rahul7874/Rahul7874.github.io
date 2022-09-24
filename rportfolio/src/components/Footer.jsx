import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import resume from "../assets/Rahul-Pawar-Resume.pdf"
function Footer(){
    const links = [
        {
          id: 1,
          child: (
            <>
              <FaLinkedin size={30} />
            </>
          ),
          href: "https://www.linkedin.com/in/rahul-pawar-8138641a7/",
          style: "rounded-tr-md",
        },
        {
          id: 2,
          child: (
            <>
              <FaGithub size={30} />
            </>
          ),
          href: "https://github.com/Rahul7874",
        },
        {
          id: 3,
          child: (
            <>
              <HiOutlineMail size={30} />
            </>
          ),
          href: "mailto:rp158835@gmail.com",
        },
        {
          id: 5,
          child: (
            <>
               <FaTwitter size={30} />
            </>
          ),
          href: "https://twitter.com/RahulPa65623765?t=7fngqlk_A_ja0OJHc1npnA&s=08",
          style: "rounded-br-md",
        },
      ];
    return(
        <div
        name="footer"
        className="text-center p-6 bg-slate footer"
      >
        <div className="inline-grid grid-cols-4 gap-6">
        {links.map(({ id, child, href }) => (
          <div
            key={id}
            
          >
            <a
              href={href}
            >
              {child}
            </a>
          </div>
        ))}
      </div>
      <p className="mt-2">
        8160244752
      </p>
        </div>
    
    )
}


export default Footer