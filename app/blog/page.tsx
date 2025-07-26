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
  Title,
} from '@mantine/core';

// Enable static generation for better performance
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog - The Souvlucky Country | Greek Food Stories & Tips',
  description: 'Discover the stories behind our authentic Greek dishes, cooking tips, and Greek culture at The Souvlucky Country restaurant in Parramatta.',
  openGraph: {
    title: 'Blog - The Souvlucky Country',
    description: 'Discover the stories behind our authentic Greek dishes, cooking tips, and Greek culture.',
    type: 'website',
  },
}

// Mock blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
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
    <Container size="lg" pt={128} pb="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} size="h1" mb="md">
            The Souvlucky Stories
          </Title>
          <Text size="lg" c="dimmed">
            Discover the stories, traditions, and secrets behind authentic Greek cuisine
          </Text>
        </div>

        {featuredPosts.length > 0 && (
          <section>
            <Title order={2} size="h2" mb="md" className="text-[#0D71C9]">
              Featured Stories
            </Title>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card 
                  key={post.slug} 
                  shadow="lg" 
                  padding={0}
                  component={Link} 
                  href={`/blog/${post.slug}`} 
                  className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge color="blue" variant="filled" size="md" className="bg-blue-600/90 backdrop-blur-sm">
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
                    
                    <Title order={3} size="h3" mb="sm" className="text-[#03233C] leading-tight">
                      {post.title}
                    </Title>
                    
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
          <Title order={2} size="h2" mb="md" className="text-[#0D71C9]">
            All Stories
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card 
                key={post.slug} 
                shadow="md" 
                padding={0}
                component={Link} 
                href={`/blog/${post.slug}`} 
                className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden"
              >
                <div className="relative h-40">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge color="blue" variant="filled" size="sm" className="bg-blue-600/90 backdrop-blur-sm">
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
                  
                  <Title order={3} size="h4" mb="sm" className="text-[#03233C] leading-tight">
                    {post.title}
                  </Title>
                  
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
  )
}