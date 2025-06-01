"use client";
import {
  useEffect,
  useState,
} from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LogoSVG } from '../ui/LogoSVG';

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="flex items-center gap-8 ml-5 ">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/homepage">
            <LogoSVG width={200} height={100} />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
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
      </div>
    </header>
  );
};

export default Header;
