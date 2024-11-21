const NavBar = () => {
  return (
    <div>
      <header className="bg-black text-left relative z-50 bg-offpurple/20 backdrop-blur-[6px] md:backdrop-blur-0 md:bg-transparent">
        <hr
          style={{
            backgroundImage:
              "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 52.07%, rgba(255, 255, 255, 0.00) 100%)",
          }}
          className="absolute bottom-0 w-full h-px -translate-x-1/2 border-0 opacity-10 left-1/2"
        />
        <div className="w-full lg:w-full mx-auto px-4 md:container" >
            
          <div className="flex items-center lg:relative lg:justify-between h-14 lg:h-18">
            <div className="flex justify-between w-full lg:w-auto lg:relative lg:z-10">
              <div className="flex items-center">
                <div className="h-5 -mt-1">
                  <a aria-label="Scale" href="/">
                    <h2 className="sr-only">Scale</h2>
                    <svg
                      className="w-auto h-full fill-current text-white"
                      viewBox="0 0 489 157"
                    >
                      <path d="M352.083 156.702a7.581 7.581 0 01-7.582-7.582V7.582A7.581 7.581 0 01352.083 0a7.581 7.581 0 017.583 7.582V149.12a7.581 7.581 0 01-7.583 7.582zm129.674-19.861a7.581 7.581 0 00-.871-10.687 7.581 7.581 0 00-10.687.871c-7.835 9.223-19.563 14.513-32.182 14.513-20.904 0-37.911-17.007-37.911-37.911s17.007-37.91 37.911-37.91c16.986 0 31.177 12.204 34.257 28.306h-46.391a7.581 7.581 0 00-7.582 7.583 7.581 7.581 0 007.582 7.582h54.593a7.58 7.58 0 007.582-7.582v-1.012c0-27.595-22.448-50.044-50.044-50.044-29.267 0-53.077 23.81-53.077 53.077s23.814 53.075 53.08 53.075c17.076 0 33.019-7.24 43.74-19.861zm-162.53 12.279v-48.529c0-27.595-22.448-50.043-50.043-50.043-29.268 0-53.078 23.81-53.078 53.077s23.81 53.077 53.078 53.077a7.581 7.581 0 007.582-7.582 7.58 7.58 0 00-7.582-7.582c-20.904 0-37.911-17.007-37.911-37.911s17.007-37.91 37.911-37.91c19.231 0 34.879 15.645 34.879 34.879v48.526a7.58 7.58 0 007.582 7.582 7.585 7.585 0 007.582-7.584zM89.711 126.373c0-7.4-2.718-17.494-15.668-23.559-7.77-3.64-17.52-5.135-26.949-6.581-22.09-3.387-29.934-6.217-29.934-15.355 0-9.955 13.805-15.164 27.443-15.164 8.594 0 20.944 1.733 30.986 9.991a7.584 7.584 0 009.635-11.715c-13.51-11.112-29.547-13.445-40.619-13.445-29.274 0-42.607 15.722-42.607 30.329 0 7.45 2.729 17.611 15.728 23.72 7.813 3.671 17.605 5.171 27.074 6.624 21.954 3.367 29.749 6.161 29.749 15.151 0 9.071-10.829 15.164-26.942 15.164-16.496 0-29.068-6.689-35.092-10.678a7.584 7.584 0 00-10.508 2.138 7.582 7.582 0 002.138 10.508c12.854 8.513 28.289 13.201 43.457 13.201 29.089 0 42.108-15.234 42.108-30.329zm109.939 7.95a7.585 7.585 0 00-2.117-10.513 7.584 7.584 0 00-10.513 2.118c-6.494 9.774-17.362 15.607-29.068 15.607-20.904 0-37.911-17.006-37.911-37.91 0-20.904 17.007-37.91 37.911-37.91 11.708 0 22.574 5.833 29.068 15.607a7.582 7.582 0 0010.513 2.117 7.581 7.581 0 002.117-10.512c-9.312-14.014-24.902-22.38-41.698-22.38-29.267 0-53.077 23.81-53.077 53.078 0 29.267 23.81 53.077 53.077 53.077 16.798 0 32.386-8.366 41.698-22.379z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex items-center cursor-pointer lg:hidden">
                <svg
                  className="w-6 h-auto fill-current text-white"
                  viewBox="0 0 24 12"
                >
                  <rect width="24" height="2"></rect>
                  <rect y="5" width="24" height="2"></rect>
                  <rect y="10" width="24" height="2"></rect>
                </svg>
              </div>
            </div>
            <div className="opacity-0 lg:opacity-100 absolute lg:static pointer-events-none lg:pointer-events-auto">
              <div>
                <div className="z-auto hidden -translate-y-1/2 top-1/2 lg:absolute lg:left-0 lg:right-0 lg:justify-center lg:items-center lg:flex">
                  <div data-flipper-id="0.51752">
                    <nav className="m-auto">
                      <ul className="flex justify-center list-none m-0">
                        <li className="relative" style={{ zIndex: 60 }}>
                          <div className="relative" style={{ zIndex: 60 }}>
                            <button
                              className="text-white bg-transparent text-sm flex justify-center px-2 xl:px-4 border-0 relative z-10 hover:text-opacity-70"
                              type="button"
                            >
                              Products
                            </button>
                            <div
                              className="absolute pt-8 transform -translate-x-1/2 left-1/2"
                              style={{ perspective: 1500 }}
                            ></div>
                          </div>
                        </li>
                        <li className="relative" style={{ zIndex: 60 }}>
                          <a
                            className="text-white bg-transparent text-sm flex justify-center px-2 xl:px-4 border-0 relative z-10 hover:text-opacity-70"
                            href="/leaderboard"
                          >
                            Leaderboards
                          </a>
                        </li>
                        <li className="relative" style={{ zIndex: 60 }}>
                          <div className="relative" style={{ zIndex: 60 }}>
                            <button
                              className="text-white bg-transparent text-sm flex justify-center px-2 xl:px-4 border-0 relative z-10 hover:text-opacity-70"
                              type="button"
                            >
                              Enterprise
                            </button>
                            <div
                              className="absolute pt-8 transform -translate-x-1/2 left-1/2"
                              style={{ perspective: 1500 }}
                            ></div>
                          </div>
                        </li>
                        <li className="relative" style={{ zIndex: 60 }}>
                          <div className="relative" style={{ zIndex: 60 }}>
                            <button
                              className="text-white bg-transparent text-sm flex justify-center px-2 xl:px-4 border-0 relative z-10 hover:text-opacity-70"
                              type="button"
                            >
                              Government
                            </button>
                            <div
                              className="absolute pt-8 transform -translate-x-1/2 left-1/2"
                              style={{ perspective: 1500 }}
                            ></div>
                          </div>
                        </li>
                        <li className="relative" style={{ zIndex: 60 }}>
                          <div className="relative" style={{ zIndex: 60 }}>
                            <button
                              className="text-white bg-transparent text-sm flex justify-center px-2 xl:px-4 border-0 relative z-10 hover:text-opacity-70"
                              type="button"
                            >
                              Customers
                            </button>
                            <div
                              className="absolute pt-8 transform -translate-x-1/2 left-1/2"
                              style={{ perspective: 1500 }}
                            ></div>
                          </div>
                        </li>
                        <li className="relative" style={{ zIndex: 60 }}>
                          <div className="relative" style={{ zIndex: 60 }}>
                            <button
                              className="text-white bg-transparent text-sm flex justify-center px-2 xl:px-4 border-0 relative z-10 hover:text-opacity-70"
                              type="button"
                            >
                              Resources
                            </button>
                            <div
                              className="absolute pt-8 transform -translate-x-1/2 left-1/2"
                              style={{ perspective: 1500 }}
                            ></div>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/* For small screen */}
                <div className="z-auto p-4 lg:hidden">
                  <div>
                    <h4 className="text-neutral-400 block uppercase text-xs tracking-wider">
                      Products
                    </h4>
                    <ul className="grid grid-cols-2 gap-y-4 mt-4 pb-4 border-b border-neutral-800">
                      <div className="space-y-4">
                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                          <a href="/data-engine">
                            <div
                              style={{
                                transform: "rotateY(180deg)",
                                WebkitBackfaceVisibility: "hidden",
                              }}
                              className="flex lg:items-center gap-1.5 md:gap-3 group font-normal transition-colors duration-300 ease"
                            >
                              <span className="w-4 h-4 block transform transition-transform duration-300 ease shrink-0 lg:h-10 lg:w-10">
                                <img
                                  alt="engine"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  data-nimg="1"
                                  style={{ color: "transparent" }}
                                  srcset="/_next/image?url=%2Fstatic%2Fimages%2Fglobal%2Fheader%2Fproducts%2Fengine.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fstatic%2Fimages%2Fglobal%2Fheader%2Fproducts%2Fengine.png&amp;w=96&amp;q=75 2x"
                                  src="/_next/image?url=%2Fstatic%2Fimages%2Fglobal%2Fheader%2Fproducts%2Fengine.png&amp;w=96&amp;q=75"
                                />
                              </span>
                              <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                <span className="block text-xs md:text-sm text-white">
                                  Scale Data Engine
                                </span>
                                <span className="block text-sm mt-px text-neutral-400">
                                  Data for training models
                                </span>
                              </p>
                            </div>
                          </a>
                        </li>
                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                          <a href="/generative-ai-data-engine">
                            <div
                              style={{
                                transform: "rotateY(180deg)",
                                WebkitBackfaceVisibility: "hidden",
                              }}
                              className="flex lg:items-center gap-1.5 md:gap-3 group font-normal transition-colors duration-300 ease"
                            >
                              <span className="w-4 h-4 block transform transition-transform duration-300 ease shrink-0 lg:h-10 lg:w-10">
                                <img
                                  alt="genai"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  data-nimg="1"
                                  style={{ color: "transparent" }}
                                  srcset="/_next/image?url=%2Fstatic%2Fimages%2Fglobal%2Fheader%2Fproducts%2Fgenai.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fstatic%2Fimages%2Fglobal%2Fheader%2Fproducts%2Fgenai.png&amp;w=96&amp;q=75 2x"
                                  src="/_next/image?url=%2Fstatic%2Fimages%2Fglobal%2Fheader%2Fproducts%2Fgenai.png&amp;w=96&amp;q=75"
                                />
                              </span>
                              <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                <span className="block text-xs md:text-sm text-white">
                                  For Generative Al
                                </span>
                                <span className="block text-sm mt-px text-neutral-400">
                                  Supervised fine-tuning and RLHF
                                </span>
                              </p>
                            </div>
                          </a>
                        </li>
                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                          <a href="/public-sector-data-engine">
                            <div
                              style={{
                                transform: "rotateY(180deg)",
                                WebkitBackfaceVisibility: "hidden",
                              }}
                              className="flex lg:items-center gap-1.5 md:gap-3 group font-normal transition-colors duration-300 ease"
                            >
                              <span className="w-4 h-4 block transform transition-transform duration-300 ease shrink-0 lg:h-10 lg:w-10">
                                <img
                                  alt="gov"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  data-nimg="1"
                                  style={{ color: "transparent" }}
                                  srcset="/_next/image?url=%2Fstatic%2Fimages%2Fglobal%2Fheader%2Fproducts%2Fgov.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fstatic%2Fimages%2Fglobal%2Fheader%2Fproducts%2Fgov.png&amp;w=96&amp;q=75 2x"
                                  src="/_next/image?url=%2Fstatic%2Fimages%2Fglobal%2Fheader%2Fproducts%2Fgov.png&amp;w=96&amp;q=75"
                                />
                              </span>
                              <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                <span className="block text-xs md:text-sm text-white">
                                  For Government
                                </span>
                                <span className="block text-sm mt-px text-neutral-400">
                                  High-quality data for public sector
                                </span>
                              </p>
                            </div>
                          </a>
                        </li>
                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                          <a href="/automotive">
                            <div
                              style={{
                                transform: "rotateY(180deg)",
                                WebkitBackfaceVisibility: "hidden",
                              }}
                              className="flex lg:items-center gap-1.5 md:gap-3 group font-normal transition-colors duration-300 ease"
                            >
                              <span className="w-4 h-4 block transform transition-transform duration-300 ease shrink-0 lg:h-10 lg:w-10">
                                <img
                                  alt="automotive"
                                  loading="lazy"
                                  width="40"
                                  height="40"
                                  decoding="async"
                                  data-nimg="1"
                                  style={{ color: "transparent" }}
                                  srcset="/_next/image?url=%2Fstatic%2Fimages%2Fglobal%2Fheader%2Fproducts%2Fautomotive.png&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fstatic%2Fimages%2Fglobal%2Fheader%2Fproducts%2Fautomotive.png&amp;w=96&amp;q=75 2x"
                                  src="/_next/image?url=%2Fstatic%2Fimages%2Fglobal%2Fheader%2Fproducts%2Fautomotive.png&amp;w=96&amp;q=75"
                                />
                              </span>
                              <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                <span className="block text-xs md:text-sm text-white">
                                  For Automotive
                                </span>
                                <span className="block text-sm mt-px text-neutral-400">
                                  Unlock L2 to L5 autonomy
                                </span>
                              </p>
                            </div>
                          </a>
                        </li>
                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                          <a href="/donovan">
                            <div
                              style={{
                                transform: "rotateY(180deg)",
                                WebkitBackfaceVisibility: "hidden",
                              }}
                              className="flex lg:items-center gap-1.5 md:gap-3 group font-normal transition-colors duration-300 ease"
                            >
                              <span className="w-4 h-4 block transform transition-transform duration-300 ease shrink-0 lg:h-10 lg:w-10"></span>
                            </div>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
                {/* demo section */}
                <nav className="bg-neutral-800 lg:bg-transparent text-center lg:text-left list-none lg:flex py-2 lg:py-0 overflow-hidden md:overflow-visible">
                  <ul className="flex items-center justify-center py-0 text-center list-none -translate-x-2 bg-transparent gap-x-6 md:-translate-x-0 md:gap-x-0 md:grid md:grid-cols-2 justify-items-center lg:flex lg:text-left">
                    <li className="md:mr-[14px]">
                      <a
                        style={{ WebkitTapHighlightColor: "transparent" }}
                        className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                        href="/demo"
                      >
                        <div className="new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[30px] py-[14px]">
                          <span className="text-white">Book a Demo</span>
                          <span className="inline-block ml-1 font-normal text-white duration-300 w-fit transition-transform group-hover:translate-x-1 font-unicode">
                            →
                          </span>
                        </div>
                        <span
                          className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] 
                      rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(105,57,193,0.4)]"
                        ></span>
                      </a>
                    </li>
                    <li className="relative py-2 lg:p-0 lg:mr-6 last:mr-0">
                      <a
                        className="font-normal text-xs md:text-sm leading-5 block select-none cursor-pointer transition-all duration-300 hover:text-opacity-75 text-white"
                        href="https://dashboard.scale.com/login"
                      >
                        Log In
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
