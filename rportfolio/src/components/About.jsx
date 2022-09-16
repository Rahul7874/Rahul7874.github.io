import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-5">
          Hello! My name is Rahul Pawar and i am a web developerworking in both, backend and frontend programming. Excited for improving my skills and learning new technologies.<br /> <br />
          I'm a passionate Developer, with strong administrative and communication skills good attention to detail and the ability to write efficient code using MERN Stack.
        </p>

        <br />

        <p className="text-xl">
        I like to code matters from scratch and love the idea of bringing thoughts to life. <br /> <br />
        I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Let’s discover together how we can make your project convert better!<br /> <br />
        As i grow and flourish as a Developer one thing which keeps me going is my inquisitiveness for discovering new things every day.
        </p>
        
      </div>
    </div>
  );
};

export default About;
