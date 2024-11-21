// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import "../Styles/HeroSection.css";

const HeroSection = () => {
  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Generative AI Architecture
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Whether you're building your own models or applying foundation models
          to your business, data remains the biggest bottleneck to AI.
        </motion.p>
        <motion.button
          className="hero-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Book a Demo →
        </motion.button>
      </div>
    </motion.section>
  );
};

export default HeroSection;
