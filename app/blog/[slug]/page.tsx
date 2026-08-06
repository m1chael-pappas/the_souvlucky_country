import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PillButton from '@/components/ui/PillButton'
import { blogPosts } from '@/lib/blog-posts'

// Enable static generation with revalidation
export const revalidate = 3600;


interface BlogPostProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Post Not Found - The Souvlucky Country',
    }
  }

  return {
    title: `${post.title} - The Souvlucky Country`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${slug}`,
      type: 'article',
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white pt-40 pb-16 px-6">
      <article className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-story">
          <Link
            href="/"
            className="text-aegean underline-offset-4 hover:underline"
          >
            Home
          </Link>
          <span className="mx-2 text-story/60">/</span>
          <Link
            href="/blog"
            className="text-aegean underline-offset-4 hover:underline"
          >
            Blog
          </Link>
          <span className="mx-2 text-story/60">/</span>
          <span aria-current="page">{post.title}</span>
        </nav>

        <header className="mb-12">
          <p className="text-sm tracking-wide uppercase text-aegean mb-4">
            {post.category}
          </p>

          <h1 className="text-4xl lg:text-6xl text-midnight leading-[1.1] mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-story leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>

          <p className="text-sm text-story mt-6">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-AU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </p>
        </header>

        {/* Styled by .article-prose in globals.css, so the article type lives
            in the design system rather than an injected <style> tag */}
        <div
          className="article-prose mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <aside className="bg-sea-mist rounded-2xl p-8 text-center mb-10">
          <h2 className="text-3xl lg:text-4xl text-aegean mb-4">
            Come and taste it for yourself
          </h2>
          <p className="text-story mb-8 max-w-xl mx-auto">
            The dishes in this story are on the table at The Souvlucky Country,
            316 Church St, Parramatta.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <PillButton href="/reservations">Book a Table</PillButton>
            <PillButton href="/menu" variant="outline">
              See the Menu
            </PillButton>
          </div>
        </aside>

        <div className="text-center">
          <Link
            href="/blog"
            className="text-aegean font-medium underline-offset-4 hover:underline"
          >
            Back to all stories
          </Link>
        </div>
      </article>
    </div>
  )
}