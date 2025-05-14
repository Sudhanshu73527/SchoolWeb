// src/Pages/Home.jsx
import React from 'react';
import Hero from '../Components/Hero/Hero.jsx';
import Program from '../Components/Program/Program.jsx';
import About from '../Components/About/About.jsx';
import Principla from '../Components/Principal/Principla.jsx';
import Campus from '../Components/Campus/Campus.jsx';
// import Testimonials from '../Components/Testimonials/Testimonials.jsx';
// import Contact from '../Components/Contact/Contact.jsx';
import Testing from '../Components/Testing.jsx';
const Home = () => {
  return (
    <>
    {/* <Testing/> */}
      <Hero />
      <Program />
      <About />
      <Principla />
      <Campus />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
    </>
  );
};

export default Home;
