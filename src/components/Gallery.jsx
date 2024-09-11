import React from "react";
import OWLAURA from "../Images/OWLAURA.png";
import Octinja from "../Images/Octinja.png";
import Carrot from "../Images/Carrot.png";
import car from "../Images/car.png";
import Hook from "../Images/Hook/Hook.png";
import Logofolio from "../Images/Logofolio.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <section id="products" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Showcasing innovative work created for{" "}
            <span className="text-yellow-500">
              {" "}
              visionary brands and clients.
            </span>
          </h1>
        </div>

        <div className="flex flex-wrap cursor-pointer -m-4">
  {/* Static Content */}
  {/* This can be kept as a placeholder if needed */}
  
  {/* Dynamic Content */}
  {[
    { src: OWLAURA, name: "owlaura" },
    { src: Hook, name: "hook" },
    { src: Carrot, name: "carrot" },
    { src: Octinja, name: "octinja" },
    { src: Logofolio, name: "logofolio" },
    { src: car, name: "car" }
  ].map(({ src, name }) => (
    <div key={name} className="lg:w-1/3 sm:w-1/2 p-4 lg:h-72">
      <div className="flex flex-col h-full relative">
        <img
          alt={name}
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={src}
        />
         <div className="flex flex-col justify-center items-center h-full px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <Link
            to={`/projectDetail/${name}`}
            state={{ name }}
            className="text-white bg-yellow-700 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg flex justify-center items-center"
          >
            See Full Project
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>



      </div>
    </section>
  );
}

export default Gallery;
