import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@mantine/core';
import { ArrowLeft } from 'lucide-react';
import menuData from '@/data/menu.json';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Best Souvlaki in Sydney - The Souvlucky Country Parramatta',
  description: 'Experience the best authentic Greek souvlaki in Sydney at The Souvlucky Country. Fresh grilled meats, homemade pita, and traditional recipes passed down through generations. Located in Parramatta.',
  keywords: [
    'best souvlaki Sydney',
    'authentic Greek souvlaki', 
    'souvlaki near me',
    'Greek street food Sydney',
    'traditional souvlaki Parramatta',
    'fresh grilled souvlaki',
    'homemade pita Sydney',
    'Greek restaurant souvlaki',
    'best Greek food Sydney',
    'authentic Mediterranean',
  ].join(', '),
  
  openGraph: {
    title: 'Best Souvlaki in Sydney - The Souvlucky Country',
    description: 'Experience authentic Greek souvlaki made with fresh ingredients and traditional recipes in Parramatta, Sydney.',
    url: '/souvlaki',
    images: [
      {
        url: '/popular_02.png',
        width: 1200,
        height: 630,
        alt: 'Authentic Greek Souvlaki at The Souvlucky Country',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Best Souvlaki in Sydney - The Souvlucky Country',
    description: 'Authentic Greek souvlaki with fresh ingredients and traditional recipes.',
    images: ['/popular_02.png'],
  },
  
  alternates: {
    canonical: '/souvlaki',
  },
};

function generateSouvlakiStructuredData() {
  const baseUrl = SITE_URL;
  
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Authentic Greek Souvlaki",
    "description": "Traditional Greek souvlaki made with fresh grilled meat, homemade pita, and authentic Mediterranean ingredients",
    "image": `${baseUrl}/popular_02.png`,
    "author": {
      "@type": "Organization",
      "name": "The Souvlucky Country"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "The Souvlucky Country",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/Logo1.png`
      }
    },
    "recipeCategory": "Greek Cuisine",
    "recipeCuisine": "Greek",
    "keywords": ["souvlaki", "Greek food", "grilled meat", "Mediterranean", "street food"],
    "recipeIngredient": [
      "Fresh grilled meat",
      "Homemade pita bread", 
      "Traditional Greek herbs",
      "Fresh vegetables",
      "Tzatziki sauce"
    ],
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "350-450 per serving"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "16.00",
      "priceCurrency": "AUD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    }
  };
}

export default function SouvlakiPage() {
  const structuredData = generateSouvlakiStructuredData();
  
  // Find souvlaki items from menu data
  const souvlakiItems = [
    ...menuData.food.pitas.filter(item => 
      item.name.toLowerCase().includes('souvlaki') || 
      item.name.toLowerCase().includes('pork') ||
      item.name.toLowerCase().includes('chicken') ||
      item.name.toLowerCase().includes('lamb')
    ),
    ...menuData.food.mains.filter(item =>
      item.name.toLowerCase().includes('souvlaki') ||
      item.name.toLowerCase().includes('grill')
    )
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <div className="min-h-screen bg-blue-50 pt-32 pb-16">
        <Container size="xl">
          <div className="mb-8">
            <Link 
              href="/menu" 
              className="inline-flex items-center text-[#0D71C9] hover:text-[#03233C] transition-colors"
              aria-label="Back to full menu"
            >
              <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
              Back to Menu
            </Link>
          </div>

          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#0D71C9] mb-6">
              Authentic Greek Souvlaki in Sydney
            </h1>
            <p className="text-gray-700 text-xl max-w-4xl mx-auto leading-relaxed">
              Experience the best souvlaki in Sydney at The Souvlucky Country. Our traditional Greek souvlaki 
              is made with fresh, premium ingredients and authentic recipes passed down through generations. 
              Located in the heart of Parramatta, we bring you the true taste of Greece.
            </p>
          </header>

          <section className="mb-12" aria-labelledby="why-our-souvlaki">
            <h2 id="why-our-souvlaki" className="text-3xl font-bold text-[#0D71C9] mb-8 text-center">
              Why Our Souvlaki is the Best in Sydney
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#0D71C9] mb-4">Fresh Ingredients Daily</h3>
                <p className="text-gray-600">
                  We source the freshest meats and vegetables daily, ensuring every souvlaki 
                  is made with premium quality ingredients.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#0D71C9] mb-4">Traditional Recipes</h3>
                <p className="text-gray-600">
                  Our souvlaki recipes have been perfected over generations, bringing you 
                  the authentic taste of traditional Greek street food.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#0D71C9] mb-4">Homemade Pita</h3>
                <p className="text-gray-600">
                  Every souvlaki is wrapped in our freshly made pita bread, baked daily 
                  in our kitchen for the perfect texture and flavor.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12" aria-labelledby="our-souvlaki-menu">
            <h2 id="our-souvlaki-menu" className="text-3xl font-bold text-[#0D71C9] mb-8 text-center">
              Our Souvlaki Selection
            </h2>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {souvlakiItems.map((item, index) => (
                  <article key={index} className="py-4 border-b border-blue-100 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-800 mb-2">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        {item.variations && (
                          <div className="space-y-1">
                            {item.variations.map((variation, vIndex) => (
                              <div key={vIndex} className="flex justify-between items-center text-sm">
                                <span className="text-gray-700 ml-4">• {variation.name}</span>
                                <span className="text-lg font-medium text-[#0D71C9]">${variation.price}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      {item.price && !item.variations && (
                        <span className="text-lg font-medium text-[#0D71C9] ml-4">${item.price}</span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="text-center bg-white rounded-lg p-8 shadow-sm" aria-labelledby="visit-us">
            <h2 id="visit-us" className="text-3xl font-bold text-[#0D71C9] mb-6">
              Visit Us for the Best Souvlaki Experience
            </h2>
            <p className="text-gray-700 text-lg mb-8 max-w-3xl mx-auto">
              Located in Parramatta, we&apos;re easily accessible from anywhere in Sydney. 
              Come taste why locals consider us the best Greek restaurant for authentic souvlaki.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold text-[#0D71C9] mb-4">Location & Hours</h3>
                <address className="text-gray-600 not-italic">
                  316 Church St<br />
                  Parramatta, NSW 2150<br />
                  <strong>Open Daily:</strong> 12:00 PM - 10:00 PM
                </address>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0D71C9] mb-4">Contact</h3>
                <p className="text-gray-600">
                  <strong>Phone:</strong> (02) 9891 4174<br />
                  <strong>Reservations:</strong> Available<br />
                  <strong>Takeaway:</strong> Available
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                href="/reservations" 
                className="inline-block bg-[#0D71C9] text-white px-8 py-3 rounded-lg hover:bg-[#03233C] transition-colors font-medium"
              >
                Make a Reservation
              </Link>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
}