import React from "react";
import Navbar from "../Navbar";
import Blogs from "../BlogsE";
import Footer from "../Footer";

const Export = () => {
  return (
    <section>
      <main className="bg-slate-200 dark:bg-slate-900 dark:text-white px-4">
        <Navbar />
        <div className="sm:mt-36 mt-20 px-6 ">
          <h1 className="flex justify-center text-transparent bg-clip-text hover:bg-red-600 bg-red-500 to-emerald-500 font-extrabold sm:text-6xl text-4xl text-center">
            Export!
          </h1>

          <section className="max-w-8xl mx-auto container dark:bg-slate-900 pt-5">
            <div role="contentinfo" className="flex items-center flex-col px-4">
            <p className="max-w-3xl mx-auto mt-2 text-2xl text-center ">
                We provide international markets to local producers and reliable
                support to importers abroad..
              </p>
            </div>
            
            <div className="my-7">
              <h2 className="text-3xl font-bold hover:text-red-600 text-blue-500 tracking-tight text-center sm:text-5xl ">
              Export Products
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-2xl text-center ">
                We stay in touch with farmers across Ethiopia. We provide
                international markets to local producers and reliable support to
                importers abroad.
              </p>
            </div>
            <div className="w-[70%]  h-[2px] bg-gradient-to-r from-blue-400 to-violet-500 my-8"></div>
          </section>
        </div>
      </main>

      <Blogs />
      <Footer />
    </section>
  );
};

export default Export;
