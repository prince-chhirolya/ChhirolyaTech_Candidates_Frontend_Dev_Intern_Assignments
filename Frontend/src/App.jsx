import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import "./Styles/App.css"
import FrontierAIResearch from './Components/FrontierAIResearch'
import HeroSection from './Components/HeroSection'
import InfoSection from './Components/InfoSection'
import PartnersSection from './Components/PartnersSection'
import Footer from './Components/Footer'
import Customer from './Components/Customer'
import Future from './Components/Future'
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <FrontierAIResearch />
      <HeroSection />
      <InfoSection />
      <PartnersSection />
      <Customer />
      <Future />
      <Footer />
    </div>
  )
}

export default App
