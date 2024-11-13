import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Pages/Hero/Hero';
import AnnouncementBanner from './Components/AnnouncementBanner';
import './App.css'
import FullScreenSections from './Pages/FullScreenSections';
import Footer from './Pages/Footer/Footer';
import Testimonals from './Pages/Testimonal/Testimonals';
const App = () => {
  return (
    <div>
      <AnnouncementBanner />
        <Navbar />
        <Hero />
        <FullScreenSections />
        <Testimonals />
        <Footer />
    </div>

  );
};

export default App;