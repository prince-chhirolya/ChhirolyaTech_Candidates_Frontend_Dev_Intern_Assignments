import React from 'react';
import './Slider.css'


const Slider = () => {
    const data1 = [
        { id: 1, name: "netflix", IconUrl: '/netflix.svg' },
        { id: 2, name: "kyndryl", IconUrl: '/kyndryl.svg' },
        { id: 3, name: "actionIq", IconUrl: '/actionIq.svg' },
        // { id: 4, name: "drata", IconUrl: '/drata.svg' },
        { id: 5, name: "obsidian", IconUrl: '/obsidian.svg' },
        { id: 6, name: "bird", IconUrl: '/bird.svg' },
        { id: 8, name: "census", IconUrl: '/census2.svg' },
        { id: 9, name: "mews", IconUrl: '/mews.svg' },
        { id: 10, name: "trunk", IconUrl: '/trunk.svg' },
        { id: 11, name: "cal.com", IconUrl: '/cal.com.svg' },
        { id: 12, name: "customer.io", IconUrl: '/customer.io.svg' },
    ];

    // Duplicate the items array to create a continuous loop effect
    const items = [...data1, ...data1]; // Duplicate the items for continuous loop

    return (
        <div className="slider-container">
            <div className="slider" id='slider2'>
                {items.map((item) => (
                    <div key={item.id} className="slider-item">
                        <img src={item.IconUrl} alt={item.name} className="slider-img" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
