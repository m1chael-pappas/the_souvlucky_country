"use client";

import PillButton from "@/components/ui/PillButton";
import { Container } from "@mantine/core";

export default function StorySection() {
  return (
    <div
      className="bg-white min-h-[560px] lg:min-h-[784px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/souvlucky3.png)" }}
    >
      <div className="w-full">
        <Container
          size="md"
          className="text-center bg-white/90 p-10 pt-12 rounded-2xl shadow-panel"
        >
          <h2 className="text-5xl lg:text-6xl text-aegean mb-8">
            Our Story
          </h2>

          <p className="text-lg text-story leading-relaxed mb-10 text-center px-0 md:px-[7.5rem]">
            A family-run Greek eatery in Parramatta. We serve authentic flavours
            from the islands of Greece, made with heart and heritage. Join us for
            fresh souvlaki, warm hospitality, and a true taste of tradition.
          </p>

          <PillButton href="/about-us">Discover More</PillButton>
        </Container>
      </div>
    </div>
  );
}
