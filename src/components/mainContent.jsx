import heroImage from "../assests/images/hero-bg-mobile.webp";
import {
  logostransitone,
  logostransitthree,
  logostransittwo,
} from "../utils/data";
import LogoList from "./logoList";
const MainContent = () => {
  return (
    <div>
      <section className="py-18 lg:py-20 bg-transparent pt-0 lg:pt-0 pb-0 lg:pb-0">
        <div className="container relative">
          <div className="absolute top-0 hidden -translate-x-1/2 lg:block left-1/2">
            <div className="w-full lg:w-auto pointer-events-none select-none">
              <div className="hidden md:block">
                <div style={{ width: 1400, height: 650 }}>
                  <div
                    className="[&>canvas]:!w-full [&>canvas]:!h-full"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <canvas
                      width="1750"
                      height="812"
                      style={{ display: "block", width: 2800, height: 1300 }}
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            alt="Hero background"
            loading="lazy"
            width="1170"
            height="511"
            decoding="async"
            className="top-7 sm:top-0 md:-top-7 opacity-0 select-none transition-opacity duration-1000 pointer-events-none absolute object-cover min-w-[155vw] sm:min-w-[120vw] lg:min-w-[80vw] xl:min-w-[60vw] left-[54%] md:left-1/2 -translate-x-1/2 lg:mt-10"
            style={{
              color: "transparent",
              opacity: 1,
              animation: "subtleMove 5s ease-in-out infinite",
            }}
            sizes="100vw"
            srcSet={`${heroImage}?w=320&q=90 320w, ${heroImage}?w=384&q=90 384w, ${heroImage}?w=768&q=90 768w, ${heroImage}?w=992&q=90 992w, ${heroImage}?w=1200&q=90 1200w, ${heroImage}?w=1920&q=90 1920w`}
            src={`${heroImage}?w=1920&q=90`}
          />

          <div className="pt-24 xl:pt-44">
            <div className="relative z-10">
              <h1
                className="text-5xl font-light sm:leading-none leading-[1.1] sm:text-7xl xl:text-[89px] tracking-[-0.89px] font-aeonik text-center text-white"
                style={{ textShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.35)" }}
              >
                Power
                <br className="lg:hidden" />
                <span className="relative">
                  <span className="invisible">Government AI</span>
                  <div className="hero_cubespinner__5nU4O">
                    <div className="hero_face1____5ZN">Enterprise AI</div>
                    <div className="hero_face2__hWvJM">Government AI</div>
                    <div className="hero_face3__qUXn4">Generative AI</div>
                  </div>
                </span>
                <br />
                With Your Data
              </h1>
              <h2 className="my-6 font-inter text-base text-[#F5F5F5] sm:px-0 font-medium leading-normal lg:my-[22px] lg:text-lg md:w-11/12 lg:w-full text-center lg:max-w-[860px] mx-auto">
                Make the best models with the best data. Scale Data Engine
                powers nearly every major foundation model, and with Scale GenAI
                Platform, leverages your enterprise data to unlock the value of
                AI.
              </h2>
              <div className="items-center w-full mx-auto space-x-6 md:mb-0 xl:mb-9 max-w-max">
                <a
                  style={{ WebkitTapHighlightColor: "transparent" }}
                  className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                  href="/demo"
                >
                  <div className=" text-white new-button_button--primary__EJ4AI font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--purple__hhI2y text-sm px-[30px] py-[14px]">
                    Book a Demo
                    <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                      →
                    </span>
                  </div>
                  <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(105,57,193,0.4)]"></span>
                </a>
                <a
                  style={{ WebkitTapHighlightColor: "transparent" }}
                  className="text-[#F4F0FF] hover:text-white transition-colors duration-300 py-2 font-medium whitespace-nowrap text-sm leading-5 group relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                  href="/data-engine"
                >
                  Build AI
                  <span className="inline-block ml-1 font-normal duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                    →
                  </span>
                </a>
              </div>
            </div>
            {/*section 2 for the image slider */}
            <section className="py-18 lg:py-20 bg-transparent pt-0 lg:pt-0 pb-0 lg:pb-0 relative">
              <div className="relative">
                <div
                  className="pt-6 pb-12 sm:pb-16 sm:pt-20 xl:pb-16 xl:pt-24 "
                  style={{ opacity: 1, visibility: "inherit" }}
                >
                  <div className="hidden mb-12 text-sm leading-6 text-center text-neutral-400 lg:block">
                    Scale works with{" "}
                    <button
                      className="section-title inline-block relative cursor-pointer transition-colors duration-300 hover:text-neutral-200"
                      type="button"
                    >
                      {" "}
                      Generative AI Companies{" "}
                      <div className="transition-opacity duration-300 absolute bottom-0 h-[1px] w-full bg-silver opacity-0"></div>
                      <div
                        style={{
                          opacity: 100,
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform:
                            "translate3d(0px, 0px, 0px) scale(0.0073, 1)",
                        }}
                        className="line absolute bottom-0 h-[1px] w-full bg-white origin-left transform scale-x-0 opacity-0 transition-all duration-300 ease-out hover:opacity-100 hover:scale-x-100"
                      ></div>
                    </button>{" "}
                    <button
                      className="section-title inline-block relative cursor-pointer transition-colors duration-300 hover:text-neutral-200"
                      type="button"
                    >
                      {" "}
                      U.S. Government Agencies{" "}
                      <div className="transition-opacity duration-300 absolute bottom-0 h-[1px] w-full bg-silver opacity-100"></div>
                      <div
                        className="line opacity-0 scale-x-0 absolute bottom-0 h-[1px] w-full bg-white origin-left"
                        style={{
                          opacity: 100,
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform:
                            "translate3d(0px, 0px, 0px) scale(0.0073, 1)",
                        }}
                      ></div>
                    </button>{" "}
                    &{" "}
                    <button
                      className="section-title inline-block relative cursor-pointer transition-colors duration-300 hover:text-neutral-200"
                      type="button"
                    >
                      Enterprises
                      <div className="transition-opacity duration-300 absolute bottom-0 h-[1px] w-full bg-silver opacity-100"></div>
                      <div
                        className="line opacity-0 scale-x-0 absolute bottom-0 h-[1px] w-full bg-white origin-left"
                        style={{
                          opacity: 100,
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform:
                            "translate3d(0px, 0px, 0px) scale(0.0126, 1)",
                        }}
                      ></div>
                    </button>
                  </div>
                  <LogoList />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
