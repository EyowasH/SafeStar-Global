import React from "react";
import Navbar from "../Navbar";
import CallToAction from "../CallToAction";
import Footer from "../Footer";
import Possibility from "../possibility/Possibility";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-slate-200 dark:bg-slate-900 min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
        <div className=" w-full lg:w-3/4 space-y-4">
          <h1 className=" text-4xl font-semibold text-center lg:text-start text-blue-600 ">
            About Us
          </h1>
          <p className=" text-justify lg:text-start">
            SafeStar is a privately owned import-export company based in Addis
            Ababa, Ethiopia. We have proudly served organizations in various
            industries; finding and supplying the tools and inputs they need,
            when they need them.
          </p>
          <p className="text-justify lg:text-start">
            We export Oil Seeds and Pulses, and Import Industrial Machinery &
            Equipment, Chemicals, Supplies and Metals. We have now also started
            importing Security and Fire Fighting Equipment and parts.
          </p>
          <p className="text-justify lg:text-start">
            We are proud to have worked for some of the most inspiring companies
            and organizations. Our clients are the partners that we have won and
            executed multiple projects.
          </p>
        </div>
        <div className=" w-full lg:w-3/4">
          <img
            className=" rounded-lg"
            src="https://yatindustrial.com/wp-content/uploads/2020/03/1-29-e1584723571223.jpg"
            alt="img"
          />
        </div>
      </div>
<Possibility/>
      <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
      <div
        className="bg-[#201d27] h-full  px-10 md:px-40 
            py-40 space-y-5 my-0"
      >
        <div>
          <h1 className="font-bold text-[28px] text-center  text-blue-600">
            Our Happy Clients{" "}
          </h1>
          <p className="text-[20px] text-justify lg:text-start text-[#bababe]">
            SafeStar is a privately owned import-export company in Addis Ababa,
            Ethiopia. We have proudly served organizations in various
            industries. Finding and supplying the tools and inputs they need,
            when they need them.
          </p>
        </div>

        <div>
          <h1 className="font-bold text-[28px] text-center  text-blue-500">
            Our Vision
          </h1>
          <p className="text-[20px] text-justify lg:text-start text-[#bababe]">
            With a focus on sustainability, we aim to contribute significantly
            to Ethiopia's development journey, ensuring that our role in
            supporting local businesses translates into lasting positive impacts
            on both the economy and society.
          </p>
        </div>

        <div>
          <h1 className="font-bold text-[28px] text-center  text-blue-500">
            Our Mission
          </h1>
          <p className="text-[20px] text-justify lg:text-start text-[#bababe]">
            Our commitment lies in importing and exporting the finest products,
            guaranteeing the highest quality, and setting the benchmark for
            customer service excellence in Ethiopia.
          </p>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </>
  );
};

export default About;
