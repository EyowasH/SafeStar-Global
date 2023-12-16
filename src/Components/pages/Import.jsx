import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BlogsI from "../BlogI";
// import Button from "../layouts/Button";
// import { Link } from "react-scroll";

const Import = () => {
  return (
    <section>
      <main className="bg-slate-200 dark:bg-slate-900 dark:text-white px-4">
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
        <div className="h-screen flex flex-col justify-center lg:flex-row items-center md:px-32 px-5 py-5 bg-darkBackground gap-10">
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

            {/* <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Now" backgroundColor={backgroundColor} />
        </Link> */}
          </div>
          <div className=" w-full lg:w-5/4">
            <img
              className=" rounded-lg w-50 h-50"
              src="https://www.cainsafety.com/uploads/4/3/1/4/43144121/published/person-holding-fire-extinguisher-cav.jpg?1597920642"
              alt="img"
            />
          </div>
        </div>
      </main>
      <BlogsI />
      <Footer />
    </section>
  );
};

export default Import;
