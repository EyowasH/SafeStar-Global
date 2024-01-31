import React, { useEffect } from "react";
import coffee from "../assets/coffee.jpg";
import coffee2 from "../assets/coffee2.jpg";
import coffee3 from "../assets/coffee3.jpg";
import sesame1 from "../assets/sesame1.jpg";
import peanuts from "../assets/peanuts.jpg";
import Green_Mung from "../assets/Green_Mung.jpg";
import Chickpea1 from "../assets/Chickpea1.webp";
import Red_Kidney_Bean from "../assets/Red_Kidney_Bean.jpg";
import Soybean from "../assets/Soybean.jpg";

const Blogs = () => {
  return (
    <>
      {/* <section className="container mb-10 py-8 ">
        <h1 className="rounded-xl mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold bg-white">
          Export Products{" "}
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="rounded-xl  p-4 shadow-lg transition-all duration-500 hover:shadow-xl bg-slate-50"
          >
            <div className="overflow-hidden">
              <img
                src={sesame}
                alt="No image"
                className="mx-auto h-[250px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:rounded-xl hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold  text-blue-600 ">
                Sesame
              </h1>
              <p className="line-clamp-3 text-black">
                Sesame, often used as food and flavoring is also cultivated for
                its oil content. It is sometimes referred to as bean and is
                found in most of the tropical, subtropical, and southern
                temperate areas of the world.
              </p>
            </div>
          </div>
          <div
            id="card"
            className=" rounded-xl p-4 shadow-lg transition-all duration-200 hover:shadow-xl bg-slate-50"
          >
            <div className="overflow-hidden">
              <img
                src={Kidney_Bean}
                alt="No image"
                className="mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-blue-600">
                Kidney Bean
              </h1>
              <p className="line-clamp-3 text-black">
                The kidney bean is a variety of the common bean. It is named for
                its visual resemblance in shape and colour to a kidney. Red
                kidney beans should not be confused with other red beans, such
                as adzuki beans.
              </p>
            </div>
          </div>
          <div
            id="card"
            className=" rounded-xl p-4 shadow-lg transition-all duration-200 hover:shadow-xl bg-slate-50"
          >
            <div className="overflow-hidden">
              <img
                src={Soybean}
                alt="No image"
                className="mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-blue-600">
                Soybean
              </h1>
              <p className="line-clamp-3 text-black">
                The soybean or soya bean (Glycine max) is a species of legume
                native to East Asia, widely grown for its edible bean, which has
                numerous uses. Traditional unfermented food uses of soybeans
                include soy milk, from which tofu and tofu skin are made.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 pt-3">
          <div
            id="card"
            className=" rounded-xl p-4 shadow-lg transition-all duration-500 hover:shadow-xl bg-slate-50"
          >
            <div className="overflow-hidden">
              <img
                src={Lupin_Bean}
                alt="No image"
                className=" mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-blue-600">
                Lupin Bean
              </h1>
              <p className="line-clamp-3 text-black">
                Lupin or lupini beans are the yellow legume seeds of the genus
                Lupinus. They are traditionally eaten as a pickled snack food,
                primarily in the Mediterranean basin (L. albus) and Latin
                America (L. mutabilis).
              </p>
            </div>
          </div>
          <div
            id="card"
            className=" rounded-xl p-4 shadow-lg transition-all duration-200 hover:shadow-xl bg-slate-50"
          >
            <div className="overflow-hidden">
              <img
                src={Mung_Bean}
                alt="No image"
                className="mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-blue-600">
                Mung Bean{" "}
              </h1>
              <p className="line-clamp-3 text-black">
                The mung bean (Vigna radiata) also known as the green gram,
                maash, or moon. It is a common commodity in Asia. But what most
                don’t know is that it is also commonly available in Ethiopia.
              </p>
            </div>
          </div>
          <div
            id="card"
            className=" rounded-xl p-4 shadow-lg transition-all duration-200 hover:shadow-xl bg-slate-50"
          >
            <div className="overflow-hidden">
              <img
                src={coffee}
                alt="No image"
                className="mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-blue-600">
                coffee
              </h1>
              <p className="line-clamp-3 text-black">
                The coffee is known for its sweetness, fragrance, and light to
                medium body.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <div className="bg-white">
        <h1 className="rounded-xl py-2 pl-2 text-center text-3xl font-bold bg-white">
          MAJOR EXPORT COMMODITIES
        </h1>
        <h1 className="rounded-xl  pl-2 text-center text-3xl font-bold text-red-500">
          Coffee
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 ">
          <div
            id="card"
            className="p-4 transition-all duration-500 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img
                src={coffee}
                alt="No image"
                className="mx-auto h-[250px] w-full"
              />
            </div>
          </div>

          <div
            id="card"
            className="p-4 transition-all duration-500 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img src={coffee2} alt="No image" className="mx-auto h-[250px]" />
            </div>
          </div>

          <div
            id="card"
            className="p-4 transition-all duration-500 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img
                src={coffee3}
                alt="No image"
                className="mx-auto h-[250px] w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <h1 className="pl-2 text-center text-3xl font-bold text-red-500">
          Oil Seed
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 ">
          <div
            id="card"
            className="p-4 transition-all duration-500 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img
                src={sesame1}
                alt="No image"
                className="mx-auto h-[250px] w-full"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">Sesame</h1>
            </div>
          </div>

          <div
            id="card"
            className="p-4 transition-all duration-500 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img src={Soybean} alt="No image" className="mx-auto h-[250px]" />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">Soybeans</h1>
            </div>
          </div>

          <div
            id="card"
            className="p-4 transition-all duration-500 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img
                src={peanuts}
                alt="No image"
                className="mx-auto h-[250px] w-full"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">Peanuts</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <h1 className="pl-2 text-center text-3xl font-bold text-red-500">
          Pulses
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 ">
          <div
            id="card"
            className="p-4 transition-all duration-500 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img
                src={Green_Mung}
                alt="No image"
                className="mx-auto h-[250px] w-full"
              />
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold">Green Mung</h1>
            </div>
          </div>

          <div
            id="card"
            className="p-4 transition-all duration-500 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img src={Chickpea1} alt="No image" className="mx-auto h-[250px]" />
              <div className="space-y-3 py-3 px-2">
                <h1 className="line-clamp-1 text-xl font-bold">Chickpea</h1>
              </div>
            </div>
          </div>

          <div
            id="card"
            className="p-4 transition-all duration-500 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img
                src={Red_Kidney_Bean}
                alt="No image"
                className="mx-auto h-[250px] w-full"
              />
              <div className="space-y-3 py-3">
                <h1 className="line-clamp-1 text-xl font-bold">Red Kidney Bean</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
