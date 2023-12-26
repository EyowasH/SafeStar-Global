import React, { useEffect } from "react";
import coffee from "../assets/coffee.jpg"

const Blogs = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200">
      <section className="container mb-10 py-8 ">
        <h1 className="mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold bg-white">
          Export Products{" "}
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="rounded-xl  p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src="https://yatindustrial.com/wp-content/uploads/2020/06/YAT-Sesame.jpg"
                alt="No image"
                className="rounded-xl mx-auto h-[250px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:rounded-xl hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold  text-blue-600 ">
                Sesame
              </h1>
              <p className="line-clamp-3 text-white">
                Sesame, often used as food and flavoring is also cultivated for
                its oil content. It is sometimes referred to as bean and is
                found in most of the tropical, subtropical, and southern
                temperate areas of the world.
              </p>
            </div>
          </div>
          <div
            id="card"
            className=" rounded-xl p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src="https://yatindustrial.com/wp-content/uploads/2020/03/YAT-Export-kidney-beans.jpg"
                alt="No image"
                className=" rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-blue-600">
                Kidney Bean
              </h1>
              <p className="line-clamp-3 text-white">
                The kidney bean is a variety of the common bean. It is named for
                its visual resemblance in shape and colour to a kidney. Red
                kidney beans should not be confused with other red beans, such
                as adzuki beans.
              </p>
            </div>
          </div>
          <div
            id="card"
            className=" rounded-xl p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src="https://yatindustrial.com/wp-content/uploads/2020/03/YAT-Export-soya-beans.jpg"
                alt="No image"
                className=" rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-blue-600">
                Soybean
              </h1>
              <p className="line-clamp-3 text-white">
                The soybean or soya bean (Glycine max) is a species of legume
                native to East Asia, widely grown for its edible bean, which has
                numerous uses. Traditional unfermented food uses of soybeans
                include soy milk, from which tofu and tofu skin are made.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className=" rounded-xl p-4 shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src="https://yatindustrial.com/wp-content/uploads/2020/03/YAT-Export-lupin-bean.jpg"
                alt="No image"
                className=" rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-blue-600">
                Lupin Bean
              </h1>
              <p className="line-clamp-3 text-white">
                Lupin or lupini beans are the yellow legume seeds of the genus
                Lupinus. They are traditionally eaten as a pickled snack food,
                primarily in the Mediterranean basin (L. albus) and Latin
                America (L. mutabilis).
              </p>
            </div>
          </div>
          <div
            id="card"
            className=" rounded-xl p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src="https://yatindustrial.com/wp-content/uploads/2020/03/YAT-Export-mung-beans.jpg"
                alt="No image"
                className=" rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-blue-600">
                Mung Bean{" "}
              </h1>
              <p className="line-clamp-3 text-white">
                The mung bean (Vigna radiata) also known as the green gram,
                maash, or moon. It is a common commodity in Asia. But what most
                don’t know is that it is also commonly available in Ethiopia.
              </p>
            </div>
          </div>
          <div
            id="card"
            className=" rounded-xl p-4 shadow-lg transition-all duration-200 hover:shadow-xl dark:bg-slate-950"
          >
            <div className="overflow-hidden">
              <img
                src={coffee}
                alt="No image"
                className=" rounded-xl mx-auto h-[250px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>

            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-blue-600">
                coffee
              </h1>
              <p className="line-clamp-3 text-white">
                The coffee is known for its sweetness, fragrance, and light to
                medium body.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mb-10 py-8"></section>
    </main>
  );
};

export default Blogs;
