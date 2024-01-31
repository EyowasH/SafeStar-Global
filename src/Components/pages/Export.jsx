import React from "react";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Export = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section>
      <section id="about" className="py-16 bg-slate-50 text-black ">
        <div className="text-center  mt-11">
          <h3 className="text-5xl font-semibold mr-10">
            Ex<span className="text-cyan-600">port</span>
          </h3>
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div className="p-2">
              <div className="text-black my-3">
                <p className="text-justify sm:lg:text-start lg:leading-7 lg:w-11/12 mx-auto my-3">
                  Facilitating global market access, we connect Ethiopian
                  producers to international networks. Our commitment lies in
                  providing unwavering support to importers worldwide, ensuring
                  a seamless and reliable partnership.
                </p>
                <p className="text-justify sm:lg:text-start lg:leading-7 lg:w-11/12 mx-auto ">
                  Staying connected with farmers across Ethiopia, we extend
                  international market opportunities to local producers.
                  Additionally, we offer steadfast support to importers abroad,
                  ensuring a reliable and seamless partnership.
                </p>
                <div className="flex mt-10 justify-center items-center gap-7">
                  {info.map((content) => (
                    <div key={content.text}>
                      <h3 className="md:text-4xl text-2xl font-semibold text-black">
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
      <div className="gradient__bg">
        <Footer />
      </div>
    </section>
  );
};

export default Export;
