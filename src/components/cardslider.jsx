import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { cardSlider } from "../utils/data";

const CardSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: false,
    slidesPerView: 1,
    mode: "snap",
    spacing: 10,
    breakpoints: {
      "(min-width: 60px)": {
        slidesPerView: 2,
      },
      "(min-width: 124px)": {
        slidesPerView: 3,
      },
    },
  });

  return (
  
  
    <div>
      <section className="py-18 lg:py-20 bg-transparent pt-0 lg:pt-0 pb-0 lg:pb-0 overflow-hidden  w-full">
        <div className=" ml-[150px] w-[1150px]  ">
         
            {/* Container for the slider */}
            <div
              ref={sliderRef} // Reference to the slider
              className=" card keen-slider overflow-visible cursor-grab h-[140px] sm:h-[167px] xl:h-[192px] pt-1 opacity-100 visible "
              style={{ cursor: "grab" }}
            >
              {/* Loop through the items and create a slide for each */}
              {cardSlider.map((item) => (
                <div
                  key={item.index}
                  className=" keen-slider__slide group rounded-2xl    relative text-left opacity-100 visible focus-visible:outline outline-[rgba(255,255,255,0.64)] outline-offset-[3px] bg-white/[0.01]"
                
                  style={{
                 
                    minWidth: "47.2px", // Specifies the minimum width for each card
                    maxWidth: "95.2px", // Specifies the maximum width for each card
                    transform: "translate3d(0, 0, 0)", // Prevents duplicate transform properties
                    margin: "0 auto", // Centers the card horizontally
                  }}
                  
                >
                  <div className="flex items-center justify-start xl:py-2 transition-colors bg-[#D1AAD7]/[0.01]">
                    <img
                      alt="Browser Art"
                      loading="lazy"
                      width="120"
                      height="300"
                      decoding="async"
                      className="max-w-[120px] w-full sm:max-w-[120px] xl:max-w-[100] px-2 lg:px-5 h-[150px]"
                      sizes="(min-width: 1280px) 120px, (min-width: 640px) 120px, 120px"
                      srcSet={`${item.image} 1x, ${item.image} 2x`}
                      src={item.image}
                      style={{ color: "transparent" }}
                    />
                    <div className="flex flex-col pr-2.5 sm:pr-4 lg:pr-10">
                      <p className="mb-1 text-xs text-[#D1ACD7] font-medium sm:text-sm text-scale-lightmauve">
                        {item.heading}
                      </p>
                      <p className="font-aeonik text-white text-lg leading-6 sm:text-xl lg:text-2xl lg:leading-[27px] line-clamp-2 xl:line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <div
                      role="none"
                      className="absolute items-center duration-150 overflow-hidden justify-center w-6 h-6 group-hover:bg-white bg-white/10 border group-hover:border-white transition-colors ease-linear border-white/[0.13] flex rounded-full pointer-events-none right-3 bottom-3 sm:right-4 sm:bottom-4 sm:w-10 sm:h-10"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path
                            className="transition-colors duration-150 ease-linear group-hover:stroke-black"
                            d="M7.75 7.5V4.25H4.5"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            className="transition-colors duration-150 ease-linear group-hover:stroke-black"
                            d="M7.5 4.5L0.75 11.25"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            className="transition-colors duration-150 ease-linear group-hover:stroke-black"
                            d="M5.785 10.25H8.75C9.855 10.25 10.75 9.355 10.75 8.25V2.75C10.75 1.645 9.855 0.75 8.75 0.75H3.75C2.645 0.75 1.75 1.645 1.75 2.75V6.215"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
       
      </section>
    </div>
  );
};

export default CardSlider;
