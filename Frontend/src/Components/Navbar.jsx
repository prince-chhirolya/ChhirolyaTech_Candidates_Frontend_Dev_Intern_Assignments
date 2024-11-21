// Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-logo">scale</div>
      <motion.ul className="navbar-links">
        {['Products', 'Leaderboards', 'Enterprise', 'Government', 'Customers', 'Resources'].map((link, index) => (
          <motion.li
            key={link}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {link}
          </motion.li>
        ))}
      </motion.ul>
      <div className="navbar-buttons">
        <motion.button className="demo-button" whileHover={{ scale: 1.05 }}>
          Book a Demo
        </motion.button>
        <motion.button className="login-button" whileHover={{ scale: 1.05 }}>
          Log In
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
