// src/components/PartnersSection.jsx
import React from "react";
import { motion } from "framer-motion";
import "../Styles/PartnersSection.css";

const partners = ["OpenAI", "Adept", "Meta", "Cohere", "Anthropic"];

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        GENERATIVE AI PROVIDERS WE PARTNER WITH:
      </motion.h2>

      <div className="partners-grid">
        {partners.map((partner, index) => (
          <motion.div
            className="partner-card"
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 15,
              delay: index * 0.2,
            }}
          >
            {partner}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          BUILD AI
        </motion.button>
        <p className="cta-description">
          For AI teams, Scale Data Engine improves your models by improving your
          data.
        </p>
      </motion.div>
    </section>
  );
};

export default PartnersSection;
