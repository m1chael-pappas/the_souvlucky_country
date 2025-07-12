import type { Metadata } from 'next';

// Enable ISR - revalidate every hour for social media content
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Home - Authentic Greek Restaurant in Parramatta",
  description:
    "Welcome to The Souvlucky Country - Experience the authentic taste of Greece in Parramatta. Family-owned restaurant serving traditional souvlaki, gyros, and Mediterranean dishes since 2015. Book your reservation today!",
  keywords: [
    "Greek restaurant Parramatta",
    "souvlaki near me",
    "gyros Sydney",
    "best Greek food Sydney",
    "best gyros Parramatta",
    "Mediterranean food Parramatta",
    "family-owned Greek restaurant",
    "kebabs Parramatta",
    "authentic Greek food Sydney",
    "Mediterranean restaurant",
    "Greek family restaurant",
    "traditional Greek cuisine",
    "Parramatta dining",
    "Greek takeaway",
    "restaurant reservations",
  ],
  openGraph: {
    title: "The Souvlucky Country - Authentic Greek Restaurant in Parramatta",
    description:
      "Experience the authentic taste of Greece in Parramatta. Traditional family recipes, fresh ingredients, and warm Greek hospitality await you.",
    images: [
      {
        url: "/main_hero.png",
        width: 1200,
        height: 630,
        alt: "Greek food at The Souvlucky Country",
      },
    ],
  },
  alternates: {
    canonical: "/homepage",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hidden content for SEO - search engines can read this */}
      <div className="sr-only">
        <h1>
          The Souvlucky Country - Authentic Greek Restaurant in Parramatta
        </h1>
        <p>
          Welcome to The Souvlucky Country, your premier destination for
          authentic Greek cuisine in Parramatta. Since 2015, our family-owned
          restaurant has been serving traditional Mediterranean dishes made with
          the freshest ingredients and time-honored recipes passed down through
          generations.
        </p>
        <p>
          Our specialties include handcrafted souvlaki, traditional gyros, fresh
          Greek salads, and homemade tzatziki. Located in the heart of
          Parramatta, we offer both dine-in and takeaway options with
          reservation availability.
        </p>
      </div>
    </>
  );
}
