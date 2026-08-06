'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Container } from '@mantine/core';

export default function AboutUsHero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative flex items-center justify-center min-h-[560px] pt-40 pb-16 bg-gradient-to-br from-sea-mist to-sky-wash">
      {/* Static wash behind the photograph so there is never a flash of nothing */}
      <div className="absolute inset-0 bg-gradient-to-br from-sea-mist to-sky-wash" />

      {/* The room itself, fading in once decoded */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-out motion-reduce:transition-none ${
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
          blurDataURL="data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAEAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMG/8QAGRAAAwADAAAAAAAAAAAAAAAAAAECERIh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDX0u4JW3sAKX//2Q=="
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Narrower panel so the room frames the words instead of being covered */}
      <Container
        size="sm"
        className="settle-in relative z-10 text-center bg-white/85 backdrop-blur-sm p-10 rounded-2xl shadow-panel"
      >
        <h1 className="text-5xl lg:text-6xl text-aegean mb-6 leading-[1.1]">
          The Souvlucky Country
        </h1>
        <p className="text-story leading-relaxed text-lg max-w-prose mx-auto">
          A family-owned Greek eatery bringing the flavours of the islands of
          Greece to Parramatta. Inspired by generations of tradition, we serve
          authentic souvlaki and classic dishes made with passion, warmth, and a
          whole lot of love. Step inside and discover a little slice of Greece,
          right here in Sydney.
        </p>
      </Container>
    </div>
  );
}
