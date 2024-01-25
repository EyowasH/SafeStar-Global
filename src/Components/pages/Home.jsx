import React from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import BannerDetails from "../BannerDetails";
import CallToAction from "../CallToAction";
import Footer from "../Footer";
import Soybean from "../../assets/Soybean.jpg";
import Fire from "../../assets/Fire.jpg";
import FlashCard from "../flashDeals/FlashCard";
import Blogs from "../News";
import AboutH from "../AboutH";

const images = [
  "https://via.placeholder.com/300x300/f00/fff.png?text=Product+1",
  "https://via.placeholder.com/300x300/0f0/fff.png?text=Product+2",
  "https://via.placeholder.com/300x300/00f/fff.png?text=Product+3",
  "https://via.placeholder.com/300x300/ff0/fff.png?text=Product+4",
  "https://via.placeholder.com/300x300/f0f/fff.png?text=Product+5",
  "https://via.placeholder.com/300x300/0ff/fff.png?text=Product+6",
];

const Home = ({ blogs }) => {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        {/* <Header /> */}
        <Header />
      </div>
      <AboutH />
      <Blogs blogs={blogs} />
      {/* <Brand/> */}
      {/* <Products/> */}
      {/* <Update/> */}
      <div className="p-4 bg-white">
        <FlashCard images={images} />
      </div>
      <BannerDetails
        Text={"Our Export Products"}
        img={Soybean}
        Text1={"Stay in touch: Farmers, Ethiopia."}
        Text2={
          "Provide international markets: Local producers, reliable support."
        }
        Text3={"Access to products: Oilseeds, pulses."}
        Textp={
          "We provide international markets to local producers and reliable support to importers abroad."
        }
      />
      <BannerDetails
        reverse={true}
        Text={"Our Import Products"}
        img={Fire}
        Text1={"Construction Equipment"}
        Text2={"Fire Protection System"}
        Text3={"Industrial Machinery"}
        Textp={
          "We hope for the best and prepare for the worst. Fire safety equipment is hopefully something you’ll never have to use."
        }
      />
      {/* <Features/> */}
      <CallToAction />
      <div className="gradient__bg">
        <Footer />
      </div>
    </>
  );
};

export default Home;
