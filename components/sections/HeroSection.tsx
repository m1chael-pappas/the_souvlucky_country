"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="@container relative min-h-[900px] bg-gradient-to-r from-white via-[#DFF4FF] to-blue-500 flex items-center">
      <div className="container mx-auto px-6 relative ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8 z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.h2
                className="text-5xl lg:text-6xl font-bold mt-50 text-gray-800 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Taste of Greece
              </motion.h2>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Greek cuisine has a variety of flavours, tastes and colours.
                Delicious plates, best ingredients that remind us the energy and
                the passion of Athens or the summer breeze of the Greek islands.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
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
            </motion.div>
          </motion.div>

          {/* Right Visual Content */}
          <motion.div
            className="relative h-96 lg:h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Large background image - positioned to the right */}
            <motion.div
              className="absolute -top-20 -right-0"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/home_hero.png"
                alt="Hero image of The Souvlucky Country restaurant"
                quality={85}
                priority
                loading="eager"
                width={1200}
                height={800}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+ZaBjVurhTJLEuZpWOSSxJJJJJJJJH//Z"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}