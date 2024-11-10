import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero/Hero';
import AnnouncementBanner from './Components/AnnouncementBanner';
import './App.css'
import FullScreenSections from './FullScreenSections';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
    <div>
      <AnnouncementBanner />
        <Navbar />
        <Hero />
        <FullScreenSections />
        <Footer />
    </div>

  );
};

export default App;