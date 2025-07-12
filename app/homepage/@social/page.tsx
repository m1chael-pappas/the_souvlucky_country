"use client";

import React, { useState } from "react";

import Image from "next/image";

const FollowUsSection = () => {
  const [activePost, setActivePost] = useState<number | null>(null);
  const socialPosts = [
    {
      id: 1,
      image: "/instagram_01.jpg",
      alt: "Close-up of juicy lamb gyros wrapped in warm pita bread with fresh vegetables and tzatziki sauce",
      text: "Succulent, crispy, flavoursome slow-cooked lamb gyros that'll make your taste buds dance! 😋🇬🇷",
      hashtags:
        "#thesouvluckycountry #parramattaeats #sydneyeats #lambgyros #greekgyros #succulent #crispy #yummyinmytummy #greekfoodporn #souvlucky",
    },
    {
      id: 2,
      image: "/instagram_02.jpg",
      alt: "Fresh Mediterranean ingredients including tomatoes, onions, herbs and olive oil used in Greek cooking",
      text: "Fresh ingredients meet ancient recipes - this is how authentic Greek magic happens! ✨🍽️",
      hashtags:
        "#authenticgreek #freshingredients #traditionalrecipes #greekmagic #homemade #mediterraneanlove #greekflavors #foodieheaven",
    },
    {
      id: 3,
      image: "/Rectangle 39.png",
      alt: "Traditional Greek mezze platter showcasing authentic Mediterranean dishes and family recipes",
      text: "Taste the passion of Athens in every bite - where tradition meets incredible flavour! 🏛️💙",
      hashtags:
        "#greekpassion #athensvibes #greekheritage #incredibleflavour #traditionmeetsflavour #mediterranean #authenticgreek #greektradition",
    },
    {
      id: 4,
      image: "/Rectangle 40.png",
      alt: "Large Greek sharing platter with mixed grilled meats, pita bread, salads and traditional sides",
      text: "Epic Greek platters perfect for sharing with your favourite people! 👥🍖",
      hashtags:
        "#epicplatters #sharingiscaring #greekfeast #favouritepeople #mixedgrill #souvlaki #gyros #greeknight",
    },
    {
      id: 5,
      image: "/Rectangle 36.png",
      alt: "Golden grilled souvlaki skewers cooked to perfection over open flame",
      text: "Golden, grilled to perfection - every skewer tells a story of Greek tradition! 🔥🥄",
      hashtags:
        "#goldenperfection #grillmaster #everyskewermatters #greektradition #grilled #souvlaki #perfection #flamecooked",
    },
    {
      id: 6,
      image: "/instagram_03.jpg",
      alt: "Complete Greek feast spread with souvlaki, gyros, Greek salad and traditional accompaniments",
      text: "When the aroma hits and you know it's going to be absolutely divine! 🤤👨‍🍳",
      hashtags:
        "#aromatherapy #absolutelydivine #mouthwatering #greekchef #divinegreekfood #aromahits #greekfeast #chefsspecial",
    },
    {
      id: 7,
      image: "/instagram_04.jpg",
      alt: "Hearty Greek comfort food featuring traditional recipes and generous portions",
      text: "Comfort food that hugs your soul - this is what Greek hospitality tastes like! 🤗💛",
      hashtags:
        "#comfortfood #hugsforyoursoul #greekhospitality #soulwarming #greekcomfort #heartwarming #tastes like love",
    },
    {
      id: 8,
      image: "/Rectangle 37.png",
      alt: "Ultimate Greek dining experience plate with variety of authentic Mediterranean specialties",
      text: "The ultimate Greek experience on a plate - come hungry, leave happy! 🍽️😊",
      hashtags:
        "#ultimategreek #comeingry #leavehappy #greekexperience #happiness #ultimateexperience #greekjoy #happyvibes",
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
              onClick={() =>
                setActivePost(activePost === post.id ? null : post.id)
              }
              onMouseEnter={() => setActivePost(post.id)}
              onMouseLeave={() => setActivePost(null)}
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  className={`object-cover transition-transform duration-300 ${
                    activePost === post.id ? "scale-105" : ""
                  }`}
                />
              </div>

              {/* Sliding Text Overlay */}
              <div
                className={`absolute inset-x-0 bottom-0 h-full bg-[#0D71C9] bg-opacity-90 text-white p-4 flex flex-col justify-center items-center text-center transform transition-transform duration-500 ease-in-out ${
                  activePost === post.id ? "translate-y-0" : "translate-y-full"
                }`}
              >
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
