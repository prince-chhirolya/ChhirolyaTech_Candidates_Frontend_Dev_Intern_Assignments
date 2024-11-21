import avatar from "../../assests/images/avatar.jpeg";
const RLHF = () => {
    return ( 
        <div className="container relative">
        <div className="box_box__wrapper__jXRQR">
        <div className="flex 3xl:py-[95px] z-10 relative xl:py-20 md:p-10 lg:py-12 p-6 flex-col-reverse rounded-2xl lg:rounded-[34px] overflow-hidden md:overflow-visible lg:flex-row-reverse xl:pr-20">
          <div className="xl:flex xl:w-auto w-full flex-col justify-center lg:items-start xl:min-w-[466px] xl:max-w-[466px] flex-1">
            <p className="font-aeonik text-3.5xl xl:text-4xl mb-2 text-white">
              RLHF
            </p>
            <p className="text-zinc-400">
              Powering the next generation of Generative AI
            </p>
            <p className="my-8 text-[#F5F5F5]">
              Scale Generative AI Data Engine powers the most advanced LLMs
              and generative models in the world through world-class RLHF,
              data generation, model evaluation, safety, and&nbsp;alignment.
            </p>
            <div className="flex items-center gap-x-3 xs:gap-x-6">
              <a
                style={{ "-webkit-tap-highlight-color": "transparent" }}
                className="relative focus-visible:outline outline-[rgba(255,255,255,0.64)] rounded-xl outline-offset-[3px] inline-block"
                href="/rlhf"
              >
                <div className="new-button_button--primary__EJ4AI text-white font-medium justify-center flex flex-nowrap whitespace-nowrap transition-translate duration-300 cursor-pointer group items-center h-full group leading-[150%] new-button_button--pink__gdR3d text-sm px-[30px] py-[14px]">
                  Label My Data
                  <span className="inline-block ml-1 font-normal text-white duration-300 w-fit transition-translate group-hover:translate-x-1 font-unicode">
                    →
                  </span>
                </div>
                <span className="after:content-[''] after:inline-block absolute inset-0 after:inset-0 after:absolute select-none pointer-events-none after:rounded-[11px] rounded-[11px] shadow-[inset_0_0_0_1px_rgba(255,255,255,1)] after:shadow-[inset_0_0_0_1px_rgba(200,139,196,0.4)]"></span>
              </a>
            </div>
          </div>
          <div className="m-3 md:mt-0 md:mx-0 relative lg:flex lg:-translate-x-10 3xl:-translate-x-14 transition-transform duration-1000 ease-out rounded-[10px] shadow-xl xl:shadow-super overflow-hidden lg:mb-0 mb-9 lg:w-1/2 xl:w-[649px] xl:h-[402px] select-none aspect-[649/402] min-w-full lg:min-w-[50%] xl:min-w-[unset] max-w-[calc(100%+24px)]">
            <div className="overflow-hidden rounded-[10px] w-full absolute aspect-[649/402] box_box__chat__AoICB">
              <div className="grid grid-cols-3 p-2 sm:p-3 md:grid-cols-3">
                <div className="flex space-x-[3px] sm:space-x-1.5">
                  <div className="w-1.5 sm:w-3 h-1.5 sm:h-3 bg-red-400 rounded-full"></div>
                  <div className="w-1.5 sm:w-3 h-1.5 sm:h-3 rounded-full bg-utility-yellow"></div>
                  <div className="w-1.5 sm:w-3 h-1.5 sm:h-3 rounded-full bg-utility-green"></div>
                </div>
                <div className="flex text-[7px] sm:text-base font-medium pt-2 justify-center text-neutral-200">
                  AI Text Generator
                </div>
                <div></div>
              </div>
              <div className="relative h-full px-6 py-3 space-y-1 text-xs sm:space-y-2 text-neutral-200">
                {/* User feedback section */}
                <div className="flex px-1.5 md:pr-3 md:pl-[7px] md:py-[4.5px] py-[3px] space-x-1 sm:space-x-2 bg-white/5 border border-white border-opacity-[0.16] items-center rounded-[18px]">
                  <img
                    className="inline-block h-2 sm:w-[18px] w-2 sm:h-[18px] rounded-full"
                    src={avatar} // Assuming `avatar` is a variable with the image path
                    alt="Avatar"
                  />
                  <div className="transition-opacity text-[7px] sm:text-sm">
                    Why is human feedback
                  </div>
                </div>

                {/* Additional space */}
                <div className="flex flex-col items-end space-y-2">
                  <div
                    className="rounded-[18px] p-[0.5px] sm:p-px"
                    style={{
                      background:
                        "linear-gradient(97deg, rgb(255, 255, 255), rgb(154, 119, 255), rgb(77, 125, 247), rgb(225, 81, 255), rgb(255, 247, 89))",
                    }}
                  >
                    <div className="rounded-[18px] w-full flex items-center space-x-1 sm:space-x-2 bg-black p-[3px] h-[19px] md:h-auto">
                      <div className="px-1.5 md:pl-3 md:pr-[7px] md:py-[3px] w-fit py-[3px] transition-opacity">
                        ...
                      </div>
                      <img
                        className="inline-block w-2 h-2 rounded-full sm:w-[18px] sm:h-[18px]"
                        src="/static/images/icons/llm-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom content section */}
              <div className="absolute bottom-0 z-10 w-full">
                <div className="after:bg-[linear-gradient(180deg,_rgba(243,_238,_255,_0)_0%,_rgba(243,_238,_255,_0.04)_100%)] after:absolute after:inset-0 after:content-[''] before:border before:border-white/5 before:inset-0 before:absolute relative flex flex-col p-2 pb-[14px] sm:pb-6 md:pb-9 m-1 sm:m-2 space-y-2.5 sm:space-y-6 text-sm before:rounded-sm before:sm:rounded-md rounded-sm sm:rounded-md text-neutral-700 transition ease-in-out duration-500 transform opacity-0 translate-y-full scale-50">
                  <p className="text-[6px] sm:text-[13px] sm:leading-6 text-center text-scale-mauve md:pt-6">
                    Human Feedback Ranking
                  </p>

                  {/* Feedback options */}
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center space-y-1 sm:space-y-[7px]">
                      {/* First feedback item */}
                      <div className="text-[7px] px-1 py-0.5 md:px-3 md:py-1 rounded-full w-fit bg-black/25 border border-white border-opacity-[0.16] text-neutral-200 transform transition duration-500 ease-in-out text-right md:text-sm">
                        LLMs are trained by garden gnomes, who are known to
                        lie
                      </div>

                      {/* Second feedback item */}
                      <div className="text-[7px] px-1 py-0.5 md:px-3 md:py-1 rounded-full w-fit bg-black/25 border border-white border-opacity-[0.16] text-neutral-200 transform transition-all duration-500 ease-in-out text-right md:text-sm">
                        LLMs are not always truthful or aligned with human
                        preferences
                      </div>

                      {/* Third feedback item */}
                      <div className="text-[7px] px-1 py-0.5 md:px-3 md:py-1 rounded-full w-fit bg-black/25 border border-white border-opacity-[0.16] text-neutral-200 transform transition duration-500 ease-in-out text-center md:text-sm">
                        Humans enjoy giving opinions. It makes them feel
                        important
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
     );
}
 
export default RLHF;