"use client";

import React from 'react';

import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const MostPopular = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const popularItems: PopularItem[] = [
    {
      id: 1,
      name: "Souvlaki Pita",
      description:
        "Pita bread filled with marinated lamb, pork or chicken skewers, chips, tomato, red onion, tzatziki or handmade traditional tomato sauce, paprika & parsley",
      price: "$15.00",
      image: "/souvlaki-pita.jpg", // Replace with actual image path
    },
    {
      id: 2,
      name: "Souvlaki Pita",
      description:
        "Pita bread filled with marinated lamb, pork or chicken skewers, chips, tomato, red onion, tzatziki or handmade traditional tomato sauce, paprika & parsley",
      price: "$15.00",
      image: "/souvlaki-pita.jpg",
    },
    {
      id: 3,
      name: "Souvlaki Pita",
      description:
        "Pita bread filled with marinated lamb, pork or chicken skewers, chips, tomato, red onion, tzatziki or handmade traditional tomato sauce, paprika & parsley",
      price: "$15.00",
      image: "/souvlaki-pita.jpg",
    },
    {
      id: 4,
      name: "Greek Salad",
      description:
        "Fresh tomatoes, cucumbers, olives, feta cheese with olive oil and herbs",
      price: "$12.00",
      image: "/greek-salad.jpg",
    },
    {
      id: 5,
      name: "Moussaka",
      description:
        "Traditional layered dish with eggplant, meat sauce and béchamel",
      price: "$18.00",
      image: "/moussaka.jpg",
    },
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(popularItems.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  interface PopularItem {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return popularItems.slice(startIndex, startIndex + itemsPerSlide);
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
            <p className="text-gray-600 max-w-2xl">
              Greek cuisine has a variety of flavours, tastes and colours.
              Delicious plates, best ingredients that remind us the energy and
              the passion of Athens or the summer breeze of the Greek islands.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
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
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full p-3 flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularItems
                    .slice(
                      slideIndex * itemsPerSlide,
                      (slideIndex + 1) * itemsPerSlide
                    )
                    .map((item) => (
                      <div
                        key={item.id}
                        className="bg-white  rounded-2xl p-6 shadow-lg/20 hover:shadow-md transition-shadow duration-200"
                      >
                        {/* Food Image */}
                        <div className="relative w-full h-48 mb-6 bg-gray-100 rounded-xl overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center">
                            {/* Placeholder for food image */}
                            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                              <span className="text-gray-400 text-sm">
                                Food Image
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Item Details */}
                        <div className="space-y-3">
                          <h3 className="text-xl font-semibold text-gray-800">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                          <div className="pt-2">
                            <span className="text-2xl font-bold text-gray-800">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-[#0D71C9]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function MostPopularPage() {
  return <MostPopular />;
}
