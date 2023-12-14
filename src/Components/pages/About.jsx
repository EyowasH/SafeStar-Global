import React from "react";
import Navbar from "../Navbar";
import CallToAction from "../CallToAction";
import Footer from "../Footer";
// import logo from "../../assets/logo.png"

const About = () => {
  return (
    <>
      <Navbar />
      <div className=" h-[35rem]-mb-10 sm:h-[50rem]-mb-13 sm:mb-0 bg-blue-to-b from-blue-500 to-white">
        <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 bg-slate-200 gap-4">
          {/* <div className="flex flex-col lg:hidden">
          <img
            src={logo}
            alt="img"
            className="object-contain h-45 w-96 "
          />
          <span className="ml-3 mt-2 sm:mt-0 text-white font-semibold text-xl text-center ">
              <span className="text-red-600">SafeStar</span> <span className="text-black"> Global</span>
            </span>
          </div> */}
          

          <div className=" space-y-4 lg:pt-10 sm:pt-7 gap-3">
            <h1 className=" font-semibold text-5xl text-center  text-blue-500 ">
              Our Story
            </h1>
            <p className=" font-semibold text-2xl">
            SafeStar is a privately owned import-export company based in
              Addis Ababa, Ethiopia. We have proudly served organizations in
              various industries; finding and supplying the tools and inputs
              they need, when they need them. We export Oil Seeds and Pulses,
            </p>
            <p className="font-semibold text-2xl">
              and Import Industrial Machinery & Equipment, Chemicals, Supplies
              and Metals. We have now also started importing Security and Fire
              Fighting Equipment and parts.
            </p>
            
          </div>
        </div>

        <div
          className="bg-white h-full flex flex-col px-10 md:px-40 
            py-40 space-y-5 my-0"
        >
          <div>
            <h1 className="font-bold text-[28px] text-center  hover:text-red-500 text-blue-500">
              What We Do{" "}
            </h1>
            <p className="text-[20px] text-center">
            SafeStar is a privately owned import-export company in Addis
              Ababa, Ethiopia. We have proudly served organizations in various
              industries. Finding and supplying the tools and inputs they need,
              when they need them.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-[28px] text-center hover:text-red-500 text-blue-500">
              Our Happy Clients{" "}
            </h1>
            <p className="text-[20px] text-center">
              We are proud to have worked for some of the most inspiring
              companies and organizations. Our clients are the partners that we
              have won and executed multiple projects.
            </p>
          </div>

          <div>
            <h1 className="font-bold text-[28px] text-center hover:text-red-500 text-blue-500">
              Our Mission
            </h1>
            <p className="text-[20px] text-center">
              To import and export the highest quality products and deliver top
              tier customer service provider in Ethiopia.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-[28px] text-center hover:text-red-500 text-blue-500">
              Our Vision
            </h1>
            <p className="text-[20px] text-center">
              To achieve sustainable development in Ethiopia, by playing a key
              role in supporting the Ethiopian business sector.
            </p>
          </div>
        </div>
      </div>

      <CallToAction />
      <Footer />
    </>
  );
};

export default About;
