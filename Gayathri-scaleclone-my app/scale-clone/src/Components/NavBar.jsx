// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../Components/NavBar.css";

const NavBar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <div className="NavbarItems">
      <div className="navbar-logo">Gitbook</div>
      <div className="menu-icons" onClick={toggleMenu}>
        <svg
          className="svg-inline--fa fa-bars"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          data-fa-i2svg
        >
          <path
            fill="currentColor"
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </div>

      <ul className={`nav-menu ${isMenuActive ? "active" : ""}`}>
        <li className="nav-links">
          <a href="#">Product</a>
        </li>
        <li className="nav-links">
          <a href="#">Features</a>
        </li>
        <li className="nav-links">
          <a href="#">Resources</a>
        </li>
        <li className="nav-links">
          <a href="#">Pricing</a>
        </li>
  
      </ul>

      <div className="login_start_free">
        <button className="bgyellow ls">Login</button>
        <button className="btn-black ls">
          Start for free <i className="fa-solid fa-arrow-right-long" />
        </button>
      </div>
      <a href="#" className="nav-links-mobile">
        Join Now
      </a>
    </div>
  );
};

export default NavBar;
