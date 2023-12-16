import React, { useEffect } from "react";

const BlogsI = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200">
      <section className="container mb-10 py-8">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Security and Firefighting
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src="https://yatindustrial.com/wp-content/uploads/2020/03/1-29-e1584723571223.jpg"
                alt="No image"
                className="mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-red-600">
                Fire Hose Reel and Cabinet
              </h1>
              <p className="line-clamp-3">
                A fire Hose is a high-pressure hose that carries either water or
                other fire foam to control or extinguish a fire. Most of the
                time fire hoses are attached to a buildings’ pumping system.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src="https://yatindustrial.com/wp-content/uploads/2020/03/red-fire-extinguisher-lot-1661377-1024x683.jpg"
                alt="No image"
                className="mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-red-600">
                Portable & Mobile Fire Extinguishers
              </h1>
              <p className="line-clamp-2">
                A mobile fire protection device used to control small fires,
                mostly in emergency circumstances.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src="https://yatindustrial.com/wp-content/uploads/2020/06/YAT-Industrial-fire-hose-reel.jpg"
                alt="No image"
                className="mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-red-600">
                Fire Hydrant Cabinets
              </h1>
              <p className="line-clamp-3">
                We provide indoor and outdoor Fire Hose Reel cabinets which are
                easy to mount, withstand high load and light weight
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src="https://yatindustrial.com/wp-content/uploads/2020/03/YAT-Fire-ALarm-import.jpg"
                alt="No image"
                className="mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-red-600">
                Fire Alarm System
              </h1>
              <p className="line-clamp-2">
                Fully functional Fire Project Fire Alarm Solution Detection
                System
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src="https://yatindustrial.com/wp-content/uploads/2020/03/YAT-fire-pump.jpg"
                alt="No image"
                className="mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-red-600">
                Fire Pumps
              </h1>
              <p className="line-clamp-2">
                A fire pump is a pump which is part of a sprinkler system that
                supplies water.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src="https://yatindustrial.com/wp-content/uploads/2020/03/YAT-fire-sprinkel.jpg"
                alt="No image"
                className="mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-red-600">
                Fire Sprinkler System
              </h1>
              <p className="line-clamp-2">
                It is an active fire protection system, spreading pressurized
                water through a piping system.
              </p>
            </div>
          </div>
        </div>

        <div className="py-6">
          <h1 className="mb-8 border-l-8 py-3 pl-2  text-center hover:text-red-600 text-blue-500 text-3xl font-bold">
            Construction Equipment and Spare Parts
          </h1>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          <div
            id="card"
            className="p-4 shadow-md  transition-all duration-500 hover:shadow-xl dark:bg-slate-950 border-2"
          >
            <div className="overflow-hidden">
              <img
                src="https://yatindustrial.com/wp-content/uploads/2020/03/YAT-fire-pump.jpg"
                alt="No image"
                className="mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-black">
                Concrete Mixer
              </h1>
            </div>
          </div>

          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 border-2"
          >
            <div className="overflow-hidden">
              <img
                src="https://yatindustrial.com/wp-content/uploads/2020/03/YAT-Fire-ALarm-import.jpg"
                alt="No image"
                className="mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-black">
                Concrete Mixer
              </h1>
            </div>
          </div>

          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 border-2"
          >
            <div className="overflow-hidden">
              <img
                src="https://yatindustrial.com/wp-content/uploads/2020/06/YAT-Industrial-fire-hose-reel.jpg"
                alt="No image"
                className="mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-black">
                Towing Mixer
              </h1>
            </div>
          </div>

          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 border-2"
          >
            <div className="overflow-hidden ">
              <img
                src="https://yatindustrial.com/wp-content/uploads/2020/03/YAT-fire-sprinkel.jpg"
                alt="No image"
                className="mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110  "
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-black">
                Diesel Generators
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
