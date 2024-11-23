import React from 'react';

const Footer = () => {

    const data = [
        {
            id: 1,
            title: 'Product',
            icon: <i class="fa-solid fa-book-open"></i>,
            cat: [
                {
                    id: 1,
                    name: "Public docs",
                    icon: 'https://framerusercontent.com/images/i8DLGHTg5fCqkRzC0QYp0dHFGg.svg'
                },
                {
                    id: 2,
                    name: "API docs",
                    icon: 'https://framerusercontent.com/images/il1RHD2F1QCndHhwzHWByUBBw.svg'
                },
                {
                    id: 3,
                    name: "Internal docs",
                    icon: 'https://framerusercontent.com/images/yRwUqKLsLuM5QqhibTsJu2vj9A.svg'
                },
                {
                    id: 4,
                    name: "Enterpise",
                    icon: 'https://framerusercontent.com/images/9hLThvRr97rBB4hjOvxfgsjlyGs.svg'
                },
                {
                    id: 5,
                    name: "Open source",
                    icon: 'https://framerusercontent.com/images/8VcHvzX8C0lxnacCAMoYbMKV1IA.svg'
                },
                {
                    id: 6,
                    name: "Product tour",
                    icon: 'https://framerusercontent.com/images/EwvRSY5P3H4tUcB7hj46qvh0NzA.svg'
                },
                {
                    id: 7,
                    name: "Pricing",
                    icon: 'https://framerusercontent.com/images/B0ba8V2Ws5JAQ37NHhyDoEapo.svg'
                },
            ]
        },
        {
            id: 2,
            title: 'Features',
            icon: <i class="fa-solid fa-book-open"></i>,
            cat: [
                {
                    id: 1,
                    name: "Visitor authentication",
                    icon: 'https://framerusercontent.com/images/jbKV9f27jOZRjIhB6s8b3tndOfg.svg'
                },
                {
                    id: 2,
                    name: "Git Sync",
                    icon: 'https://framerusercontent.com/images/o3ArcI6YMIKxa0b3Lgd1ddN7wc.svg'
                },
                {
                    id: 3,
                    name: "GitBook AI",
                    icon: 'https://framerusercontent.com/images/pHQ5adSncgIcfzz5Gzct9kk.svg'
                },
                {
                    id: 4,
                    name: "Integrations",
                    icon: 'https://framerusercontent.com/images/w8gJ2nBdASUiClp1w4F9fIXK6iE.svg'
                },
            ]
        },
        {
            id: 3,
            title: 'Resources',
            icon: <i class="fa-solid fa-book-open"></i>,
            cat: [
                {
                    id: 1,
                    name: "Product docs",
                    icon: 'https://framerusercontent.com/images/gZONBZCFttEpxKRkeklmIBgK9c.svg'
                },
                {
                    id: 2,
                    name: "Developer docs",
                    icon: 'https://framerusercontent.com/images/bJfZC4gAtb7JKp9nAo0mNYcwLJw.svg'
                },
                {
                    id: 3,
                    name: "Blog",
                    icon: 'https://framerusercontent.com/images/M0yZ8i7x0fPIPMpO6mtuuo.svg'
                },
                {
                    id: 4,
                    name: "Videos",
                    icon: 'https://framerusercontent.com/images/2ocjrF6NpMcwZSwuUmpxd0ANBT0.svg'
                },
                {
                    id: 5,
                    name: "Events",
                    icon: 'https://framerusercontent.com/images/C77S9QIVWPrJ5ogXNcQxB5zaQ.svg'
                },
                {
                    id: 6,
                    name: "Changelog",
                    icon: 'https://framerusercontent.com/images/C77S9QIVWPrJ5ogXNcQxB5zaQ.svg'
                },
                {
                    id: 7,
                    name: "Security  and compliance",
                    icon: 'https://framerusercontent.com/images/6LH7peIicIZItYGkLRKkkQgrTeY.svg'
                },
                {
                    id: 8,
                    name: "Newsletter",
                    icon: 'https://framerusercontent.com/images/nPiG7esJaITHCKACCbnE4wRWeM.svg'
                },
            ]
        },
        {
            id: 4,
            title: 'Company',
            icon: <i class="fa-solid fa-book-open"></i>,
            cat: [
                {
                    id: 1,
                    name: "About",
                    icon: 'https://framerusercontent.com/images/E5p0fpylbwu5nnXpw7feQ5kKYs.svg'
                },
                {
                    id: 2,
                    name: "Careers",
                    icon: 'https://framerusercontent.com/images/quVFQGUABkapn6FBUXL2gzUkMM.svg'
                },
                {
                    id: 3,
                    name: "Contact and support",
                    icon: 'https://framerusercontent.com/images/zIqMZMU6WQZA0dNmUKGNk7fUlY.svg'
                },
                {
                    id: 4,
                    name: "Terms of service",
                    icon: 'https://framerusercontent.com/images/NnsXDZnTWhyQiNT757BD5ENPLA8.svg'
                },
                {
                    id: 5,
                    name: "Privacy policy",
                    icon: 'https://framerusercontent.com/images/aAtJ0icC2nCfUlWyrX7ip1lbQs.svg'
                },
            ]
        }
    ]
    return (
        <div className='bg-heroBgColor  text-white relative'>
            <div className='flex flex-col justify-between w-full gap-y-20 mx-auto' style={{ maxWidth: "1024px" }}>
                <footer className='py-15 mx-10'>
                    <nav className='flex flex-col justify-between flex-wrap lg:flex-row'>
                        {data.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col gap-y-5 sm:w-2/4 xl:w-auto'>
                                    <h6 className="mt-20 mb-5 text-lg font-medium">{item.title}</h6>
                                    {item.cat.map((cat, index) => {
                                        return (
                                            <div key={index} className='text-sm flex gap-2 items-center'>
                                                {/* <i className='text-bgAmberColor'>{item.icon}</i> */}
                                                <img src={cat.icon} alt=""
                                                    className='w-4 h-4'
                                                />
                                                <a className="">{cat.name}</a>
                                            </div>
                                        )
                                    })}

                                </div>
                            )
                        })}
                    </nav>
                </footer>
                {/* Divider line */}
                <div class="border-t border-gray-600"></div>

                <div className='flex flex-col lg:flex-row items-center justify-between p-4 gap-y-10'>
                    <div className='flex flex-shrink-0  mb-4 md:mb-0 opacity-50 order-3 lg:order-1'>
                        <img src="/iso.svg" alt="" className='w-28'/>
                        <img src="https://framerusercontent.com/images/G3QGgjVXMn7frgTI26W6Z2bbUhY.svg" alt="" className='w-20'/>
                    </div>
                    <div className='flex flex-col gap-y-5 justify-center items-center order-1 w-3/4 lg:order-2'>
                        <svg width="302" height="34" viewBox="0 0 302 64" fill="#DEE5E5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M108.362 47.1057C97.9981 47.1057 91.746 40.9375 91.746 32C91.746 23.1883 98.04 16.8943 108.404 16.8943C117.803 16.8943 122.881 21.426 123.3 27.3844H117.216C116.922 24.9926 114.824 22.0134 108.74 22.0134H108.069C101.774 22.0134 97.5785 25.664 97.5785 32C97.5785 38.336 101.858 41.9865 108.069 41.9865H108.74C114.866 41.9865 118.181 39.1332 118.181 36.7415V36.4058H108.53V31.2867H119.733C122.293 31.2867 123.72 32.7553 123.72 35.3149V46.6861H118.181V43.4132C117.048 44.8399 114.069 47.1057 108.362 47.1057Z" fill="DEE5E5" />
                            <path d="M133.009 46.6861H127.218V17.3139H133.009V46.6861Z" fill="#DEE5E5" />
                            <path d="M153.544 46.6861H147.754V22.433H135.921V17.3139H165.377V22.433H153.544V46.6861Z" fill="#DEE5E5" />
                            <path d="M185.484 46.6861H168.28V17.3139H184.981C190.226 17.3139 194.254 20.2511 194.254 25.0765C194.254 28.4334 192.114 30.8251 189.596 31.7482C192.617 32.4196 194.967 34.8953 194.967 38.7136C194.967 43.581 190.729 46.6861 185.484 46.6861ZM174.071 22.433V29.2306H184.351C186.911 29.2306 188.421 28.0557 188.421 25.706C188.421 23.7758 186.911 22.433 184.351 22.433H174.071ZM174.071 34.3498V41.5669H184.645C187.414 41.5669 189.135 40.1403 189.135 37.9164C189.135 35.5247 187.414 34.3498 184.645 34.3498H174.071Z" fill="DEE5E5" />
                            <path d="M214.115 47.1057C204.59 47.1057 197.456 41.3991 197.456 32C197.456 22.6009 204.59 16.8943 214.115 16.8943C223.639 16.8943 230.731 22.6009 230.731 32C230.731 41.3991 223.639 47.1057 214.115 47.1057ZM213.779 41.9865H214.45C220.115 41.9865 224.898 38.336 224.898 32C224.898 25.664 220.115 22.0134 214.45 22.0134H213.779C208.114 22.0134 203.289 25.664 203.289 32C203.289 38.336 208.114 41.9865 213.779 41.9865Z" fill="DEE5E5" />
                            <path d="M249.561 47.1057C240.036 47.1057 232.903 41.3991 232.903 32C232.903 22.6009 240.036 16.8943 249.561 16.8943C259.086 16.8943 266.177 22.6009 266.177 32C266.177 41.3991 259.086 47.1057 249.561 47.1057ZM249.225 41.9865H249.897C255.561 41.9865 260.345 38.336 260.345 32C260.345 25.664 255.561 22.0134 249.897 22.0134H249.225C243.561 22.0134 238.735 25.664 238.735 32C238.735 38.336 243.561 41.9865 249.225 41.9865Z" fill="DEE5E5" />
                            <path d="M298.778 46.6861H291.141L279.14 33.4266L274.944 36.9933V46.6861H269.154V17.3139H274.944V30.2796L290.092 17.3139H298.106L283.42 29.8181L298.778 46.6861Z" fill="DEE5E5" />
                            <path d="M28.3299 33.6492C31.4767 35.4654 33.0501 36.3735 34.778 36.375C36.506 36.3765 38.0809 35.4712 41.2309 33.6605L61.3101 22.1184C62.2166 21.5973 62.7754 20.6315 62.7754 19.5859C62.7754 18.5403 62.2166 17.5745 61.3101 17.0535L41.2236 5.50715C38.0771 3.69841 36.5038 2.79404 34.7775 2.79471C33.0513 2.79538 31.4787 3.70098 28.3335 5.51217L11.0658 15.4561C10.9379 15.5298 10.8739 15.5666 10.8142 15.6015C4.91573 19.0545 1.27145 25.3585 1.22272 32.1932C1.22223 32.2623 1.22223 32.3361 1.22223 32.4838C1.22223 32.6313 1.22223 32.7051 1.22272 32.7741C1.27134 39.6011 4.9075 45.8992 10.7955 49.3549C10.855 49.3899 10.9189 49.4267 11.0466 49.5005L21.8631 55.7456C28.1658 59.3846 31.3171 61.2041 34.7778 61.2052C38.2385 61.2064 41.3911 59.389 47.6962 55.7543L59.1145 49.172C62.2716 47.352 63.8501 46.442 64.7169 44.9418C65.5837 43.4416 65.5837 41.6196 65.5837 37.9754V30.9356C65.5837 29.9247 65.0362 28.993 64.153 28.5011C63.2983 28.0251 62.2566 28.0322 61.4084 28.5197L37.9952 41.9783C36.4244 42.8813 35.6389 43.3328 34.777 43.3331C33.9151 43.3333 33.1294 42.8823 31.5579 41.9803L15.7114 32.884C14.9176 32.4283 14.5207 32.2005 14.2019 32.1593C13.4751 32.0656 12.7763 32.4727 12.4994 33.1512C12.378 33.4488 12.3805 33.9064 12.3854 34.8217C12.389 35.4955 12.3908 35.8324 12.4538 36.1423C12.5948 36.8363 12.9599 37.4647 13.493 37.9309C13.731 38.139 14.0228 38.3075 14.6064 38.6443L31.549 48.4229C33.1245 49.3322 33.9123 49.7869 34.7773 49.7871C35.6423 49.7873 36.4303 49.3331 38.0063 48.4246L58.7729 36.454C59.3113 36.1436 59.5804 35.9885 59.7822 36.1051C59.9841 36.2217 59.9841 36.5324 59.9841 37.1538V40.3468C59.9841 41.2579 59.9841 41.7134 59.7673 42.0885C59.5506 42.4635 59.156 42.691 58.3667 43.146L41.2382 53.0195C38.0849 54.8372 36.5083 55.746 34.7776 55.7452C33.0469 55.7444 31.4711 54.8342 28.3195 53.0136L12.2944 43.7565C12.2435 43.7271 12.2181 43.7124 12.1943 43.6986C8.83427 41.7351 6.76098 38.1431 6.74153 34.2515C6.7414 34.224 6.7414 34.1946 6.7414 34.1359V31.2048C6.7414 29.0564 7.88559 27.0707 9.74427 25.9933C11.3867 25.0414 13.4125 25.0395 15.0567 25.9884L28.3299 33.6492Z" fill="DEE5E5" />
                        </svg>
                        <span className='font-thin opacity-50 text-center' style={{ wordSpacing: "0.30rem", fontSize: "0.60rem", lineHeight: '1rem' }}>© 2024 Copyright GitBook INC. 440 N Barranca Ave #7171, Covina, CA 91723, USA. EIN: 320502699</span>
                    </div>
                    <div className='flex items-center gap-4 opacity-50 order-2 lg:order-3'>
                        <i class="fa-brands fa-github  fa-2x"></i>
                        <i class="fa-brands fa-x-twitter fa-2x"></i>
                        <i class="fa-brands fa-linkedin-in fa-2x"></i>
                        <i class="fa-brands fa-youtube fa-2x"></i>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Footer;