"use client";
import {
  useEffect,
  useState,
} from 'react';

import Link from 'next/link';

import { LogoSVG } from '@/components/ui/LogoSVG';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Set initial scroll state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Prevent hydration mismatch by using consistent styling until mounted
  const headerScrolledClass = mounted && scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-8";
  const linkScrolledClass = mounted && scrolled 
    ? "text-[#0D71C9] hover:text-blue-900 hover:underline"
    : "text-[#03233C] hover:text-[#0A4E8C] hover:underline";
  const hamburgerScrolledClass = mounted && scrolled ? "text-[#0D71C9]" : "text-[#03233C]";

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Don't render dynamic content until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#0D71C9] text-white px-4 py-2 rounded z-[60] focus:z-[60]"
        >
          Skip to main content
        </a>
        <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent py-8">
          <div className="flex items-center gap-8 ml-5">
            <div className="flex-shrink-0 bg-transparent">
              <Link href="/" className="block bg-transparent">
                <LogoSVG width={200} height={100} />
              </Link>
            </div>
            <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
              <Link href="/" className="transition-colors duration-200 text-2xl tracking-wide text-[#03233C] hover:text-[#0A4E8C] hover:underline">Home</Link>
              <Link href="/about-us" className="transition-colors duration-200 text-2xl tracking-wide text-[#03233C] hover:text-[#0A4E8C] hover:underline">About Us</Link>
              <Link href="/menu" className="transition-colors duration-200 text-2xl tracking-wide text-[#03233C] hover:text-[#0A4E8C] hover:underline">Menu</Link>
              <Link href="/reservations" className="transition-colors duration-200 text-2xl tracking-wide text-[#03233C] hover:text-[#0A4E8C] hover:underline">Reservations</Link>
              <Link href="#footer" className="transition-colors duration-200 text-2xl tracking-wide text-[#03233C] hover:text-[#0A4E8C] hover:underline">Location & Hours</Link>
            </nav>
            <button className="lg:hidden flex flex-col gap-1 p-2 ml-auto mr-5" aria-label="Toggle mobile menu">
              <span className="w-6 h-0.5 bg-current text-[#03233C]"></span>
              <span className="w-6 h-0.5 bg-current text-[#03233C]"></span>
              <span className="w-6 h-0.5 bg-current text-[#03233C]"></span>
            </button>
          </div>
        </header>
      </>
    );
  }

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#0D71C9] text-white px-4 py-2 rounded z-[60] focus:z-[60]"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerScrolledClass}`}
        suppressHydrationWarning
      >
        <div className="flex items-center gap-8 ml-5">
          {/* Logo */}
          <div className="flex-shrink-0 bg-transparent">
            <Link href="/" className="block bg-transparent">
              <LogoSVG width={200} height={100} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-8"
            role="navigation"
            aria-label="Main navigation"
            suppressHydrationWarning
          >
            <Link
              href="/"
              className={`transition-colors duration-200 text-2xl tracking-wide ${linkScrolledClass}`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={`transition-colors duration-200 text-2xl tracking-wide ${linkScrolledClass}`}
            >
              About Us
            </Link>

            <Link
              href="/menu"
              className={`transition-colors duration-200 text-2xl tracking-wide ${linkScrolledClass}`}
            >
              Menu
            </Link>

            <Link
              href="/reservations"
              className={`transition-colors duration-200 text-2xl tracking-wide ${linkScrolledClass}`}
            >
              Reservations
            </Link>

            <Link
              href="#footer"
              className={`transition-colors duration-200 text-2xl tracking-wide ${linkScrolledClass}`}
            >
              Location & Hours
            </Link>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden flex flex-col gap-1 p-2 ml-auto mr-5"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              } ${hamburgerScrolledClass}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              } ${hamburgerScrolledClass}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-current transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              } ${hamburgerScrolledClass}`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden fixed inset-0 top-24 bg-white bg-opacity-95 backdrop-blur-sm"
          >
            <nav
              className="flex flex-col items-center gap-8 pt-8"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <Link
                href="/"
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
    </>
  );
};

export default Header;
