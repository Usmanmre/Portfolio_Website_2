import React from 'react';
import { Link } from 'react-scroll';

function HeroSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
                <span className="text-yellow-600 font-bold">
                  Design Excellence,{" "}
                </span>
                <br className="hidden lg:inline-block " />{" "}
                <span className="text-white">Powered by One</span>
              </h1>
              <p className="mb-8 sm leading-relaxed text-white">
                I specialize in crafting logos, brand identities, and visual
                communications for both print and digital platforms. <br /> I
                deliver captivating and effective design solutions to local and
                international clients, helping both established <br /> and
                start-up businesses grow.{" "}
              </p>
          <div className="flex justify-center">
          <Link
                  to="contact" // ID of the section
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <button className="inline-flex text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded text-lg">
                    Get in touch
                  </button>
                </Link>
          </div>
        </div>
  
      </div>
    </section>
  );
}

export default HeroSection;
