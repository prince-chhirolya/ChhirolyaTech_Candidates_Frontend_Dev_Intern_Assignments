import React from "react";
import "../Hero/Hero.css";
import Slider from "../Slider/Slider";
import Slider2 from "../Slider/Slider2";
const Hero = () => {
  return (
    <div className="bg-heroBgColor">
      <div className="container mx-auto">
        <div className="flex flex-col  items-center text-center text-white">
          <div className="imageDiv size-24 mb-2">
            <img
              src="https://framerusercontent.com/images/vi1UE1TACnItuCAWiKCSWjsHg.png"
              alt=""
            />
          </div>
          <div className="textContainer flex flex-col gap-y-2 mt-8">
            <span className="heading leading-none m-0 text-white">
              Product documentation
            </span>
            <span className="m-0 leading-none" id="subText">
              your users will love
            </span>
            <div className="my-5">
              <p
                id="desc"
                className="text-justify text-sm md:text-lg lg:text-md font-medium"
              >
                Forget building your own custom docs platform. With GitBook you
                get beautiful
                <br />
                documentation&nbsp;for your users, and a branch-based Git workflow
                for your team.
              </p>
            </div>
            <div className="flex justify-center gap-x-3">
              <button className="bg-customGray border-2 px-4 py-1 rounded-lg font-medium text-white tracking-wide">
                <i className="fa-brands fa-github mx-1"></i> Sign up with GitHub
              </button>
              <button className="bg-bgAmberColor px-4 py-1 rounded-lg font-medium text-black tracking-wide hover:bg-btnHoverColor hover:hover:text-white transition duration-300 ease-in-out">
                Start for free <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <Slider />
        <Slider2 />

        <div className="flex justify-center mt-10 lg:flex hidden">
          <div className="relative ">
            <img
              src="https://framerusercontent.com/images/S0CrB0qUOXdVY8Qfb8rsXaaI.svg?scale-down-to=1024"
              alt=""
              width={960}
              className=" h-[450px] opacity-50 "
            />
            <div className="absolute top-2 left-12">
              <button className="bg-gitBookEditorBtn px-4 py-1 rounded-full text-sm text-black tracking-wide">
                GitBook editor
              </button>
            </div>
            <div className="absolute top-12 left-12 hover:z-10 hover:opacity-100 opacity-90">
              <img
                src="https://framerusercontent.com/images/NUk2bymfhx4Y24QfHKQNvHxmg.svg"
                alt=""
                width={730}
                className=" h-[401px]"
              />
            </div>
            <div className="absolute top-12 right-7 z-10">
              <button className="reltative bg-publishedSiteBtn px-4 py-1 rounded-full  text-sm text-black tracking-wide">
                Published site
              </button>
            </div>
            <div className="absolute top-28 right-7">
              <img
                src="https://framerusercontent.com/images/tgbneAIa7uSO3hH00yxzKCZGHE.png?scale-down-to=1024"
                alt=""
                width={730}
                className=" h-[337px]"
              />
            </div>
            {/* <div className="absolute bottom-0">
              <img src="https://framerusercontent.com/images/nlPFYqZ5aD0g8lWH7qyWBYaz4Oo.png?scale-down-to=2048" alt="" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
