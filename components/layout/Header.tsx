"use client";
import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="flex items-center gap-8 ml-5">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/homepage">
            <Image
              src="/logo.png"
              alt="SouvLucky Country Logo"
              width={200}
              height={100}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/homepage"
            className={`transition-colors duration-200 text-2xl tracking-wide ${
              scrolled
                ? "text-[#0D71C9] hover:text-blue-900 hover:underline"
                : "text-[#03233C] hover:text-[#0A4E8C] hover:underline"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className={`transition-colors duration-200 text-2xl tracking-wide ${
              scrolled
                ? "text-[#0D71C9] hover:text-blue-900 hover:underline"
                : "text-[#03233C] hover:text-[#0A4E8C] hover:underline"
            }`}
          >
            About Us
          </Link>

          <Link
            href="/menu"
            className={`transition-colors duration-200 text-2xl tracking-wide ${
              scrolled
                ? "text-[#0D71C9] hover:text-blue-900 hover:underline"
                : "text-[#03233C] hover:text-[#0A4E8C] hover:underline"
            }`}
          >
            Menu
          </Link>

          <Link
            href="/reservations"
            className={`transition-colors duration-200 text-2xl tracking-wide ${
              scrolled
                ? "text-[#0D71C9] hover:text-blue-900 hover:underline"
                : "text-[#03233C] hover:text-[#0A4E8C] hover:underline"
            }`}
          >
            Reservations
          </Link>

          <Link
            href="#footer"
            className={`transition-colors duration-200 text-2xl tracking-wide ${
              scrolled
                ? "text-[#0D71C9] hover:text-blue-900 hover:underline"
                : "text-[#03233C] hover:text-[#0A4E8C] hover:underline"
            }`}
          >
            Location & Hours
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden flex flex-col gap-1 p-2 ml-auto mr-5"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            } ${scrolled ? "text-[#0D71C9]" : "text-[#03233C]"}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            } ${scrolled ? "text-[#0D71C9]" : "text-[#03233C]"}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-current transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            } ${scrolled ? "text-[#0D71C9]" : "text-[#03233C]"}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-24 bg-white bg-opacity-95 backdrop-blur-sm">
          <nav className="flex flex-col items-center gap-8 pt-8">
            <Link
              href="/homepage"
              className="text-[#0D71C9] text-2xl font-medium hover:text-blue-900 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className="text-[#0D71C9] text-2xl font-medium hover:text-blue-900 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>

            <Link
              href="/menu"
              className="text-[#0D71C9] text-2xl font-medium hover:text-blue-900 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Menu
            </Link>

            <Link
              href="/reservations"
              className="text-[#0D71C9] text-2xl font-medium hover:text-blue-900 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Reservations
            </Link>

            <Link
              href="#footer"
              className="text-[#0D71C9] text-2xl font-medium hover:text-blue-900 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Location & Hours
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
