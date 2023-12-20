import React from "react";
import Navbar from "../Navbar";
// import Hero from '../Hero'
import Header from "../header/Header";
import Features from "../features/Feature";
// import BannerDetails from '../BannerDetails'
import CallToAction from "../CallToAction";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      {/* <Brand/> */}
      
      <CallToAction />
      <Features/>
      <Footer />
    </>
  );
};

export default Home;
