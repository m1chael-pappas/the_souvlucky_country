import type { Metadata } from 'next';

import HeroSection from '@/components/sections/HeroSection';
import PopularSection from '@/components/sections/PopularSection';
import StorySection from '@/components/sections/StorySection';
import SocialSection from '@/components/sections/SocialSection';

// Enable static generation for better performance
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'The Souvlucky Country | Authentic Greek Restaurant in Parramatta',
  description: 'Experience authentic Greek cuisine in Parramatta. Fresh souvlaki, traditional gyros, and Mediterranean flavors made with love. Book your table today!',
  keywords: [
    'Greek restaurant Parramatta',
    'authentic Greek food',
    'souvlaki Sydney',
    'gyros Parramatta',
    'Mediterranean cuisine',
    'Greek restaurant Sydney',
    'traditional Greek dishes',
    'Parramatta restaurants'
  ],
  openGraph: {
    title: 'The Souvlucky Country | Authentic Greek Restaurant in Parramatta',
    description: 'Experience authentic Greek cuisine in Parramatta. Fresh souvlaki, traditional gyros, and Mediterranean flavors made with love.',
    images: [
      {
        url: '/main_hero.png',
        width: 1200,
        height: 630,
        alt: 'The Souvlucky Country Restaurant',
      },
    ],
    type: 'website',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Souvlucky Country | Authentic Greek Restaurant in Parramatta',
    description: 'Experience authentic Greek cuisine in Parramatta. Fresh souvlaki, traditional gyros, and Mediterranean flavors made with love.',
    images: ['/main_hero.png'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PopularSection />
      <StorySection />
      <SocialSection />
    </div>
  );
}