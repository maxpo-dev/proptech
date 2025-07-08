'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/public/images/PROPTECH_logo_alex_logo-3_alex_logo-3.png";

// Updated navItems array: Notice that "Partners" is placed after "Investor Pitch" and contains the "Media Partners" link.
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Conference",
    href: "#",
    dropdown: [
      { name: "About the Conference", href: "/conference/about" },
      { name: "Participants", href: "/conference/participants" },
      { name: "Speakers", href: "/conference/speakers" },
      { name: "Apply for Speaking", href: "/conference/apply" },
    ],
  },
  {
    name: "Exhibition",
    href: "#",
    dropdown: [
      { name: "About the Exhibition", href: "/exhibition/about" },
      { name: "Exhibitors", href: "/exhibition/exhibitors" },
      { name: "Information Brochure", href: "/exhibition/brochure" },
      { name: "Exhibit at #pts25", href: "/exhibition/exhibit" },
    ],
  },
  { name: "Investor Pitch", href: "/investor-pitch" },
  {
    name: "Partners",
    href: "#",
    dropdown: [
      { name: "Media Partners", href: "/partners/media" },
    ],
  },
  { name: "Get in Tech", href: "/register" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-blue-950">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={Logo} alt="Proptech Expo 2025 Logo" width={150} height={30} />
              <span className="sr-only">Proptech Expo 2025</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="group relative">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white transition-colors duration-200"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 size-4" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute left-0 z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="group relative rounded-md px-3 py-2 text-sm font-medium text-white transition-colors duration-200"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 h-1 w-full origin-right scale-x-0 rounded-md bg-gradient-to-r from-[#0091EB] to-[#00D4D5] transition-transform duration-500 group-hover:scale-x-100"></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block size-6" aria-hidden="true" />
              ) : (
                <Menu className="block size-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 size-full overflow-y-auto bg-blue-950 md:hidden">
          <div className="flex justify-end p-4">
            <button
              type="button"
              className="text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="block size-6" aria-hidden="true" />
              <span className="sr-only">Close main menu</span>
            </button>
          </div>
          <div className="space-y-1 px-2 pb-3 pt-8 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-base font-medium text-white hover:text-blue-600"
                    >
                      {item.name}
                      <ChevronDown className="size-4" />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block rounded-md px-3 py-2 text-sm text-white hover:text-blue-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
