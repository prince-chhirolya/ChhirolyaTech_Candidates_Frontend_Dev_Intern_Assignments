import { shortDescriptionOne,shortDescriptionTwo,shortDescriptionThree,shortDescriptionFour,shortDescriptionFive,shortDescriptionSix } from "../utils/data";

export const ShortDescriptionone = () => {
  return (
    
    <div>
    <section className="py-10 ">
      {shortDescriptionOne.map((item, index) =>
        item.note !== "no" || item.heading || item.description !== "no" ? ( // Check for presence and exclusion of "no"
          <div key={index} className="mb-16"> {/* Wrapper for each item */}
            {/* Top Badge */}
            {item.note && item.note !== "no" && (
              <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-5">
                <div className="overflow-hidden tracking-[3px] text-xs lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-full px-4 py-3">
                  <span>{item.note}</span>
                </div>
              </div>
            )}
  
            {/* Title and Description */}
            <div className="container gap-16">
              <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center ">
                <h2 className="font-inter leading-snug lg:leading-[1.5] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance] text-white">
                  {item.heading}
                </h2>
                <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-[#D1D5DB] lg:text-xl text-center max-w-lg mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
  
            {/* Demo Button */}
            {item.demo && item.demo !== "no" && (
              <div className="flex justify-center items-center">
                <a
                  style={{ WebkitTapHighlightColor: "transparent" }}
                  className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                  href="/demo"
                >
                  <div className="new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[20px] py-[10px]">
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
              </div>
            )}
          </div>
        ) : null
      )}
    </section>
  </div>
  

  );
};

export const ShortDescriptionTwo = () => {
  return (
    
    <div>
    <section className="py-10 ">
      {shortDescriptionTwo.map((item, index) =>
        item.note !== "no" || item.heading || item.description !== "no" ? ( // Check for presence and exclusion of "no"
          <div key={index} className="mb-16"> {/* Wrapper for each item */}
            {/* Top Badge */}
            {item.note && item.note !== "no" && (
              <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-5">
                <div className="overflow-hidden tracking-[3px] text-xs lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-full px-4 py-3">
                  <span>{item.note}</span>
                </div>
              </div>
            )}
  
            {/* Title and Description */}
            <div className="container gap-16">
              <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center ">
                <h2 className="font-inter leading-snug lg:leading-[1.5] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance] text-white">
                  {item.heading}
                </h2>
                <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-[#D1D5DB] lg:text-xl text-center max-w-lg mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
  
            {/* Demo Button */}
            {item.demo && item.demo !== "no" && (
              <div className="flex justify-center items-center mt-5">
                <a
                  style={{ WebkitTapHighlightColor: "transparent" }}
                  className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                  href="/demo"
                >
                  <div className="new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[20px] py-[10px]">
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
              </div>
            )}
          </div>
        ) : null
      )}
    </section>
  </div>
  

  );
};

export const ShortDescriptionThree = () => {
  return (
    
    <div>
    <section className="py-10 ">
      {shortDescriptionThree.map((item, index) =>
        item.note !== "no" || item.heading || item.description !== "no" ? ( // Check for presence and exclusion of "no"
          <div key={index} className="mb-16"> {/* Wrapper for each item */}
            {/* Top Badge */}
            {item.note && item.note !== "no" && (
              <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-5">
                <div className="overflow-hidden tracking-[3px] text-xs lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-full px-4 py-3">
                  <span>{item.note}</span>
                </div>
              </div>
            )}
  
            {/* Title and Description */}
            <div className="container gap-16">
              <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center ">
                <h2 className="font-inter leading-snug lg:leading-[1.5] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance] text-white">
                  {item.heading}
                </h2>
                <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-[#D1D5DB] lg:text-xl text-center max-w-lg mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
  
            {/* Demo Button */}
            {item.demo && item.demo !== "no" && (
              <div className="flex justify-center items-center">
                <a
                  style={{ WebkitTapHighlightColor: "transparent" }}
                  className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                  href="/demo"
                >
                  <div className="new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[20px] py-[10px]">
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
              </div>
            )}
          </div>
        ) : null
      )}
    </section>
  </div>
  

  );
};
export const ShortDescriptionFour = () => {
  return (
    
    <div>
    <section className="py-10 ">
      {shortDescriptionFour.map((item, index) =>
        item.note !== "no" || item.heading || item.description !== "no" ? ( // Check for presence and exclusion of "no"
          <div key={index} className="mb-16"> {/* Wrapper for each item */}
            {/* Top Badge */}
            {item.note && item.note !== "no" && (
              <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-5">
                <div className="overflow-hidden tracking-[3px] text-xs lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-full px-4 py-3">
                  <span>{item.note}</span>
                </div>
              </div>
            )}
  
            {/* Title and Description */}
            <div className="container gap-16">
              <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center ">
                <h2 className="font-inter leading-snug lg:leading-[1.5] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance] text-white">
                  {item.heading}
                </h2>
                <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-[#D1D5DB] lg:text-xl text-center max-w-lg mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
  
            {/* Demo Button */}
            {item.demo && item.demo !== "no" && (
              <div className="flex justify-center items-center">
                <a
                  style={{ WebkitTapHighlightColor: "transparent" }}
                  className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                  href="/demo"
                >
                  <div className="new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[20px] py-[10px]">
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
              </div>
            )}
          </div>
        ) : null
      )}
    </section>
  </div>
  

  );
};
export const ShortDescriptionFive = () => {
  return (
    
    <div>
    <section className="py-10 ">
      {shortDescriptionFive.map((item, index) =>
        item.note !== "no" || item.heading || item.description !== "no" ? ( // Check for presence and exclusion of "no"
          <div key={index} className="mb-16"> {/* Wrapper for each item */}
            {/* Top Badge */}
            {item.note && item.note !== "no" && (
              <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-5">
                <div className="overflow-hidden tracking-[3px] text-xs lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-full px-4  py-3">
                  <span>{item.note}</span>
                </div>
              </div>
            )}
  
            {/* Title and Description */}
            <div className="container gap-16">
              <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-5">
                <h2 className="font-inter leading-snug lg:leading-[1.5] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance] text-white">
                  {item.heading}
                </h2>
                <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-[#D1D5DB] lg:text-xl text-center max-w-lg mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
  
            {/* Demo Button */}
            {item.demo && item.demo !== "no" && (
              <div className="flex justify-center items-center">
                <a
                  style={{ WebkitTapHighlightColor: "transparent" }}
                  className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                  href="/demo"
                >
                  <div className="new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[20px] py-[10px]">
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
              </div>
            )}
          </div>
        ) : null
      )}
    </section>
  </div>
  

  );
};
export const ShortDescriptionSix = () => {
  return (
    
    <div>
    <section className="py-10 ">
      {shortDescriptionSix.map((item, index) =>
        item.note !== "no" || item.heading || item.description !== "no" ? ( // Check for presence and exclusion of "no"
          <div key={index} className="mb-16"> {/* Wrapper for each item */}
            {/* Top Badge */}
            {item.note && item.note !== "no" && (
              <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center mb-5">
                <div className="overflow-hidden tracking-[3px] text-xs lg:text-xs uppercase bg-white bg-opacity-5 text-[#D1AAD7] rounded-full px-4 py-3">
                  <span>{item.note}</span>
                </div>
              </div>
            )}
  
            {/* Title and Description */}
            <div className="container gap-16">
              <div className="flex flex-col max-w-3xl mx-auto items-center justify-center text-center ">
                <h2 className="font-inter leading-snug lg:leading-[1.2] text-3xl md:text-4.5xl lg:text-5xl [text-wrap:balance] text-white">
                  {item.heading}
                </h2>
                <p className="mt-4 lg:mt-2 leading-[1.60] text-neutral-100 lg:text-[#D1D5DB] lg:text-xl text-center max-w-lg mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
  
            {/* Demo Button */}
            {item.demo && item.demo !== "no" && (
              <div className="flex justify-center items-center">
                <a
                  style={{ WebkitTapHighlightColor: "transparent" }}
                  className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                  href="/demo"
                >
                  <div className="new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[20px] py-[10px]">
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
              </div>
            )}
          </div>
        ) : null
      )}
    </section>
  </div>
  

  );
};