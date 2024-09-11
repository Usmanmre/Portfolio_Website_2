import React from 'react';
import OWLAURA from '../Images/OWLAURA.png'; // Import the correct image path
import Octinja from "../Images/Octinja.png";
import Oc1 from "../Images//Octinja/Oc1.png";
import Oc2 from "../Images//Octinja/Oc2.png";
import Oc3 from "../Images//Octinja/Oc3.png";
import Oc4 from "../Images//Octinja/Oc4.png";



import Carrot from "../Images/Carrot.png";
import carrot1 from "../Images/Carrot/carrot1.png";
import carrot2 from "../Images/Carrot/carrot2.png";
import carrot3 from "../Images/Carrot/carrot3.png";

import car from "../Images/car.png";
import car1 from "../Images/Car/car1.png";
import car2 from "../Images/Car/car2.jpg";
import car3 from "../Images/Car/car3.png";
import car4 from "../Images/Car/car4.png";
import car5 from "../Images/Car/car5.png";



import Hook from "../Images//Hook/Hook.png";
import h1 from "../Images//Hook/h1.png";
import h2 from "../Images//Hook/h2.png";
import hook2 from "../Images//Hook/hook2.png";
import hooklap from "../Images//Hook/hooklap.png";

import Logofolio from "../Images/Logofolio.png";
import l1 from "../Images/Logofolio/l1.png";
import l2 from "../Images/Logofolio/l2.png";



import O1 from "../Images/Owl/O1.png";
import O2 from "../Images/Owl/O2.png";
import O3 from "../Images/Owl/O3.png";
import O4 from "../Images/Owl/O4.png";


import { useLocation } from 'react-router-dom';
import Footer from './Footer';

const WholeProject = (props) => {
  const location = useLocation();
  const { name } = location.state || {}; // Extract 'name' from location.state

   switch (name) {
    case 'owlaura':
      return (
        <div className="flex flex-wrap items-center justify-center  -m-4 lg:p-16 pt-10 ">
          <h2 className='text-white sm:mt-5 text-sm  lg:mb-5'> <span className='font-bold'>OWLAURA</span> Detailed View</h2>
          <div className=' p-5' >
            <img src={OWLAURA} className='rounded-lg p-5' alt="Owl Aura" />
            <img src={O1} className='rounded-lg p-5' alt="Owl Aura" />
            <img src={O2} className='rounded-lg p-5' alt="Owl Aura" />
            <img src={O3} className='rounded-lg p-5'  alt="Owl Aura" />
            <img src={O4} className='rounded-lg p-5'  alt="Owl Aura" />
          </div>

        </div>
        
      );
      case 'hook':
        return (
            
            <div className="flex flex-wrap items-center justify-center  -m-4 lg:p-16 pt-10 ">
            <h2 className='text-white sm:mt-5 text-sm  lg:mb-5'> <span className='font-bold'>HOOK</span> Detailed View</h2>
            <div className=' p-5' >
            <img src={Hook}  className='rounded-lg p-5' alt="Owl Aura" />
              <img src={h1} className='rounded-lg p-5' alt="Owl Aura" />
               <img src={h2} className='rounded-lg p-5' alt="Owl Aura" />
               <img src={hook2} className='rounded-lg p-5' alt="Owl Aura" />
               <img src={hooklap} className='rounded-lg p-5' alt="Owl Aura" />
            </div>
  
          </div>
          
 
        );
        case 'carrot':
          return (

            <div className="flex flex-wrap items-center justify-center  -m-4 lg:p-16 pt-10 ">
            <h2 className='text-white sm:mt-5 text-sm  lg:mb-5'> <span className='font-bold'>Carrot</span> Detailed View</h2>
            <div className=' p-5' >
            <img src={carrot3}  className='rounded-lg p-5' alt="Owl Aura" />
              <img src={carrot1}  className='rounded-lg p-5' alt="Owl Aura" />
              <img src={carrot2}  className='rounded-lg p-5' alt="Owl Aura" />
                <img src={Carrot} className='rounded-lg p-5'  alt="Owl Aura" />
            </div>
  
          </div>
          

    

          );
          case 'octinja':
            return (

                <div className="flex flex-wrap items-center justify-center  -m-4 lg:p-16 pt-10 ">
                <h2 className='text-white sm:mt-5 text-sm  lg:mb-5'> <span className='font-bold'>Octinja</span> Detailed View</h2>
                <div className=' p-5' >
                <img src={Oc2} className='rounded-lg p-5'  alt="Owl Aura" />
                  <img src={Oc3} className='rounded-lg p-5'  alt="Owl Aura" />
                  <img src={Oc4} className='rounded-lg p-5'  alt="Owl Aura" />
                  <img src={Octinja} className='rounded-lg p-5'  alt="Owl Aura" />
                </div>
      
              </div>


            );
            case 'logofolio':
              return (
                <div className="flex flex-wrap items-center justify-center  -m-4 lg:p-16 pt-10 ">
                <h2 className='text-white sm:mt-5 text-sm  lg:mb-5'> <span className='font-bold'>Logofolio</span> Detailed View</h2>
                <div className=' p-5' >
                    <img src={Logofolio} className='rounded-lg p-5'  alt="Owl Aura" />
                    <img src={l1} className='rounded-lg p-5'  alt="Owl Aura" />
                    <img src={l2} className='rounded-lg p-5'  alt="Owl Aura" />

                  </div>
                </div>
              );

              case 'car':
                return (
                    <div className="flex flex-wrap items-center justify-center  -m-4 lg:p-16 pt-10 ">
                    <h2 className='text-white sm:mt-5 text-sm  lg:mb-5'> <span className='font-bold'>Car</span> Detailed View</h2>
                    <div className=' p-5' >
                      <img src={car1}  className='rounded-lg p-5'  alt="Owl Aura" />
                      <img src={car2}  className='rounded-lg p-5'  alt="Owl Aura" />
                      <img src={car3}  className='rounded-lg p-5'  alt="Owl Aura" />
                      <img src={car4}  className='rounded-lg p-5'  alt="Owl Aura" />
                      <img src={car5}  className='rounded-lg p-5'  alt="Owl Aura" />

  
                    </div>
                  </div>
                );

}
  return (
    <>
      <div>
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">

      </div>
    </section>
      </div>
    </>
  );
};

export default WholeProject;
