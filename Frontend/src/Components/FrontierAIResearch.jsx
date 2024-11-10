// FrontierAIResearch.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../Styles/FrontierAIResearch.css";
import microsoft from '../assets/microsoft.png';
import meta from '../assets/meta.png';
import cisco from '../assets/cisco.png';
import bcg from '../assets/bcg.png';
import gm from '../assets/general-motors.png';
import toyota from '../assets/toyota.png';
const FrontierAIResearch = () => {
    const partners = [
        { name: 'Microsoft', logo: microsoft },
        { name: 'Meta', logo: meta },
        { name: 'Cisco', logo: cisco },
        { name: 'BCG', logo: bcg },
        { name: 'GM', logo: gm },
        { name: 'Toyota', logo: toyota },
      ];

  const bannerTexts = [
    "Generative AI Companies",
    "U.S. Government Agencies",
    "Enterprises",
  ];

  const [currentBannerText, setCurrentBannerText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerText((prev) => (prev + 1) % bannerTexts.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="frontier-container">
      {/* Rotating banner text */}
      <motion.div
        className="banner-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Scale works with <span>{bannerTexts[currentBannerText]}</span>
      </motion.div>

      {/* Partner logos with staggered fade-in animation */}
      <div className="partners">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 * index }}
            className="partner-logo"
          >
            <img src={partner.logo} alt={partner.name} className="logo-image" />
            <span>{partner.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Main title and description */}
      <div className="frontier-content">
        <h1 className="frontier-title">Frontier AI Research</h1>
        <p className="frontier-description">
          SEAL (Safety, Evaluations, and Alignment Lab) is our research
          initiative to improve model capabilities through challenging private
          evaluations and novel research.
        </p>

        {/* Research cards */}
        <div className="research-cards">
          <div className="research-card">
            <h3>SEAL Leaderboards</h3>
            <p>Expert-Driven Private Evaluations</p>
          </div>
          <div className="research-card">
            <h3>LLMs as Browser Agents</h3>
            <p>Easily Jailbroken Under Certain Conditions</p>
          </div>
          <div className="research-card">
            <h3>Multi-Turn Jailbreaks</h3>
            <p>Human-Centric LLM Defenses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontierAIResearch;
