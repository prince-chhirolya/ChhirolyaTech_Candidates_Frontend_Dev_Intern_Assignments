// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Product</h3>
        <ul>
          <li><a href="#">API Docs</a></li>
          <li><a href="#">Internal Docs</a></li>
          <li><a href="#">Public Docs</a></li>
          <li><a href="#">Open Source</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Features</h3>
        <ul>
          <li><a href="#">Git sync</a></li>
          <li><a href="#">Visitor authentication</a></li>
          <li><a href="#">Integrations</a></li>
          <li><a href="#">GitBook AI</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Resources</h3>
        <ul>
          <li><a href="#">Product Docs</a></li>
          <li><a href="#">Developer Docs</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Changelog</a></li>
          <li><a href="#">Security and Compliance</a></li>
          <li><a href="#">Newsletter</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact and Support</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          <p>© 2024 Copyright GitBook INC. 440 N Barranca Ave #7171, Covina, CA 91723, USA. EIN: 320502699</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
