'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '@/app/images/PROPTECH_logo_alex_logo-3_alex_logo-3.png';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Exhibition',
    dropdown: [
      { name: 'Exhibition Overview', href: '/exhibition/about' },
      { name: 'Exhibitors 2025', href: '/exhibition/exhibitors-2025' },
    ],
  },
  {
    name: 'Conference',
    dropdown: [
      { name: 'Conference Overview', href: '/conference/about' },
      { name: 'Speakers', href: '/conference/speakers' },
    ],
  },
  { name: 'Investor Pitch', href: '/investor-pitch' },
  { name: 'Get in Touch', href: '/register' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDesktopDropdownOpen(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-950">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src={Logo} alt="Proptech Expo 2025 Logo" width={150} height={30} />
              <span className="sr-only">Proptech Expo 2025</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="relative" ref={dropdownRef}>
                  <button
                    className="text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1"
                    onClick={() =>
                      setDesktopDropdownOpen(desktopDropdownOpen === item.name ? null : item.name)
                    }
                  >
                    {item.name} <ChevronDown className="h-4 w-4" />
                  </button>
                  {desktopDropdownOpen === item.name && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                          onClick={() => setDesktopDropdownOpen(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0091EB] to-[#00D4D5] rounded-md transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></span>
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-950 h-full w-full fixed top-0 left-0 right-0 bottom-0 z-40 overflow-y-auto">
          <div className="flex justify-end p-4">
            <button
              type="button"
              className="text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="block h-6 w-6" />
              <span className="sr-only">Close main menu</span>
            </button>
          </div>
          <div className="px-2 pt-8 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="px-3 py-2">
                  <button
                    className="text-white text-base font-medium w-full text-left flex items-center justify-between"
                    onClick={() =>
                      setMobileDropdownOpen(mobileDropdownOpen === item.name ? null : item.name)
                    }
                  >
                    {item.name} <ChevronDown className="h-4 w-4" />
                  </button>
                  {mobileDropdownOpen === item.name && (
                    <div className="pl-4 mt-2 bg-white rounded-md shadow-md py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-gray-800 hover:bg-blue-100"
                          onClick={() => {
                            setMobileDropdownOpen(null);
                            setMobileMenuOpen(false);
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
