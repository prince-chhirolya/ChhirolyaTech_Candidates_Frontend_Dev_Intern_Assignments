import React from 'react';

const AnnouncementBanner = () => {
    return (
        <div className='relative flex justify-center'>
            <img src="https://framerusercontent.com/images/omiO6UAv2GNlH2xkvfWGkL13IFc.svg?scale-down-to=2048" alt="" className='h-10 w-full' />
            <div className='absolute flex self-center' >
                <p className='font-medium'><span className='font-bold'> New in GitBook:</span> Revamped Doucmentation</p>
                <button className='text-slate-800 border-2 border-black hover:bg-black hover:text-white rounded px-4 mx-2  font-light'>Register for the webinar</button>
            </div>
        </div>
    );
};

export default AnnouncementBanner;