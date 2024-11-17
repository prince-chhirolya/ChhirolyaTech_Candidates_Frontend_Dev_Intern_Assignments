import React, { useState } from 'react';

const Carousel = () => {
    const data = [
        {
            id: 1,
            name: 'QualComm',
            desc: "GitBook is uniquely designed to serve both as an internal wiki and as a source for easily editable public docs — all backed by change requests, custom domain configuration, and git. This combination really differentiates the tool and has been super helpful to our team.",
            customerName: "Billy Daly",
            companyIcon: "/qualcomm2.svg",
            bgImg: 'https://framerusercontent.com/images/M9q8n0nCICvmq0g4NQjw5upcs4.jpg?scale-down-to=512'
        },
        {
            id: 2,
            name: 'Scalar',
            desc: "When GitBook reached out to Scalar about partnering, we saw it as a huge opportunity to make thousands of APIs more accessible to developers all over the world. Now GitBook customers get a better experience for their API documentation. Best of all, it’s all open source.",
            customerName: "Marc Laventure",
            companyIcon: "/scalar.svg",
            bgImg: "https://framerusercontent.com/images/D1do4fJAE0Lr1mVNPYcpEUseDSk.jpg?scale-down-to=1024",
            textColor: 'text-heroBgColor',
            doubleQuoteColor:'text-btnHoverColor'
        },
        {
            id: 3,
            name: 'Whereby',
            desc: "GitBook has been infinitely valuable for our team and our customers. The flexibility and speed with which we can add to or update our documentation means that we can always offer accurate product information while making sure it looks great!",
            customerName: "Nick Rolls",
            companyIcon: "https://framerusercontent.com/images/XR17GCCT1gwJY1MUgilg38XBaO0.svg",
            bgImg: 'https://framerusercontent.com/images/FGhox2zfPjrkXcNinV3VcKoRcc.jpg?scale-down-to=1024',
            textColor: 'text-heroBgColor',
            doubleQuoteColor:'text-btnHoverColor'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };
    

    return (
        <div className='mt-12 relative'>

            <div className=''>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`transition-transform duration-500 ease-in-out ${index === currentIndex ? "translate-x-0" : "translate-x-full"}`}
                        style={{ display: index === currentIndex ? "block" : "none" }}
                    >
                        <div className='relative'>
                            <img
                                src={item.bgImg}
                                alt="carousel slide"
                                className='w-full rounded-xl  h-[62vh] md:h-[40vh] lg:h-[37vh] object-cover'
                                // style={{ height: '22rem' }}
                            />
                            {/* Text Overlay */}
                            <div className={`absolute inset-0  flex flex-col items-center text-center  rounded-lg gap-4 px-12 mt-10 ${item.textColor ? item.textColor : 'text-white'}`}>
                                <img src={item.companyIcon} alt="" />
                                <p className='text-lg'>"{item.desc}"</p>
                                <span className="font-semibold" >
                                    <i className={`fa-solid fa-quote-right me-2  ${item.doubleQuoteColor ? item.doubleQuoteColor : 'text-white'}`}
                                    style={{transform:"scaleX(-1)"}}></i>
                                    {item.customerName}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Left and Right Arrows at the Bottom Center */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 ">
                <button
                    onClick={handlePrev}
                    className={`px-3 py-2 bg-heroBgColor rounded-full text-white ${currentIndex === 0 ? 'invisible':''}`}
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button
                    onClick={handleNext}
                    className={`px-3 py-2 bg-heroBgColor rounded-full text-white ${data.length-1==currentIndex ? 'invisible':''}`}
                >
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
