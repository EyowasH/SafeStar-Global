import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="max-w-screen overflow-x-hidden font-poppins">
      <nav className="   ">
        {/* dektop nav */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:p-4 pb-2">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="icon"
              className="hidden sm:block sm:w-[35px] sm:-h-[35px]"
            />
            <span className="ml-2 mt-2 sm:mt-0 text-white font-semibold text-xl">
              <span className="text-red-600">Safe Star</span>{" "}
              <span className="text-white"> Global</span>
            </span>
          </Link>
          <div className="flex">
            <ul className="sm:flex justify-center hidden font-semibold text-xl">
              <li className="p-2 mr-4 text-white hover:text-red-700 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="p-2 mr-4 text-white hover:text-red-700 cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="p-2 mr-4 text-white hover:text-red-700 cursor-pointer">
                <Link to="/products">Products</Link>
              </li>
              <li className="p-2 text-white hover:text-red-700 cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex">
            <Link to="/contact">
              <button
                type="button"
                className="bg-[#FF4820] px-4 py-2 text-white hidden sm:block rounded-xl mr-2 hover:bg-red-600"
              >
                Contact Us
              </button>
            </Link>

            <button onClick={() => setOpen(!open)} className="sm:hidden block">
              <GiHamburgerMenu size={30} className="mt-2 mr-2 text-white/80" />
            </button>
          </div>
        </div>

        {/* desktop nav end */}
        <div className={`${open ? null : "hidden"} h-[15rem]`}>
          <ul>
            <li className="text-white hover:text-red-600 font-semibold pl-8 cursor-pointer pb-4 pt-6">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white hover:text-red-600 font-semibold pl-8 cursor-pointer pb-4">
              <Link to="/about">About</Link>
            </li>
            <li className="text-white hover:text-red-600 font-semibold pl-8 cursor-pointer pb-4">
              <Link to="/Products">Products</Link>
            </li>
            <li className="text-white hover:text-red-600 font-semibold pl-8 cursor-pointer pb-4">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
