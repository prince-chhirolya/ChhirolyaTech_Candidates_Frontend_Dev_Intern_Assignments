import donovan from "../../assests/images/donovan.webp";
import genai from "../../assests/images/gen-ai.png";
const GenerativeAI = () => {
  return (
    <div className="container relative">
      <div className="xl:ml-28">
        <div className="relative w-screen -translate-x-1/2 sm:w-auto left-1/2 px-7 sm:px-0">
          <div className="keen-slider pb-20 !overflow-visible opacity-100 visible">
            <a
              className="keen-slider__slide"
              href="/donovan"
              style={{
                minWidth: "624px",
                maxWidth: "624px",
                transform: "translate3d(0px, 0px, 0px)",
              }}
            >
              <div
                style={{
                  "--border-opacity": "0.16",
                }}
                className="box_box__wrapper__7yWdR box_box__wrapper--hoverable___A4_d box_box-blue__FPEs4 before:z-20"
              >
                <div className="!pt-9 md:!pt-12 !pb-0 !overflow-hidden text-[#E5E5E6] max-h-[436px] lg:h-[540px] min-h-[450px] lg:!min-h-[540px] z-10 3xl:py-[95px] z-10 relative lg:items-center xl:py-20 md:p-10 lg:py-12 p-6 pt-3 rounded-2xl overflow-hidden md:overflow-visible">
                  <p className="uppercase leading-4 text-xs tracking-[4px] mb-4 lg:mb-6 z-10 relative">
                    Scale Donovan
                  </p>
                  <p className="md:text-[1.625rem] text-3.5xl leading-tight md:leading-8 mb-2 font-aeonik z-10 relative">
                    AI-Powered Decision-Making for Defense
                  </p>
                  <p className="z-10 mb-8 leading-6 md:mb-18 text-zinc-400">
                    AI-powered decision-making support: plan, analyze, and act
                    in minutes.
                  </p>
                  <img
                    alt="Scale Donovan"
                    loading="lazy"
                    width="616"
                    height="333"
                    decoding="async"
                    data-nimg="1"
                    className="absolute left-6 md:left-9 top-46 md:top-auto md:-bottom-32 lg:bottom-0 aspect-[436/276] w-full h-full md:h-auto overflow-hidden object-contain xl:-bottom-[85px] object-left-top"
                    style={{ color: "transparent" }}
                    srcset={donovan}
                  />
                </div>
              </div>
            </a>
            <a
              className="keen-slider__slide"
              href="/genai-platform"
              style={{
                minWidth: "624px",
                maxWidth: "624px",
                transform: "translate3d(32px, 0px, 0px)",
              }}
            >
              <div
                style={{
                  "--border-opacity": "0.16",
                }}
                className="box_box__wrapper__7yWdR box_box__wrapper--hoverable___A4_d box_box-blue__FPEs4 before:z-20"
              >
                <div className="!pt-9 md:!pt-12 !pb-0 !overflow-hidden max-h-[436px] lg:h-[540px] min-h-[450px] lg:!min-h-[540px] z-10 3xl:py-[95px] z-10 relative lg:items-center xl:py-20 md:p-10 lg:py-12 p-6 pt-3 rounded-2xl overflow-hidden md:overflow-visible">
                  <p className="uppercase leading-4 text-xs tracking-[4px] mb-4 lg:mb-6 z-10 relative">
                    Scale GenAI Platform
                  </p>
                  <p className="md:text-[1.625rem] text-3.5xl leading-tight md:leading-8 mb-2 font-aeonik z-10 relative">
                    AI for the Enterprise
                  </p>
                  <p className="z-10 mb-8 leading-6 md:mb-18 text-zinc-400">
                    Transform your data into customized enterprise-ready
                    Generative AI applications.
                  </p>
                  <img
                    alt="Gen AI"
                    loading="lazy"
                    width="575"
                    height="383"
                    decoding="async"
                    data-nimg="1"
                    className="absolute left-6 md:left-9 top-46 md:top-auto md:-bottom-32 lg:bottom-0 aspect-[436/277] w-full h-full md:h-auto overflow-hidden object-contain xl:-bottom-[85px] object-left-top"
                    style={{ color: "transparent" }}
                    srcset={genai}
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerativeAI;
