import React, { useState, useEffect } from "react";

const Card = () => {
  const [activeLink, setActiveLink] = useState(null);

  let data = [
    {
      id: "publicDocs",
      bg: "bg-blue",
      icon: "/product1.svg",
      heading: "Public Docs",
      heading1: "Publish unbeatable documentation",
      desc: "Effortlessly migrate your product docs to GitBook, customize them to match your brand, then publish them to the world — or just a selected group, if you prefer. Then keep them updated with built-in content insights",
      button: "Discover documentation →",
      img: "/HeadQuaters.png",
      video: "/card1.mp4",
    },
    {
      id: "internalDocs",
      bg: "bg-Yellow",
      icon: "/book.svg",
      heading: "Internal docs",
      heading1: "Better internal docs",
      desc: "Find the perfect new home for your organization’s code docs, technical wikis, product plans, API documentation and more. GitBook is flexible, and uses a Git-like branching workflow your team will love.",
      button: "Learn more →",
      reverse: true,
      img: "/yellowbg.svg",
      video: "/card2.mp4",
    },
    {
      id: "gitSync",
      bg: "bg-pink",
      icon: "/githubIcon.png",
      heading: "Git Sync",
      heading1: "Collaborate on docs like you collaborate on code",
      desc: "Sync your docs with a GitHub or GitLab repository and everyone can contribute to your docs, wherever they prefer to work. So your technical writers can use WYSIWYG editor, while engineers add to your docs directly in Git. And everything stays in sync, with feedback and reviews to guarantee quality.",
      button: "Discover git sync →",
      img: "/pinkbg.svg",
      video: "/card3.mp4",
    },
    {
      id: "gitBookAI",
      bg: "bg-primary",
      icon: "/starsparks.png",
      heading: "GitBook AI",
      heading1: "Smarter, AI-powered documentation",
      desc: "Improve your writing with a click. GitBook AI can simplify, shorten, or translate any text you want — or even just write a first draft for you. And because GitBook AI is trained on your docs, you can ask it a question and get the answer you need instantly. And so can your users.",
      button: "Explore Gitbook AI →",
      reverse: true,
      img: "/whitebg.svg",
      video: "/card4.mp4",
    },
    {
      id: "visitorAuth",
      bg: "bg-teal",
      icon: "/lock.png",
      heading: "Visitor authentication",
      heading1: "Control access to your published docs",
      desc: "Choose who can access your documentation. With visitor authentication, you can keep sensitive information away from competitors and hackers. So only your chosen customers, team members or authorized users can view your docs.",
      button: "Find out more →",
      img: "/tealbg.svg",
      video: "/card5.mp4",
      white: true,
    },
  ];

  let Socialdata = [
    { icon: "/sidenav1.svg", bg: "bg-blue", id: "publicDocs" },
    { icon: "/sidenav2.svg", bg: "bg-Yellow", id: "internalDocs" },
    { icon: "/sidenav3.svg", bg: "bg-pink", id: "gitSync" },
    { icon: "/sidenav4.svg", bg: "bg-primary", id: "gitBookAI" },
    { icon: "/sidenav5.svg", bg: "bg-teal", id: "visitorAuth" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="relative">
        {/* Side Navigation for Each Card */}

        <div className="fixed hidden lg:block  rounded-full top-1/4 right-4 flex flex-col items-center space-y-4">
          <a href="#" className="w-10 h-10  bg-black rounded-full flex justify-center items-center transition duration-300" title="Home">
            <img src="/uparrow.svg" alt="Home" />
          </a>
          <div className="bg-white rounded-full flex flex-col items-center space-y-4 hover:transparent">
            {Socialdata.map((s, index) => (
              <a
                key={index}
                href={`#${s.id}`}
                className={`w-10 h-10  rounded-full flex justify-center items-center transition-all duration-300 transform ${activeLink === s.id ? s.bg : "bg-transparent"}`}>
                <img src={s.icon} alt={`Social Icon ${index + 1}`} className="w-5 h-5 transition-all duration-300" />
              </a>
            ))}
          </div>
          <a href="#" className="w-10 h-10 bg-Yellow shadow-lg rounded-full flex justify-center items-center hover:bg-Yellow transition duration-300" title="Arrow">
            <img src="/arrow.svg" alt=""  />
          </a>
        </div>

        {/* Main Content */}

        {data.map((e) => (
          <>
            <section key={e.id} id={e.id}>
              <div className={`${e.bg} min-h-screen flex justify-center items-center p-5`}>
                <div
                  className={`tilt-hover-container lg:m-5 lg:p-5 flex ${
                    e.reverse ? "lg:flex-row-reverse" : "flex-row"
                  } max-w-sm sm:max-w-full rounded-lg overflow-hidden p-6 flex-col lg:flex-row justify-center items-center lg:items-start lg:text-left lg:space-x-4 lg:space-y-2`}>
                  {/* Text Content */}
                  <div className="flex flex-col justify-center space-y-4 my-auto mx-8 lg:w-1/3">
                    <span className="inline-flex items-center space-x-2">
                      <img src={e.icon} className="w-9 h-9" alt="" />
                      <h2 className={`text-xs font-semibold cardItem ${e.white ? "text-white" : "text-gray-900"} uppercase`}>{e.heading}</h2>
                    </span>

                    <h1 className={`text-3xl card-heading font-semibold ${e.white ? "text-white" : "text-gray-900"}`}>{e.heading1}</h1>
                    <p className={`${e.white ? "text-white" : "text-gray-700"} card-heading`}>{e.desc}</p>

                    {/* Button */}
                    <button className="bg-black md:w-1/2 text-white py-2 px-2 rounded-lg hover:bg-teal transition">{e.button}</button>
                  </div>

                  {/* Image and Video Content */}
                  <div className="relative tilt-hover hover:tilt-hover w-full lg:p-5 sm:p-3 lg:w-1/2">
                    <img
                      src={e.img}
                      alt="Documentation Preview"
                      className="w-full rounded-lg transition-transform duration-300 transform group-hover:rotate-2 group-hover:scale-105"
                    />
                    <video
                      src={e.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute w-full h-3/4 z-50 hidden lg:block rounded-lg transition-transform duration-300 transform group-hover:rotate-2 group-hover:scale-105"
                      style={{ top: "12%", left: "-2%" }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </>
        ))}
      </div>
    </>
  );
};

export default Card;
