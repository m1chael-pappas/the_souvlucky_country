import { Container } from '@mantine/core';

export default function Story() {
  return (
    <div
      className="bg-white min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url(/souvlucky3.png)",
      }}
    >
      <Container
        size="md"
        className="text-center bg-white bg-opacity-80 p-8 pt-10 rounded-lg shadow-lg"
      >
        <h2 className="text-4xl font-bold text-[#0D71C9] mb-8">Our Story</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          In 2015, we opened our doors in Bondi Junction with a dream close to
          our hearts. As a Greek family carrying generations of culinary wisdom
          from our homeland&#39;s sun-soaked islands, we wanted to share the
          authentic flavors that had been lovingly passed down through our
          family for generations. What began as our humble venture was fueled by
          our passionate desire to bring a taste of Greece to Australia.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          For four years, we filled the air of Bondi Junction with the aromatic
          scents of oregano, lemon, and grilled meats, creating our little slice
          of Greece that locals and visitors came to love. Every souvlaki we
          crafted carried the same care and tradition that our grandparents used
          back in the old country—every meal was our celebration of Greek
          heritage.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          In 2019, we made the heartfelt decision to bring our authentic Greek
          experience to Parramatta. Here, in the cultural melting pot of Western
          Sydney, we found our true home. This move wasn&apos;t just about
          changing locations—it was about expanding our family to include the
          diverse, vibrant community of Parramatta, and we couldn&apos;t be
          happier with the warm welcome we received.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Today, we continue to honor our Greek roots while embracing our
          Australian home. Each dish we serve tells the story of our
          journey—from the olive groves of Greece to the multicultural streets
          of Parramatta. We aren&apos;t just serving food; we&apos;re sharing
          our family&apos;s legacy, one perfectly seasoned souvlaki at a time.
        </p>

        <p className="text-gray-700 leading-relaxed">
          When you dine with us, you&apos;re not just a customer—you become part
          of our extended family. We invite you to experience the warmth,
          tradition, and authentic flavors that have defined Greek hospitality
          for centuries, right here in the heart of Parramatta.
        </p>
      </Container>
    </div>
  );
}
