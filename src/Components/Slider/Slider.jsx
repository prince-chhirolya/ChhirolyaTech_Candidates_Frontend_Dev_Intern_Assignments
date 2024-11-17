import React from 'react';
import './Slider.css'
const Slider = () => {
    const data1 = [
        { id: 1, name: "shopify", IconUrl: '/shopify2.svg' },
        { id: 2, name: "broadcom", IconUrl: '/broadcom3.svg' },
        { id: 3, name: "blackberry", IconUrl: '/blackberry2.svg' },
        { id: 4, name: "raycast", IconUrl: '/raycast.svg' },
        { id: 5, name: "deepl", IconUrl: '/deepl2.svg' },
        { id: 6, name: "ebay", IconUrl: '/ebay.svg' },
        { id: 7, name: "keeper", IconUrl: '/keeper.svg' },
        { id: 8, name: "paypal", IconUrl: '/paypal.svg' },
        { id: 9, name: "fedex", IconUrl: '/fedex.svg' },
        { id: 10, name: "redhat", IconUrl: '/redhat.svg' },
        { id: 11, name: "linear", IconUrl: '/linear2.svg' },
        { id: 12, name: "qualcomm", IconUrl: '/qualcomm.svg' },
        { id: 13, name: "ibm", IconUrl: '/ibm.svg' },
        { id: 14, name: "cisco", IconUrl: '/cisco.svg' },
        { id: 15, name: "whereby", IconUrl: '/whereby.svg' },
        { id: 16, name: "snyk", IconUrl: '/snyk2.svg' },
    ];

    // Duplicate items array for seamless looping
    const items = data1.concat(data1);

    return (
        <div className="slider-container mt-10">
            <div className="slider">
                {items.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="slider-item">
                        <img src={item.IconUrl} alt={item.name} className="slider-img" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
