// src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">GITBOOK</div>
      <nav className="nav-links">
        <a href="#product">Product</a>
        <a href="#features">Features</a>
        <a href="#resources">Resources</a>
        <a href="#pricing">Pricing</a>
        <span className="hiring">We’re hiring!</span>
        <button className="login-btn">Login</button>
        <button className="start-btn">Start for free</button>
      </nav>
    </header>
  );
};

export default Header;
