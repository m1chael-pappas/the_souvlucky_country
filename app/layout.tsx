import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "The Souvlucky Country - Authentic Greek Restaurant in Parramatta",
    template: "%s | The Souvlucky Country",
  },
  description:
    "Experience authentic Greek cuisine in Parramatta. Family-owned restaurant serving traditional souvlaki, gyros, and Mediterranean dishes since 2015. Book your table today!",
  keywords: [
    "Greek restaurant Parramatta",
    "souvlaki Sydney",
    "authentic Greek food",
    "Mediterranean cuisine",
    "Greek restaurant near me",
    "family restaurant Parramatta",
    "traditional Greek dishes",
    "gyros Sydney",
    "Greek takeaway",
    "restaurant reservations Parramatta",
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
  name: "The Souvlucky Country",
  description:
    "Authentic Greek restaurant serving traditional Mediterranean cuisine in Parramatta",
  image: "https://thesouvluckycountry.com.au/main_hero.png",
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
  servesCuisine: ["Greek", "Mediterranean"],
  priceRange: "$$",
  openingHours: ["Mo-Su 12:00-22:00"],
  acceptsReservations: true,
  hasMenu: "https://thesouvluckycountry.com.au/our-menu/",
  foundingDate: "2015",
  founder: {
    "@type": "Organization",
    name: "Greek Family Restaurant",
  },
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
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
