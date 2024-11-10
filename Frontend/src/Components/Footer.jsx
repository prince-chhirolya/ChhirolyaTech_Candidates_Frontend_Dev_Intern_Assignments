import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'; // Use icons that actually exist
import '../Styles/Footer.css';

const Footer = () => {
    // Animation variants
    const hoverVariant = {
        hover: { scale: 1.1, color: "#ccc", transition: { duration: 0.3 } }
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <motion.div className="footer-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    <h4>PRODUCTS</h4>
                    <ul>
                        <motion.li variants={hoverVariant} whileHover="hover">Scale Data Engine</motion.li>
                        <motion.li variants={hoverVariant} whileHover="hover">Scale GenAI Platform</motion.li>
                        <motion.li variants={hoverVariant} whileHover="hover">Scale Donovan</motion.li>
                    </ul>
                </motion.div>

                <motion.div className="footer-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <h4>GOVERNMENT</h4>
                    <ul>
                        <motion.li variants={hoverVariant} whileHover="hover">Defense</motion.li>
                        <motion.li variants={hoverVariant} whileHover="hover">Federal</motion.li>
                        <motion.li variants={hoverVariant} whileHover="hover">Public Sector</motion.li>
                    </ul>
                </motion.div>

                {/* Add other sections similarly */}
                
                <motion.div className="footer-social" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                    <h4>FOLLOW US</h4>
                    <ul className="social-icons">
                        <motion.li variants={hoverVariant} whileHover="hover"><FaTwitter /></motion.li>
                        <motion.li variants={hoverVariant} whileHover="hover"><FaFacebookF /></motion.li>
                        <motion.li variants={hoverVariant} whileHover="hover"><FaLinkedinIn /></motion.li>
                    </ul>
                </motion.div>
            </div>

            <div className="footer-bottom">
                <motion.p variants={hoverVariant} whileHover="hover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                    Copyright © 2024 Scale AI, Inc. All rights reserved.
                </motion.p>
                <motion.p variants={hoverVariant} whileHover="hover" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
                    Terms of Use & Privacy Policy
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;
