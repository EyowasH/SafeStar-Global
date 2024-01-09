import React from "react";
import liquid_cargo from "../assets/liquid cargo.webp";
import Sinotruck from "../assets/Sinotruck.jpg";
import Track_Trailer from "../assets/Track Trailer.webp";
import Various_transformer from "../assets/Various transformer.jpg";
import Generater from "../assets/Generater.jpg";
import Car_Engine_Oil from "../assets/Car Engine Oil.webp";
import Ferro from "../assets/Ferro.webp";

const Update = () => {
  return (
    <>
      <div className="py-6  bg-white">
        <div className="mx-auto max-w-screen-xl">
          <h1 className="text-4xl font-bold text-blue-700 text-center">
            MAIN PARTNERS
          </h1>
          <div className="flex flex-col md:flex-row gap-10">
            <ul className="text-2xl font-bold flex flex-col gap-3 px-4 md:px-10 mt-4">
              <li className="cursor-pointer">-Perkins</li>
              <li className="cursor-pointer">-Lerosemer</li>
              <li className="cursor-pointer">-Sinotruck</li>
              <li className="cursor-pointer">-Royal Gold International</li>
            </ul>
            <ul className="text-2xl font-bold flex flex-col gap-3 px-4 md:px-10 mt-4">
              <li className="cursor-pointer">-Sedro</li>
              <li className="cursor-pointer">-ITTS</li>
              <li className="cursor-pointer">-CBC Media</li>
              <li className="cursor-pointer">-Matusala Construction</li>
            </ul>
            <ul className="text-2xl font-bold flex flex-col gap-3 px-4 md:px-10 mt-4">
              <li className="cursor-pointer">-Boss Oli</li>
              <li className="cursor-pointer">-Gold Paint</li>
              <li className="cursor-pointer">
                -Melose Technology Solution LLC
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[70%]  h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
      <div className="py-6 bg-white">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          <div
            id="card"
            className="   p-4   transition-all duration-500 hover:shadow-xl  "
          >
            <div className="overflow-hidden">
              <img
                src={liquid_cargo}
                alt="No image"
                className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-black">
                Liquid Cargo
              </h1>
            </div>
          </div>

          <div
            id="card"
            className="   p-4   transition-all duration-500 hover:shadow-xl  "
          >
            <div className="overflow-hidden">
              <img
                src={Sinotruck}
                alt="No image"
                className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-black">
                Sino Truke
              </h1>
            </div>
          </div>

          <div
            id="card"
            className="   p-4   transition-all duration-500 hover:shadow-xl  "
          >
            <div className="overflow-hidden">
              <img
                src={Track_Trailer}
                alt="No image"
                className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-black">
                Track Trailer
              </h1>
            </div>
          </div>

          <div
            id="card"
            className="   p-4   transition-all duration-500 hover:shadow-xl  "
          >
            <div className="overflow-hidden">
              <img
                src={Various_transformer}
                alt="No image"
                className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-black">
                Various transformer
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="py-2 bg-white">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="   p-4   transition-all duration-500 hover:shadow-xl  "
          >
            <div className="overflow-hidden">
              <img
                src="https://safe-star-global.vercel.app/assets/Fire%20Hydrant%20Cabinets--xdcnngz.jpg"
                alt="No image"
                className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
          </div>

          <div
            id="card"
            className="   p-4   transition-all duration-500 hover:shadow-xl  "
          >
            <div className="overflow-hidden">
              <img
                src="https://safe-star-global.vercel.app/assets/Fire%20Hydrant%20Cabinets--xdcnngz.jpg"
                alt="No image"
                className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
          </div>

          <div
            id="card"
            className="   p-4   transition-all duration-500 hover:shadow-xl  "
          >
            <div className="overflow-hidden">
              <img
                src="https://safe-star-global.vercel.app/assets/Fire%20Hydrant%20Cabinets--xdcnngz.jpg"
                alt="No image"
                className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-2 bg-white">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="   p-4   transition-all duration-500 hover:shadow-xl  "
          >
            <div className="overflow-hidden">
              <img
                src={Generater}
                alt="No image"
                className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-black">
                Generater
              </h1>
            </div>
          </div>

          <div
            id="card"
            className="   p-4   transition-all duration-500 hover:shadow-xl  "
          >
            <div className="overflow-hidden">
              <img
                src="https://safe-star-global.vercel.app/assets/Fire%20Hydrant%20Cabinets--xdcnngz.jpg"
                alt="No image"
                className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-black">
                Alternator
              </h1>
            </div>
          </div>

          <div
            id="card"
            className="   p-4   transition-all duration-500 hover:shadow-xl  "
          >
            <div className="overflow-hidden">
              <img
                src="https://safe-star-global.vercel.app/assets/Fire%20Hydrant%20Cabinets--xdcnngz.jpg"
                alt="No image"
                className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-black">
                Offerd
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="py-2 bg-white">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="   p-4   transition-all duration-500 hover:shadow-xl  "
          >
            <div className="overflow-hidden">
              <img
                src="https://safe-star-global.vercel.app/assets/Fire%20Hydrant%20Cabinets--xdcnngz.jpg"
                alt="No image"
                className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-black">
                Real Estate
              </h1>
            </div>
          </div>

          <div
            id="card"
            className="   p-4   transition-all duration-500 hover:shadow-xl  "
          >
            <div className="overflow-hidden">
              <img
                src={Car_Engine_Oil}
                alt="No image"
                className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-black">
                Car Engine Oil
              </h1>
            </div>
          </div>

          <div
            id="card"
            className="   p-4   transition-all duration-500 hover:shadow-xl  "
          >
            <div className="overflow-hidden">
              <img
                src={Ferro}
                alt="No image"
                className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-black">
                Turkish Ferro Steel
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
    </>
  );
};

export default Update;
