import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { blogPosts } from '@/lib/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/menu`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/reservations`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/souvlaki`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/about-us`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly' as const, priority: 0.7 },
  ].map((route) => ({ ...route, lastModified: now }));

  // Derived from the post data itself, so a new post is never left out of the
  // sitemap the way two of the local-SEO comparison posts previously were.
  const postRoutes: MetadataRoute.Sitemap = Object.entries(blogPosts).map(
    ([slug, post]) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })
  );

  return [...staticRoutes, ...postRoutes];
}
