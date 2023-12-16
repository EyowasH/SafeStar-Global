import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import BannerDetails from '../BannerDetails'
import CallToAction from '../CallToAction'
import Footer from '../Footer'


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <BannerDetails reverse={true} img="https://yatindustrial.com/wp-content/uploads/2020/03/1-29-e1584723571223.jpg" 
      Text={"Our Import Products"}
      Text1={"Fire Protection System"}
      Text2={"Construction Equipment"}
      Text3={"Industrial Machinery"}
      Textp={"From requirements analysis to delivery, we import tools for contractors, building and business owners."}
      link={"/import"}/>
      <BannerDetails img="https://yatindustrial.com/wp-content/uploads/2020/03/YAT-Export-lupin-bean.jpg"
         Text={"Our Export Products"}
         Text1={"Connecting with Ethiopian Farmers"}
         Text2={"Facilitating International Markets"}
         Text3={"Diverse Agricultural Products"}
         Textp={"We stay connected with Ethiopian farmers, providing international markets, reliable importer support, and seasonal access to diverse agricultural products."}
         link={"/export"}/>
    <CallToAction/>
      <Footer/>
    </>
  )
}

export default Home
