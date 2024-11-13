import React from 'react';
import './Testimonal.css'
import Carousel from '../../Components/Carousel';
const Testimonals = () => {
    return (
        <div className='bg-heroBgColor relative'>
            <div>
                <img src="https://framerusercontent.com/images/b4KGxXlVMIfQ6gQeO4WZIfp8Ez8.png?scale-down-to=2048" alt="" className='absolute inset-0' />
            </div>
            <div style={{ maxWidth: '1024px', margin: 'auto' }} className=''>
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
    );
};

export default Testimonals;