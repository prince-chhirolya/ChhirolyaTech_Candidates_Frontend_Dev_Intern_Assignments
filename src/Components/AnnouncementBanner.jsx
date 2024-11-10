import React from 'react';

const AnnouncementBanner = () => {
    return (
        <div className='relative flex justify-center text-heroBgColor'>
            <img
                src="https://framerusercontent.com/images/omiO6UAv2GNlH2xkvfWGkL13IFc.svg?scale-down-to=2048"
                alt="Announcement Banner"
                className='h-16 w-full object-cover sm:h-10'
            />
            <div className='my-1 absolute flex flex-col md:flex-row items-center justify-center md:space-x-4'>
                <p className='font-medium text-center md:text-left'>
                    <span className='font-bold'>New in GitBook:</span> Revamped Documentation
                </p>
                <button className='mt-2 md:mt-0 text-slate-800 border-2 border-black hover:bg-black hover:text-white rounded px-4 mx-2 font-light'>
                    Register for the webinar
                </button>
            </div>
        </div>
    );
};

export default AnnouncementBanner;
