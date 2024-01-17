import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <section className="mx-auto max-w-[1200px] text-white">
        <div className=" grid py-5 md:grid-cols-3">
          <div className=" px-2 py-8 ">
            <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl">
              <a href="/#home" className="">
                ABOUT &nbsp;
                <span className="inline-block font-bold text-primary">US</span>
              </a>
            </h1>
            <p className="">
              Safe Star global partner is a privately owned import-export
              company in Addis Ababa, Ethiopia. We have proudly served
              organizations in various industries.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Megenagna 24</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />

              <p>
                {" "}
                <a href="tel:+251 116 594 545">+251 116 594 545</a><br />
                <a href="tel:+251 116 594 747">+251 116 594 747</a> 
              </p>
            </div>
            {/* Social Handle */}
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <Link to="/about">
                    <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                      About
                    </li>
                  </Link>
                  <Link to="/export">
                    <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                      Export
                    </li>
                  </Link>
                  <Link to="/import">
                    <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                      Import
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Privacy Policy
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Services
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    About us
                  </li>
                  <Link
                      to="https://safe-star-strapi1.onrender.com/admin"
                      target="_blank"
                      className="duration-200 hover:scale-105"
                    >
                      <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                      Admin
                  </li>
                    </Link>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Social Links
                </h1>
                <div className="flex flex-col gap-3">
                  <div className="mt-6 flex items-center gap-3">
                    <Link
                      to="#"
                      target="_blank"
                      className="duration-200 hover:scale-105"
                    >
                      <FaInstagram className="text-3xl" />
                    </Link>
                    <Link
                      to="https://www.facebook.com/yatindustrial"
                      target="_blank"
                      className="duration-200 hover:scale-105"
                    >
                      <FaFacebook className="text-3xl" />
                    </Link>
                    <Link
                      to="https://www.linkedin.com/company/yat-industrial"
                      target="_blank"
                      className="duration-200 hover:scale-105"
                    >
                      <FaLinkedin className="text-3xl" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link to="https://www.kelaltech.com" target="_blank">
          <div className=" flex flex-col md:items-center gap-2">
            <p className="content-center py-4 px-3">
              All Rights © Reserved 2023 | &nbsp;
              <span className=" text-brightColor">Kelal tech</span>
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Footer;
