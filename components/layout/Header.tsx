"use client";
import {
  useEffect,
  useState,
} from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
        scrolled ? "bg-[rgb(13,113,201)] shadow-md py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <nav className="flex items-center justify-center gap-8">
            <Link
              href="/homepage"
              className={`transition-colors duration-200 text-lg tracking-wide ${
                scrolled
                  ? "text-sky-300 hover:text-white"
                  : "text-[#0D71C9] hover:text-[#0A4E8C]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/homepage#story"
              className={`transition-colors duration-200 text-lg tracking-wide ${
                scrolled
                  ? "text-sky-300 hover:text-white"
                  : "text-[#0D71C9] hover:text-[#0A4E8C]"
              }`}
            >
              Story
            </Link>
            <Link
              href="/menu"
              className={`transition-colors duration-200 text-lg tracking-wide ${
                scrolled
                  ? "text-sky-300 hover:text-white"
                  : "text-[#0D71C9] hover:text-[#0A4E8C]"
              }`}
            >
              Menu
            </Link>
            <Link
              href="/private-events"
              className={`transition-colors duration-200 text-lg tracking-wide ${
                scrolled
                  ? "text-sky-300 hover:text-white"
                  : "text-[#0D71C9] hover:text-[#0A4E8C]"
              }`}
            >
              Private events
            </Link>
            <Link
              href="#footer"
              className={`transition-colors duration-200 text-lg tracking-wide ${
                scrolled
                  ? "text-sky-300 hover:text-white"
                  : "text-[#0D71C9] hover:text-[#0A4E8C]"
              }`}
            >
              Location & Hours
            </Link>
            <Link
              href="/reservations"
              className={`transition-colors duration-200 text-lg tracking-wide ${
                scrolled
                  ? "text-sky-300 hover:text-white"
                  : "text-[#0D71C9] hover:text-[#0A4E8C]"
              }`}
            >
              Reservations
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
