import { useState } from "react";
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from "@headlessui/react";
import { ArrowPathIcon, Bars3Icon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, SquaresPlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Pricing", href: "#" },
];

const products = [
  {
    name: "Public documentation",
    description: "Publish beautiful docs for your users",
    icon: "/product1.svg",
  },
  {
    name: "API documentation",
    description: "Interactive API docs for developers",
    icon: "/product2.svg",
  },
  {
    name: "Internal documentation",
    description: "A single source of truth for your team",
    icon: "/product3.svg",
  },
  {
    name: "Enterprise",
    description: "Scalable documentation for larger teams",
    icon: "/product4.svg",
  },
  {
    name: "Open Source",
    description: "Unbeatable docs for open source projects",
    icon: "/product5.svg",
  },
];

const features = [
  { name: "Visitor authentication", description: "Control access to your published docs", href: "#", icon: "/features1.svg" },
  { name: "Git Sync", description: "Keep your docs and codebase in sync", href: "#", icon: "/features1.svg" },
  { name: "GitBook AI", description: "Improve your docs with GitBook AI", href: "#", icon: "/features1.svg" },
  { name: "Integrations", description: "Integrate with your tech stack", href: "#", icon: "/features1.svg" },
];

const Resources = {
  LEARN: [
    {
      name: "Documentation",
      description: "Get more from GitBook’s powerful tools",
      href: "#",
      icon: "/features1.svg",
    },
    {
      name: "Blog",
      description: "Our latest news and announcements",
      href: "#",
      icon: "/features1.svg",
    },
    {
      name: "Events",
      description: "View our upcoming events",
      href: "#",
      icon: "/features1.svg",
    },
  ],
  FEATURED: [
    {
      name: "New in GitBook",
      description: "Free open source documentation that helps fund your project",
      href: "#",
    },
  ],
  USEFUL_LINKS: [
    { name: "Import guide", href: "#", icon: "/features1.svg" },
    { name: "Changelog", href: "#", icon: "/features1.svg" },
    { name: "Newsletter", href: "#", icon: "/features1.svg" },
    { name: "Contact and support", href: "#", icon: "/features1.svg" },
  ],
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#181c1f]">
      <nav aria-label="Global" className=" flex items-center justify-between xl:mx-36 px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center justify-between p-6 lg:px-8">
            {/* Logo */}
            <a href="#" className="flex items-center lg:flex-1 -m-1.5 p-1.5">
              <span className="sr-only">Git Book</span>
              <img alt="" src="/logo.svg" className="h-8 w-auto" />
            </a>
          </div>

          {/* Dropdown */}

          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative z-50">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-white">
                Products
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
              </PopoverButton>
              <PopoverPanel className="absolute top-full mt-3 w-screen max-w-md rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <a key={item.name} href={item.href} className="flex items-center gap-x-6 p-4 hover:bg-gray-50">
                      <img src={item.icon} className="h-6 w-6 border rounded-lg " alt="" srcSet="" />
                      <div className="flex-auto">
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>

          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative z-50">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-white">
                Features
                <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
              </PopoverButton>
              <PopoverPanel className="absolute top-full mt-3 w-screen max-w-md rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {features.map((item) => (
                    <a key={item.name} href={item.href} className="group flex items-center gap-x-6 p-4 hover:bg-gray-50">
                      <img src={item.icon} className="h-6 w-6 border rounded-lg " alt="" srcSet="" />
                      <div className="flex-auto">
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <PopoverGroup className="hidden lg:flex lg:gap-x-12">
              <Popover className="relative z-50">
                <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-white">
                  Resources
                  <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                </PopoverButton>
                <PopoverPanel className="absolute top-full mt-3 w-fit rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="py-2 px-3">
                    <div className="flex gap-4">
                      {Object.keys(Resources).map((category) => (
                        <div key={category}>
                          <h3 className="font-bold text-md">{category}</h3>
                          <div className="">
                            {Resources[category].map((item, index) => (
                              <div className="w-max text-sm py-2" style={{ width: "230px" }}>
                                <a key={item.name} href={item.href} className="flex hover:bg-gray-50 gap-2">
                                  <img src={item.icon} className="h-6 w-6 border rounded-lg " alt="" srcSet="" />
                                  <div className="flex-auto">
                                    <p className="font-semibold text-gray-900">{item.name}</p>
                                    <p className="text-gray-600">{item.description}</p>
                                  </div>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </PopoverPanel>
              </Popover>
            </PopoverGroup>
          </PopoverGroup>

          <div className="hidden space-y-2 py-6 lg:flex lg:gap-x-12">
            <a href="" className="flex font-semibold items-center gap-x-6 p-4 text-white">
              Pricing
            </a>
          </div>
        </div>

        {/* Menu button */}
        <div className="lg:hidden">
          <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 p-2.5 text-white">
            <Bars3Icon aria-hidden="true" className="h-8 w-8" />
          </button>
        </div>

        {/* Right side links */}
        <div className="hidden lg:flex px-3">
          <button
            type="button"
            className="text-white bg-[#24292f] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <a href="#" className="text-sm font-semibold text-gray-300">
              Log in
            </a>
          </button>

          <button type="button" className="text-black bg-[#f4e28d]   font-medium rounded-lg text-sm px-3 py-2 me-2  focus:outline-none ">
            <a href="#" className="text-sm font-semibold">
              Start for Free <span aria-hidden="true">&rarr;</span>
            </a>
          </button>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img alt="" src="" className="h-8 w-auto" />
            </a>
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="p-2.5 text-gray-300">
              <XMarkIcon aria-hidden="true" className="h-8 w-8" />
            </button>
          </div>
          <div className="mt-6 space-y-2">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="block px-3 py-2 text-base font-semibold text-gray-300 hover:bg-gray-700">
                {item.name}
              </a>
            ))}
            <a href="#" className="block px-3 py-2.5 text-base font-semibold text-gray-300 hover:bg-gray-700">
              Log in
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
