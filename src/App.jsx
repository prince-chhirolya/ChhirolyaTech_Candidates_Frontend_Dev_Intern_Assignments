import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import AnnouncementBanner from './Components/AnnouncementBanner';
import './App.css'
import Slider from './Components/Slider/Slider';
import Slider2 from './Components/Slider/Slider2';
const App = () => {
  return (
    <div>
      <AnnouncementBanner />
      <div className='container mx-auto'>
        <Navbar />
        <Hero />
      </div>
        <Navbar />
        <Navbar />
        <Navbar />
        <Navbar />
    </div>

  );
};

export default App;