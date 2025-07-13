"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MostPopular = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

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

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(popularItems.length / itemsPerSlide);

  interface PopularItem {
    id: number;
    name: string;
    description: string | { highlight: string; main: string };
    price: string;
    image: string;
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16  bg-[#F2FDFF]">
      <div className="container mt-30 mb-50 mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-4xl font-bold text-[#0D71C9] mb-4">
              Most popular
            </h2>
            {/* <p className="text-gray-600 max-w-2xl">
              Greek cuisine has a variety of flavours, tastes and colours.
              Delicious plates, best ingredients that remind us the energy and
              the passion of Athens or the summer breeze of the Greek islands.
            </p> */}
          </div>

          {/* Navigation Arrows - Commented out for now, may need later */}
          {/* <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-[#0D71C9] text-[#0D71C9] hover:bg-[#0D71C9] hover:text-white transition-all duration-200 flex items-center justify-center"
              disabled={currentSlide === 0}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#0D71C9] text-white hover:bg-[#0A4E8C] transition-all duration-200 flex items-center justify-center"
              disabled={currentSlide === totalSlides - 1}
            >
              <ChevronRight size={20} />
            </button>
          </div> */}
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full p-3 pb-8 flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {popularItems
                    .slice(
                      slideIndex * itemsPerSlide,
                      (slideIndex + 1) * itemsPerSlide
                    )
                    .map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1,
                          ease: "easeOut" 
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link href="/menu" className="block">
                          <div className="bg-white rounded-2xl p-6 shadow-lg/20 hover:shadow-md transition-shadow duration-200 cursor-pointer"
                          >
                        {/* Food Image */}
                        <div className="relative w-full h-64 mb-6 bg-gray-100 rounded-xl overflow-hidden">
                          <Image
                            src={item.image}
                            alt={`${item.name} - Premium Greek dish at SouvLucky Country restaurant`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority={item.id <= 3} // Priority for first 3 items (above fold)
                            quality={80}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+ZaBjVurhTJLEuZpWOSSxJJJJJJJJH//Z"
                          />
                        </div>

                        {/* Item Details */}
                        <div className="space-y-3">
                          <h3 className="text-xl font-semibold text-gray-800">
                            {item.name}
                          </h3>
                          <div className="text-gray-600 text-sm leading-relaxed">
                            {typeof item.description === "string" ? (
                              <p>{item.description}</p>
                            ) : (
                              <>
                                <p>
                                  <strong>{item.description.highlight}</strong>
                                </p>
                                <p>{item.description.main}</p>
                              </>
                            )}
                          </div>
                          <div className="pt-2">
                            <span className="text-2xl font-bold text-gray-800">
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
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default function MostPopularPage() {
  return <MostPopular />;
}
