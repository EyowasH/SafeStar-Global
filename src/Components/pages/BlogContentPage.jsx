import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BlogContent from "../BlogContent";
// import Header from '../header/Header';

const BlogContentPage = ({blogs}) => {

  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
      </div>
      <BlogContent blogs={blogs} />
      <Footer />
    </div>
  );
};

export default BlogContentPage;
