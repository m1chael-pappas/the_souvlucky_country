"use client";

import Image from "next/image";
import Link from "next/link";

interface PopularItem {
  id: number;
  name: string;
  description: { highlight: string; main: string };
  price: string;
  image: string;
}

const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+ZaBjVurhTJLEuZpWOSSxJJJJJJJJH//Z";

const popularItems: PopularItem[] = [
  {
    id: 1,
    name: "Gyros Pita",
    description: {
      highlight: "Greek street food at its best.",
      main: "Our most-loved handheld meal. Warm pita packed with your choice of meat, perfect for a quick bite or a satisfying lunch. Simple, bold, and full of flavour.",
    },
    price: "$16.70/$17.20",
    image: "/popylar_01.png",
  },
  {
    id: 2,
    name: "Olympus Plate",
    description: {
      highlight: "The ultimate feast to share",
      main: "A generous mix of grilled meats, haloumi, dips, chips and pita. Perfect for sharing with friends or family when you're craving a little bit of everything.",
    },
    price: "$79.00",
    image: "/popular_02.png",
  },
  {
    id: 3,
    name: "Souvlaki Plate",
    description: {
      highlight: "Classic, wholesome and filling.",
      main: "Three juicy skewers served with pita, tzatziki, salad and chips. A balanced plate that brings the taste of Greece straight to your table – every bite satisfying.",
    },
    price: "$34.50/$37.50",
    image: "/popular_03.png",
  },
];

export default function PopularSection() {
  return (
    <section className="py-16 bg-sea-mist">
      <div className="container mt-30 mb-50 mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-5xl lg:text-6xl text-aegean mb-4">
            Most popular
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularItems.map((item) => (
            <div key={item.id}>
              <Link href="/menu" className="block group h-full">
                <div className="h-full bg-white rounded-2xl p-6 shadow-card group-hover:shadow-card-hover transition-shadow duration-300 ease-out cursor-pointer">
                  {/* Food Image */}
                  <div className="relative w-full h-64 mb-6 bg-gray-100 rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.name} - Premium Greek dish at SouvLucky Country restaurant`}
                      fill
                      className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      quality={80}
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                    />
                  </div>

                  {/* Item Details */}
                  <div className="space-y-3">
                    <h3 className="text-2xl text-midnight">{item.name}</h3>
                    <div className="text-story text-sm leading-relaxed">
                      <p>
                        <strong>{item.description.highlight}</strong>
                      </p>
                      <p>{item.description.main}</p>
                    </div>
                    <div className="pt-2">
                      <span className="text-2xl font-medium text-ink">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
