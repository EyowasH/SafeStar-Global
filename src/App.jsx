import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Products from "./Components/pages/Products";
import BlogContentPage from "./Components/pages/BlogContentPage";
import useFetch from "./hooks/useFetch";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  // https://safe-star-strapi.onrender.com/api/blogs

  const { loading, data, error } = useFetch(
    "https://safe-star-strapi1.onrender.com/api/blogs?populate=*"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home 
        blogs={data?data:""} 
        />} />
        <Route path="/about" element={<About />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/News/:id" element={<BlogContentPage 
        blogs={data?data:""}
         />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
