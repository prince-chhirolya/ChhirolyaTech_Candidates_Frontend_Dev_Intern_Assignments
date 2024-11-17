import React from 'react';
import './Testimonal.css'
import Carousel from '../../Components/Carousel';
import TestimonalCard from '../../Components/TestimonalCard';
import TestimonalSliderComp from '../../Components/TestimonalSliderComp';
const Testimonals = () => {
    return (
        <div className='bg-heroBgColor relative'>
            <div>
                <img src="https://framerusercontent.com/images/b4KGxXlVMIfQ6gQeO4WZIfp8Ez8.png?scale-down-to=2048" alt="" className='absolute inset-0' />
            </div>
            <div style={{ maxWidth: '1024px', margin: 'auto' }} className=''>
                <div className='mx-8'>
                    <div className='flex flex-col justify-center items-center pt-24 '>
                        <div className=''>
                            <img src="https://framerusercontent.com/images/8VcHvzX8C0lxnacCAMoYbMKV1IA.svg" alt="" className='w-8' />
                        </div>
                        <div className="textContainer flex flex-col gap-y-2 mt-4">
                            <span className="heading leading-none text-white">
                                Our customers
                            </span>
                            <span className="m-0 leading-none" id="subText">
                                love GitBook!
                            </span>
                        </div>
                    </div>
                    <Carousel />
                </div>
            </div>

            <div className='mt-12 reltaive pb-24'>
                <div className='blur-sm absolute sm:inset-x-24 bottom-0 '>
                    <img src="https://framerusercontent.com/images/8mBpN0P9I8HHyziLKEUTkPVPv3s.svg?scale-down-to=2048" alt="" />
                </div>
                <div style={{ maxWidth: '1024px', margin: 'auto' }} className=''>
                    <div className='flex flex-col gap-16'>
                        <TestimonalCard />
                        <TestimonalSliderComp />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonals;