import React from "react";
import Image from "next/image";

const ContentWithImage = () => {
  return (
    <div className="flex items-center justify-center container mx-auto px-6 py-6 w-full">
      <div
        className="flex flex-col items-center justify-center gap-8 px-16 self-stretch"
        style={{ flexBasis: "500px" }}
      >
        <h1
          className="text-center text-blue-500 text-5xl mb-4"
          style={{
            fontFamily: "Sedgwick Ave",
            fontWeight: 400,
            fontStyle: "normal",
          }}
        >
          Made with love, <br /> Authentic Greek Food
        </h1>
        <p className="text-center text-black text-2xl font-light leading-5">
          Greek cuisine has a variety of flavours, tastes and colours. Delicious
          plates, best ingredients that remind us the energy and the passion of
          Athens or the summer breeze of the Greek islands.
        </p>
        <button className="mt-4 px-8 py-2 bg-blue-500 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300">
          View Menu
        </button>
      </div>
      <div className="relative flex-shrink-0 w-[500px] h-[500px]">
        <Image
          className="object-none object-left-bottom max-w-xs max-h-fit"
          src="/souvlucky1.jpeg"
          alt="Authentic Greek food preparation at SouvLucky Country - handmade with traditional recipes"
          width={500}
          height={500}
          sizes="500px"
          quality={80}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+ZaBjVurhTJLEuZpWOSSxJJJJJJJJH//Z"
        />
      </div>
    </div>
  );
};

export default ContentWithImage;
