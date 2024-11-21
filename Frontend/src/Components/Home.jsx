// Home.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../Styles/Home.css';

const rotatingTextVariants = {
  animate: {
    rotateY: [0, 180, 0], // Flip effect
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const circlesVariants = {
  initial: { scale: 0, opacity: 0 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0, 1, 0],
    transition: {
      duration: 4,
      delay: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const rotatingWords = ["Generative AI", "Government AI", "Enterprise AI"];

const Home = () => {
  const [currentWord, setCurrentWord] = useState(rotatingWords[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = rotatingWords.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % rotatingWords.length;
        return rotatingWords[nextIndex];
      });
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* Circles for animated effect */}
      <motion.div className="circle circle1" variants={circlesVariants} initial="initial" animate="animate" />
      <motion.div className="circle circle2" variants={circlesVariants} initial="initial" animate="animate" />

      {/* Main Heading */}
      <div className="home-heading">
        <h1>
          Power{" "}
          <motion.span
            className="highlight"
            variants={rotatingTextVariants}
            animate="animate"
          >
            {currentWord}
          </motion.span>{" "}
          With Your Data
        </h1>
      </div>
      <p className="home-subtitle">
        Make the best models with the best data. Scale Data Engine powers nearly every major foundation model, and with Scale GenAI Platform, leverages your enterprise data to unlock the value of AI.
      </p>
      <div className="home-buttons">
        <button className="home-button">Book a Demo →</button>
        <button className="home-button">Build AI →</button>
      </div>
    </div>
  );
};

export default Home;
