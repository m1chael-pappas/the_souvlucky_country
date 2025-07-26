import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Enable static generation with revalidation
export const revalidate = 3600;

// Blog posts data with full content
const blogPosts = {
  'story-behind-signature-tzatziki': {
    title: 'The Story Behind Our Signature Tzatziki Recipe',
    excerpt: 'Discover the family secrets and traditional techniques that make our tzatziki the talk of Parramatta.',
    category: 'Recipes',
    date: '2024-01-15',
    content: `
      <p>At The Souvlucky Country, our tzatziki represents generations of Greek culinary tradition. Every bowl we serve carries authentic Greek flavors, prepared using methods passed down through our family for decades.</p>

      <h2>The Foundation: Authentic Greek Yogurt</h2>
      <p>The secret to exceptional tzatziki begins with the yogurt. We use authentic Greek yogurt that has been strained to achieve that perfect thick, creamy consistency. This is not your average supermarket yogurt - we source ours from traditional Greek producers who understand the importance of authentic texture and tang.</p>

      <h2>The Perfect Cucumber Preparation</h2>
      <p>Many restaurants rush the cucumber preparation, but we know that patience is key. Our cucumbers are:</p>
      <ul>
        <li>Hand-selected for their crispness and flavor</li>
        <li>Grated fresh daily using traditional techniques</li>
        <li>Salted and drained for hours to remove excess moisture</li>
        <li>Squeezed by hand to ensure the perfect texture</li>
      </ul>

      <h2>The Garlic Magic</h2>
      <p>Garlic is the soul of great tzatziki. We use fresh Australian garlic, minced to the perfect consistency. The key is allowing the garlic to marry with the yogurt for just the right amount of time.</p>

      <h2>Our Family Secret Touch</h2>
      <p>What makes our tzatziki truly special is the addition of fresh dill and a splash of quality olive oil. These are carefully measured ingredients that transform good tzatziki into exceptional tzatziki.</p>

      <h2>Why Our Customers Keep Coming Back</h2>
      <p>Our tzatziki has become legendary in Parramatta because we never compromise on quality or authenticity. Every batch is made fresh daily, using the same traditional methods our family has perfected over generations.</p>

      <p>Next time you visit The Souvlucky Country, ask us about our tzatziki. We are always happy to share the story behind this beloved Greek classic and help you understand why authentic preparation makes all the difference.</p>
    `
  },
  'souvlaki-traditional-vs-modern': {
    title: 'What Makes Our Souvlaki Different: Traditional vs Modern Greek Cooking',
    excerpt: 'Learn about the authentic methods we use to create the perfect souvlaki that honors Greek traditions.',
    category: 'Culture', 
    date: '2024-01-10',
    content: `
      <p>Walk into any Greek restaurant today, and you will find souvlaki on the menu. But not all souvlaki is created equal. At The Souvlucky Country, we have made it our mission to serve souvlaki that honors traditional Greek methods while adapting to Australian tastes and ingredients.</p>

      <h2>The Traditional Greek Method</h2>
      <p>Traditional souvlaki has its roots in ancient Greece, where meat was skewered and cooked over open flames. The word souvlaki comes from the Greek word souvla, meaning skewer. In traditional Greek preparation:</p>
      <ul>
        <li>Meat is cut into small, uniform pieces</li>
        <li>Simple marinades focus on olive oil, lemon, and herbs</li>
        <li>Cooking happens over charcoal or wood flames</li>
        <li>Seasonings are minimal but high-quality</li>
      </ul>

      <h2>Modern Adaptations and Shortcuts</h2>
      <p>Many modern restaurants have adapted souvlaki preparation for speed and consistency, often losing authenticity in the process. Common modern shortcuts include:</p>
      <ul>
        <li>Using gas grills instead of charcoal</li>
        <li>Pre-marinated frozen meat</li>
        <li>Chemical tenderizers and artificial flavors</li>
        <li>Mass production techniques</li>
      </ul>

      <h2>Our Approach: Best of Both Worlds</h2>
      <p>At The Souvlucky Country, we combine traditional techniques with modern food safety and consistency standards:</p>

      <h3>Traditional Elements We Preserve:</h3>
      <ul>
        <li><strong>Fresh daily preparation:</strong> We cut and marinate our meat fresh every day</li>
        <li><strong>Authentic marinades:</strong> Our marinades use traditional Greek ingredients - olive oil, fresh lemon juice, oregano, and garlic</li>
        <li><strong>Proper skewering:</strong> Each piece is hand-skewered to ensure even cooking</li>
        <li><strong>Charcoal cooking:</strong> We use traditional charcoal grilling for that authentic smoky flavor</li>
      </ul>

      <h3>Modern Standards We Embrace:</h3>
      <ul>
        <li><strong>Food safety:</strong> All meat is stored and prepared to Australian food safety standards</li>
        <li><strong>Consistency:</strong> We have standardized our portions and cooking times</li>
        <li><strong>Quality sourcing:</strong> We work with local Australian suppliers for the freshest ingredients</li>
      </ul>

      <h2>The Meat Makes the Difference</h2>
      <p>Traditional souvlaki in Greece is typically made with pork, lamb, or chicken. We offer all three, but our preparation method sets us apart:</p>
      
      <p><strong>Pork Souvlaki:</strong> Cut from premium pork shoulder, marinated for 24 hours in our traditional blend</p>
      <p><strong>Lamb Souvlaki:</strong> Australian lamb leg, known for its tenderness and rich flavor</p>
      <p><strong>Chicken Souvlaki:</strong> Free-range chicken thigh, more flavorful and juicy than breast meat</p>

      <h2>The Cooking Process</h2>
      <p>Our souvlaki cooking process is a carefully orchestrated dance:</p>
      <ol>
        <li>Meat is brought to room temperature before cooking</li>
        <li>Skewers are placed over medium-high charcoal heat</li>
        <li>Each side is cooked for exactly the right amount of time</li>
        <li>A final brush of olive oil and lemon juice adds that authentic finish</li>
        <li>Served immediately while the meat is at its juiciest</li>
      </ol>

      <p>This commitment to authenticity is why our customers travel from across Sydney to experience our souvlaki. It is not just a meal - it is a connection to Greek culture and tradition, served fresh in the heart of Parramatta.</p>
    `
  },
  'greek-meat-dishes-guide': {
    title: 'From Gyros to Paidakia: A Complete Guide to Greek Meat Dishes',
    excerpt: 'Explore the rich world of Greek meat dishes and understand what makes each one special.',
    category: 'Menu Guide',
    date: '2024-01-05', 
    content: `
      <p>Greek cuisine offers some of the most flavorful and satisfying meat dishes in the world. At The Souvlucky Country, we are proud to serve authentic versions of these beloved classics. Let us explore the rich tradition behind each dish on our menu.</p>

      <h2>Gyros: The King of Greek Street Food</h2>
      <p>Gyros (pronounced "YEE-ros") is perhaps the most famous Greek meat dish worldwide. The name means "turn" in Greek, referring to the rotating spit on which the meat is cooked.</p>
      
      <h3>Our Gyros Process:</h3>
      <ul>
        <li>Layers of marinated meat are stacked on a vertical rotisserie</li>
        <li>The outer layer cooks and crisps while the inside stays juicy</li>
        <li>Meat is carved fresh throughout the day</li>
        <li>Available in pork, chicken, and lamb varieties</li>
      </ul>

      <p>What makes our gyros special is the 24-hour marination process and our traditional spice blend that includes oregano, thyme, and secret family spices.</p>

      <h2>Souvlaki: Ancient Greece on a Stick</h2>
      <p>As we discussed in our previous article, souvlaki represents one of the oldest forms of Greek cooking. These perfectly grilled meat skewers showcase the beauty of simplicity done right.</p>

      <p>Our souvlaki varieties include:</p>
      <ul>
        <li><strong>Pork Souvlaki:</strong> The traditional favorite, tender and flavorful</li>
        <li><strong>Chicken Souvlaki:</strong> Lean yet juicy, perfect for lighter appetites</li>
        <li><strong>Lamb Souvlaki:</strong> Rich and robust, a true Greek delicacy</li>
      </ul>

      <h2>Bifteki: Greece Answer to the Burger</h2>
      <p>Do not let the comparison to burgers fool you - Greek bifteki is in a league of its own. These handmade beef patties are:</p>
      <ul>
        <li>Made from premium Australian beef</li>
        <li>Seasoned with traditional Greek herbs and spices</li>
        <li>Often stuffed with cheese or herbs</li>
        <li>Grilled to perfection over charcoal</li>
      </ul>

      <p>Our bifteki is made fresh daily and represents the perfect comfort food - satisfying, flavorful, and authentically Greek.</p>

      <h2>Paidakia: The Crown Jewel</h2>
      <p>Paidakia (lamb chops) represent the pinnacle of Greek meat cookery. These are not just any lamb chops - they are:</p>
      <ul>
        <li>Cut from premium Australian lamb</li>
        <li>Marinated in olive oil, lemon, and oregano</li>
        <li>Grilled to achieve the perfect balance of crispy exterior and tender interior</li>
        <li>Served with traditional sides like skordalia and lemon potatoes</li>
      </ul>

      <p>Paidakia is often considered the test of a Greek kitchen skill, and we are proud that ours consistently receives rave reviews.</p>

      <h2>Mix Grill: The Ultimate Experience</h2>
      <p>Cannot decide? Our Mix Grill offers a sampling of our finest meat dishes:</p>
      <ul>
        <li>Souvlaki skewers (pork, chicken, and lamb)</li>
        <li>Gyros meat selection</li>
        <li>Bifteki</li>
        <li>Grilled haloumi cheese</li>
        <li>Traditional sides and sauces</li>
      </ul>

      <p>It is the perfect way to experience the breadth of Greek meat cookery in one magnificent meal.</p>

      <h2>The Olympus Plate: Fit for the Gods</h2>
      <p>Our signature Olympus Plate is designed for those with legendary appetites:</p>
      <ul>
        <li>All three souvlaki varieties</li>
        <li>All three gyros meats</li>
        <li>Fresh bifteki</li>
        <li>Two traditional dips</li>
        <li>Grilled haloumi</li>
        <li>Mountains of golden chips</li>
      </ul>

      <p>This feast serves 2-3 people and represents the ultimate Greek dining experience.</p>

      <h2>What Makes Our Meat Dishes Special</h2>
      <p>Several factors set our meat dishes apart:</p>

      <h3>Quality Sourcing:</h3>
      <p>We work exclusively with premium Australian meat suppliers who understand our exacting standards for freshness and quality.</p>

      <h3>Traditional Preparation:</h3>
      <p>Every dish is prepared using traditional Greek methods, from our marinades to our cooking techniques.</p>

      <h3>Fresh Daily Production:</h3>
      <p>Nothing sits overnight. All our meat is prepared fresh each day, ensuring optimal flavor and texture.</p>

      <h3>Authentic Seasonings:</h3>
      <p>We import key spices and use traditional Greek oregano, olive oil, and other authentic ingredients.</p>

      <h2>Visit Us for the Full Experience</h2>
      <p>Understanding Greek meat dishes is one thing - experiencing them is another entirely. At The Souvlucky Country, we invite you to taste the difference that traditional preparation and authentic ingredients make.</p>

      <p>Whether you are a longtime lover of Greek cuisine or trying it for the first time, our menu offers something for every palate. Come discover why Greek meat dishes have been satisfying appetites and bringing people together for thousands of years.</p>
    `
  }
}

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
    <div style={{ paddingTop: '144px', paddingLeft: '2rem', paddingRight: '2rem', paddingBottom: '2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <nav style={{ marginBottom: '2rem' }}>
          <Link href="/" style={{ color: '#0D71C9', textDecoration: 'none' }}>
            Home
          </Link>
          {' > '}
          <Link href="/blog" style={{ color: '#0D71C9', textDecoration: 'none' }}>
            Blog
          </Link>
          {' > '}
          <span>{post.title}</span>
        </nav>

        <header style={{ marginBottom: '2rem' }}>
          <div style={{ 
            display: 'inline-block', 
            backgroundColor: '#0D71C9', 
            color: 'white', 
            padding: '0.5rem 1rem', 
            borderRadius: '0.5rem',
            fontSize: '0.875rem',
            marginBottom: '1rem'
          }}>
            {post.category}
          </div>
          
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#03233C',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            {post.title}
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#6B7280',
            marginBottom: '1rem'
          }}>
            {post.excerpt}
          </p>
          
          <p style={{ fontSize: '0.875rem', color: '#9CA3AF' }}>
            Published on {new Date(post.date).toLocaleDateString('en-AU', {
              year: 'numeric',
              month: 'long', 
              day: 'numeric'
            })}
          </p>
        </header>

        <div 
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75',
            color: '#374151',
            marginBottom: '3rem'
          }}
        >
          <style dangerouslySetInnerHTML={{
            __html: `
              .blog-content h2 {
                font-size: 1.875rem;
                font-weight: bold;
                color: #0D71C9;
                margin: 2rem 0 1rem 0;
                line-height: 1.2;
              }
              .blog-content h3 {
                font-size: 1.5rem;
                font-weight: 600;
                color: #03233C;
                margin: 1.5rem 0 0.75rem 0;
              }
              .blog-content p {
                margin-bottom: 1rem;
                line-height: 1.75;
              }
              .blog-content ul, .blog-content ol {
                margin: 1rem 0;
                padding-left: 2rem;
              }
              .blog-content li {
                margin-bottom: 0.5rem;
              }
              .blog-content strong {
                color: #03233C;
                font-weight: 600;
              }
            `
          }} />
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <div style={{
          backgroundColor: '#EBF8FF',
          padding: '2rem',
          borderRadius: '1rem',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <h2 style={{ color: '#0D71C9', marginBottom: '1rem' }}>
            Ready to taste authentic Greek cuisine?
          </h2>
          <p style={{ marginBottom: '2rem', color: '#374151' }}>
            Experience the dishes we have written about at The Souvlucky Country in Parramatta.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href="/reservations"
              style={{
                backgroundColor: '#0D71C9',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              Make a Reservation
            </Link>
            <Link 
              href="/menu"
              style={{
                border: '2px solid #0D71C9',
                color: '#0D71C9',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                fontWeight: '600'
              }}
            >
              View Our Menu
            </Link>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link 
            href="/blog"
            style={{
              color: '#0D71C9',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            ← Back to all stories
          </Link>
        </div>
      </div>
    </div>
  )
}