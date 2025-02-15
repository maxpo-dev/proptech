
'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/app/images/PROPTECH_logo_alex_logo-3_alex_logo-3.png";

// Define navigation items (without dropdowns)
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Conference", href: "/conference/about" },
  { name: "Exhibition", href: "/exhibition/about" },
  { name: "Investor Pitch", href: "/investor-pitch" },
  { name: "Get in Touch", href: "/register" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-blue-950">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                alt="Proptech Expo 2025 Logo"
                width={150}
                height={30}
              />
              <span className="sr-only">Proptech Expo 2025</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0091EB] to-[#00D4D5] rounded-md transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
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
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}


