import React from "react";

const Card = () => {
  let data = [
    {
      bg: "bg-blue",
      icon: "/card1Icon.svg",
      heading: "Public Docs",
      heading1: "Publish unbeatable documentation",
      desc: "Effortlessly migrate your product docs to GitBook, customize them to match your brand, then publish them to the world — or just a selected group, if you prefer. Then keep them updated with built-in content insights",
      button: "Discover documentation →",
      img: "/HeadQuaters.png",
      video: "/card1.mp4",
    },
    {
      bg: "bg-yellow",
      icon: "/card2Icon.svg",
      heading: "Internal docs",
      heading1: "Better internal docs",
      desc: "Find the perfect new home for your organization’s code docs, technical wikis, product plans, API documentation and more. GitBook is flexible, and uses a Git-like branching workflow your team will love.",
      button: "Learn more →",
      reverse: true,
      img: "/yellowbg.svg",
      video: "/card2.mp4",
    },
    {
      bg: "bg-pink",
      icon: "/card3Icon.svg",
      heading: "Git Sync",
      heading1: "Collaborate on docs like you collaborate on code",
      desc: "Sync your docs with a GitHub or GitLab repository and everyone can contribute to your docs, wherever they prefer to work. So your technical writers can use WYSIWYG editor, while engineers add to your docs directly in Git. And everything stays in sync, with feedback and reviews to guarantee quality.",
      button: "Discover git sync →",
      img: "/pinkbg.svg",
      video: "/card3.mp4",
    },
    {
      bg: "bg-primary",
      icon: "/card4Icon.svg",
      heading: "GitBook AI",
      heading1: "Smarter, AI-powered documentation",
      desc: "Improve your writing with a click. GitBook AI can simplify, shorten, or translate any text you want — or even just write a first draft for you. And because GitBook AI is trained on your docs, you can ask it a question and get the answer you need instantly. And so can your users.",
      button: "Explore Gitbook AI →",
      reverse: true,
      img: "/whitebg.svg",
      video: "/card4.mp4",
    },
    {
      bg: "bg-teal",
      icon: "/card5Icon.svg",
      heading: "Visitor authentication",
      heading1: "Control access to your published docs",
      desc: "Choose who can access your documentation. With visitor authentication, you can keep sensitive information away from competitors and hackers. So only your chosen customers, team members or authorized users can view your docs.",
      button: "Find out more →",
      img: "/tealbg.jpeg",
      video: "/card5.mp4",
      white: true,
    },
  ];

  return (
    <>
      {data.map((e) => (
        <div key={e.heading} className={`${e.bg} min-h-screen flex justify-center items-center p-5`}>
          <div
            className={`flex ${e.reverse ? "lg:flex-row-reverse" : "flex-row"} max-w-sm sm:max-w-full 
            rounded-lg overflow-hidden p-6 flex-col lg:flex-row items-center lg:items-start 
            lg:text-left lg:space-x-6 lg:space-y-6 gap-6`}>
            {/* Text Content */}
            <div className="flex flex-col justify-center space-y-4 my-auto mx-8 lg:w-1/3">
              <span className="inline-flex items-center space-x-2">
                <img src={e.icon} className="h-6 w-6" alt="" />
                <h2 className={`text-xs font-semibold ${e.white ? "text-white" : "text-gray-900"} uppercase`}>{e.heading}</h2>
              </span>

              <h1 className={`text-2xl card-heading  font-semibold ${e.white ? "text-white" : "text-gray-900"}`}>{e.heading1}</h1>
              <p className={`${e.white ? "text-white" : "text-gray-700"} card-heading`}>{e.desc}</p>

              {/* Button */}
              <button className="bg-black md:w-1/2 text-white py-2 px-2 rounded-lg hover:bg-gray-700 transition">{e.button}</button>
            </div>

            {/* Image and Video Content */}
            <div className="relative w-full lg:w-1/2 tilt-hover hover:tilt-hover">
              <img src={e.img} alt="Documentation Preview" className="w-full rounded-lg transition-transform duration-300 transform group-hover:rotate-2 group-hover:scale-105" />
              <video
                src={e.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute w-full h-3/4 z-50 rounded-lg transition-transform duration-300 transform group-hover:rotate-2 group-hover:scale-105"
                style={{ top: "12%", left: "-2%" }}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
