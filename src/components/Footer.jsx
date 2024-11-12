import React from "react";
// import { FaGithub, FaXing, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const products = [
    { name: "Public docs", href: "#", icon: "/product1Icon.svg" },
    { name: "API docs", href: "#", icon: "/product2Icon.svg" },
    { name: "Internal docs", href: "#", icon: "/product3Icon.svg" },
    { name: "Enterprise", href: "#", icon: "/product4Icon.svg" },
    { name: "Open source", href: "#", icon: "/product5Icon.svg" },
    { name: "Product tour", href: "#", icon: "/product6Icon.svg" },
    { name: "Pricing", href: "#", icon: "/product7Icon.svg" },
  ];

  const resources = [
    { name: "Product docs", href: "#", icon: "/resources1Icon.svg" },
    { name: "Developer docs", href: "#", icon: "/resources2Icon.svg" },
    { name: "Blog", href: "#", icon: "/resources3Icon.svg" },
    { name: "Videos", href: "#", icon: "/resources4Icon.svg" },
    { name: "Events", href: "#", icon: "/resources5Icon.svg" },
    { name: "Changelog", href: "#", icon: "/resources6Icon.svg" },
    { name: "Security and compliance", href: "#", icon: "/resources6Icon.svg" },
    { name: "Newsletter", href: "#", icon: "/resources7Icon.svg" },
  ];

  const features = [
    { name: "Visitor authentication", description: "Control access to your published docs", href: "#", icon: "/featuresIcon1.svg" },
    { name: "Git Sync", description: "Keep your docs and codebase in sync", href: "#", icon: "/featuresIcon2.svg" },
    { name: "GitBook AI", description: "Improve your docs with GitBook AI", href: "#", icon: "/featuresIcon3.svg" },
    { name: "Integrations", description: "Integrate with your tech stack", href: "#", icon: "/featuresIcon4.svg" },
  ];

  const company = [
    { name: "About", href: "#", icon: "/companyIcon1.svg" },
    { name: "Careers", href: "#", icon: "/companyIcon2.svg" },
    { name: "Contact and support", href: "#", icon: "/companyIcon3.svg" },
    { name: "Terms of service", href: "#", icon: "/companyIcon4.svg" },
    { name: "Privacy policy", href: "#", icon: "/companyIcon5.svg" },
  ];

  return (
    <footer className="bg-[#202427] py-10 flex  flex-col justify-center items-center">
      <div className="container mx-3 p-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="mb-4 text-white font-semibold">Product</h3>
          <ul>
            {products.map((e) => {
              return (
                <li key={e.name} className="mb-2 text-white  ">
                  <span className="inline-flex items-center space-x-2">
                    <img src={e.icon} className="h-5 w-5" alt="" />
                    <a href="#" className="hover:underline">
                      {e.name}
                    </a>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-white mb-4 font-semibold">Features</h3>
          <ul>
            {features.map((e) => {
              return (
                <li key={e.name} className="mb-2 text-white  ">
                  <span className="inline-flex items-center space-x-2">
                    <img src={e.icon} className="h-5 w-5" alt="" />
                    <a href="#" className="hover:underline">
                      {e.name}
                    </a>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-white mb-4 font-semibold">Resources</h3>
          <ul>
            {resources.map((e) => {
              return (
                <li key={e.name} className="mb-2 text-white  ">
                <span className="inline-flex items-center space-x-2">
                  <img src={e.icon} className="h-5 w-5" alt="" />
                  <a href="#" className="hover:underline">
                    {e.name}
                  </a>
                </span>
              </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-white mb-4 font-semibold">Company</h3>
          <ul>
            {company.map((e) => {
              return (
                <li key={e.name} className="mb-2 text-white  ">
                <span className="inline-flex items-center space-x-2">
                  <img src={e.icon} className="h-5 w-5" alt="" />
                  <a href="#" className="hover:underline">
                    {e.name}
                  </a>
                </span>
              </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border border-slate-600 z-10 w-[85%]" />

      <div className="container justify-center items-center grid  md:grid-cols-3 gap-6 p-6 mt-10 text-center">
        <div className="grid-cols-1">
          <div className="flex">
            <img className="h-20" src="/footerimg1.png" alt="" srcset="" />
            <img className="h-20 p-3" src="/footerimg.svg" alt="" sizes="" srcset="" />
          </div>
        </div>
        <div className="grid-cols-2">
          <div className="grid justify-center items-center">
            <img src="/logo.svg" alt="" srcset="" className="mx-auto h-8 my-3" />
            <p className="footerText text-slate-300">&copy; 2024 COPYRIGHT GITBOOK INC. 440 N BARRANCA AVE #7171, COVINA, CA 91723, USA. EIN: 320592699</p>
          </div>
        </div>
        <div className="grid-col-1 space-x-2">
          <div className="flex justify-center space-x-4 mt-4 p-8">
            <a href="#" className="hover:text-white ">
              <img src="/github.png" className="w-8 h-8" alt="" srcset="" />
            </a>
            <a href="#" className="hover:text-white">
              <img src="/twitter.png" className="w-8 h-8" alt="" srcset="" />
            </a>
            <a href="#" className="hover:text-white ">
              <img src="/linkedin.png" className="w-8 h-8" alt="" srcset="" />
            </a>
            <a href="#" className="hover:text-white ">
              <img src="/youtube.png" className="w-8 h-8" alt="" srcset="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
