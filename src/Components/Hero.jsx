import React from "react";
import { Link } from "react-router-dom";
// import Stars from "../../images/stars.png";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <div className="font-poppins overflow-x-hidden">
      <div className="relative  pt-[120px] pb-[100px] lg:pt-[150px] bg-gradient-to-br from-blue-100 ">
        <div className="container mx-auto px-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <motion.div
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <h1 className="text-transparent bg-clip-text sm:text-8xl text-3xl bg-gradient-to-r from-black to-red-300 mb-3  font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                    Here you can
                    <br />
                    <span className="sm:text-7xl text-5xl">
                      Level Up Your Business
                    </span>
                  </h1>
                  <p className="text-body-color text-2xl  mb-8 max-w-[480px] sm:text-base">
                  From requirements analysis to delivery, we import tools for contractors, building and business owners.!
                  </p>
                </motion.div>
                <motion.div
                  variants={{
                    visible: { opacity: 1, x: 0 },
                    hidden: { opacity: 0, x: -75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <ul className="flex flex-wrap items-center">
                    <li>
                      <Link
                        to="/contact"
                        className="bg-gradient-to-r from-black to-red-300 inline-flex items-center justify-center rounded-lg py-3 px-4 text-center text-base font-normal text-white hover:bg-blue-700 sm:px-10 lg:px-8 xl:px-10"
                      >
                        Get Started
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        to="/about"
                        className="bg-blue-200/80 ml-6 inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-black font-normal hover:bg-blue-200 sm:px-10 lg:px-8 xl:px-10"
                      >
                        Learn More
                      </Link>
                    </li> */}
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.8, delay: 0.25 }}
                  className="clients pt-16"
                >
                  <h6 className="text-body-color mb-8  flex items-center text-lg font-normal">
                    Some Of Our Clients
                    <span className="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
                  </h6>
                  <div className="flex items-center h-5">
                    <div className="mr-6 w-full py-5">
                      <img
                        src="https://perkinsindustrial.com/wp-content/uploads/2020/06/clients_YAT_EthiopianAirlines.png"
                        alt="ayroui"
                      />
                    </div>
                    <div className="mr-6 w-full py-5">
                      <img
                        src="https://perkinsindustrial.com/wp-content/uploads/2020/06/clients_YAT_ethiotelecom_transparent.png"
                        alt="graygrids"
                      />
                    </div>
                    <div className="mr-6 w-full py-5">
                      <img
                        src="https://perkinsindustrial.com/wp-content/uploads/2020/06/clients_YAT_Egled_Transparent.png"
                        alt="uideck"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <motion.div
                  variants={{
                    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                    hidden: { opacity: 0, x: 75, filter: "blur(5px)" },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="relative z-10 inline-block pt-11 lg:pt-0 mt-6"
                >
                  <img
                    src="https://yatindustrial.com/wp-content/uploads/2020/03/1-29-e1584723571223.jpg"
                    alt="hero"
                    className="max-w-full lg:ml-auto rounded-2xl sm:toas:translate-x-[200px] sm:taos:opacity-0 sm:hover:-translate-y-2 sm:transition sm:ease-in-out duration-300 sm:hover:drop-shadow-xl sm:mx-auto shadow-lg max-auto w-full    border-4"
                  />
                  {/* <img
                    src={Stars}
                    alt="stars"
                    className="z-20 w-28 absolute mt-[-105%] right-[-5%] opacity-70 hover:opacity-100"
                  /> */}
                  <span className="absolute -left-8 -bottom-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;