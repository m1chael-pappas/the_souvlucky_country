"use client";
import {
  useEffect,
  useState,
} from 'react';

import Link from 'next/link';

import { LogoSVG } from '@/components/ui/LogoSVG';
import PillButton from '@/components/ui/PillButton';

const MOBILE_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/menu', label: 'Menu' },
  { href: '/reservations', label: 'Reservations' },
  { href: '#footer', label: 'Location & Hours' },
];

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
    ? "text-aegean hover:text-midnight hover:underline"
    : "text-midnight hover:text-aegean-deep hover:underline";
  const hamburgerScrolledClass = mounted && scrolled ? "text-aegean" : "text-midnight";

  // Escape closes the menu, and the page behind it must not scroll
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileMenuOpen]);

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
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-aegean text-white px-4 py-2 rounded z-[60] focus:z-[60]"
        >
          Skip to main content
        </a>
        <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent py-8">
          <div className="relative z-10 flex items-center gap-8 ml-5">
            <div className="flex-shrink-0 bg-transparent">
              <Link href="/" className="block bg-transparent">
                <LogoSVG width={200} height={100} />
              </Link>
            </div>
            <nav className="hidden lg:flex items-center gap-8" role="navigation" aria-label="Main navigation">
              <Link href="/" className="transition-colors duration-200 text-2xl tracking-wide text-midnight hover:text-aegean-deep hover:underline">Home</Link>
              <Link href="/about-us" className="transition-colors duration-200 text-2xl tracking-wide text-midnight hover:text-aegean-deep hover:underline">About Us</Link>
              <Link href="/menu" className="transition-colors duration-200 text-2xl tracking-wide text-midnight hover:text-aegean-deep hover:underline">Menu</Link>
              <Link href="/reservations" className="transition-colors duration-200 text-2xl tracking-wide text-midnight hover:text-aegean-deep hover:underline">Reservations</Link>
              <Link href="#footer" className="transition-colors duration-200 text-2xl tracking-wide text-midnight hover:text-aegean-deep hover:underline">Location & Hours</Link>
            </nav>
            <button className="lg:hidden flex flex-col justify-center items-center gap-[7px] w-12 h-12 ml-auto mr-4" aria-label="Open menu">
              <span className="w-8 h-[3px] rounded-full bg-current text-midnight"></span>
              <span className="w-8 h-[3px] rounded-full bg-current text-midnight"></span>
              <span className="w-8 h-[3px] rounded-full bg-current text-midnight"></span>
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-aegean text-white px-4 py-2 rounded z-[60] focus:z-[60]"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerScrolledClass}`}
        suppressHydrationWarning
      >
        <div className="relative z-10 flex items-center gap-8 ml-5">
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
            className="lg:hidden flex flex-col justify-center items-center gap-[7px] w-12 h-12 ml-auto mr-4 rounded-full active:translate-y-px transition-transform"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`w-8 h-[3px] rounded-full bg-current transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mobileMenuOpen ? "rotate-45 translate-y-[10px]" : ""
              } ${hamburgerScrolledClass}`}
            ></span>
            <span
              className={`w-8 h-[3px] rounded-full bg-current transition-[transform,opacity] duration-200 ${
                mobileMenuOpen ? "opacity-0 scale-x-0" : ""
              } ${hamburgerScrolledClass}`}
            ></span>
            <span
              className={`w-8 h-[3px] rounded-full bg-current transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[10px]" : ""
              } ${hamburgerScrolledClass}`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="paint-down lg:hidden fixed inset-0 pt-36 bg-sea-mist overflow-y-auto"
          >
            <nav
              className="flex flex-col items-stretch px-8 pt-6"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {MOBILE_LINKS.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  style={{ animationDelay: `${140 + i * 45}ms` }}
                  className="settle-in text-midnight text-3xl py-4 border-b border-sky-wash hover:text-aegean transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}

              {/* The site's one conversion, given the weight the list denies it */}
              <div
                className="settle-in pt-8 flex justify-center"
                style={{ animationDelay: `${140 + MOBILE_LINKS.length * 45}ms` }}
              >
                <PillButton href="/reservations" onNavigate={closeMobileMenu}>
                  Book a Table
                </PillButton>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
