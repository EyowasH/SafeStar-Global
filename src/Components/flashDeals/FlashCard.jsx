import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                  src="https://safe-star-global.vercel.app/assets/Soybean-PV9dwZxf.jpg"
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
                  src="https://safe-star-global.vercel.app/assets/Soybean-PV9dwZxf.jpg"
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
                  src="https://safe-star-global.vercel.app/assets/Soybean-PV9dwZxf.jpg"
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
                  src="https://safe-star-global.vercel.app/assets/Soybean-PV9dwZxf.jpg"
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
                  src="https://safe-star-global.vercel.app/assets/Soybean-PV9dwZxf.jpg"
                  alt="No image"
                  className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>

              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold text-black">
                  Liquid 
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
                  src="https://safe-star-global.vercel.app/assets/Soybean-PV9dwZxf.jpg"
                  alt="No image"
                  className="   mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
                />
              </div>

              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold text-black">
                  Liquid 
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
