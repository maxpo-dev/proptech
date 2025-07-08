"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, Suspense } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from "@/public/image/logo.png";
import logo2 from "@/public/image/gulfnews logo white logo 2.png";
import DelegateSection from "./header/delegateSection";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Exhibition",
    dropdown: [
      { name: "Exhibition Overview", href: "/exhibition/about" },
      { name: "Exhibitors", href: "/exhibition/exhibitors" },
    ],
  },
  {
    name: "Conference",
    dropdown: [
      { name: "Conference Overview", href: "/conference/about" },
      { name: "Speakers", href: "/conference/speakers" },
    ],
  },
  { name: "Investor Pitch", href: "/investor-pitch" },
  { name: "Partners", href: "/partners" },
  { name: "Blogs", href: "/blogs" },
  { name: "Participants", href: "/participants" },
  { name: "Get in Touch", href: "/register" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<string | null>(
    null
  );
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null
  );
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const isClickInsideAnyDropdown = Object.values(dropdownRefs.current).some(
        (ref) => ref && ref.contains(event.target as Node)
      );
      if (!isClickInsideAnyDropdown) {
        setDesktopDropdownOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[9999] bg-blue-950 shadow backdrop-blur">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-4">
          {/* Left: Logo */}
          <Link href="/" className="flex min-w-0 items-center overflow-hidden">
            <Image
              src={Logo}
              alt="Proptech Expo 2025 Logo"
              width={357}
              height={76}
              className="h-16 w-auto object-contain"
            />
           
          </Link>
          <Link href="/" className="hidden items-center md:flex">
            <Image
              src={logo2}
              alt="Gulf News Logo"
              width={180}
              height={30}
              className="h-8 w-auto object-contain sm:h-10"
              priority
            />
          </Link>
          {/* Right Side (Desktop: Logo + Button, Mobile: Menu) */}
          <div className="flex items-center gap-4">
            {/* Gulf News Logo (Desktop Only) */}

            {/* Register Button (Desktop Only) */}
            <Link href="/register" className="hidden lg:block">
              <button className="rounded bg-white px-4 py-2 text-sm font-bold text-blue-950 sm:text-base">
                Register Now
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="text-white hover:text-blue-300 lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center justify-center space-x-6 lg:flex">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.name}
                className="relative"
                ref={(el) => {
                  if (el) dropdownRefs.current[item.name] = el;
                }}
              >
                <button
                  className="group relative flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDesktopDropdownOpen(
                      desktopDropdownOpen === item.name ? null : item.name
                    );
                  }}
                >
                  {item.name}
                  <ChevronDown className="size-4" />
                  <span className="absolute bottom-0 left-0 h-1 w-full origin-right scale-x-0 rounded-md bg-gradient-to-r from-[#0091EB] to-[#00D4D5] transition-transform duration-500 group-hover:scale-x-100"></span>
                </button>
                {desktopDropdownOpen === item.name && (
                  <div className="absolute left-0 z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setDesktopDropdownOpen(null)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="group relative rounded-md px-3 py-2 text-sm font-medium text-white transition-colors duration-200"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 h-1 w-full origin-right scale-x-0 rounded-md bg-gradient-to-r from-[#0091EB] to-[#00D4D5] transition-transform duration-500 group-hover:scale-x-100"></span>
              </Link>
            )
          )}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed left-0 top-0 z-40 h-screen w-full bg-blue-950 transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            type="button"
            className="text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Gulf News Logo (Mobile Only) */}
        <div className="mb-4 flex justify-center">
          <Link href="/" className="flex items-center">
            <Image
              src={logo2}
              alt="Gulf News Logo"
              width={160}
              height={30}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Nav Items */}
        <div className="max-h-[calc(100vh-64px)] space-y-2 overflow-y-auto px-4 pb-10 pt-4">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.name} className="px-3 py-2">
                <button
                  onClick={() =>
                    setMobileDropdownOpen(
                      mobileDropdownOpen === item.name ? null : item.name
                    )
                  }
                  className="flex w-full items-center justify-between text-left text-base font-medium text-white"
                >
                  {item.name} <ChevronDown className="size-4" />
                </button>
                {mobileDropdownOpen === item.name && (
                  <div className="mt-2 space-y-1 rounded-md bg-white py-2 pl-4 shadow-md">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block rounded-md px-3 py-2 text-sm text-black hover:text-blue-600"
                        onClick={() => {
                          setMobileDropdownOpen(null);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:text-blue-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}

          {/* CTA Buttons on Mobile */}
          <div className="gap-4 space-y-3 border-t border-white/20 pt-6">
            <Link href="/register">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="my-2 w-full rounded bg-white px-4 py-2 font-bold text-blue-950"
              >
                Register Now
              </button>
            </Link>
            <Link href="/register?type=delegates">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="my-2 w-full rounded bg-white px-4 py-2 font-bold text-blue-950"
              >
                Get Delegate Pass
              </button>
            </Link>
            <Link href="/register?type=exhibitor">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="my-2 w-full rounded bg-white px-4 py-2 font-bold text-blue-950"
              >
                Book Your Stand
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* DelegateSection only on md+ */}
      <div className="hidden md:block">
        <Suspense fallback={null}>
          <DelegateSection />
        </Suspense>
      </div>
    </header>
  );
}
