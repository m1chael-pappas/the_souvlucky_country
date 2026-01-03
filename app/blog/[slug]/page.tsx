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
  'best-greek-restaurant-western-sydney-parramatta': {
    title: 'Best Greek Restaurant in Western Sydney: What to Look For in 2025',
    excerpt: 'Searching for authentic Greek food in Parramatta or Western Sydney? Here\'s how to find the best Greek restaurant and what sets The Souvlucky Country apart.',
    category: 'Local Guide',
    date: '2025-01-02',
    content: `
      <p>Western Sydney has become a hotspot for authentic international cuisine, and Greek food is no exception. With so many options from Parramatta to Penrith, how do you find the best Greek restaurant that serves genuine, traditional dishes?</p>

      <p>Whether you are a local searching for your new favourite spot or visiting the area and craving Mediterranean flavours, this guide will help you identify what makes a Greek restaurant truly exceptional—and why The Souvlucky Country in Parramatta has become the go-to destination for Greek food lovers across Western Sydney.</p>

      <h2>What Makes a Greek Restaurant the "Best"?</h2>
      <p>Not all Greek restaurants are created equal. Here are the key factors that separate authentic Greek dining from the rest:</p>

      <h3>1. Authentic Cooking Methods</h3>
      <p>The best Greek restaurants use traditional cooking techniques that have been passed down through generations:</p>
      <ul>
        <li><strong>Charcoal grilling:</strong> Authentic souvlaki and meat dishes should be cooked over real charcoal, not gas grills. The smoky flavour is irreplaceable.</li>
        <li><strong>Vertical rotisserie for gyros:</strong> Traditional gyros meat should be stacked and slow-cooked on a vertical spit, then shaved fresh to order.</li>
        <li><strong>Fresh daily preparation:</strong> Marinades, dips, and sauces should be made fresh—not from packets or pre-made bases.</li>
      </ul>

      <h3>2. Quality Ingredients</h3>
      <p>Greek cuisine is simple, which means ingredient quality matters enormously:</p>
      <ul>
        <li><strong>Premium Australian meat:</strong> Look for restaurants using quality local suppliers, not imported frozen products.</li>
        <li><strong>Real Greek yogurt:</strong> Authentic tzatziki requires proper strained Greek yogurt, not regular yogurt.</li>
        <li><strong>Extra virgin olive oil:</strong> A staple of Greek cooking—the best restaurants use it generously.</li>
        <li><strong>Fresh vegetables:</strong> Tomatoes, cucumbers, and onions should be fresh and flavourful.</li>
      </ul>

      <h3>3. Traditional Recipes</h3>
      <p>Authentic Greek food follows time-tested recipes:</p>
      <ul>
        <li>Marinades using olive oil, lemon, oregano, and garlic—not artificial seasonings</li>
        <li>Tzatziki with fresh cucumber, garlic, and dill</li>
        <li>Traditional Greek salad with feta, olives, and simple dressing</li>
        <li>Pita bread that is soft, warm, and freshly prepared</li>
      </ul>

      <h3>4. Generous Portions</h3>
      <p>Greek hospitality (philoxenia) means generous portions. The best Greek restaurants send you home satisfied, not searching for a second dinner.</p>

      <h3>5. Family Atmosphere</h3>
      <p>Greek dining is meant to be shared. Look for restaurants that welcome families, offer sharing platters, and create a warm, welcoming environment.</p>

      <h2>Greek Restaurants in Western Sydney: The Landscape</h2>
      <p>Western Sydney offers diverse dining options, but finding authentic Greek cuisine requires knowing where to look. The area spans from Parramatta to the Blue Mountains, with most Greek restaurants concentrated in:</p>
      <ul>
        <li><strong>Parramatta:</strong> The dining hub of Western Sydney with the highest concentration of restaurants</li>
        <li><strong>Harris Park:</strong> Known for its multicultural food scene</li>
        <li><strong>Blacktown:</strong> Growing restaurant precinct with various cuisines</li>
        <li><strong>Penrith:</strong> Western Sydney's western gateway with family dining options</li>
      </ul>

      <p>While there are several options, not all deliver on authenticity. Many restaurants cut corners with pre-made sauces, gas grills, or frozen ingredients. Finding a place that honours Greek traditions while using fresh, quality ingredients is the key.</p>

      <h2>Why The Souvlucky Country Stands Out</h2>
      <p>Located in the heart of Parramatta, The Souvlucky Country has earned its reputation as Western Sydney's premier Greek restaurant. Here is what sets us apart:</p>

      <h3>Authentic Charcoal Cooking</h3>
      <p>We cook all our souvlaki and grilled meats over real charcoal. This is not just tradition for tradition's sake—the difference in flavour is unmistakable. That smoky char you taste? That is the real thing, not liquid smoke or gas grill imitation.</p>

      <h3>Fresh Daily Preparation</h3>
      <p>Every morning, our kitchen team:</p>
      <ul>
        <li>Prepares fresh marinades using traditional family recipes</li>
        <li>Makes tzatziki from scratch with hand-grated cucumber</li>
        <li>Cuts and skewers meat fresh for that day's service</li>
        <li>Bakes fresh pita bread throughout the day</li>
      </ul>
      <p>Nothing sits overnight. When you eat at The Souvlucky Country, you are eating food made that day.</p>

      <h3>Premium Australian Ingredients</h3>
      <p>We source our meat from trusted Australian suppliers who share our commitment to quality. Our lamb comes from farms known for producing tender, flavourful meat. Our chicken is free-range. Our pork is premium grade.</p>

      <h3>Family Recipes, Perfected Over Generations</h3>
      <p>Our recipes are not from a cookbook—they are family heirlooms. Our tzatziki recipe has been perfected over three generations. Our marinade blend is a closely guarded secret that makes our souvlaki instantly recognisable to regular customers.</p>

      <h3>Generous Greek Hospitality</h3>
      <p>We believe in the Greek tradition of philoxenia—love of strangers. Every guest is treated like family, and no one leaves hungry. Our portions reflect this philosophy: generous, satisfying, and meant for sharing.</p>

      <h2>What Our Customers Say</h2>
      <p>The Souvlucky Country has built its reputation through word of mouth. Customers travel from across Sydney—from the Eastern Suburbs to the Blue Mountains—specifically for our souvlaki and gyros. Here is what keeps them coming back:</p>

      <ul>
        <li><strong>"Finally, real Greek food in Western Sydney"</strong> - Customers who have been to Greece tell us our food takes them back</li>
        <li><strong>"The charcoal makes all the difference"</strong> - Once you taste charcoal-grilled souvlaki, you cannot go back</li>
        <li><strong>"Best tzatziki I have ever had"</strong> - Our fresh-made tzatziki is legendary</li>
        <li><strong>"The portions are incredible"</strong> - Greek generosity at its finest</li>
      </ul>

      <h2>How to Find the Best Greek Food Near You</h2>
      <p>If you are searching for Greek food in Western Sydney, here are our tips:</p>

      <h3>Questions to Ask</h3>
      <ul>
        <li>Do they cook over charcoal or gas?</li>
        <li>Is the tzatziki made fresh in-house?</li>
        <li>Where do they source their meat?</li>
        <li>Is the gyros shaved fresh from the spit?</li>
      </ul>

      <h3>Signs of Authenticity</h3>
      <ul>
        <li>You can see (and smell) the charcoal grill</li>
        <li>The menu focuses on Greek classics, not a fusion of everything</li>
        <li>Portions are generous</li>
        <li>The owners and staff are passionate about Greek food</li>
      </ul>

      <h3>Red Flags to Avoid</h3>
      <ul>
        <li>Pre-packaged sauces and dips</li>
        <li>Frozen, imported meat</li>
        <li>Gyros meat that looks processed or uniform</li>
        <li>No visible grill or cooking area</li>
      </ul>

      <h2>Visit The Souvlucky Country</h2>
      <p>If you are searching for the best Greek restaurant in Western Sydney, we invite you to experience The Souvlucky Country for yourself. We are located in Parramatta—the heart of Western Sydney—and we are passionate about serving authentic Greek cuisine that honours our heritage.</p>

      <p>Whether you are craving a quick souvlaki wrap for lunch, a family feast for dinner, or catering for your next event, we are here to serve you the best Greek food in the west.</p>

      <h3>Find Us</h3>
      <ul>
        <li><strong>Location:</strong> Parramatta, NSW</li>
        <li><strong>Cuisine:</strong> Authentic Greek - Souvlaki, Gyros, Grilled Meats</li>
        <li><strong>Perfect for:</strong> Families, date nights, quick lunches, group gatherings</li>
      </ul>

      <p><strong>Ready to taste the difference?</strong> Make a reservation or view our menu to start planning your Greek feast. We cannot wait to welcome you to The Souvlucky Country family.</p>

      <p><em>Searching for "best Greek restaurant near me" or "Greek food Parramatta"? You have found it. Come visit us and discover why locals call The Souvlucky Country the best Greek restaurant in Western Sydney.</em></p>
    `
  },
  'souvlaki-vs-gyros-vs-kebab': {
    title: 'Souvlaki vs Gyros vs Kebab: What\'s the Difference? A Complete Guide',
    excerpt: 'Confused about the difference between souvlaki, gyros, and kebab? Learn how these beloved Mediterranean dishes differ in origin, preparation, and taste.',
    category: 'Food Guide',
    date: '2025-01-03',
    content: `
      <p>If you have ever stood at a Greek restaurant counter wondering whether to order souvlaki, gyros, or kebab, you are not alone. These three Mediterranean favourites are often confused, but each has a distinct history, preparation method, and flavour profile that makes it unique.</p>

      <p>At The Souvlucky Country in Parramatta, we serve authentic versions of these dishes daily, and our customers frequently ask us to explain the differences. Let us break it down for you.</p>

      <h2>Quick Comparison: Souvlaki vs Gyros vs Kebab</h2>
      <p>Before we dive deep, here is a quick overview:</p>

      <table style="width: 100%; border-collapse: collapse; margin: 1.5rem 0;">
        <thead>
          <tr style="background-color: #0D71C9; color: white;">
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Feature</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Souvlaki</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Gyros</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Kebab</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Origin</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Greece</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Greece</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Turkey/Middle East</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Cooking Method</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Skewered & grilled</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Vertical rotisserie</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Vertical rotisserie or grilled</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Meat Type</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Cubed pieces</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Stacked, shaved slices</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Minced or stacked</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Typical Sauce</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Tzatziki</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Tzatziki</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Garlic sauce, chilli</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #ddd;"><strong>Bread</strong></td>
            <td style="padding: 12px; border: 1px solid #ddd;">Pita bread</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Pita bread</td>
            <td style="padding: 12px; border: 1px solid #ddd;">Turkish bread or pide</td>
          </tr>
        </tbody>
      </table>

      <h2>What is Souvlaki?</h2>
      <p>Souvlaki (pronounced soo-VLAH-kee) is one of Greece's oldest and most beloved dishes. The name comes from the Greek word "souvla," meaning skewer.</p>

      <h3>How Souvlaki is Made</h3>
      <p>Traditional souvlaki consists of small cubes of meat—typically pork, chicken, or lamb—threaded onto wooden or metal skewers and grilled over charcoal. The meat is marinated in a simple but flavourful mixture of:</p>
      <ul>
        <li>Extra virgin olive oil</li>
        <li>Fresh lemon juice</li>
        <li>Garlic</li>
        <li>Dried oregano</li>
        <li>Salt and pepper</li>
      </ul>

      <p>What makes souvlaki special is the char from the open flame and the simplicity of the seasoning, which allows the quality of the meat to shine through.</p>

      <h3>How Souvlaki is Served</h3>
      <p>Souvlaki can be enjoyed in several ways:</p>
      <ul>
        <li><strong>On the skewer (Kalamaki):</strong> The traditional way, served with pita and tzatziki on the side</li>
        <li><strong>Wrapped in pita:</strong> With tomatoes, onions, and tzatziki sauce</li>
        <li><strong>On a plate:</strong> With Greek salad, chips, and dips</li>
      </ul>

      <h2>What is Gyros?</h2>
      <p>Gyros (pronounced YEE-ros, meaning "turn" in Greek) refers to meat cooked on a vertical rotisserie—the tall spinning cone you see in Greek restaurants.</p>

      <h3>How Gyros is Made</h3>
      <p>The preparation of gyros is quite different from souvlaki:</p>
      <ul>
        <li>Thin slices of marinated meat are stacked layer upon layer on a vertical spit</li>
        <li>The meat rotates slowly next to a heat source</li>
        <li>As the outer layer cooks and crisps, it is shaved off to order</li>
        <li>The result is thin, flavourful strips with crispy edges</li>
      </ul>

      <p>Traditional Greek gyros uses pork or chicken, while lamb gyros is also popular. The marinade typically includes oregano, thyme, rosemary, and garlic.</p>

      <h3>The Gyros Experience</h3>
      <p>What makes gyros irresistible is the texture contrast—crispy caramelised edges from the rotisserie combined with juicy, tender meat inside. It is typically served in a warm pita with:</p>
      <ul>
        <li>Tzatziki sauce</li>
        <li>Sliced tomatoes</li>
        <li>Red onions</li>
        <li>Optional chips inside the wrap (the Greek way!)</li>
      </ul>

      <h2>What is Kebab?</h2>
      <p>Kebab is a broad term covering various meat dishes that originated in the Middle East and Turkey. The word comes from the Arabic "kabāb," meaning grilled meat.</p>

      <h3>Types of Kebab</h3>
      <p>There are many varieties of kebab:</p>
      <ul>
        <li><strong>Doner Kebab:</strong> Similar to gyros, cooked on a vertical rotisserie. The Turkish precursor to Greek gyros.</li>
        <li><strong>Shish Kebab:</strong> Cubed meat on skewers, similar to souvlaki but with different spices.</li>
        <li><strong>Kofta Kebab:</strong> Minced meat formed around skewers and grilled.</li>
        <li><strong>Adana Kebab:</strong> Spicy minced lamb from Turkey's Adana region.</li>
      </ul>

      <h3>Key Differences from Greek Dishes</h3>
      <p>While kebab and Greek meat dishes may look similar, there are important differences:</p>
      <ul>
        <li><strong>Spicing:</strong> Kebabs often use cumin, sumac, and chilli, while Greek dishes favour oregano and lemon</li>
        <li><strong>Sauces:</strong> Kebabs typically come with garlic sauce, chilli sauce, or tahini rather than tzatziki</li>
        <li><strong>Bread:</strong> Turkish bread or pide is used instead of Greek pita</li>
        <li><strong>Meat preparation:</strong> Doner often uses minced and formed meat, while traditional gyros uses whole meat slices</li>
      </ul>

      <h2>Souvlaki vs Gyros: The Greek Showdown</h2>
      <p>Since both souvlaki and gyros are Greek, people often wonder which to choose. Here is how they compare:</p>

      <h3>Choose Souvlaki When You Want:</h3>
      <ul>
        <li>Distinct, chargrilled flavour from the open flame</li>
        <li>Larger, more substantial pieces of meat</li>
        <li>A more traditional, ancient Greek experience</li>
        <li>The ability to taste each individual piece of meat</li>
      </ul>

      <h3>Choose Gyros When You Want:</h3>
      <ul>
        <li>Crispy, caramelised meat with tender interior</li>
        <li>A classic street food experience</li>
        <li>More meat packed into your pita</li>
        <li>That signature rotisserie flavour</li>
      </ul>

      <h2>Which is Better: Souvlaki, Gyros, or Kebab?</h2>
      <p>There is no wrong answer here—it truly depends on your mood and preferences:</p>

      <ul>
        <li><strong>For authentic Greek flavour:</strong> Choose souvlaki or gyros with tzatziki</li>
        <li><strong>For bold, spicy flavours:</strong> Try a traditional kebab with chilli sauce</li>
        <li><strong>For chargrilled taste:</strong> Souvlaki wins with its open-flame cooking</li>
        <li><strong>For crispy, shaved meat:</strong> Gyros delivers that rotisserie magic</li>
        <li><strong>For a filling meal:</strong> All three are excellent wrapped in bread with salad</li>
      </ul>

      <h2>Where to Find Authentic Souvlaki and Gyros in Parramatta</h2>
      <p>At The Souvlucky Country, we specialise in authentic Greek souvlaki and gyros made the traditional way. Our meat is marinated fresh daily using family recipes, and we cook everything over charcoal for that genuine Greek flavour.</p>

      <p>Whether you are team souvlaki or team gyros, we have you covered with:</p>
      <ul>
        <li><strong>Pork, chicken, and lamb souvlaki</strong> grilled to perfection</li>
        <li><strong>Traditional gyros</strong> shaved fresh from the spit</li>
        <li><strong>Mixed plates</strong> so you can try both</li>
        <li><strong>Authentic tzatziki</strong> made fresh in-house</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>Now that you know the difference between souvlaki, gyros, and kebab, you can order with confidence. Each dish has its own charm and tradition, but they all share one thing in common: they are delicious ways to enjoy grilled meat.</p>

      <p>Next time you visit The Souvlucky Country in Parramatta, try our souvlaki and gyros side by side. It is the best way to truly appreciate what makes each one special.</p>

      <p><em>Have more questions about Greek food? Follow us on Instagram or stop by our restaurant at Parramatta—we love sharing our passion for authentic Greek cuisine!</em></p>
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