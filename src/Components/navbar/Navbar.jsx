import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        {/* <div className="gpt3__navbar-links_logo">
          <img src="http://localhost:5173/src/assets/logo.png" />
        </div> */}
        <Link to="/" className="flex items-center">
            <img
              src="http://localhost:5173/src/assets/logo.png"
              alt="icon"
              className="hidden sm:block sm:w-[35px] sm:-h-[35px]"
            />
            <span className="ml-2 mt-2 sm:mt-0 text-white font-semibold text-xl">
              <span className="text-red-600">Safe Star</span> <span className="text-white"> Global</span>
            </span>
          </Link>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        {/* <p>Sign in</p> */}
        <button type="button">Contact Us</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            {/* <p>Sign in</p> */}
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;