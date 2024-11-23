import React from 'react';

const SidebarNav = ({ activeSectionId, activeBgColor, showSideBar }) => {
  const links = [
    { id: 'section1', icon: 'https://framerusercontent.com/images/iOsOpg9EsU7DuEoZ9aNk1pCFSbc.svg', menu: 'Public docs' },
    { id: 'section2', icon: 'https://framerusercontent.com/images/8cUOaG6vlHOCWj3VT0FShGpYY.svg', menu: 'Internal docs' },
    { id: 'section3', icon: 'https://framerusercontent.com/images/IQGZTFT2cKpvSTTlUXEPonSE4.svg', menu: 'Git Sync' },
    { id: 'section4', icon: 'https://framerusercontent.com/images/Y8sDyJNMZZadDmja6CB0QJVPY.svg', menu: 'GitBook AI' },
    { id: 'section5', icon: 'https://framerusercontent.com/images/zA3N8dAduakisbfGOXg64hhO4Fs.svg', iconColor: 'text-white', menu: 'Visitor Authentication' },
    { id: 'section6', icon: 'https://framerusercontent.com/images/vNoGLXnC7XsANDqFgFe9SbAC1U.svg', iconColor: 'text-white', menu: 'Integrations' }
    
    // { id: 'section1', icon: 'fa-solid fa-book-open', menu: 'Public docs' },
    // { id: 'section2', icon: 'fa-solid fa-book', menu: 'Internal docs' },
    // { id: 'section3', icon: 'fa-brands fa-github', menu: 'Git Sync' },
    // { id: 'section4', icon: 'fa-solid fa-wand-magic-sparkles', menu: 'GitBook AI' },
    // { id: 'section5', icon: 'fa-solid fa-lock', iconColor: 'text-white', menu: 'Visitor Authentication' },
    // { id: 'section6', icon: 'fa-solid fa-puzzle-piece', iconColor: 'text-white', menu: 'Integrations' }
  ];

  const getSidebarClasses = () => {
    const baseClasses = 'fixed top-1/2 transform -translate-y-1/2 space-y-4 transition-all duration-200';
    const visibilityClasses = showSideBar ? 'translate-x-0 right-4' : 'translate-x-full right-0';
    // const additionalClasses = activeSectionId === 'section6' ? 'fixed' : '';
    return `${baseClasses} ${visibilityClasses}`;
  };
  return (
    <div
      className={getSidebarClasses()}
    >
      {/* main flex for dividing two rows */}
      <div className='flex items-center gap-x-2'>

        {/* flex for creating individual col for sideBar menu */}
        <div className='flex flex-col justify-between h-80'>

          {links.map((item, index) => {
            return (
              <>
                <div className='py-1'>
                  {/* <span className={`bg-white rounded-full px-2 py-3 gap-2 ${item.id === activeSectionId ? 'inline-block' : 'hidden'}`}>{item.id === activeSectionId ? item.id : ''}</span> */}
                  <span className={`font-medium text-sm bg-white rounded-full px-3 py-2 flex justify-center items-center ${item.id === activeSectionId ? 'inline-block' : 'invisible'}`}>{item.id === activeSectionId ? item.menu : ''}</span>
                  {/* <span className='text-sm bg-white rounded-full px-2 py-2 flex justify-center items-center'>{item.menu}</span> */}
                </div>
              </>
            )
          })}
        </div>

        <div className="flex flex-col justify-center items-center gap-y-4">
          <div className=''>
            <a href="#home" className='bg-heroBgColor rounded-full px-3 py-2 text-white'><i class="fa-solid fa-angle-up"></i></a>
          </div>
        {/* flex for creating individual col for sideBar Icon*/}
          <div className='flex flex-col bg-white rounded-full py-1 px-2 justify-between h-80'>
            {links.map(item => {
              return (
                <>

                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`flex justify-center items-center p-3 rounded-full hover:bg-cyan-50 hover:rounded-full text-sideBarIconColor`}
                    style={{
                      backgroundColor: activeSectionId === item.id ? activeBgColor : 'transparent',

                    }}
                  >
                    <img src={item.icon} alt="" />
                  </a>

                </>

              )
            }
            )}
          </div>
            <div className=''>
            <a href="#home" className='shadow-md bg-bgAmberColor rounded-full px-3 py-2 text-heroBgColor'><i className="fa-solid fa-arrow-right fa-sm"></i></a>
            <img src="" alt="" />
          </div>

        </div>

      </div>
    </div>
  );
};

export default SidebarNav;
