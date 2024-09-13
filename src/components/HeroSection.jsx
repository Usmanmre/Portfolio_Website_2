import React from "react";
import bgImage from '../Images/bg2.jpg'; // Ensure this path is correct

function HeroSection() {
  return (
    <section 
      className="text-gray-600 body-font" 
      style={{
        backgroundImage: `url(${bgImage})`, // Correct template literal
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
        position: 'relative', 
        width: '100%',
        minHeight: '100vh', 
        opacity: 0.8, 
      }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl font-oswald mb-4 font-medium">
            <span className="text-yellow-600 font-bold font-oswald">
              Design Excellence,{" "}
            </span>
            <br className="hidden lg:inline-block" />{" "}
            <span className="text-white font-semibold">Powered by One</span>
          </h1>
          <p className="mb-8 sm leading-relaxed font-regular text-white">
            I specialize in crafting logos, brand identities, and visual
            communications for both print and digital platforms. <br /> I
            deliver captivating and effective design solutions to local and
            international clients, helping both established <br /> and start-up
            businesses grow.{" "}
          </p>
          <div className="flex justify-center ">
            <button className="inline-flex items-center font-oswald border-0 py-2 px-4 text-yellow-600 hover:text-yellow-900 rounded text-lg relative">
              Available for Project
              {/* Blinking Outer Circle with Static Inner Circle */}
              <span className="ml-2 relative  w-6 h-6 flex items-center justify-center">
                {/* Static Inner Circle */}
                <span className="absolute inline-block w-3 h-3 bg-green-500 rounded-full z-10"></span>
                {/* Blinking Outer Circle */}
                <span className="absolute w-full h-full bg-green-200 rounded-full opacity-0 animate-pulse-circle"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
