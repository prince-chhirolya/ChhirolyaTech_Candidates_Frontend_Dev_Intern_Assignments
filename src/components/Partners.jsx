// src/components/Partners.jsx
import React from 'react';
import './Partners.css';

const Partners = () => {
  const logos = ["paypal", "fedex", "redhat", "linear", "qualcomm", "ibm", "cisco"];
  
  return (
    <section className="partners">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={`path/to/${logo}-logo.png`}
          alt={`${logo} logo`}
          className="partner-logo"
        />
      ))}
    </section>
  );
};

export default Partners;
