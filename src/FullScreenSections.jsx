import React, { useEffect, useState, useRef } from "react";
import SidebarNav from "./Sidebar";

const data = [
    {
        id: "section1",
        videoUrl: "https://framerusercontent.com/assets/IH3qEgN5Xhe3P5Oc38wUsUzD48.mp4",
        heading: "Public Docs",
        subHeading: "Publish unbeatable documentation",
        description: "Effortlessly migrate your product docs to GitBook, customize them to match your brand, then publish them to the world — or just a selected group, if you prefer. Then keep them updated with built-in content insights.",
        btnDesc: "Discover documentation",
        bgColor: "#BBDDE5",
        bgImg: "https://framerusercontent.com/images/Kc2ZaB8Y41eAhw3HIb27tFg3ewQ.svg",
        icon: <i class="fa-solid fa-book-open"></i>


    },
    {
        id: "section2",
        videoUrl: "https://framerusercontent.com/assets/vyyY2wuDHQQOUPZEn7IfT6l1k.mp4",
        heading: "Internal docs",
        subHeading: "Better internal docs",
        description: "Find the perfect new home for your organization’s code docs, technical wikis, product plans, API documentation and more. GitBook is flexible, and uses a Git-like branching workflow your team will love.",
        btnDesc: "Learn more",
        bgColor: "#F4E28D",
        bgImg: "https://framerusercontent.com/images/aolcyUKw61qsFlc4iXu6dnci9Fw.svg",
        icon: <i class="fa-solid fa-book"></i>
    },
    {
        id: "section3",
        videoUrl: "https://framerusercontent.com/assets/OrGbBW4KZNpizSyEO3Jh1VvucSk.mp4",
        heading: "GIT SYNC",
        subHeading: "Collaborate on docs like you collaborate on code",
        description: "Sync your docs with a GitHub or GitLab repository and everyone can contribute to your docs, wherever they prefer to work. So your technical writers can use WYSIWYG editor, while engineers add to your docs directly in Git. And everything stays in sync, with feedback and reviews to guarantee quality.",
        btnDesc: "Discover Git Sync",
        bgColor: "#FDA599",
        bgImg: "https://framerusercontent.com/images/UpuExMnEd0diuDJZQoWTslkU0g.svg",
        icon: <i class="fa-brands fa-github"></i>
    },
    {
        id: "section4",
        videoUrl: "https://framerusercontent.com/assets/e0jnKwFezEZusbq3uF8evNM43Y.mp4",
        heading: "GitBook AI",
        subHeading: "Smarter, AI-powered documentation",
        description: "Improve your writing with a click. GitBook AI can simplify, shorten, or translate any text you want — or even just write a first draft for you. And because GitBook AI is trained on your docs, you can ask it a question and get the answer you need instantly. And so can your users.",
        btnDesc: "Explore GitBook AI",
        bgColor: "#F2F0FF",
        bgImg: "https://framerusercontent.com/images/JeNnSOasMx5z3Au5thGlKddpabs.svg",
        icon: <i class="fa-solid fa-wand-magic-sparkles"></i>
    },
    {
        id: "section5",
        videoUrl: "https://framerusercontent.com/assets/H87PsNhWy8cFz4gFDswOyZ0wI.mp4",
        heading: "Visitor authentication",
        subHeading: "Control access to your published docs",
        description: "Choose who can access your documentation. With visitor authentication, you can keep sensitive information away from competitors and hackers. So only your chosen customers, team members or authorized users can view your docs.",
        btnDesc: "Find out more",
        bgColor: "#3F89A1",
        textColor: 'text-white',
        btnTextColor: "#181C1F",
        btnColor: '#F4E28D',
        bgImg: "https://framerusercontent.com/images/FNymsBQmh5Vr1LoXf8qGsmn8nKE.svg",
        icon: <i class="fa-solid fa-lock"></i>
    },
    {
        id: "section6",
        // videoUrl: "https://framerusercontent.com/assets/H87PsNhWy8cFz4gFDswOyZ0wI.mp4",
        heading: "Integrations",
        subHeading: "Integrate with your stack",
        description: "Install one of our verified integrations, or build your own with our API. Because a great knowledge management system should work with everything you use on a daily basis.",
        btnDesc: "See our integrations",
        bgColor: "#202427",
        textColor: 'text-white',
        btnTextColor: "#181C1F",
        btnColor: '#F4E28D',
        bgImg: "https://framerusercontent.com/images/t7whzgDoFFtmnUQdF9zDYs2ZNU.svg",
        icon: <i class="fa-solid fa-puzzle-piece"></i>
    },
];

