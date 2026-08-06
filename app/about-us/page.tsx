import PillButton from '@/components/ui/PillButton';
import type { Metadata } from 'next';
import Image from 'next/image';

import { Container } from '@mantine/core';
import AboutUsHero from '@/components/AboutUsHero';

// Enable static generation for better performance
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About Us - The Souvlucky Country",
  description:
    "Learn about SouvLucky Country - a family-run Greek restaurant bringing the flavours of the islands of Greece to Parramatta. Discover our story, traditions, and passion for Greek food.",
  keywords: [
    "about SouvLucky Country",
    "Greek restaurant story",
    "family-owned restaurant Parramatta",
    "authentic Greek cuisine",
    "Mediterranean restaurant history",
    "Greek restaurant Sydney",
  ],
  openGraph: {
    title: "About Us - The Souvlucky Country",
    description:
      "Discover the story behind SouvLucky Country - a family-run Greek restaurant bringing the flavours of the islands of Greece to Parramatta.",
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

      {/* Where we came from: two compact chapters read as one paired sequence */}
      <section className="py-16" style={{ backgroundColor: "#F2FDFF" }}>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-2xl bg-sky-wash">
              <Image
                src="/about_01.png"
                alt="The original SouvLucky Country restaurant in Bondi Junction where the family business began in 2015"
                fill
                className="object-cover rounded-2xl shadow-card"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAIAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAQF/8QAHhAAAQQDAAMAAAAAAAAAAAAAAQACAxEEEiExQ7H/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGREAAgMBAAAAAAAAAAAAAAAAAAECETFR/9oADAMBAAIRAxEAPwDQdmQ42zshm+5olh6L8g94FJLJBK4OqQc9bpK+oiNOsGkun//Z"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl text-aegean">
                Our Story Begins in Bondi
              </h2>
              <p className="text-story leading-relaxed text-lg">
                In <strong>2015</strong>, we opened our first restaurant in
                Bondi Junction, inspired by the food and family spirit of our
                Greek heritage. With recipes handed down through generations, we
                brought the aromas and flavours of Greece to Sydney&apos;s
                Eastern suburbs: oregano, lemon, grilled meats. It was a humble
                start, but one full of heart.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Second chapter, continuing the same Sea Mist band so the two origin
          chapters read as one paired sequence rather than two equal beats */}
      <section className="pb-16 pt-4" style={{ backgroundColor: "#F2FDFF" }}>
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl text-aegean">
                A New Chapter in Parramatta
              </h2>
              <p className="text-story leading-relaxed text-lg">
                In 2019, we moved west to Parramatta, embracing a new, vibrant
                community. Here we found a second home, diverse and welcoming
                and full of life. This move allowed us to share our food and culture
                with even more people, and to grow our SouvLucky family further.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl bg-sky-wash">
              <Image
                src="/about_02_update.png"
                alt="SouvLucky Country current location in Parramatta showcasing the warm, welcoming restaurant atmosphere"
                fill
                className="object-cover rounded-2xl shadow-card"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAIAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMF/8QAHhAAAgICAgMAAAAAAAAAAAAAAQIAAwQSBREhQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Ai/NUY+NVXXjuWCh9nO5YfDMy3k7GtY2WFuySo711HoeIiGlopeM//9k="
              />
            </div>
          </div>
        </Container>
      </section>

      {/* The peak of the page: the two people you are actually booking with */}
      <section className="py-24 bg-white">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="relative h-[420px] lg:h-[560px] lg:col-span-3 rounded-2xl bg-sky-wash">
              <Image
                src="/about_03_update.png"
                alt="Maria and Harry, the husband and wife owners of SouvLucky Country, in their Parramatta restaurant kitchen"
                fill
                className="object-cover rounded-2xl shadow-panel"
                sizes="(max-width: 1024px) 100vw, 60vw"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAIAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAME/8QAHhAAAgICAgMAAAAAAAAAAAAAAQIAEQMEBUESEzH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABcRAQADAAAAAAAAAAAAAAAAAAABUWH/2gAMAwEAAhEDEQA/AMK8kvtZNzEw8lsEfa6MoOZ1wAMiu7DsGriINUmn/9k="
              />
            </div>
            <div className="space-y-6 lg:col-span-2">
              <h2 className="text-5xl lg:text-6xl text-aegean leading-[1.1]">
                Meet Maria and Harry
              </h2>
              <p className="text-story leading-relaxed text-lg">
                Maria and Harry are a wife and husband duo with a deep love for
                cooking and for their community. From greeting guests at the door
                to perfecting every marinade, they treat everyone like family.
              </p>
              {/* Emphasis by weight and a hairline, not by a size that would
                  outshout the heading above it */}
              <p className="text-lg lg:text-xl text-midnight font-medium leading-relaxed border-l border-aegean pl-5">
                Their dream was never just to run a restaurant, but to create a
                place where memories are made around every meal.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing ask, with the practical details a deciding visitor needs */}
      <section className="py-16" style={{ backgroundColor: "#F2FDFF" }}>
        <Container size="md" className="text-center">
          <h2 className="text-4xl lg:text-5xl text-aegean mb-6">
            Come and sit with us
          </h2>
          <p className="text-story leading-relaxed text-lg mb-8">
            Whether it&apos;s your first visit or your fiftieth, there&apos;s
            always something special waiting for you at The Souvlucky Country.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <PillButton href="/reservations">Book a Table</PillButton>
            <PillButton href="/menu" variant="outline">
              See the Menu
            </PillButton>
          </div>
          <p className="text-story mt-8">
            316 Church St, Parramatta NSW 2150 ·{" "}
            <a
              href="tel:+61298914174"
              className="text-aegean underline-offset-4 hover:underline"
            >
              (02) 9891 4174
            </a>
          </p>
        </Container>
      </section>
    </div>
  );
}