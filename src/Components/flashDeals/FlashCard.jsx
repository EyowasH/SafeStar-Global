import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import liquid_cargo from "../../assets/liquid cargo.webp"
import Sinotruck from "../../assets/Sinotruck.jpg";
import Track_Trailer from "../../assets/Track Trailer.webp";
import Various_transformer from "../../assets/Various transformer.jpg";
import Generater from "../../assets/Generater.jpg";
import Car_Engine_Oil from "../../assets/Car Engine Oil.webp";
import Ferro from "../../assets/Ferro.webp";

const FlashCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-6 py-6 bg-white">
      <Slider {...settings} className="bg-white">
        <div className="p-4">
          <div className=" rounded p-2">
            <div
              id="card"
              className="   p-4   transition-all duration-500 hover:shadow-xl  "
            >
              <div className="overflow-hidden">
                <img
                  src={liquid_cargo}
                  alt="No image"
                  className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>

              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold text-black">
                  Liquid Cargo
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className=" rounded p-2">
            <div
              id="card"
              className="   p-4   transition-all duration-500 hover:shadow-xl  "
            >
              <div className="overflow-hidden">
                <img
                  src={Sinotruck}
                  alt="No image"
                  className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>

              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold text-black">
                Sinotruck
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className=" rounded p-2">
            <div
              id="card"
              className="   p-4   transition-all duration-500 hover:shadow-xl  "
            >
              <div className="overflow-hidden">
                <img
                  src={Track_Trailer}
                  alt="No image"
                  className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>

              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold text-black">
                Track Trailer
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className=" rounded p-2">
            <div
              id="card"
              className="   p-4   transition-all duration-500 hover:shadow-xl  "
            >
              <div className="overflow-hidden">
                <img
                  src={Various_transformer}
                  alt="No image"
                  className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>

              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold text-black">
                Various transformer
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className=" rounded p-2">
            <div
              id="card"
              className="   p-4   transition-all duration-500 hover:shadow-xl  "
            >
              <div className="overflow-hidden">
                <img
                  src={Generater}
                  alt="No image"
                  className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>

              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold text-black">
                Generater 
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className=" rounded p-2">
            <div
              id="card"
              className="   p-4   transition-all duration-500 hover:shadow-xl  "
            >
              <div className="overflow-hidden">
                <img
                  src={Car_Engine_Oil}
                  alt="No image"
                  className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>

              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold text-black">
                Car Engine Oil 
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className=" rounded p-2">
            <div
              id="card"
              className="   p-4   transition-all duration-500 hover:shadow-xl  "
            >
              <div className="overflow-hidden">
                <img
                  src={Ferro}
                  alt="No image"
                  className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>

              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold text-black">
                Ferro
                </h1>
              </div>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default FlashCard;