const FullScreenSections = () => {
    const [activeBgColor, setActiveBgColor] = useState(data[0].bgColor); // Initial background color
    const [activeSectionId, setActiveSectionId] = useState(null);
    const [showSideBar,setShowSideBar] = useState(false)
    const sectionsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
          const offsets = sectionsRef.current.map(section => section.getBoundingClientRect().top);
          const activeIndex = offsets.findIndex(offset => offset >= 0 && offset <= window.innerHeight / 2);
          setActiveSectionId(`section${activeIndex + 1}`);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Update the background color based on the section in view
                        const sectionData = data.find((item) => item.id === entry.target.id);
                        if (sectionData) {
                            setActiveBgColor(sectionData.bgColor);
                        }
                        setShowSideBar(true)
                    }
                  console.log(entry)
                });
            },
            {
                root: null,
                threshold: 0.5, // Trigger when 50% of the section is visible
            }
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div style={{ backgroundColor: activeBgColor, transition: "background-color 0.7s ease" }}>
            {showSideBar && <SidebarNav sections={data.map((item) => item.id)} activeBgColor={activeBgColor} activeSectionId={activeSectionId} />}

            {data.map((item, index) => (
                <section
                    key={item.id}
                    id={item.id}
                    ref={(el) => (sectionsRef.current[index] = el)}
                    className="min-h-screen flex items-center"
                    style={{ transition: "background-color 0.7s ease" }}
                >
                    <div className="container mx-auto">
                        <div className={`flex flex-col-reverse justify-center items-center gap-6  ${index % 2 === 0 ? 'xl:flex-row' : 'xl:flex-row-reverse'}`}>
                            <div className={`flex flex-col ms-6 gap-y-6 basis-1/4  items-start ${item.textColor ? item.textColor : 'text-heroBgColor '}`}>
                                <span className="text-sm font-medium" style={{ wordSpacing: "0.35em" }}><i className="me-2">{item.icon}</i>{item.heading.toUpperCase()}</span>
                                <h2 className="font-semibold text-3xl">{item.subHeading}</h2>
                                <p className="font-medium text-sm" style={{ wordSpacing: "0.25em" }}>{item.description}</p>
                                <div className="">
                                    {/* <button className={`px-4 py-1 rounded text-sm`} style={{
                                        backgroundColor: item.btnColor ? item.btnColor : "#181C1F",
                                        color:item.btnTextColor ? item.btnTextColor : '#ffffff',
                                    }}>{item.btnDesc} */}
                                    <button className={`px-4 py-1 rounded text-sm  text-white bg-heroBgColor hover:bg-btnHoverColor hover:hover:text-white transition duration-300 ease-in-out`}>{item.btnDesc}
                                        <i className="fa-solid fa-arrow-right fa-sm ms-2"></i></button>
                                </div>
                            </div>
                            <div className="relative flex justify-center items-center basis-1/2">
                                <img
                                    src={item.bgImg}
                                    alt=""
                                    className="h-96 opacity-50"
                                />
                                <div className="absolute z-10">
                                    <figure>
                                        <video
                                            src={item.videoUrl}
                                            autoPlay
                                            muted
                                            loop
                                            className="h-72 rounded-lg"
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default FullScreenSections;
