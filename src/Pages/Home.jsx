// src/Pages/Home.jsx
import React from 'react';
import Hero from '../Components/Hero/Hero.jsx';
import Program from '../Components/Program/Program.jsx';
import About from '../Components/About/About.jsx';
import Principla from '../Components/Principal/Principla.jsx';
import Campus from '../Components/Campus/Campus.jsx';
import Testing from '../Components/Testing.jsx';
import Hero2 from '../Components/Hero2/Hero2.jsx';
import Eqipments from '../Components/Eqipments/Eqipments.jsx';
import About1 from '../Components/About1/About1.jsx';
import Principal1 from '../Components/Principal1/Principal1.jsx';
import Test from '../Components/Testimonials/Test.jsx';
import Activitis from '../Components/RecentActivitis/Activitis.jsx';
import Footer from '../Components/Footer/Footer.jsx';
import Sectiontabs from '../Components/Sectiontabs/Sectiontabs.jsx';
import Contact from '../Components/Contact/Contact.jsx';
import Topper from '../Components/Topper/Topper.jsx';
const Home = () => {
  return (
    <>
    {/* <Testing/> */}
    <Hero2/>
    <Eqipments/>
    <About1/>
    <Program /> 
    <Principal1/>
    <Activitis/>
    <Test/>
    <Sectiontabs/>
    <Contact/>
    <Topper/>
    <Footer/>
    
      {/* <Hero /> */}
       {/* */}
      {/* <About /> */}
      {/* <Principla /> */}
      {/* <Campus />  */}
      {/*  */}
      {/* <Contact /> */}
    </>
  );
};

export default Home;
