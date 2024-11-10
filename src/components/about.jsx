import engine from "../assests/images/data-engine.png";
import foundation from "../assests/images/foundation-models.webp";
import { generativeAiLogo } from "../utils/data";
const ABout = () => {
  return (
    <div>
      <div className="flex justify-center  flex-col mb-24 md:mb-40 xl:mb-16 sm:h-[700px] h-[590px] xl:mx-40 xl:flex-row mt-28 xl:mt-0">
        <div className="relative z-10 hidden w-full -mr-9 xl:inline-block xl:w-6/12 xl:min-w-[510px]">
          <div className="absolute w-full -translate-y-1/2 top-1/2">
            {/* First Item */}
            <div className="border-b group last:border-transparent border-white/10 cursor-pointer opacity-60 glow-item glow-delay-0">
              <p className="w-full pt-6 pb-2 text-2xl leading-10 text-left text-white font-aeonik">
                Fine-Tuning and RLHF
              </p>
              <p className="pb-6 overflow-hidden text-white transition-colors group-hover:text-white/70">
                Adapt best-in-class foundation models to your business and your
                specific data to build sustainable, successful AI programs and
                data from your enterprise.
              </p>
            </div>

            {/* Second Item */}
            <div className="border-b group last:border-transparent border-white/10 cursor-pointer opacity-60 glow-item glow-delay-3000">
              <p className="w-full pt-6 pb-2 text-2xl leading-10 text-left text-white font-aeonik">
                Foundation Models
              </p>
              <p className="pb-6 overflow-hidden text-white transition-colors group-hover:text-white/70">
                Scale partners or integrates with all of the leading AI models,
                from open-source to closed-source, including OpenAI, Google,
                Meta, Cohere, and more.
              </p>
            </div>

            {/* Third Item */}
            <div className="border-b group last:border-transparent border-white/10 cursor-pointer opacity-60 glow-item glow-delay-6000">
              <p className="w-full pt-6 pb-2 text-2xl leading-10 text-left text-white font-aeonik">
                Enterprise Data
              </p>
              <p className="pb-6 overflow-hidden text-white transition-colors group-hover:text-white/70">
                Scale's Data Engine enables you to integrate your enterprise
                data into the fold of these models, providing the base for
                long-term strategic differentiation.
              </p>
            </div>
          </div>
        </div>
        <div className="relative inline-block w-full -mb-3 xl:h-full xl:mb-10 xl:mx-auto">
          <div className="relative hidden w-full h-full xl:block">
            {/* Engine Image */}
            <img
              alt="Engine"
              loading="lazy"
              width="1248"
              height="1248"
              decoding="async"
              className="w-[624px] h-[624px] absolute z-10 transition-opacity duration-0 flex justify-end items-center right-0 top-[38px] opacity-100" // Removed opacity-0 and adjusted opacity to 100
              src={engine} // Using imported image path
              srcSet={`${engine} 1x`}
              style={{ color: "transparent" }}
            />

            {/* Foundation Models Image */}
            <img
              alt="Foundation Models"
              loading="lazy"
              width="1248"
              height="1248"
              decoding="async"
              className="w-[624px] h-[624px] absolute z-10 transition-opacity duration-0 flex justify-end items-center right-0 top-[38px] opacity-100" // Removed opacity-0 and adjusted opacity to 100
              src={foundation} // Using imported image path
              srcSet={`${foundation} 1x`}
              style={{ color: "transparent" }}
            />
          </div>
        </div>
      </div>
      <p className="max-w-max mb-10 md:mb-12 text-center text-white mx-auto uppercase leading-[1.70] text-xs px-3 sm:px-0 md:text-sm tracking-[4px]">
        GENERATIVE AI PROVIDERS WE PARTNER&nbsp;WITH:
      </p>
      <div className="hidden md:block">
      <ul className="items-center justify-center flex gap-4">
        {generativeAiLogo.map((logo, index) => (
          <li
            key={index}
            className="overflow-hidden relative flex items-center justify-center w-[230px] h-28 rounded-2xl"
          >
            <div className="absolute bg-black/40 inset-px rounded-2xl"></div>
            <div className="absolute inset-0 border border-white/15 rounded-2xl"></div>
            <img
              alt={logo.alt}
              loading="lazy"
              width={logo.width}
              height={logo.height}
              decoding="async"
              className="logo-grid_full-white__9DeNP opacity-100 relative"
              src={logo.src} // Using src from the logo object
              style={{ color: "transparent" }}
            />
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default ABout;
