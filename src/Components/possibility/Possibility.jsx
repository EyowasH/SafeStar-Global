import React from "react";
// import Fire from "../../assets/Fire.jpg"
import Sinotruck from "../../assets/Sinotruckr.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding bg-slate-50" id="possibility">
    <div className="gpt3__possibility-image">
      <img
        src={Sinotruck}
        alt="possibility"
        className="hidden sm:block"
      />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text text-black">About Us</h1>
      <p className=" text-justify lg:text-start">
        Safe Star global partner is a privately owned import-export company
        based in Addis Ababa, Ethiopia. We have proudly served organizations in
        various industries; finding and supplying the tools and inputs they
        need, when they need them.
      </p>
      <p className="text-justify lg:text-start">
        We export Oil Seeds and Pulses, and Import Industrial Machinery &
        Equipment, Chemicals, Supplies and Metals. We have now also started
        importing Security and Fire Fighting Equipment and parts.
      </p>

      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
