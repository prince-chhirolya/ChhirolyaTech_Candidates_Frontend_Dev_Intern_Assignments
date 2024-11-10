import React from 'react';

const Footer = () => {

    const data = [
        {
            id: 1,
            title: 'Product',
            cat: [
                {
                    id: 1,
                    name: "Public docs",
                    icon: ''
                },
                {
                    id: 2,
                    name: "API docs",
                    icon: ''
                },
                {
                    id: 3,
                    name: "Internal docs",
                    icon: ''
                },
                {
                    id: 4,
                    name: "Open source",
                    icon: ''
                },
                {
                    id: 5,
                    name: "Product tour",
                    icon: ''
                },
                {
                    id: 6,
                    name: "Pricing",
                    icon: ''
                },
            ]
        },
        {
            id: 2,
            title: 'Features',
            cat: [
                {
                    id: 1,
                    name: "Visitor authentication",
                    icon: ''
                },
                {
                    id: 2,
                    name: "Git Sync",
                    icon: ''
                },
                {
                    id: 3,
                    name: "GitBook AI",
                    icon: ''
                },
                {
                    id: 4,
                    name: "Integrations",
                    icon: ''
                },
            ]
        },
        {
            id: 3,
            title: 'Resources',
            cat: [
                {
                    id: 1,
                    name: "Product docs",
                    icon: ''
                },
                {
                    id: 2,
                    name: "Developer docs",
                    icon: ''
                },
                {
                    id: 3,
                    name: "Blog",
                    icon: ''
                },
                {
                    id: 4,
                    name: "Videos",
                    icon: ''
                },
                {
                    id: 5,
                    name: "Events",
                    icon: ''
                },
                {
                    id: 6,
                    name: "Changelog",
                    icon: ''
                },
                {
                    id: 7,
                    name: "Security  and compliance",
                    icon: ''
                },
                {
                    id: 8,
                    name: "Newsletter",
                    icon: ''
                },
            ]
        },
        {
            id: 4,
            title: 'Company',
            cat: [
                {
                    id: 1,
                    name: "About",
                    icon: ''
                },
                {
                    id: 2,
                    name: "Careers",
                    icon: ''
                },
                {
                    id: 3,
                    name: "Contact and support",
                    icon: ''
                },
                {
                    id: 4,
                    name: "Terms of service",
                    icon: ''
                },
                {
                    id: 5,
                    name: "Privacy policy",
                    icon: ''
                },
            ]
        }
    ]
    return (
        <div className='bg-heroBgColor  text-white'>
            <div className='container mx-auto'>
                <footer className='py-15'>
                    <nav className='flex justify-between flex-wrap'>
                        {data.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col gap-y-5 lg:w-1/4 sm:w-2/4'>
                                    <h6 className="mt-20 mb-5 text-lg font-medium">{item.title}</h6>
                                    {item.cat.map((cat, index) => {
                                        return (
                                            <div key={index} className='text-sm'>
                                                <a className="">{cat.name}</a>
                                            </div>
                                        )
                                    })}

                                </div>
                            )
                        })}
                    </nav>
                </footer>
            </div>

        </div>
    );
};

export default Footer;