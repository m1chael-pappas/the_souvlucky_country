"use client";

import Image from 'next/image';
import PillButton from '@/components/ui/PillButton';

const HEADLINE = ['Taste', 'of', 'Greece'];

export default function HeroSection() {
  return (
    <div className="@container relative min-h-[900px] bg-gradient-to-r from-[#F2FDFF] via-[#DFF4FF] to-[#0D71C9] flex items-center">
      <div className="container mx-auto px-6 relative ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-10 z-20">
            <div className="space-y-8">
              {/* The headline letters itself onto the board, word by word */}
              <h2 className="text-6xl lg:text-8xl text-[#03233C] leading-[1.1] max-w-[12ch]">
                {HEADLINE.map((word, i) => (
                  <span key={word}>
                    <span
                      className="paint-on inline-block"
                      style={{ animationDelay: `${120 + i * 130}ms` }}
                    >
                      {word}
                    </span>
                    {i < HEADLINE.length - 1 ? ' ' : null}
                  </span>
                ))}
              </h2>

              <p
                className="settle-in text-xl text-[#4B5563] leading-relaxed max-w-xl"
                style={{ animationDelay: '520ms' }}
              >
                Greek cuisine has a variety of flavours, tastes and colours.
                Delicious plates, best ingredients that remind us the energy and
                the passion of Athens or the summer breeze of the Greek islands.
              </p>
            </div>

            {/* Action Buttons */}
            <div
              className="settle-in flex flex-wrap gap-4"
              style={{ animationDelay: '640ms' }}
            >
              <PillButton href="/reservations" size="lg">
                Book Now
              </PillButton>

              {/* Outline button fills by the same left-to-right stroke */}
              <PillButton href="/menu" variant="outline" size="lg">
                Menu
              </PillButton>
            </div>
          </div>

          {/* Right Visual Content — the stroke carries into the photograph */}
          <div className="relative h-96 lg:h-[500px]">
            <div
              className="paint-in absolute -top-20 -right-0"
              style={{ animationDelay: '380ms', animationDuration: '1000ms' }}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
