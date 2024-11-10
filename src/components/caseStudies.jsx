import pics1 from "../assests/images/pic1.png";
import pics2 from "../assests/images/pic2.png";
import pics3 from "../assests/images/pic3.png";
import pics4 from "../assests/images/pic4.webp";
import pics5 from "../assests/images/pic5.png";
import pics6 from "../assests/images/pic6.png";
import pics7 from "../assests/images/pic7.png";
import pics8 from "../assests/images/pic8.png";
import pics9 from "../assests/images/pic9.png";
import pics10 from "../assests/images/pic10.png";
import pics11 from "../assests/images/pic11.png";
import pics12 from "../assests/images/pic12.png";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
const CaseSutides = () => {
    const [sliderRef] = useKeenSlider({
        loop: false,
        slidesPerView: 1,
        mode: "snap",
        spacing: 10,
        breakpoints: {
          "(min-width: 60px)": {
            slidesPerView: 5,
          },
          "(min-width: 124px)": {
            slidesPerView: 5,
          },
        },
      });
  return (
    <section className="">
      <div className=" container">
        <div className="relative z-0">
          <div className="select-none pointer-events-none absolute -top-[80%] -bottom-[20%] inset-0 opacity-30 bg-gradient_background__GEkO8 bg-gradient_background-white__Sf_QC"></div>
          <div >
            <div   ref={sliderRef}
              className="keen-slider overflow-visible cursor-grab opacity-100 visible"
              style={{ cursor: 'grab' }}
            >
              <a
                className=" border border-blue-600"
                href="https://scale.com/blog/open-ai-scale-partnership-gpt-3-5-fine-tuning"
               
              >
                <div className="border border-red-600  rounded-lg relative z-10 bg-black overflow-hidden">
                  <img
                    alt="OpenAI Partnership announcement"
                    loading="lazy"
                   
                    decoding="async"
                    data-nimg="1"
                   
                    style={{ color: 'transparent' }}
                    srcset={pics1}
                  />
                </div>
                <div className="relative z-20 pt-6">
                  <p className="text-sm font-medium leading-[1.71] text-[#D1AAD7]">
                    Partner
                  </p>
                  <h5 className="line-clamp-2 text-2xl text-white font-aeonik leading-[1.33] mt-1">
                    OpenAI Names Scale as Preferred Fine-Tuning Partner
                  </h5>
                </div>
              </a>
              <a
                className="keen-slider__slide"
                href="https://www.anthropic.com/news/partnering-with-scale"
                style={{
                    minWidth: '418.857px',
                    maxWidth: '418.857px',
                    transform: 'translate3d(24px, 0px, 0px)',
                  }}
              >
                <div className="aspect-[3/243] rounded-lg relative z-10 bg-black overflow-hidden">
                  <img
                    loading="lazy"
                    width="640"
                    height="402"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover w-full h-full rounded-lg"
                    style={{ color: 'transparent' }}
                    srcset={pics2}
                  />
                </div>
                <div className="relative z-20 pt-6">
                  <p className="text-sm font-medium leading-[1.71] text-[#D1AAD7]">
                    Partner
                  </p>
                  <h5 className="line-clamp-2 text-2xl text-white font-aeonik leading-[1.33] mt-1">
                    Anthropic Partners with Scale to Bring Generative AI to
                    Enterprises
                  </h5>
                </div>
              </a>
              <a
                className="keen-slider__slide"
                href="https://scale.com/blog/meta-llama-3-1-launch-partner"
                style={{
                    minWidth: '418.857px',
                    maxWidth: '418.857px',
                    transform: 'translate3d(24px, 0px, 0px)',
                  }}
              >
                <div className="aspect-[389/243] rounded-lg relative z-10 bg-black overflow-hidden">
                  <img
                    loading="lazy"
                    width="640"
                    height="402"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover w-full h-full rounded-lg"
                    style={{ color: 'transparent' }}
                    srcset={pics3}
                  />
                </div>
                <div className="relative z-20 pt-6">
                  <p className="text-sm font-medium leading-[1.71] text-[#D1AAD7]">
                    Partner
                  </p>
                  <h5 className="line-clamp-2 text-2xl text-white font-aeonik leading-[1.33] mt-1">
                    Meta and Scale Partner to Drive Enterprise Adoption of Llama
                  </h5>
                </div>
              </a>
              <a
                className="keen-slider__slide"
                href="https://scale.com/customers/nvidia"
                style={{
                    minWidth: '418.857px',
                    maxWidth: '418.857px',
                    transform: 'translate3d(72px, 0px, 0px)',
                  }}
              >
                <div className="aspect-[389/243] rounded-lg relative z-10 bg-black overflow-hidden">
                  <img
                    alt="Scale Collaborates with NVIDIA to Power the Next Generation of LLMs with NeMo SteerLM"
                    loading="lazy"
                    width="640"
                    height="402"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover w-full h-full rounded-lg"
                    style={{ color: 'transparent' }}
                    srcset={pics4}
                  />
                </div>
                <div className="relative z-20 pt-6">
                  <p className="text-sm font-medium leading-[1.71] text-[#D1AAD7]">
                    Case Studies
                  </p>
                  <h5 className="line-clamp-2 text-2xl text-white font-aeonik leading-[1.33] mt-1">
                    NVIDIA
                  </h5>
                </div>
              </a>
              <a
                className="keen-slider__slide"
                href="https://scale.com/customers/cohere"
                style={{
                    minWidth: '418.857px',
                    maxWidth: '418.857px',
                    transform: 'translate3d(96px, 0px, 0px)',
                  }}
              >
                <div className="aspect-[389/243] rounded-lg relative z-10 bg-black overflow-hidden">
                  <img
                    loading="lazy"
                    width="640"
                    height="402"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover w-full h-full rounded-lg"
                    style={{ color: 'transparent' }}
                    srcset={pics5}   />
                </div>
                <div className="relative z-20 pt-6">
                  <p className="text-sm font-medium leading-[1.71] text-[#D1AAD7]">
                    Case Studies
                  </p>
                  <h5 className="line-clamp-2 text-2xl text-white font-aeonik leading-[1.33] mt-1">
                    Customer Case Study: Cohere
                  </h5>
                </div>
              </a>
              <a
                className="keen-slider__slide"
                href="https://scale.com/blog/leaderboard"
                style={{
                    minWidth: '418.857px',
                    maxWidth: '418.857px',
                    transform: 'translate3d(120px, 0px, 0px)',
                  }}
              >
                <div className="aspect-[389/243] rounded-lg relative z-10 bg-black overflow-hidden">
                  <img
                    loading="lazy"
                    width="640"
                    height="402"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover w-full h-full rounded-lg"
                 style={{ color: 'transparent' }}
                    srcset={pics6}  />
                </div>
                <div className="relative z-20 pt-6">
                  <p className="text-sm font-medium leading-[1.71] text-[#D1AAD7]">
                    Blog
                  </p>
                  <h5 className="line-clamp-2 text-2xl text-white font-aeonik leading-[1.33] mt-1">
                    Scale's SEAL Research Lab Launches Expert-Evaluated LLM
                    Leaderboards
                  </h5>
                </div>
              </a>
              <a
                className="keen-slider__slide"
                href="/blog/chatgpt-reinforcement-learning"
                style={{
                    minWidth: '418.857px',
                    maxWidth: '418.857px',
                    transform: 'translate3d(144px, 0px, 0px)',
                  }}
              >
                <div className="aspect-[389/243] rounded-lg relative z-10 bg-black overflow-hidden">
                  <img
                    alt="Human feedback"
                    loading="lazy"
                    width="640"
                    height="402"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover w-full h-full rounded-lg"
                 style={{ color: 'transparent' }}
                    srcset={pics7}/>
                </div>
                <div className="relative z-20 pt-6">
                  <p className="text-sm font-medium leading-[1.71] text-[#D1AAD7]">
                    Blog
                  </p>
                  <h5 className="line-clamp-2 text-2xl text-white font-aeonik leading-[1.33] mt-1">
                    Why Is ChatGPT So Good?
                  </h5>
                </div>
              </a>
              <a
                className="keen-slider__slide"
                href="/blog/ukraine-detection"
                style={{
                    minWidth: '418.857px',
                    maxWidth: '418.857px',
                    transform: 'translate3d(168px, 0px, 0px)',
                  }}
              >
                <div className="aspect-[389/243] rounded-lg relative z-10 bg-black overflow-hidden">
                  <img
                    alt="Blur"
                    loading="lazy"
                    width="640"
                    height="402"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover w-full h-full rounded-lg"
                 style={{ color: 'transparent' }}
                    srcset={pics8} />
                </div>
                <div className="relative z-20 pt-6">
                  <p className="text-sm font-medium leading-[1.71] text-[#D1AAD7]">
                    Dataset
                  </p>
                  <h5 className="line-clamp-2 text-2xl text-white font-aeonik leading-[1.33] mt-1">
                    Open Dataset: Ukraine Damage Identification
                  </h5>
                </div>
              </a>
              <a
                className="keen-slider__slide"
                href="/blog/chatgpt-vs-claude"
                style={{
                    minWidth: '418.857px',
                    maxWidth: '418.857px',
                    transform: 'translate3d(192px, 0px, 0px)',
                  }}
              >
                <div className="aspect-[389/243] rounded-lg relative z-10 bg-black overflow-hidden">
                  <img
                    alt="Antrophic and scale logos"
                    loading="lazy"
                    width="640"
                    height="402"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover w-full h-full rounded-lg"
                 style={{ color: 'transparent' }}
                    srcset={pics9}     />
                </div>
                <div className="relative z-20 pt-6">
                  <p className="text-sm font-medium leading-[1.71] text-[#D1AAD7]">
                    Blog
                  </p>
                  <h5 className="line-clamp-2 text-2xl text-white font-aeonik leading-[1.33] mt-1">
                    Meet Claude: Anthropic’s rival to ChatGPT
                  </h5>
                </div>
              </a>
              <a
                className="keen-slider__slide"
                href="/blog/gpt-3-davinci-003-comparison"
                style={{
                    minWidth: '418.857px',
                    maxWidth: '418.857px',
                    transform: 'translate3d(216px, 0px, 0px)',
                  }}
              >
                <div className="aspect-[389/243] rounded-lg relative z-10 bg-black overflow-hidden">
                  <img
                    alt="Planet"
                    loading="lazy"
                    width="640"
                    height="402"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover w-full h-full rounded-lg"
                 style={{ color: 'transparent' }}
                    srcset={pics10}   />
                </div>
                <div className="relative z-20 pt-6">
                  <p className="text-sm font-medium leading-[1.71] text-[#D1AAD7]">
                    Blog
                  </p>
                  <h5 className="line-clamp-2 text-2xl text-white font-aeonik leading-[1.33] mt-1">
                    How Much Better Is OpenAI's Newest GPT-3 Model?
                  </h5>
                </div>
              </a>
              <a
                className="keen-slider__slide"
                href="/customers/toyota"
                style={{
                    minWidth: '418.857px',
                    maxWidth: '418.857px',
                    transform: 'translate3d(240px, 0px, 0px)',
                  }}
              >
                <div className="aspect-[389/243] rounded-lg relative z-10 bg-black overflow-hidden">
                  <img
                    alt="Toyota car"
                    loading="lazy"
                    width="640"
                    height="402"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover w-full h-full rounded-lg"
                 style={{ color: 'transparent' }}
                    srcset={pics11}  />
                </div>
                <div className="relative z-20 pt-6">
                  <p className="text-sm font-medium leading-[1.71] text-[#D1AAD7]">
                    Customer Case Study
                  </p>

                  <h5 className="line-clamp-2 text-2xl text-white font-aeonik leading-[1.33] mt-1">
                    Toyota Research Institute
                  </h5>
                </div>
              </a>
              <a
                className="keen-slider__slide"
                href="/blog/how-to-label-1m-data-points-week"
                style={{
                    minWidth: '418.857px',
                    maxWidth: '418.857px',
                    transform: 'translate3d(264px, 0px, 0px)',
                  }}
              >
                <div className="aspect-[389/243] rounded-lg relative z-10 bg-black overflow-hidden">
                  <img
                    alt="Open AI logo"
                    loading="lazy"
                    width="640"
                    height="402"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover w-full h-full rounded-lg"
                 style={{ color: 'transparent' }}
                    srcset={pics12}  />
                </div>
                <div className="relative z-20 pt-6">
                  <p className="text-sm font-medium leading-[1.71] text-[#D1AAD7]">
                    Blog
                  </p>
                  <h5 className="line-clamp-2 text-2xl text-white font-aeonik leading-[1.33] mt-1">
                    How OpenAI worked with Scale to build InstructGPT
                  </h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSutides;
