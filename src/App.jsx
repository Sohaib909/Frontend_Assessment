 import React from 'react'
 import Navbar from './components/Navbar'
 import Hero from './components/Hero'
 import Slider from './components/Slider'
 import Portfolio from './components/portfolio'
 import HowWeDoIt from './components/How'
import FeaturesSection from './components/Features'
import BrandImpact from './components/capability'
import CTASection from './components/GetStart'
import Footer from './components/Footer'
   const App = () => {
   return (
      <>
       <Navbar/>
       <Hero/>
       <Slider/>
       <HowWeDoIt/>
       <Portfolio/>
       <FeaturesSection/>
       <BrandImpact/>
       <CTASection/>
       <Footer/>
      </>
   )
 }
 
 export default App
 