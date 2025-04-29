import React from 'react'
import Navbar from '../../Components/Navbar'
import Hero from '../../Components/Hero'
import About from '../../Components/About'
import HowItWorks from '../../Components/HowItWorks'
import CTA from '../../Components/CTA'
import Footer from '../../Components/Footer'
import Contact from '../../Components/Contact'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <HowItWorks/>
      <CTA/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage
