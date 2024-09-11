import React from 'react';
import about from '../Images/about2.png';

const About = () => {
  return (
    <div>
      <section className="text-gray-600 bg-black body-font overflow-hidden">
        <div className="container  px-5 py-24 mx-auto">
          <div className="flex flex-col lg:flex-row lg:w-4/5 mx-auto">
            {/* Image Container */}
            <img
              alt="ecommerce"
              className="lg:w-1/2 h-3/4 mr-5 object-cover object-center rounded-t lg:rounded-l"
              src={about}
            />

            {/* Text Content */}
            <div className="lg:w-1/2  lg:pr-10 lg:py-6 p-10  flex flex-col items-start rounded-b lg:rounded-r">
              <div className="flex items-start flex-col">
                <h1 className="text-yellow-600 text-3xl title-font font-medium mb-4">
                  About me...
                </h1>
              </div>
              <p className="text-left text-slate-300 mb-4">
                Hi, <span className="font-medium text-yellow-600">I’m Usman</span>, a passionate and dedicated Brand Identity
                Designer with over <span className="font-medium text-yellow-600">three years of experience</span> working on Fiverr.
                During this time, I’ve successfully delivered numerous projects,
                earning a Level 2 badge that signifies my commitment to
                excellence and client satisfaction. <br /> <br /> My expertise lies in
                crafting compelling and <span className="font-medium text-yellow-600">unique brand identities that resonate
                with target audiences</span>. From logo design and brand strategy to
                visual identity systems, I strive to create designs that not
                only look great but also effectively communicate your brand’s
                values and vision. <br /> <br /> Having worked with diverse clients from
                various industries, I bring a <span className="font-medium text-yellow-600">wealth of knowledge and a keen eye</span>
                for detail to every project. I believe in a collaborative
                approach, ensuring that each design reflects the essence of your
                brand while meeting your specific needs. <br /> <br /> Thank you for
                considering me for your brand identity needs. I look forward to
                the opportunity to help bring your <span className="font-medium text-yellow-600">vision to life!</span>
              </p>

              {/* <div className="flex">
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
