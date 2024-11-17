import React from 'react';
import TestimonalSlider from './TestimonalSlider/TestimonalSlider';


const TestimonalSliderComp = () => {
    return (
        <div className='relative mx-8'>
            <img src="https://framerusercontent.com/images/vjeJUtP3EqpwG46WI66qgPsxw.svg" alt="" className='h-96 w-full rounded-lg lg:h-80 ' />
            <div className='absolute inset-12'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h1 className='text-xl font-semibold text-heroBgColor lg:text-2xl'>Get started for free</h1>
                    <p className='w-80 text-center mx-5 text-sm px-8 font-medium leading-6 md:p-0 md:w-96 '>Play around with GitBook and set up your docs for free.  Add your team and pay when you’re ready.</p>
                    <div className="flex flex-col justify-center gap-4 lg:flex-row text-heroBgColor w-64 md:w-96 md:px-3 lg:px-0">
                        <button className="text-sm bg-lightGray border-2 px-4 py-2 rounded-lg font-medium text-heroBgcolor tracking-wide border-heroBgColor hover:bg-btnHoverColor hover:border-btnHoverColor hover:text-white transition duration-300 ease-in-out ">
                            <i className="fa-brands fa-github mx-1"></i> Sign up with GitHub
                        </button>
                        <button
                            className="lg:inline-block bg-bgAmberColor px-4 py-2 rounded-lg font-medium  tracking-wide hover:bg-btnHoverColor hover:hover:text-white transition duration-300 ease-in-out"
                        >
                            <span>Start for free <i class="fa-solid fa-arrow-right mx-1"></i></span>

                        </button>
                    </div>
                </div>

                    <TestimonalSlider />
            </div>
        </div>
    );
};

export default TestimonalSliderComp;