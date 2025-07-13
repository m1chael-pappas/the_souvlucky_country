"use client";

import React, { useEffect } from 'react';

import Image from 'next/image';

export default function ReservationsPage() {
  useEffect(() => {
    // Always load Quandoo booking widget script
    const script = document.createElement("script");
    script.src = "https://booking-widget.quandoo.com/index.js";
    script.setAttribute("data-merchant-id", "105769");
    script.setAttribute("data-theme", "brand");
    script.async = true;

    // Always add the script
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 py-36">
      {/* Title */}
      <h1 className="text-5xl font-semibold font-sedgwick text-center text-[#0D71C9] mb-8">
        Make a reservation
      </h1>

      {/* Hero Image */}
      <div className="container mx-auto mb-8 px-4">
        <Image
          src="/Rectangle 37.png"
          alt="Restaurant interior showcasing the dining atmosphere at SouvLucky Country"
          width={1200}
          height={800}
          className="mx-auto rounded-2xl"
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+ZaBjVurhTJLEuZpWOSSxJJJJJJJJH//Z"
        />
      </div>

      {/* Instructions */}
      <div className="container mx-auto mb-8 px-4 text-center">
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
          Book your table at SouvLucky Country and experience authentic Greek
          flavors in the heart of Parramatta. Select your preferred date and
          time below.
        </p>
      </div>

      {/* Quandoo Booking Widget */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-[#0D71C9] mb-4">
              Reserve Your Table
            </h2>
            <p className="text-gray-600">
              Use our online booking system to secure your table
            </p>
          </div>

          {/* Quandoo Widget Container */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <div id="quandoo-booking-widget" className="min-h-[500px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 mt-12">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#0D71C9] mb-4">Need Help?</h3>
          <p className="text-gray-700 mb-4">
            For large groups or special requests, please call us directly.
          </p>
        </div>
      </div>
    </div>
  );
}
