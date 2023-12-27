import React, { useEffect } from "react";
import Fire from "../assets/Fire.jpg"
import Portable from "../assets/Portable & Mobile Fire Extinguishers.jpg"
import Fire_Hydrant from "../assets/Fire Hydrant Cabinets.jpg"
import Fire_Alarm from "../assets/Fire Alarm System.jpg"
import Fire_Pumps from "../assets/Fire Pumps.jpg"
import Fire_Sprinkler from "../assets/Fire Sprinkler System.jpg"
import Concrete_Mixer from "../assets/Concrete Mixer.jpg"
import Concrete_Mixer2 from "../assets/Concrete Mixer2.jpg"
import Towing_Mixer from "../assets/Towing Mixer.jpg"
import Diesel_Generators from "../assets/Diesel Generators.jpg"
import Steel from "../assets/Steel.jpg"
import Shower_truck  from "../assets/Shower truck.jpg"
import Sino_truck from "../assets/Sino truck.jpg"
import F_Industrial from "../assets/F-Industrial.jpg"
import Manufacturing from "../assets/Manufacturing Sector.jpg"
import Real from "../assets/Real Estate Development.jpg"
import participate from "../assets/participate In Construction.jpg"


const BlogsI = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200">
      <section className="container mb-10 py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold bg-white">
          Security and Firefighting
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="  rounded-xl p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Fire}
                alt="No image"
                className="  rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-red-600">
                Fire Hose Reel and Cabinet
              </h1>
              <p className="line-clamp-3 text-white">
                A fire Hose is a high-pressure hose that carries either water or
                other fire foam to control or extinguish a fire. Most of the
                time fire hoses are attached to a buildings’ pumping system.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="  rounded-xl p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Portable}
                alt="No image"
                className="  rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-red-600">
                Portable & Mobile Fire Extinguishers
              </h1>
              <p className="line-clamp-3 text-white">
                A mobile fire protection device used to control small fires,
                mostly in emergency circumstances.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="  rounded-xl p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Fire_Hydrant}
                alt="No image"
                className="  rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-red-600">
                Fire Hydrant Cabinets
              </h1>
              <p className="line-clamp-3 text-white">
                We provide indoor and outdoor Fire Hose Reel cabinets which are
                easy to mount, withstand high load and light weight
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="  rounded-xl p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Fire_Alarm}
                alt="No image"
                className="  rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-red-600">
                Fire Alarm System
              </h1>
              <p className="line-clamp-2 text-white">
                Fully functional Fire Project Fire Alarm Solution Detection
                System
              </p>
            </div>
          </div>
          <div
            id="card"
            className="  rounded-xl p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Fire_Pumps}
                alt="No image"
                className="  rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-red-600">
                Fire Pumps
              </h1>
              <p className="line-clamp-3 text-white">
                A fire pump is a pump which is part of a sprinkler system that
                supplies water.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="  rounded-xl p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Fire_Sprinkler}
                alt="No image"
                className="  rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-red-600">
                Fire Sprinkler System
              </h1>
              <p className="line-clamp-3 text-white">
                It is an active fire protection system, spreading pressurized
                water through a piping system.
              </p>
            </div>
          </div>


          <div
            id="card"
            className="  rounded-xl p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Real}
                alt="No image"
                className="  rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-red-600">
              Real Estate Development
              </h1>
              <p className="line-clamp-3 text-white">
                It is an active fire protection system, spreading pressurized
                water through a piping system.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="  rounded-xl p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={F_Industrial}
                alt="No image"
                className="  rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-red-600">
                F-Industrial (factory) machinery
              </h1>
              <p className="line-clamp-3 text-white">
                It is an active fire protection system, spreading pressurized
                water through a piping system.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="  rounded-xl p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={Manufacturing}
                alt="No image"
                className="  rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-red-600">
              Manufacturing Sector
              </h1>
              <p className="line-clamp-3 text-white">
                It is an active fire protection system, spreading pressurized
                water through a piping system.
              </p>
            </div>
          </div>



        </div>

        <div className="py-6">
          <h1 className="mb-8 border-l-8 py-3 pl-2  text-center hover:text-red-600 text-blue-500 text-3xl font-bold bg-white">
            Construction Equipment and Spare Parts
          </h1>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
            <div
              id="card"
              className="  rounded-xl p-4 shadow-md  transition-all duration-500 hover:shadow-xl dark:bg-slate-950 border-2"
            >
              <div className="overflow-hidden">
                <img
                  src={Concrete_Mixer}
                  alt="No image"
                  className="  rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>

              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold text-amber-400">
                  Concrete Mixer
                </h1>
              </div>
            </div>

            <div
              id="card"
              className="  rounded-xl p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 border-2"
            >
              <div className="overflow-hidden">
                <img
                  src={Concrete_Mixer2}
                  alt="No image"
                  className="  rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>

              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold text-amber-400">
                  Concrete Mixer
                </h1>
              </div>
            </div>

            <div
              id="card"
              className="  rounded-xl p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 border-2"
            >
              <div className="overflow-hidden">
                <img
                  src={Towing_Mixer}
                  alt="No image"
                  className="  rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>

              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold text-amber-400">
                  Towing Mixer
                </h1>
              </div>
            </div>

            <div
              id="card"
              className="  rounded-xl p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 border-2"
            >
              <div className="overflow-hidden ">
                <img
                  src={Diesel_Generators}
                  alt="No image"
                  className="  rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110  "
                />
              </div>

              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold text-amber-400">
                  Diesel Generators
                </h1>
              </div>
            </div>
          </div>
        </div>


        <div className="py-6">
          {/* <h1 className="mb-8 border-l-8 py-3 pl-2  text-center hover:text-red-600 text-blue-500 text-3xl font-bold bg-white">
            Construction Equipment and Spare Parts
          </h1> */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">

          <div
              id="card"
              className="  rounded-xl p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 border-2"
            >
              <div className="overflow-hidden">
                <img
                  src={participate}
                  alt="No image"
                  className="  rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>

              <div className="space-y-3 py-3">
                <h1 className="line-clamp-2 text-xl font-bold text-amber-400">
                We participate In Construction 
                </h1>
              </div>
            </div>

            <div
              id="card"
              className="  rounded-xl p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 border-2"
            >
              <div className="overflow-hidden">
                <img
                  src={Shower_truck}
                  alt="No image"
                  className="  rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>

              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold text-amber-400">
                Shower truck 
                </h1>
              </div>
            </div>

            <div
              id="card"
              className="  rounded-xl p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 border-2"
            >
              <div className="overflow-hidden ">
                <img
                  src={Sino_truck}
                  alt="No image"
                  className="  rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110  "
                />
              </div>

              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold text-amber-400">
                Sino truck
                </h1>
              </div>
            </div>

            <div
              id="card"
              className="  rounded-xl p-4 shadow-md  transition-all duration-500 hover:shadow-xl dark:bg-slate-950 border-2"
            >
              <div className="overflow-hidden">
                <img
                  src={Steel}
                  alt="No image"
                  className="  rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>

              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold text-amber-400">
                Steel 
                </h1>
              </div>
            </div>

    
          </div>
        </div>


      </section>
      <section className="container mb-10 py-8"></section>
    </main>
  );
};

export default BlogsI;
