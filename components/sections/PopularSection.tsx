"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PaintHeading from "@/components/ui/PaintHeading";

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
    <section className="py-16 bg-[#F2FDFF]">
      <div className="container mt-30 mb-50 mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <PaintHeading className="text-5xl lg:text-6xl text-[#0D71C9] mb-4">
            Most popular
          </PaintHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
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
                      priority
                      quality={80}
                      placeholder="blur"
                      blurDataURL={BLUR_DATA_URL}
                    />
                  </div>

                  {/* Item Details */}
                  <div className="space-y-3">
                    <h3 className="text-2xl text-[#03233C]">{item.name}</h3>
                    <div className="text-[#4B5563] text-sm leading-relaxed">
                      <p>
                        <strong>{item.description.highlight}</strong>
                      </p>
                      <p>{item.description.main}</p>
                    </div>
                    <div className="pt-2">
                      <span className="text-2xl font-medium text-[#111827]">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
