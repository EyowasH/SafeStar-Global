import React from "react";
import { Link } from "react-router-dom";

const BannerDetails = ({ reverse, img, Text, Textp, Text1, Text2, Text3 , link}) => {
  return (
    <section>
      <main className="bg-white dark:bg-slate-900 dark:text-white px-2">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] pt-5">
          <div className="grid grid-cols-1 items-center gap-4  md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="text-4xl md:text-6xl text-red-800">{Text}</h1>
              <p className="text-bold  dark:text-slate-400">{Textp}</p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2  md:gap-4">
                  <li className="font-medium">{Text1}</li>
                  <li className="font-medium">{Text2}</li>
                  <li className="font-medium">{Text3}</li>
                </ul>
              </div>
              <div className="space-x-4">
              
            <Link to={link}>
            <button className="rounded-md border-2 border-primary bg-blue-600 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-red-600">
                  Get Started
                </button>
            </Link>
                
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
              <img
                src={img}
                alt="No image"
                className=" rounded-2xl sm:toas:translate-x-[200px] sm:taos:opacity-0 sm:hover:-translate-y-2 sm:transition sm:ease-in-out duration-300 sm:hover:drop-shadow-xl sm:mx-auto shadow-lg max-auto w-full    border-4"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;
