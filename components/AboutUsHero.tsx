'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Container } from '@mantine/core';

export default function AboutUsHero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Set mounted state to trigger animations
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-40 relative flex items-center justify-center h-[500px] bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Static background - always visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100" />
      
      {/* Background image with smooth fade-in animation */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src="/about_header.png"
          alt="SouvLucky Country restaurant interior showcasing authentic Greek atmosphere"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+ZaBjVurhTJLEuZpWOSSxJJJJJJJJH//Z"
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Text content - loads immediately with subtle animation */}
      <Container
        size="lg"
        className={`relative z-10 text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-700 ease-out ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-2'
        }`}
      >
        <h1 className="text-4xl font-bold text-[#0D71C9] mb-4">
          SouvLucky Country
        </h1>
        <p className="text-gray-700 leading-relaxed text-lg">
          SouvLucky Country is a family-owned Greek restaurant bringing the
          heart and soul of the Mediterranean to Parramatta. Inspired by
          generations of tradition, we serve authentic souvlaki and classic
          dishes made with passion, warmth, and a whole lot of love. Step
          inside and discover a little slice of Greece, right here in Sydney.
        </p>
      </Container>
    </div>
  );
}