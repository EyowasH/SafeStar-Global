import React from "react";
import Navbar from "../Navbar";
import BlogsI from "../BlogI";
import { Link } from "react-router-dom";

const Import = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section>
      <div className="gradient__bg">
        <Navbar />
      </div>
      <section id="about" className="py-16 text-white bg-[#201d27] ">
        <div className="text-center  mt-11">
          <h3 className="text-5xl font-semibold mr-10">
            Im<span className="text-cyan-600">port</span>
          </h3>
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div className="p-2">
              <div className="text-[#dbd6d6] my-3">
                <p className="text-justify sm:lg:text-start lg:leading-7 lg:w-11/12 mx-auto my-3">
                  Spanning requirements analysis through delivery, we specialize
                  in importing tools essential for contractors, builders, and
                  business owners. Our seamless process ensures a reliable
                  supply chain, to diverse construction and business needs.
                </p>
                <p className="text-justify sm:lg:text-start lg:leading-7 lg:w-11/12 mx-auto ">
                  We hope for the best and prepare for the worst. Fire safety
                  equipment is hopefully something you’ll never have to use. We
                  provide equipment, training and maintenance to ensure that you
                  are ready the day you need it.
                </p>
                <div className="flex mt-10 justify-center items-center gap-7">
                  {info.map((content) => (
                    <div key={content.text}>
                      <h3 className="md:text-4xl text-2xl font-semibold text-white">
                        {content.count}
                        <span className="text-cyan-600">+</span>{" "}
                      </h3>
                      <span className="md:text-base text-xs">
                        {content.text}
                      </span>
                    </div>
                  ))}
                </div>
                <br />
                <br />
                <Link to="/contact">
                  <button
                    type="button"
                    className="items-center bg-blue-600 px-4 py-2 ext-white rounded-xl mt-2"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogsI />
    </section>
  );
};

export default Import;
