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
  { name: "Visitor authentication", description: "Control access to your published docs", href: "#", icon: "/navfes1.svg" },
  { name: "Git Sync", description: "Keep your docs and codebase in sync", href: "#", icon: "/navfes2.svg" },
  { name: "GitBook AI", description: "Improve your docs with GitBook AI", href: "#", icon: "/navfes3.svg" },
  { name: "Integrations", description: "Integrate with your tech stack", href: "#", icon: "/navfes4.svg" },
];

const Resources = {
  LEARN: [
    {
      name: "Documentation",
      description: "Get more from GitBook’s powerful tools",
      href: "#",
      icon: "/navres1.svg",
    },
    {
      name: "Blog",
      description: "Our latest news and announcements",
      href: "#",
      icon: "/navres2.svg",
    },
    {
      name: "Events",
      description: "View our upcoming events",
      href: "#",
      icon: "/navres3.svg",
    },
  ],
  FEATURED: [
    {
      icon: "/res.png",
      name: "New in GitBook",
      description: "Free open source documentation that helps fund your project",
      href: "#",
    },
  ],
  USEFUL_LINKS: [
    { name: "Import guide", href: "#", icon: "/navres4.svg" },
    { name: "Changelog", href: "#", icon: "/navres5.svg" },
    { name: "Newsletter", href: "#", icon: "/navres6.svg" },
    { name: "Contact and support", href: "#", icon: "/navres7.svg" },
  ],
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#181c1f] navStyle">
      {/* Main Navbar */}
      <nav className="flex  items-center justify-center gap-8 p-4 sm:px-6 xl:mx-36">
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center -m-1.5 p-1.5">
            <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
          </a>

          {/* Dropdown Menus */}
          <PopoverGroup className="hidden lg:flex gap-6">
            {/* Products Dropdown */}
            <Popover className="relative z-50">
              <PopoverButton className="flex navitemFont items-center text-sm font-semibold text-white gap-x-1">
                Products
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </PopoverButton>
              <PopoverPanel className="absolute mt-3 w-screen max-w-md bg-white rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((product) => (
                    <a key={product.name} href={product.href} className="flex items-center gap-x-4 p-4 hover:bg-gray-50">
                      <img src={product.icon} className="h-6 w-6 rounded-lg" alt={product.name} />
                      <div className="flex-auto">
                        <p className="font-semibold text-gray-900">{product.name}</p>
                        <p className="text-gray-600">{product.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            {/* Features Dropdown */}
            <Popover className="relative z-50">
              <PopoverButton className="flex navitemFont items-center text-sm font-semibold text-white gap-x-1">
                Features
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </PopoverButton>
              <PopoverPanel className="absolute mt-3 w-screen max-w-md bg-white rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {features.map((feature) => (
                    <a key={feature.name} href={feature.href} className="flex items-center gap-x-4 p-4 hover:bg-gray-50">
                      <img src={feature.icon} className="h-6 w-6 rounded-lg" alt={feature.name} />
                      <div className="flex-auto">
                        <p className="font-semibold text-gray-900">{feature.name}</p>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            {/* Resources Dropdown */}
        
            <Popover className="relative z-50">
              <PopoverButton className="flex items-center navitemFont text-sm font-semibold text-white gap-x-1">
                Resources
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </PopoverButton>
              <PopoverPanel className="absolute mt-3 w-screen max-w-3xl bg-white rounded-xl shadow-lg ring-1 ring-gray-900/5">
                <div className="grid grid-cols-3 gap-6 p-6">
                  {/* Learn Section */}
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-sm font-bold text-gray-900 navitemFont">LEARN</h3>
                    {Resources.LEARN.map((item) => (
                      <a key={item.name} href={item.href} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50">
                        <img src={item.icon} className="h-10 w-10 p-2 rounded-lg bg-gray-100" alt={item.name} />
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Featured Section */}
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-sm font-bold text-gray-900 navitemFont">FEATURED</h3>
                    {Resources.FEATURED.map((item) => (
                      <a key={item.name} href={item.href} className="flex flex-col items-start p-4 rounded-lg bg-gray-50 hover:bg-gray-100">
                        <img src={item.icon} className="w-full h-auto rounded-lg mb-2" alt={item.name} />
                        <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <span className="text-sm font-medium text-indigo-600">Read more &rarr;</span>
                      </a>
                    ))}
                  </div>

                  {/* Useful Links Section */}
                  <div className="flex flex-col space-y-4">
                    <h3 className="text-sm font-bold text-gray-900 navitemFont">USEFUL LINKS</h3>
                    {Resources.USEFUL_LINKS.map((link) => (
                      <a key={link.name} href={link.href} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                        <img src={link.icon} className="h-6 w-6 text-indigo-600" alt={link.name} />
                        <p className="text-sm font-semibold text-gray-900">{link.name}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>

          {/* Additional Links */}
          <a href="#" className="hidden lg:flex text-sm navitemFont items-center font-semibold text-white">
            Pricing
          </a>
        </div>

        {/* Hiring Message */}
        <div className="hidden lg:flex items-center">
          <span className="inline-flex items-center space-x-2 text-Yellow font-semibold">
            <img src="/add-user.png" className="h-5 w-5" alt="" />
            <a href="#" className="hover:underline text-sm navitemFont">
              We're hiring
            </a>
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button type="button" onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2.5 text-white">
          <Bars3Icon className="h-8 w-8" />
        </button>

        {/* Right Side Buttons */}
        <div className="hidden lg:flex px-3 gap-2">
          <button className="text-white bg-[#24292f] text-sm navitemFont rounded-lg px-3 py-2">Login</button>
          <button className="text-black bg-[#f4e28d] text-sm navitemFont rounded-lg px-3 py-2">Start for Free &rarr;</button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6">{/* Sidebar Content */}</DialogPanel>
      </Dialog>
    </div>
  );
}
