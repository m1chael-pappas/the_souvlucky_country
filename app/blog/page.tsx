import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import {
  Badge,
  Card,
  Container,
  Group,
  Stack,
  Text,
} from '@mantine/core';

// Enable static generation for better performance
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog - The Souvlucky Country | Greek Food Stories & Tips',
  description: 'Discover the stories behind our authentic Greek dishes, cooking tips, and Greek culture at The Souvlucky Country restaurant in Parramatta.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog - The Souvlucky Country',
    description: 'Discover the stories behind our authentic Greek dishes, cooking tips, and Greek culture.',
    url: '/blog',
    type: 'website',
  },
}

// Mock blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    slug: 'greek-festival-parramatta-guide',
    title: "Let's Go Greek Festival Parramatta: A Local Restaurateur's Guide to the Day",
    excerpt: 'Tens of thousands of people, a kilometre from our door. Where to park, what to queue for, what most first-timers skip, and where to sit down afterwards.',
    category: 'Local Guide',
    date: '2026-08-06',
    readTime: '7 min read',
    featured: false,
    image: '/instagram_03.jpg',
    imageAlt: 'Greek festival food spread with traditional dishes'
  },
  {
    slug: 'eat-before-eels-game-commbank-stadium',
    title: 'Where to Eat Before an Eels Game: A Church St Guide to CommBank Stadium',
    excerpt: 'The real question is not where the food is, it is whether you will make kickoff. Timing, what to order on a deadline, and the walk to the ground.',
    category: 'Local Guide',
    date: '2026-08-06',
    readTime: '5 min read',
    featured: false,
    image: '/popylar_01.png',
    imageAlt: 'Greek gyros pita, a fast meal before a game'
  },
  {
    slug: 'pre-theatre-dinner-riverside-parramatta',
    title: 'Pre-Theatre Dinner Near Riverside Theatres: Eat Well, Make Curtain-Up',
    excerpt: 'Riverside says arrive an hour early. That hour is the problem. How to eat properly before a show without watching the clock.',
    category: 'Local Guide',
    date: '2026-08-06',
    readTime: '5 min read',
    featured: false,
    image: '/Rectangle 36.png',
    imageAlt: 'Grilled Greek skewers plated for an early dinner'
  },
  {
    slug: 'vegetarian-greek-food-parramatta',
    title: 'Vegetarian at a Greek Restaurant: A Complete Parramatta Ordering Guide',
    excerpt: 'No, you will not be eating chips and a salad. Exactly what to order if you do not eat meat, plus the one thing vegans need to watch for.',
    category: 'Food Guide',
    date: '2026-08-06',
    readTime: '7 min read',
    featured: false,
    image: '/instagram_02.jpg',
    imageAlt: 'Fresh Mediterranean vegetables, herbs and olive oil'
  },
  {
    slug: 'greek-food-for-groups-what-to-order',
    title: 'Greek Food for Groups: What to Order for 6, 10 or 20 People',
    excerpt: 'Order most of the food for the middle of the table, not for individuals. A practical ordering guide by group size.',
    category: 'Group Dining',
    date: '2026-08-06',
    readTime: '6 min read',
    featured: false,
    image: '/Rectangle 40.png',
    imageAlt: 'Large Greek sharing platter with mixed grilled meats and sides'
  },
  {
    slug: 'birthday-dinner-parramatta-greek',
    title: 'Birthday Dinner in Parramatta: Why a Greek Table Beats a Function Room',
    excerpt: 'No room hire, no minimum spend, and food built to be shared. The case for a long table over a private function space.',
    category: 'Occasions',
    date: '2026-08-06',
    readTime: '5 min read',
    featured: false,
    image: '/Rectangle 37.png',
    imageAlt: 'Greek dining spread laid out for a celebration'
  },
  {
    slug: 'christmas-party-venue-parramatta',
    title: 'Christmas Party Venues in Parramatta: How to Book Before December Fills Up',
    excerpt: 'The good December tables in Parramatta are gone by October. How a Greek table works for a work lunch, what to order for a group, and what to sort out before you call.',
    category: 'Group Dining',
    date: '2026-08-06',
    readTime: '6 min read',
    featured: true,
    image: '/popular_02.png',
    imageAlt: 'A large shared Greek platter of grilled meats, dips and pita for a group table'
  },
  {
    slug: 'fathers-day-lunch-parramatta',
    title: "Father's Day Lunch in Parramatta: A Greek Table for Dad",
    excerpt: "Father's Day falls on Sunday 6 September. A straightforward case for lamb cutlets, a shared grill, and a long table in Parramatta.",
    category: 'Occasions',
    date: '2026-08-06',
    readTime: '4 min read',
    featured: true,
    image: '/popular_03.png',
    imageAlt: 'Grilled Greek lamb and souvlaki plate served with pita, salad and tzatziki'
  },
  {
    slug: 'best-greek-restaurant-western-sydney-parramatta',
    title: 'Best Greek Restaurant in Western Sydney: What to Look For in 2025',
    excerpt: 'Searching for authentic Greek food in Parramatta or Western Sydney? Here\'s how to find the best Greek restaurant and what sets The Souvlucky Country apart.',
    category: 'Local Guide',
    date: '2025-01-02',
    readTime: '8 min read',
    featured: true,
    image: '/instagram_04.jpg',
    imageAlt: 'Best Greek restaurant in Western Sydney - The Souvlucky Country'
  },
  {
    slug: 'souvlaki-vs-gyros-vs-kebab',
    title: 'Souvlaki vs Gyros vs Kebab: What\'s the Difference? A Complete Guide',
    excerpt: 'Confused about the difference between souvlaki, gyros, and kebab? Learn how these beloved Mediterranean dishes differ in origin, preparation, and taste.',
    category: 'Food Guide',
    date: '2025-01-03',
    readTime: '10 min read',
    featured: true,
    image: '/Rectangle 39.png',
    imageAlt: 'Greek souvlaki and gyros comparison'
  },
  {
    slug: 'story-behind-signature-tzatziki',
    title: 'The Story Behind Our Signature Tzatziki Recipe',
    excerpt: 'Discover the family secrets and traditional techniques that make our tzatziki the talk of Parramatta.',
    category: 'Recipes',
    date: '2025-01-15',
    readTime: '5 min read',
    featured: true,
    image: '/about_01.png',
    imageAlt: 'Fresh Greek ingredients for tzatziki'
  },
  {
    slug: 'souvlaki-traditional-vs-modern',
    title: 'What Makes Our Souvlaki Different: Traditional vs Modern Greek Cooking',
    excerpt: 'Learn about the authentic methods we use to create the perfect souvlaki that honors Greek traditions.',
    category: 'Culture',
    date: '2024-01-10',
    readTime: '7 min read',
    featured: true,
    image: '/Rectangle 39.png',
    imageAlt: 'Traditional Greek souvlaki'
  },
  {
    slug: 'greek-meat-dishes-guide',
    title: 'From Gyros to Paidakia: A Complete Guide to Greek Meat Dishes',
    excerpt: 'Explore the rich world of Greek meat dishes and understand what makes each one special.',
    category: 'Menu Guide',
    date: '2024-01-05',
    readTime: '8 min read',
    featured: false,
    image: '/instagram_04.jpg',
    imageAlt: 'Assorted Greek meat dishes'
  }
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="bg-white pt-40 pb-16">
      <Container size="lg">
      <Stack gap="xl">
        <div>
          <h1 className="text-5xl lg:text-6xl text-aegean mb-4 leading-[1.1]">
            The Souvlucky Stories
          </h1>
          <p className="text-xl text-story max-w-2xl">
            Recipes, traditions, and the thinking behind the food we cook in
            Parramatta.
          </p>
        </div>

        {featuredPosts.length > 0 && (
          <section>
            <h2 className="text-4xl text-aegean mb-4">
              Featured Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card 
                  key={post.slug} 
                  shadow="lg" 
                  padding={0}
                  component={Link} 
                  href={`/blog/${post.slug}`} 
                  className="shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden rounded-2xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge color="blue" variant="filled" size="md" className="bg-aegean/95 backdrop-blur-sm">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <Group justify="space-between" mb="sm">
                      <Text size="sm" c="dimmed">
                        {new Date(post.date).toLocaleDateString('en-AU', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </Text>
                      <Text size="sm" c="dimmed">
                        {post.readTime}
                      </Text>
                    </Group>
                    
                    <h3 className="text-2xl text-midnight leading-tight mb-2">
                      {post.title}
                    </h3>
                    
                    <Text size="sm" c="dimmed" lineClamp={3} className="leading-relaxed">
                      {post.excerpt}
                    </Text>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="text-4xl text-aegean mb-4">
            All Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card 
                key={post.slug} 
                shadow="md" 
                padding={0}
                component={Link} 
                href={`/blog/${post.slug}`} 
                className="shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden rounded-2xl"
              >
                <div className="relative h-40">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge color="blue" variant="filled" size="sm" className="bg-aegean/95 backdrop-blur-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-5">
                  <Group justify="space-between" mb="xs">
                    <Text size="xs" c="dimmed">
                      {new Date(post.date).toLocaleDateString('en-AU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {post.readTime}
                    </Text>
                  </Group>
                  
                  <h3 className="text-xl text-midnight leading-tight mb-2">
                    {post.title}
                  </h3>
                  
                  <Text size="sm" c="dimmed" lineClamp={2} className="leading-relaxed">
                    {post.excerpt}
                  </Text>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </Stack>
      </Container>
    </div>
  )
}