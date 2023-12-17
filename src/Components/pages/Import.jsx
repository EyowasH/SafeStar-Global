import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BlogsI from "../BlogI";
import { Link } from "react-router-dom";
// import Button from "../layouts/Button";
// import { Link } from "react-scroll";

const Import = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section>
      <Navbar />
      {/* <div className="sm:mt-36 mt-20 px-6 ">
          <h1 className="flex justify-center text-transparent bg-clip-text hover:bg-red-600 bg-red-500 to-emerald-500 font-extrabold sm:text-6xl text-4xl text-center">
            Import!
          </h1>

          <section className="max-w-8xl mx-auto container dark:bg-slate-900 pt-5">
            <div role="contentinfo" className="flex items-center flex-col px-4">
            <p className="max-w-3xl mx-auto mt-2 text-2xl text-center ">
                From requirements analysis to delivery, we import tools for
                contractors, building and business owners.
              </p>
            </div>

            <div className="my-7">
              <h2 className="text-3xl font-bold hover:text-red-600 text-blue-500 tracking-tight text-center sm:text-5xl ">
                Security and Firefighting
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-2xl text-center ">
                We hope for the best and prepare for the worst. Fire safety
                equipment is hopefully something you’ll never have to use. We
                provide equipment, training and maintenance to ensure that you
                are ready the day you need it.
              </p>
            </div>
            <div className="w-[70%]  h-[2px] bg-gradient-to-r from-blue-400 to-violet-500 my-8"></div>
          </section>
        </div> */}
      {/* <div className="h-screen flex flex-col justify-center lg:flex-row items-center md:px-32 px-5 py-5 bg-darkBackground gap-10">
          <div className=" w-full lg:w-5/4 space-y-5">
            <h1 className=" font-semibold text-3xl text-black leading-tight">
              From requirements analysis to delivery, we import tools for
              contractors, building and business owners.
            </h1>
            <p className=" text-[#1d1919] pb-5">
              We hope for the best and prepare for the worst. Fire safety
              equipment is hopefully something you’ll never have to use. We
              provide equipment, training and maintenance to ensure that you are
              ready the day you need it.
            </p>

            
          </div>
          <div className=" w-full lg:w-5/4">
            <img
              className=" rounded-lg w-50 h-50"
              src="https://www.cainsafety.com/uploads/4/3/1/4/43144121/published/person-holding-fire-extinguisher-cav.jpg?1597920642"
              alt="img"
            />
          </div>

        </div> */}

      <section id="about" className="py-16 text-white bg-[#201d27] ">
        <div className="text-center  mt-11">
          <h3 className="text-5xl font-semibold mr-10">
            Im<span className="text-cyan-600">port</span>
          </h3>
          {/* <p className="text-gray-400 my-3 text-lg">My introduction</p> */}
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div className="p-2">
              <div className="text-[#dbd6d6] my-3">
                <p className="text-justify sm:lg:text-start lg:leading-7 lg:w-11/12 mx-auto my-3">
                  Spanning requirements analysis through delivery, we specialize
                  in importing tools essential for contractors, builders, and
                  business owners. Our seamless process ensures a reliable
                  supply chain, to diverse construction and business
                  needs.
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
            {/* <div  className=" justify-center items-center"> 
              <div  className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                <img
                  src="https://yatindustrial.com/wp-content/uploads/2020/03/YAT-Export-soya-beans.jpg"
                  alt=""
                  className=" w-full object-cover bg-cyan-600 rounded-xl"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <BlogsI />
      <Footer />
    </section>
  );
};

export default Import;
