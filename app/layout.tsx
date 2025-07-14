import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ImagePreloader from '@/components/ImagePreloader';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "The Souvlucky Country - Authentic Greek Restaurant in Parramatta",
    template: "%s | The Souvlucky Country",
  },
  description:
    "Experience authentic Greek cuisine in Parramatta. Family-owned restaurant serving traditional souvlaki, gyros, and Mediterranean dishes since 2015. Book your table today!",
  keywords: [
    "best Greek restaurant Sydney",
    "authentic Greek food Parramatta",
    "souvlaki Sydney",
    "Greek restaurant near me",
    "traditional Greek dishes Sydney",
    "Mediterranean cuisine Parramatta",
    "best Greek food Western Sydney",
    "gyros Sydney",
    "Greek dips Sydney",
    "spanakopita Sydney",
    "tzatziki Sydney",
    "Greek family restaurant",
    "authentic souvlaki near me",
    "Greek takeaway Parramatta",
    "best restaurant Parramatta",
    "traditional Mediterranean food",
    "Greek restaurant Church Street",
    "Parramatta dining",
    "Sydney Greek cuisine",
    "fresh Greek food",
  ],
  authors: [{ name: "The Souvlucky Country" }],
  creator: "The Souvlucky Country",
  publisher: "The Souvlucky Country",
  metadataBase: new URL("https://thesouvluckycountry.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://thesouvluckycountry.com.au",
    siteName: "The Souvlucky Country",
    title: "The Souvlucky Country - Authentic Greek Restaurant in Parramatta",
    description:
      "Experience authentic Greek cuisine in Parramatta. Family-owned restaurant serving traditional souvlaki, gyros, and Mediterranean dishes since 2015.",
    images: [
      {
        url: "/main_hero.png",
        width: 1200,
        height: 630,
        alt: "The Souvlucky Country - Greek Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Souvlucky Country - Authentic Greek Restaurant in Parramatta",
    description:
      "Experience authentic Greek cuisine in Parramatta. Family-owned restaurant serving traditional souvlaki, gyros, and Mediterranean dishes.",
    images: ["/main_hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ebJu309v-K3aGXeHV2g9XtUsNDCYuOKjFEDN_N_f8fA",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://thesouvluckycountry.com.au/#restaurant",
  name: "The Souvlucky Country",
  alternateName: "Souvlucky Country Greek Restaurant",
  description:
    "Authentic Greek restaurant serving traditional Mediterranean cuisine in Parramatta, Sydney. Specializing in fresh souvlaki, homemade dips, and traditional Greek dishes.",
  image: [
    "https://thesouvluckycountry.com.au/main_hero.png",
    "https://thesouvluckycountry.com.au/popular_02.png",
    "https://thesouvluckycountry.com.au/about_01.png",
  ],
  logo: "https://thesouvluckycountry.com.au/Logo1.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "316 Church St",
    addressLocality: "Parramatta",
    addressRegion: "NSW",
    postalCode: "2150",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -33.811808045110325,
    longitude: 151.004254975028,
  },
  telephone: "0298914174",
  url: "https://thesouvluckycountry.com.au",
  email: "souvlucky62@gmail.com",
  servesCuisine: ["Greek", "Mediterranean", "European"],
  priceRange: "$$",
  paymentAccepted: ["Cash", "Credit Card", "Debit Card"],
  currenciesAccepted: "AUD",
  openingHours: ["Mo-Su 12:00-22:00"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "12:00",
      closes: "22:00",
    },
  ],
  acceptsReservations: true,
  hasMenu: "https://thesouvluckycountry.com.au/menu",
  menu: "https://thesouvluckycountry.com.au/menu",
  foundingDate: "2015",
  founder: {
    "@type": "Organization",
    name: "Greek Family Restaurant",
  },
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification",
      name: "Takeaway Available",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Dine-in Available",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Family Friendly",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification",
      name: "Vegetarian Options",
      value: true,
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Restaurant Reservations",
        description: "Book a table at our authentic Greek restaurant",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Takeaway Service",
        description: "Fresh Greek food for takeaway",
      },
    },
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Parramatta",
      containedInPlace: {
        "@type": "State",
        name: "New South Wales",
      },
    },
    {
      "@type": "City",
      name: "Sydney",
      containedInPlace: {
        "@type": "State",
        name: "New South Wales",
      },
    },
  ],
  sameAs: [
    "https://www.facebook.com/SouvLuckyCountryParra/",
    "https://www.instagram.com/the_souvlucky_country/?hl=en",
    "https://www.tripadvisor.com.au/Restaurant_Review-g1234132-d20151018-Reviews-The_Souvlucky_Country-Parramatta_Greater_Sydney_New_South_Wales.html",
    "https://www.doordash.com/en-AU/store/souvlucky-country-parramatta-24317144/17387354/",
    "https://www.ubereats.com/au/store/the-souvlucky-country-parramatta/CawTnbD_QOORDymCMgztBA?srsltid=AfmBOopUu941Yyd_9w09WBGLql-MY1PiexHhbjOknuSXK7kDMecb0qT7",
  ],
  knowsAbout: [
    "Greek Cuisine",
    "Mediterranean Food",
    "Souvlaki",
    "Traditional Greek Dishes",
    "Fresh Ingredients",
    "Authentic Recipes",
  ],
  speciality: [
    "Authentic Greek Souvlaki",
    "Homemade Greek Dips",
    "Traditional Spanakopita",
    "Fresh Greek Salads",
    "Mediterranean Mains",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />

        {/* Google Verification Meta Tag */}
        <meta
          name="google-site-verification"
          content="ebJu309v-K3aGXeHV2g9XtUsNDCYuOKjFEDN_N_f8fA"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0D71C9" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://booking-widget.quandoo.com" />
        <link rel="preconnect" href="https://www.quandoo.com.au" />
        <link rel="preconnect" href="https://assets-www.prod.quandoo.com" />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <ImagePreloader />
          <Header />
          <main id="main-content">
            {children} <Analytics /> <SpeedInsights />
          </main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
