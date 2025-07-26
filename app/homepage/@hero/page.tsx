"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="@container relative min-h-[900px] bg-gradient-to-r from-white via-[#DFF4FF] to-blue-500 flex items-center">
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Show text immediately, then animate */}
          <div className="space-y-8 z-20">
            <div className="space-y-6">
              {/* Text loads instantly - no initial animation delay */}
              <h2 className="text-5xl lg:text-6xl font-bold mt-50 text-gray-800 leading-tight">
                Taste of Greece
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Greek cuisine has a variety of flavours, tastes and colours.
                Delicious plates, best ingredients that remind us the energy and
                the passion of Athens or the summer breeze of the Greek islands.
              </p>
            </div>

            {/* Action Buttons - Show immediately with subtle animation */}
            <div className={`flex flex-wrap gap-4 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-80'}`}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/reservations"
                  className="bg-[#0D71C9] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#0A4E8C] transition-colors duration-200 block"
                >
                  Book Now
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href="/menu"
                  className="border-2 bg-white border-[#0D71C9] text-[#0D71C9] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#0D71C9] hover:text-white transition-all duration-200 block"
                >
                  Menu
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Visual Content - Image with placeholder */}
          <div className="relative h-96 lg:h-[500px]">
            {/* Image placeholder background */}
            <div className="absolute -top-20 -right-0 w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg opacity-30 animate-pulse" />
            
            {/* Actual image with smooth fade-in */}
            <motion.div
              className="absolute -top-20 -right-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/home_hero.png"
                alt="Traditional Greek food spread featuring souvlaki, gyros, and Mediterranean dishes at The Souvlucky Country"
                width={1200}
                height={1200}
                className="w-full h-full object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 700px"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+ZaBjVurhTJLEuZpWOSSxJJJJJJJJH//Z"
                onLoad={() => setIsLoaded(true)}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}