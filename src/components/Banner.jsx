// src/components/Banner.jsx
import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <h1>Product documentation your users will love</h1>
      <p>Forget building your own custom docs platform. With GitBook, you get beautiful documentation for your users, and a branch-based Git workflow for your team.</p>
      <div className="button-group">
        <button className="github-btn">Sign up with GitHub</button>
        <button className="start-btn">Start for free</button>
      </div>
    </section>
  );
};

export default Banner;
