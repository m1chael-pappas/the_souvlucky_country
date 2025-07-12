"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="@container relative min-h-[900px] bg-gradient-to-r from-white via-[#DFF4FF] to-blue-500 flex items-center">
      <div className="container mx-auto px-6 relative ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-20">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold mt-50 text-gray-800 leading-tight">
                Taste of Greece
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Greek cuisine has a variety of flavours, tastes and colours.
                Delicious plates, best ingredients that remind us the energy and
                the passion of Athens or the summer breeze of the Greek islands.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/reservations"
                className="bg-[#0D71C9] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#0A4E8C] transition-colors duration-200"
              >
                Book Now
              </Link>

              <Link
                href="/menu"
                className="border-2 bg-white border-[#0D71C9] text-[#0D71C9] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#0D71C9] hover:text-white transition-all duration-200"
              >
                Menu
              </Link>
            </div>
          </div>

          {/* Right Visual Content */}
          <div className="relative h-96 lg:h-[500px]">
            {/* Large background image - positioned to the right */}
            <div className="absolute -top-20 -right-0 ">
              <Image
                src="/home_hero.png"
                alt="Greek Food Visual 1"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
