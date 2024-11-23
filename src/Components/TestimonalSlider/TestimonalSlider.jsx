import React from 'react';
import './TestimonalSlider.css'
const TestimonalSlider = () => {
    const data = [
        { id: 1, name: "shopify", IconUrl: 'shopifyBlack.svg' },
        { id: 2, name: "redhat", IconUrl: 'redhatBlack.svg' },
        { id: 3, name: "netflix", IconUrl: 'netflixBlack.svg' },
        { id: 4, name: "kyndryl", IconUrl: '/kyndrylBlack.svg' },
        { id: 5, name: "census", IconUrl: '/censusBlack.svg' },
        { id: 6, name: "customer.io", IconUrl: '/customer.ioBlack.svg' },
        { id: 8, name: "bird", IconUrl: '/birdBlack.svg' },
        { id: 9, name: "cal.com", IconUrl: '/cal.comBlack.svg' },
        { id: 10, name: "drata", IconUrl: '/drataBlack.svg' },
        { id: 11, name: "obsidian", IconUrl: '/obsidianBlack.svg' },
        { id: 12, name: "action.iq", IconUrl: '/actionIQBlack.svg' },
        { id: 13, name: "mews", IconUrl: '/mewsBlack.svg' },
        { id: 14, name: "paypal", IconUrl: '/paypalBlack.svg' },
        { id: 15, name: "deepl", IconUrl: '/deeplBlack.svg' },
        { id: 16, name: "linear", IconUrl: '/linearBlack.svg' },
        { id: 17, name: "ibm", IconUrl: 'ibmBlack.svg' },
        { id: 18, name: "whereby", IconUrl: 'wherebyBlack.svg' },
        { id: 19, name: "snyk", IconUrl: 'snykBlack.svg' },
        { id: 20, name: "fedex", IconUrl: 'fedexBlack.svg' },
        { id: 21, name: "keeper", IconUrl: '/keeperBlack.svg' },
        { id: 22, name: "blackberry", IconUrl: 'blackberryBlack.svg' },
        { id: 23, name: "ebay", IconUrl: 'ebayBlack.svg' },
        { id: 24, name: "broadcom", IconUrl: 'broadcomBlack.svg' },
        { id: 25, name: "raycast", IconUrl: '/raycastBlack.svg' },
        { id: 26, name: "qualcomm", IconUrl: '/qualcommBlack.svg' },
        { id: 27, name: "cisco", IconUrl: '/ciscoBlack.svg' },
    ]
    const items = data.concat(data)
    return (
        <div className="mt-8" id="slider-container">
            <div id="slider"> 
                {items.map((item, index) => (
                    <div key={`${item.id}-${index}`} id="slider-item">
                        <img src={item.IconUrl} alt={item.name} id="slider-img" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonalSlider;