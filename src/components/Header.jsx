import React from "react";
import Navbar from "./Navbar";

let scrollData = [
  {link:"/DeepL(White).svg"},
  {link:"/Linear(white).svg"},
  {link:"/DigitalRiver(white).svg"},
  {link:"/DeepL(White).svg"},
  {link:"/Linear(white).svg"},
  {link:"/DigitalRiver(white).svg"},
  {link:"/DeepL(White).svg"},
  {link:"/Linear(white).svg"},
  {link:"/DigitalRiver(white).svg"},
  {link:"/DeepL(White).svg"},
  {link:"/Linear(white).svg"},
  {link:"/DigitalRiver(white).svg"},
  {link:"/DigitalRiver(white).svg"},
  {link:"/DeepL(White).svg"},
  {link:"/Linear(white).svg"},
  {link:"/DigitalRiver(white).svg"},
  {link:"/DigitalRiver(white).svg"},
  {link:"/DeepL(White).svg"},
  {link:"/Linear(white).svg"},
  {link:"/DigitalRiver(white).svg"},
  {link:"/DigitalRiver(white).svg"},
  {link:"/DeepL(White).svg"},
  {link:"/Linear(white).svg"},
  {link:"/DigitalRiver(white).svg"},
];

const ScrollComponent = ({className})=>{
  return <>
         <div className="overflow-x-hidden p-3">
          <div className={`flex whitespace-nowrap  items-center text-center  gap-12 ${className}`}>
            {
             scrollData.map((e,index)=>{
            return <>
             <img key={index} src={e.link} alt="" className="h-10"/>
            
            </>
          })
         }
          </div>
        </div> 
  </>
}

function Header() {
 
  return (
    <div>
      <header className="bg-[#181c1f] relative z-50 inset-x-0 top-0 xxl:px-24">
        <Navbar/>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl pb-12 lg:pb-32 text-center flex flex-col justify-center">
            <img src="/headerimg.png" className="h-28 w-32 mx-auto" alt="" srcset="" />
            <h1 className="font-semibold tracking-tight text-white text-2xl ">
              Product documentation
              <br /> <span className="text-blue">your users will love</span>
            </h1>
            <p className="mt-8 text-md headerpara font-medium text-primary sm:text-sm">
              Forget building your own custom docs platform. With GitBook you get beautiful documentation for your users, and a branch-based Git workflow for your team.
            </p>
            <div className="mt-10 lg:flex items-center justify-center gap-x-2">
              <button
                type="button"
                className="text-white lg:w-1/2 border border-white w-full inline-flex items-center justify-center text-center bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                Sign in with Github
              </button>
              <button
                type="button"
                className="text-black lg:w-1/4 w-full inline-flex items-center justify-center text-center bg-Yellow  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center   me-2 mb-2">
                <a href="#" className="text-sm font-semibold text-gray-200">
                  Start for Free <span aria-hidden="true">→</span>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div  className="md:mx-28">

          <ScrollComponent className="selector"/>
          <ScrollComponent className="selector1"/>

        </div>

        <div className="headerSec">
         <img src="/headerbg.svg"  alt="" srcset="" />
        </div>
      </header>
    </div>
  );
}

export default Header;
