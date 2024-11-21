import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Styles/Customer.css';
import meta from '../assets/meta.png';
import deepmind from '../assets/deepmind.svg';
import eureka from '../assets/eureka.png';
import openAi from '../assets/openAi.svg';
import nfdg from "../assets/nfdg.svg"

const slides = [
  {
    title: "We have changed the game of AI Evaluations - hear it from Industry Leaders.",
    subtitle: "Scale’s SEAL Leaderboards are bringing trust to AI; learn from experts why expert-driven private evaluations are so important.",
  },
  {
    quote: "“We're going to need a lot more investment in high-quality evals and benchmarks to help us understand the actual comparative utility of the various models.”",
    author: "Noam Brown",
    position: "Member of Technical Staff, OpenAI",
  },
  {
    quote: "“Scale is doing an amazing job providing high-quality uncontaminated evals, now with code and instruction following!”",
    author: "Noam Brown",
    position: "Member of Technical Staff, OpenAI",
  }
];

const Customer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="customer-container">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="customer-slide"
        >
          {slides[currentIndex].title && (
            <div className="slide-content">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="title-container"
              >
                <p className="customer-tag">CUSTOMERS</p>
                <h2 className="customer-title">{slides[currentIndex].title}</h2>
                <p className="customer-subtitle">{slides[currentIndex].subtitle}</p>
              </motion.div>
            </div>
          )}

          {slides[currentIndex].quote && (
            <div className="slide-quote">
              <p className="quote-text">{slides[currentIndex].quote}</p>
              <p className="quote-author">{slides[currentIndex].author}</p>
              <p className="quote-position">{slides[currentIndex].position}</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="logos-container">
        <img src={meta} alt="Meta" className="logo" />
        <img src={deepmind} alt="DeepMind" className="logo" />
        <img src={eureka} alt="Eureka" className="logo" />
        <img src={openAi} alt="OpenAI" className="logo" />
        <img src={nfdg} alt="NFDG" className="logo" />
      </div>
    </div>
  );
};

export default Customer;
