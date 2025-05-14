import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Principla from './Components/Principal/Principla'
// import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Program/>
      <About/>
      <Principla/>
      <Campus/>
      {/* <Testimonials/> */}
      {/* <Contact/> */}
    </div>
  )
}

export default App