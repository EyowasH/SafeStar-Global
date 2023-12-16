import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BlogsI from "../BlogI";

const Import = () => {
  return (
    <section>
     <main className="bg-slate-200 dark:bg-slate-900 dark:text-white px-4">
        <Navbar />
        <div className="sm:mt-36 mt-20 px-6 ">
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
        </div>
        
      </main>
      <BlogsI />
      <Footer />
    </section>
  );
};

export default Import;
