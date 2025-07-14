import { Metadata } from 'next';
import MenuClient from '@/components/menu/MenuClient';
import menuData from '@/data/menu.json';

// Generate dynamic menu descriptions for SEO
function generateMenuDescription() {
  const popularItems = [
    'authentic souvlaki',
    'fresh Greek salads', 
    'traditional spanakopita',
    'homemade tzatziki',
    'Mediterranean dips',
    'grilled meats',
    'vegetarian options'
  ];
  
  return `Discover authentic Greek cuisine at The Souvlucky Country in Parramatta. Our menu features ${popularItems.join(', ')} and more traditional dishes crafted with the freshest ingredients. View our complete food menu, drinks, and desserts online.`;
}

// Generate structured data for search engines
function generateMenuStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://thesouvluckycountry.com.au';
  
  // Extract sample menu items for structured data
  const sampleFoodItems = [
    ...menuData.food.dips.slice(0, 2),
    ...menuData.food.starters.slice(0, 2),
    ...menuData.food.mains.slice(0, 3)
  ].map(item => ({
    "@type": "MenuItem",
    "name": item.name,
    "description": item.description,
    "offers": {
      "@type": "Offer",
      "price": item.price || ((item as any).variations ? (item as any).variations[0]?.price : "0"),
      "priceCurrency": "AUD"
    }
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "The Souvlucky Country",
    "description": "Authentic Greek restaurant in Parramatta, NSW serving traditional Mediterranean cuisine",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Parramatta",
      "addressLocality": "Parramatta",
      "addressRegion": "NSW",
      "addressCountry": "AU"
    },
    "servesCuisine": ["Greek", "Mediterranean"],
    "hasMenu": {
      "@type": "Menu",
      "name": "The Souvlucky Country Menu",
      "description": "Authentic Greek cuisine featuring souvlaki, salads, traditional dishes and Mediterranean specialties",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Food Menu",
          "description": "Authentic Greek dishes including dips, starters, mains, and traditional specialties",
          "hasMenuItem": sampleFoodItems
        },
        {
          "@type": "MenuSection", 
          "name": "Drinks",
          "description": "Greek wines, spirits, and traditional beverages"
        },
        {
          "@type": "MenuSection",
          "name": "Desserts", 
          "description": "Traditional Greek desserts and sweet treats"
        }
      ]
    },
    "url": `${baseUrl}/menu`
  };
}

export const metadata: Metadata = {
  title: 'Menu - The Souvlucky Country | Authentic Greek Restaurant Parramatta',
  description: generateMenuDescription(),
  keywords: [
    'Greek restaurant menu',
    'Parramatta Greek food',
    'souvlaki menu',
    'Mediterranean cuisine',
    'Greek dips',
    'traditional Greek dishes',
    'authentic Greek restaurant',
    'spanakopita',
    'tzatziki',
    'Greek salads',
    'vegetarian Greek food',
    'Parramatta dining'
  ].join(', '),
  
  // Open Graph for social sharing
  openGraph: {
    title: 'Menu - The Souvlucky Country | Authentic Greek Restaurant',
    description: generateMenuDescription(),
    url: '/menu',
    siteName: 'The Souvlucky Country',
    images: [
      {
        url: '/og-menu.jpg',
        width: 1200,
        height: 630,
        alt: 'The Souvlucky Country Greek Restaurant Menu',
      }
    ],
    locale: 'en_AU',
    type: 'website',
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Menu - The Souvlucky Country | Authentic Greek Restaurant',
    description: generateMenuDescription(),
    images: ['/og-menu.jpg'],
    creator: '@thesouvluckycountry',
  },
  
  // Additional SEO enhancements
  alternates: {
    canonical: '/menu',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Category for better classification
  category: 'restaurant',
  
  other: {
    'restaurant:section': 'menu',
    'business:contact_data:locality': 'Parramatta',
    'business:contact_data:region': 'NSW',
    'business:contact_data:country_name': 'Australia',
  }
};

export default function MenuPage() {
  const structuredData = generateMenuStructuredData();
  
  return (
    <>
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <MenuClient menuData={menuData} />
    </>
  );
}
