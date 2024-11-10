// Future.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../Styles/Future.css';

const rotatingTextVariants = {
  animate: {
    rotateY: [0, 180, 0], // Flip effect for the text
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

const rotatingWords = ["Future of AI", "Future of Business", "Future of Innovation"];

const Future = () => {
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
    <div className="future">
      {/* Circles for animated effect */}
      <motion.div className="circle circle1" variants={circlesVariants} initial="initial" animate="animate" />
      <motion.div className="circle circle2" variants={circlesVariants} initial="initial" animate="animate" />

      {/* Main Heading */}
      <div className="future-heading">
        <h1>
          The{" "}
          <motion.span
            className="highlight"
            variants={rotatingTextVariants}
            animate="animate"
          >
            {currentWord}
          </motion.span>{" "}
        </h1>
      </div>
      <p className="future-subtitle">
        Embrace the potential of AI and shape the future of your business. Scale with data, and transform insights into powerful innovations.
      </p>
      <div className="future-buttons">
        <button className="future-button">Explore More →</button>
        <button className="future-button">Join Us →</button>
      </div>
    </div>
  );
};

export default Future;
