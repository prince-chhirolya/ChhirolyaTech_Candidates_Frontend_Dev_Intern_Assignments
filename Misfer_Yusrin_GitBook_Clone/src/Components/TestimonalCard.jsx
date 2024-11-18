import React from 'react';

const TestimonalCard = () => {

    const data = [
        {
            id: 1,
            name: 'Eliécer Hernández',
            feedback: 'We use Gitbook at our startup to write useful and easy-to-digest documentation. It is the only platform that provides so much flexibility for this.',
            profileImg: 'https://framerusercontent.com/images/RgkZ9HNeBdlHzM9VUP5lrbUXoA.png'
        },
        {
            id: 2,
            name: 'Lane Fox',
            feedback: "I build software tools and use GitBook for documentation. It's amazing, I recommend it to all of my colleagues doing similar work. I honestly don't know what I would do without it.",
            profileImg: 'https://framerusercontent.com/images/liZMjCr4gOumRxuSL0qujQ8X6s4.png'
        },
        {
            id: 3,
            name: 'Illia Berestovskyi',
            feedback: "I enjoy the product. GitBook became the one-place tool for all documentation of our product.",
            profileImg: 'https://framerusercontent.com/images/OEg1LP1bKfyyrHsllNHk5bTtKVQ.png'
        },
        {
            id: 4,
            name: 'Austin Hamrick',
            feedback: "GitBook is a great source for handbooks, manuals, and other documents for online resources.",
            profileImg: 'https://framerusercontent.com/images/CEuvA4QeFBeFwckC4ca7KO36YM.png'
        },
        {
            id: 5,
            name: 'Sewell Stephens',
            feedback: "I would definately recommend Gitbook. I've used it for a while and it works great.",
            profileImg: 'https://framerusercontent.com/images/BBT0LKo4h9TLuhQGwnF0gSnvA.svg'
        },
        {
            id: 6,
            name: 'Rob Hussey',
            feedback: "I use GitBook in all my apps for self-serve knowledge base/help docs.",
            profileImg: 'https://framerusercontent.com/images/YGLf15iPhdaqf2WuWhrdtNyj2U.png'
        },
        {
            id: 7,
            name: 'Shubhendu Shubham',
            feedback: "Now @GitBook supports AI based summaries and search from your documentation. One of the best documentation tools for developers & open source enthusiasts.",
            profileImg: 'https://framerusercontent.com/images/BBT0LKo4h9TLuhQGwnF0gSnvA.svg'
        },
        {
            id: 8,
            name: 'Elme Dela Rosa',
            feedback: "My portfolio is on GitBook! Love how versatile and flexible this app is. highly recommended.",
            profileImg: 'https://framerusercontent.com/images/XZUTXZIEkxLWhPr5UtWBYYmSM.png'
        },
        {
            id: 9,
            name: 'Noj Vek',
            feedback: "Was comparing @GitBook with @NotionHQ, I think GitBook wins hands down in its offering. Its focused, the UI is clean, fast and very user friendly. (Personal Notes | KnowledgeBase | Product Docs). Makes sense that it has 500k users. Love the product.",
            profileImg: 'https://framerusercontent.com/images/BBT0LKo4h9TLuhQGwnF0gSnvA.svg'
        },
        {
            id: 10,
            name: 'Vlad A. lonescu',
            feedback: "We switched to @GitBook (git-powered documentation hosting) a while back and so far we're really, really happy with it. More people need to know about this amazing service!",
            profileImg: 'https://framerusercontent.com/images/BBT0LKo4h9TLuhQGwnF0gSnvA.svg'
        },

    ]
    return (
        <div className='mx-8' >
            <div className='grid gap-5 grid-cols-1  lg:grid-cols-3 items-baseline'>
                {
                    data.map((item, index) => {
                        const isLastItem = index === data.length - 1;
                        return (
                            <>
                                <div key={index} className={`bg-white rounded-lg p-6 opacity-75 ${isLastItem ? 'justify-self-center': ''}`}>
                                    <div className='flex flex-col gap-5'> 
                                        <div className='flex space-x-4 items-center'>

                                            <img src={item.profileImg} alt="" className='h-12 rounded-full' />
                                            <strong>{item.name}</strong>
                                        </div>
                                        <p className='text-sm mx-1 font-medium leading-6'>{item.feedback}</p>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default TestimonalCard;