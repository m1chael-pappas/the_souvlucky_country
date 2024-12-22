"use client";
import { Circle } from 'lucide-react';

import LogoSVG from '@/components/ui/LogoSVG';
import { Container } from '@mantine/core';

export default function Hero() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url(./souvlucky2.png)",
      }}
    >
      <Container
        size="lg"
        className="relative z-10 text-center flex flex-col items-center gap-16"
      >
        {/* Logo */}
        <div className="transform scale-125 hover:scale-[1.3] transition-transform duration-300">
          <LogoSVG />
        </div>

        <div className="flex items-center justify-center gap-6 text-3xl font-light tracking-widest uppercase">
          <span
            className="text-[#0D71C9] hover:opacity-80 transition-colors cursor-default"
            style={{
              textShadow: `
                -1px -1px 0 #FFF,  
                1px -1px 0 #FFF,
                -1px 1px 0 #FFF,
                1px 1px 0 #FFF`,
            }}
          >
            Authentic
          </span>

          <Circle size={12} className="text-[#0D71C9] fill-[#0D71C9]" />

          <span
            className="text-white hover:opacity-80 transition-colors cursor-default"
            style={{
              textShadow: `
                -1px -1px 0 #0D71C9,  
                1px -1px 0 #0D71C9,
                -1px 1px 0 #0D71C9,
                1px 1px 0 #0D71C9`,
            }}
          >
            Traditional
          </span>

          <Circle size={12} className="text-[#0D71C9] fill-[#0D71C9]" />

          <span
            className="text-[#0D71C9] hover:opacity-80 transition-colors cursor-default"
            style={{
              textShadow: `
                -1px -1px 0 #FFF,  
                1px -1px 0 #FFF,
                -1px 1px 0 #FFF,
                1px 1px 0 #FFF`,
            }}
          >
            Homemade
          </span>
        </div>
      </Container>
    </div>
  );
}
