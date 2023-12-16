import React from "react";
import Navbar from "../Navbar";
import CallToAction from "../CallToAction";
import Footer from "../Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <div className="bg-slate-200 dark:bg-slate-900 min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
        <div className=" w-full lg:w-3/4 space-y-4">
          <h1 className=" text-4xl font-semibold text-center lg:text-start text-blue-600">
            About Us
          </h1>
          <p className=" text-justify lg:text-start">
            SafeStar is a privately owned import-export company based in Addis
            Ababa, Ethiopia. We have proudly served organizations in various
            industries; finding and supplying the tools and inputs they need,
            when they need them. We export Oil Seeds and Pulses, and
          </p>
          <p className="text-justify lg:text-start">
            Import Industrial Machinery & Equipment, Chemicals, Supplies and
            Metals. We have now also started importing Security and Fire
            Fighting Equipment and parts.
          </p>
          <p className="text-justify lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            illum. Accusantium ab expedita veniam nobis aut, in rerum
            repellendus! Exercitationem libero recusandae corrupti accusantium
            reiciendis in placeat illo maxime ea.
          </p>
        </div>
        <div className=" w-full lg:w-3/4">
          <img
            className=" rounded-lg"
            src="https://yatindustrial.com/wp-content/uploads/2020/03/1-29-e1584723571223.jpg"
            alt="img"
          />
        </div>
      </div>

      {/* <div className=" min-h-screen flex flex-col md:flex-row items-center md:mx-32 mx-5">
        
        <div>
          <h1 className="text-5xl font-semibold text-center md:text-start mt-14 md:mt-0">
            About Us
          </h1>

          <div className=" w-full md:w-3/4 space-y-5 mt-4">
            <p>
              SafeStar is a privately owned import-export company
              based in Addis Ababa, Ethiopia. We have proudly served
              organizations in various industries; finding and supplying the
              tools and inputs they need, when they need them. We export Oil
              Seeds and Pulses, and
            </p>

            <p>
              Import Industrial Machinery & Equipment, Chemicals, Supplies and
              Metals. We have now also started importing Security and Fire
              Fighting Equipment and parts.
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://yatindustrial.com/wp-content/uploads/2020/03/1-29-e1584723571223.jpg"
            alt="img"
          />
        </div>
      </div> */}
      <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
      <div
          className="bg-white h-full  px-10 md:px-40 
            py-40 space-y-5 my-0"
        >
          <div>
            <h1 className="font-bold text-[28px] text-center  hover:text-red-500 text-blue-500">
              What We Do{" "}
            </h1>
            <p className="text-[20px] text-center">
            SafeStar is a privately owned import-export company in Addis
              Ababa, Ethiopia. We have proudly served organizations in various
              industries. Finding and supplying the tools and inputs they need,
              when they need them.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-[28px] text-center hover:text-red-500 text-blue-500">
              Our Happy Clients{" "}
            </h1>
            <p className="text-[20px] text-center">
              We are proud to have worked for some of the most inspiring
              companies and organizations. Our clients are the partners that we
              have won and executed multiple projects.
            </p>
          </div>

          <div>
            <h1 className="font-bold text-[28px] text-center hover:text-red-500 text-blue-500">
              Our Mission
            </h1>
            <p className="text-[20px] text-center">
              To import and export the highest quality products and deliver top
              tier customer service provider in Ethiopia.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-[28px] text-center hover:text-red-500 text-blue-500">
              Our Vision
            </h1>
            <p className="text-[20px] text-center">
              To achieve sustainable development in Ethiopia, by playing a key
              role in supporting the Ethiopian business sector.
            </p>
          </div>
        </div>

      <CallToAction />
      <Footer />
    </>
  );
};

export default About;

// import React from "react";
// // import img from "../assets/img/about.jpg";

// const About = () => {
//   return (
//     <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
//       <div className=" w-full lg:w-3/4 space-y-4">
//         <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
//         <p className=" text-justify lg:text-start">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
//           labore rerum tempore tenetur commodi natus quos itaque voluptatum
//           repudiandae nostrum accusantium vero voluptate aspernatur totam,
//           laboriosam aut, et quae consequatur?
//         </p>
//         <p className="text-justify lg:text-start">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quia
//           suscipit illum, numquam incidunt nostrum dolor officia doloremque
//           cupiditate, placeat explicabo sed iure atque neque quidem ipsam!
//           Dolor, minus reiciendis.
//         </p>
//         <p className="text-justify lg:text-start">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illum.
//           Accusantium ab expedita veniam nobis aut, in rerum repellendus!
//           Exercitationem libero recusandae corrupti accusantium reiciendis in
//           placeat illo maxime ea.
//         </p>
//       </div>
//       <div className=" w-full lg:w-3/4">
//         <img className=" rounded-lg" src="https://yatindustrial.com/wp-content/uploads/2020/03/1-29-e1584723571223.jpg" alt="img" />
//       </div>
//     </div>
//   );
// };

// export default About;
