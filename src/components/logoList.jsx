import {
  logostransitone,
  logostransitthree,
  logostransittwo,
} from "../utils/data";
import React, { useState, useEffect } from "react";
const LogoList = () => {
  const [currentList, setCurrentList] = useState(1); // Track which list is visible

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentList((prevList) => (prevList === 3 ? 1 : prevList + 1)); // Cycle through 1, 2, 3
    }, 3000); // Adjust interval time for transitions

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);
  return (
    <div>
      <div className="relative block h-14">
        {/* First List */}
        <div
          className={`logos absolute w-full top-1/2 -translate-y-1/2 transition-opacity duration-700 ${
            currentList === 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative grid text-white">
            <ul className="items-center justify-center md:gap-y-16 flex lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-4 grid-cols-4 gap-12 gap-y-10">
              {logostransitone.map((logo, index) => (
                <li key={index} className="flex justify-center items-center">
                  <div className="relative">
                    <img
                      alt={logo.alt}
                      fetchpriority="high"
                      width="100"
                      height="22"
                      decoding="async"
                      className="logo-grid_full-white__9DeNP"
                      style={{ color: "transparent" }}
                      srcSet={`${logo.src} 1x, ${logo.src} 2x`}
                      src={logo.src}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Second List */}
        <div
          className={`logos absolute w-full top-1/2 -translate-y-1/2 transition-opacity duration-700 ${
            currentList === 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative grid text-white">
            <ul className="items-center justify-center md:gap-y-16 flex lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-4 grid-cols-4 gap-12 gap-y-10">
              {logostransittwo.map((logo, index) => (
                <li key={index} className="flex justify-center items-center">
                  <div className="relative">
                    <img
                      alt={logo.alt}
                      fetchpriority="high"
                      width={logo.width}
                      height={logo.height}
                      decoding="async"
                      className="logo-grid_full-white__9DeNP"
                      style={{ color: "transparent" }}
                      srcSet={`${logo.src} 1x, ${logo.src} 2x`}
                      src={logo.src}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Third List */}
        <div
          className={`logos absolute w-full top-1/2 -translate-y-1/2 transition-opacity duration-700 ${
            currentList === 3 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative grid text-white">
            <ul className="items-center justify-center md:gap-y-16 flex lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-4 grid-cols-4 gap-12 gap-y-10">
              {logostransitthree.map((logo, index) => (
                <li key={index} className="flex justify-center items-center">
                  <div className="relative">
                    <img
                      alt={logo.alt}
                      fetchpriority="high"
                      width={logo.width}
                      height={logo.height}
                      decoding="async"
                      className="logo-grid_full-white__9DeNP"
                      style={{ color: "transparent" }}
                      srcSet={`${logo.src} 1x, ${logo.src} 2x`}
                      src={logo.src}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoList;
