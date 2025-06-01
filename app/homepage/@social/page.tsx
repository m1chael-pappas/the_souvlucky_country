import React from 'react';

import Image from 'next/image';

const FollowUsSection = () => {
  const socialPosts = [
    {
      id: 1,
      image: "/Rectangle 36.png",
      alt: "Greek souvlaki skewers with pita bread",
      text: "Giving you the authentic Greek experience 🇬🇷🇬🇷🇬🇷",
      hashtags:
        "#thesouvluckycountry #greekfoods #greekfoodlovers #greekeats #eatgreek #eatdelicious #eatyummy #yummyfood #greektaste #greekrestaurant #parramattaeats #sydneyeats #delicious #greekgyro #souvlakia #souvlaki #gyros",
    },
    {
      id: 2,
      image: "/Frame 43.png",
      alt: "Greek food experience post",
      text: "Fresh ingredients, traditional recipes 🍽️",
      hashtags:
        "#authenticgreek #freshingredients #traditional #homemade #greekflavors #mediterraneandiet #healthyfood #greekculture",
    },
    {
      id: 3,
      image: "/Rectangle 39.png",
      alt: "Vintage pin-up style woman with Greek food",
      text: "Taste the passion of Athens ✨",
      hashtags:
        "#greekpassion #athens #greekheritage #foodlove #greekstyle #mediterranean #authentic #greektradition",
    },
    {
      id: 4,
      image: "/Rectangle 40.png",
      alt: "Mixed Greek platter with grilled meats",
      text: "Perfect for sharing with friends 👥",
      hashtags:
        "#sharingiscaring #greekplatter #friends #familytime #greeknight #souvlaki #gyros #greekfeast",
    },
  ];

  return (
    <section className="py-16 pt-30 bg-[#F2FDFF]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0D71C9] italic mb-4">
            Follow us
          </h2>
          {/* Call to action */}
          <div className="text-center mt-8">
            <a
              href="https://instagram.com/the_souvlucky_country"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0D71C9] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0A4E8C] transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @thesouvlucky_country
            </a>
          </div>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 max-w-6xl mx-auto">
          {socialPosts.map((post) => (
            <div
              key={post.id}
              className="relative aspect-square group cursor-pointer overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Sliding Text Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-full bg-[#0D71C9] bg-opacity-90 text-white p-4 flex flex-col justify-center items-center text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <div className="space-y-3">
                  <p className="text-sm lg:text-base font-medium leading-relaxed">
                    {post.text}
                  </p>
                  <div className="text-xs lg:text-sm opacity-90 leading-relaxed max-h-32 overflow-hidden">
                    {post.hashtags?.split(" ").map((hashtag, index) => (
                      <span key={index} className="inline-block mr-1 mb-1">
                        {hashtag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowUsSection;
