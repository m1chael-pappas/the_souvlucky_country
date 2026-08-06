"use client";

import PillButton from "@/components/ui/PillButton";
import { motion } from "framer-motion";
import { Container } from "@mantine/core";
import PaintHeading from "@/components/ui/PaintHeading";

export default function StorySection() {
  return (
    <div
      className="bg-white h-196 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/souvlucky3.png)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <Container
          size="md"
          className="text-center bg-white/90 p-10 pt-12 rounded-2xl shadow-panel"
        >
          <PaintHeading className="text-5xl lg:text-6xl text-[#0D71C9] mb-8">
            Our Story
          </PaintHeading>

          <p className="text-lg text-[#4B5563] leading-relaxed mb-10 text-center px-0 md:px-[7.5rem]">
            A family-run Greek eatery in Parramatta. We serve authentic flavours
            from the islands of Greece, made with heart and heritage. Join us for
            fresh souvlaki, warm hospitality, and a true taste of tradition.
          </p>

          <PillButton href="/about-us">Discover More</PillButton>
        </Container>
      </motion.div>
    </div>
  );
}
