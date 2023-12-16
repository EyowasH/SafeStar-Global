import React from "react";
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Components/pages/Home"
import About from './Components/pages/About'
import Import from './Components/pages/Import'
import Export from './Components/pages/Export'
import Contact from './Components/pages/Contact'
import AOS from "aos";
import "aos/dist/aos.css";

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
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/import" element={<Import />} />
      <Route path="/export" element={<Export />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
