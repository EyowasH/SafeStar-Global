import React from "react";
import { Link } from "react-router-dom";
import { GrSecure } from "react-icons/gr";

const BannerDetails = ({
  reverse,
  img,
  Text,
  Textp,
  Text1,
  Text2,
  Text3,
  link,
}) => {
  return (
    <div className="min-h-[550px]">
      <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
        <div data-aos="slide-up" className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  {Text}
                </h1>
                <p className="text-1xl text-gray-500 tracking-wide leading-5">
                  {Textp}
                  <br />
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <GrSecure className="text-4xl font-bold h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                    <p>{Text1}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                    <p>{Text2}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                    <p>{Text3}</p>
                  </div>
                  <Link to={link}>
                    <button className="rounded-md border-2 border-primary bg-blue-600 px-4 py-2 my-4 text-sm text-white transition-colors duration-300 hover:bg-red-600">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
              <div>
                <img
                  src={img}
                  alt="biryani img"
                  className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
    </div>
  );
};

export default BannerDetails;
