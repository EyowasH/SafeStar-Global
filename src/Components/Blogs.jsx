import React from "react";
import { MdOutlineDateRange } from "react-icons/md";
// import { Link } from "react-router-dom";

const Blogs = () => {
  // console.log("Blog Object");
  // console.log(blogs);

  const blogs = [
    {
      id: 1,
      title: "News 1",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      coverImg:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png",
    },
    {
      id: 2,
      title: "News 2",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      coverImg:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png",
    },
    {
      id: 3,
      title: "News 3",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      coverImg:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png",
    },
  ];

  return (
    <div className="w-full bg-[#f9f9f9] py-[50px]">
      
      <div className="max-w-[1240px] mx-auto">
      <h1 className="font-bold text-3xl my-1 pb-4 text-center">
      
        Read Our Latest News
      </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
          {blogs.map(
            (blog) => (
              // <Link key={blog.id} to={`/blog/${blog.id}`}>
              <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                <img className="h-56 w-full object-cover" src={blog.coverImg} />
                <div className="p-8">
                  <div className="flex flex-row">
                  <MdOutlineDateRange />&nbsp;&nbsp;
                  <p >12/1/2024</p>
                  </div>
                  <h3 className="font-bold text-2xl my-1">{blog.title}</h3>
                  <p className="text-gray-600 text-xl">{blog.desc}</p>
                </div>
              </div>
            )
            // </Link>
          )}

          {/* {blogs1.map((blog)=>

                <Link key={blog.id} to={`/blog/${blog.id}`}>
                    <div  className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                        <img className='h-56 w-full object-cover' src={blog.coverImg} />
                        <div className='p-8'>
                            <h3 className='font-bold text-2xl my-1'>{blog.title}</h3>
                            <p className='text-gray-600 text-xl'>{blog.desc}</p>
                        </div>
                    </div>
                </Link>
                )} */}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
