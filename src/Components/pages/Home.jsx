import React from "react";
import Navbar from "../Navbar";
import Header from "../header/Header";
import Features from "../features/Feature";
import BannerDetails from '../BannerDetails'
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
      <BannerDetails Text={"Our Export Products"}
      img={"https://yatindustrial.com/wp-content/uploads/2020/03/YAT-Export-soya-beans.jpg"}
      Text1={"Stay in touch: Farmers, Ethiopia."}
      Text2={"Provide international markets: Local producers, reliable support."}
      Text3={"Access to products: Oilseeds, pulses."}
      Textp={"We provide international markets to local producers and reliable support to importers abroad."}/>
      <Features/>
      <CallToAction />
      <div className="gradient__bg">
      <Footer />
      </div>
      
    </>
  );
};

export default Home;