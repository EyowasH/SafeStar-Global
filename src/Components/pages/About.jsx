import React from "react";
import Navbar from "../Navbar";
import CallToAction from "../CallToAction";
import Footer from "../Footer";
import Possibility from "../possibility/Possibility";

const About = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Possibility />
      <div className="flex justify-end ml-[30%] w-[70%] h-[2px] "></div>
      <div
        className=" h-full  px-10 md:px-40 bg-gradient-to-r py-40 space-y-5 my-0">
        <div>
          <h1 className="font-bold text-[28px] text-center  text-blue-600">
            Our Happy Clients{" "}
          </h1>
          <p className="text-[20px] text-justify lg:text-start text-[#bababe]">
            Safe Star global partner is a privately owned import-export company
            in Addis Ababa, Ethiopia. We have proudly served organizations in
            various industries. Finding and supplying the tools and inputs they
            need, when they need them.
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
      <div className="gradient__bg">
        <Footer />
      </div>
    </>
  );
};

export default About;
