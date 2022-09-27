import React from "react";

const Stats = ()=>{
    return(
        <div
        name="contact"
        className="contact w-full h-full	 bg-slate-200 to-gray-800 p-4 text-black"
      >
         <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
            <div>
              <p className="text-4xl text-blue-600 font-bold border-b-4 border-gray-500 p-2 inline">
               Stats
              </p>
             
            </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-8 mt-20 text-center	 px-12 sm:px-0 ">
                    <div className="bg-white h-32 rounded-full text-blue-600 font-bold border-4 border-blue-600">
                        <p className="mt-5">Total</p>
                        <p>Contributions</p>
                        <p>134+</p>
                    </div>
                    <div className="bg-white h-32 rounded-full text-blue-600 font-bold border-4 border-blue-600">
                        <p className="mt-5">Total</p>
                        <p>1000+</p>
                        <p>Hours of coding</p> 
                    </div>
                    <div className="bg-white h-32 rounded-full text-blue-600 font-bold border-4 border-blue-600">
                         <p className="mt-3">Total</p>
                        <p>100+</p>
                        <p>Hours of communication</p> 
                        <p>Skills Training</p>
                    </div>
                    <div className="bg-white h-32 rounded-full text-blue-600 font-bold border-4 border-blue-600">
                        <p className="mt-5">Most</p>
                        <p>Used Language</p>
                        <p>Javascript</p> 
                    </div>
                </div>
        </div>
        </div>
    )
}

export default Stats