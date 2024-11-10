import React from 'react';

const SidebarNav = ({ activeSectionId, activeBgColor }) => {
  const links = [
    { id: 'section1', icon: 'fa-solid fa-book-open' },
    { id: 'section2', icon: 'fa-solid fa-book' },
    { id: 'section3', icon: 'fa-brands fa-github' },
    { id: 'section4', icon: 'fa-solid fa-wand-magic-sparkles' },
    { id: 'section5', icon: 'fa-solid fa-lock' , iconColor:'text-white' },
    { id: 'section6', icon: 'fa-solid fa-puzzle-piece', iconColor:'text-white' }
  ];
  
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-4">
      <div className="flex flex-col bg-white rounded-full px-2 py-3 gap-2">
        {links.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`flex justify-center items-center p-3 rounded-full hover:bg-cyan-50 hover:rounded-full text-sideBarIconColor`}
            style={{ backgroundColor: activeSectionId === item.id 
              ? activeBgColor : 'transparent', 
              // color: item.id === 'section-6'
              // ? '#ffffff' : 'text-sideBarIconColor'
            }}
          >
            <i className={item.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SidebarNav;
