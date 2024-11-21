// src/components/InfoSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/InfoSection.css';

const InfoSection = () => {
  return (
    <section className="info-section">
      <motion.div
        className="info-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>Fine-Tuning and RLHF</h3>
        <p>
          Adapt best-in-class foundation models to your business and your specific data to build sustainable, successful AI programs.
        </p>
        <h3>Foundation Models</h3>
        <p>
          Scale partners or integrates with all of the leading AI models, from open-source to closed-source, including OpenAI, Google, Meta, Cohere, and more.
        </p>
        <h3>Enterprise Data</h3>
        <p>
          Scale's Data Engine enables you to integrate your enterprise data into the fold of these models, providing the base for long-term strategic differentiation.
        </p>
      </motion.div>
    </section>
  );
};

export default InfoSection;
