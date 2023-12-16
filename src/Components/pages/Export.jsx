import React from "react";
import Navbar from "../Navbar";
import Blogs from "../BlogsE";
import Footer from "../Footer";



const Export = () => {
  return (
    <section>
      <main className="bg-slate-200 dark:bg-slate-900 dark:text-white px-4">
        <Navbar />
        <div className="h-screen flex flex-col justify-center lg:flex-row items-center md:px-32 px-5 py-5 bg-darkBackground gap-10">
          <div className=" w-full lg:w-5/4 space-y-5">
            <h1 className=" font-semibold text-3xl text-black leading-tight">
              We provide international markets to local producers and reliable
              support to importers abroad.
            </h1>
            <p className=" text-[#1d1919] pb-5">
              We stay in touch with farmers across Ethiopia. We provide
              international markets to local producers and reliable support to
              importers abroad.
            </p>

            
          </div>
          <div className=" w-full lg:w-5/4">
            <img
              className=" rounded-2xl w-50 h-35"
              src="https://yatindustrial.com/wp-content/uploads/2020/03/YAT-Export-soya-beans.jpg"
              alt="img"
            />
          </div>
        </div>
{/* 

        <div id="care" className="px-10 max-w-[1490px] mx-auto mb-[160px]">
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
          {careTitle}
        </h1>
      </FadeIn>

      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12">
          {careSubtitle}
        </h5>
      </FadeIn>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-8 items-start">
          {careList.map((item, i) => (
            <FadeIn key={i} delay={(i + 1) * 0.2} direction="left">
              <div className="flex flex-col xs:flex-row gap-6 items-center xs:items-start">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[88px] w-[68px]"
                />
                <div>
                  <h3 className="text-center xs:text-start mb-2 text-2xl lg:text-[28px] text-fontBlack font-medium">
                    {item.title}
                  </h3>
                  <h6 className="text-center xs:text-start text-base lg:text-lg text-fontGray font-medium">
                    {item.subtitle}
                  </h6>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.6} direction="right">
          <img src={imageFour} alt="plants" />
        </FadeIn>
      </div>
    </div> */}
        {/* <div className="sm:mt-36 mt-20 px-6 ">
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
        </div> */}
      </main>

      <Blogs />
      <Footer />
    </section>
  );
};

export default Export;
