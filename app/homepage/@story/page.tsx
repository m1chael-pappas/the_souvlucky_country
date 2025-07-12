import Link from "next/link";

import { Container } from "@mantine/core";

export default function Story() {
  return (
    <div
      className="bg-white h-196 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url(/souvlucky3.png)",
      }}
    >
      <Container
        size="md"
        className="text-center bg-white bg-opacity-80 p-8 pt-10 rounded-lg shadow-lg"
      >
        <h2 className="text-4xl font-bold text-[#0D71C9] mb-8">Our Story</h2>

        <p className="text-gray-700 leading-relaxed mb-6 text-center px-0 md:px-[7.5rem]">
          A family-run Greek eatery in Parramatta. We serve authentic flavours
          from the islands of Greece, made with heart and heritage. Join us for
          fresh souvlaki, warm hospitality, and a true taste of tradition.
        </p>

        <Link href="/about-us">
          <button className="bg-[#0D71C9] text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200">
            Discover More
          </button>
        </Link>
      </Container>
    </div>
  );
}
