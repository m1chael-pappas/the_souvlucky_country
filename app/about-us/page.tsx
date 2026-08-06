import PillButton from '@/components/ui/PillButton';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@mantine/core';
import AboutUsHero from '@/components/AboutUsHero';

// Enable static generation for better performance
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About Us - SouvLucky Country",
  description:
    "Learn about SouvLucky Country - a family-owned Greek restaurant bringing authentic Mediterranean cuisine to Parramatta. Discover our story, traditions, and passion for Greek food.",
  keywords: [
    "about SouvLucky Country",
    "Greek restaurant story",
    "family-owned restaurant Parramatta",
    "authentic Greek cuisine",
    "Mediterranean restaurant history",
    "Greek restaurant Sydney",
  ],
  openGraph: {
    title: "About Us - SouvLucky Country",
    description:
      "Discover the story behind SouvLucky Country - a family-owned Greek restaurant bringing authentic Mediterranean flavors to Parramatta.",
    images: [
      {
        url: "/main_hero.png",
        width: 1200,
        height: 630,
        alt: "SouvLucky Country Restaurant",
      },
    ],
  },
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section - Client Component with Animation */}
      <AboutUsHero />

      {/* Our Story Begins in Bondi Section */}
      <section className="py-16" style={{ backgroundColor: "#F2FDFF" }}>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="/about_01.png"
                alt="The original SouvLucky Country restaurant in Bondi Junction where the family business began in 2015"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+ZaBjVurhTJLEuZpWOSSxJJJJJJJJH//Z"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#0D71C9]">
                Our Story Begins in Bondi
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                In <strong>2015</strong>, we opened our first restaurant in
                Bondi Junction, inspired by the food and family spirit of our
                Greek heritage. With recipes handed down through generations, we
                brought the aromas and flavours of Greece—oregano, lemon,
                grilled meats—to Sydney&apos;s Eastern suburbs. It was a humble
                start, but one full of heart.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* A New Chapter in Parramatta Section */}
      <section className="py-16" style={{ backgroundColor: "#F2FDFF" }}>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#0D71C9]">
                A New Chapter in Parramatta
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                In 2019, we moved west to Parramatta, embracing a new, vibrant
                community. Here, we found a second home—diverse, welcoming, and
                full of life. This move allowed us to share our food and culture
                with even more people, and to grow our SouvLucky family further.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/about_02_update.png"
                alt="SouvLucky Country current location in Parramatta showcasing the warm, welcoming restaurant atmosphere"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+ZaBjVurhTJLEuZpWOSSxJJJJJJJJH//Z"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Meet Maria and Harry Section */}
      <section className="py-16" style={{ backgroundColor: "#F2FDFF" }}>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="/about_03_update.png"
                alt="Maria and Harry, the husband and wife owners of SouvLucky Country, in their Parramatta restaurant kitchen"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+ZaBjVurhTJLEuZpWOSSxJJJJJJJJH//Z"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-[#0D71C9]">
                Meet Maria and Harry
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                At the heart of SouvLucky Country are Maria and Harry—a wife and
                husband duo with a deep love for cooking and community. From
                greeting guests at the door to perfecting every marinade, they
                treat everyone like family.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Their dream was never just to run a restaurant, but to create a
                place where memories are made around every meal.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Book a Table Section */}
      <section className="py-16 bg-white">
        <Container size="md" className="text-center">
          <h2 className="text-4xl font-bold text-[#0D71C9] mb-6">
            Book a Table
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            Whether it&apos;s your first visit or your fiftieth, there&apos;s
            always something special waiting for you at SouvLucky Country.
          </p>
          <PillButton href="/reservations">Discover More</PillButton>
        </Container>
      </section>
    </div>
  );
}