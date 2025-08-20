import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark } from "lucide-react"
import Link from "next/link"

export default function SecretSouksArticlePage() {
  const article = {
    title: "The Secret Souks of Marrakech: A Curator's Guide",
    author: "Amina Benali",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Insider Guide",
    image: "/marrakech-secret-souks.png",
    excerpt:
      "Discover the hidden artisan workshops and exclusive boutiques that most travelers never find, from master leather craftsmen to contemporary Moroccan designers.",
  }

  const relatedArticles = [
    {
      title: "Moroccan Cuisine Beyond Tagine: Hidden Culinary Gems",
      category: "Gastronomy",
      readTime: "9 min read",
      image: "/moroccan-cuisine-hidden-gems.png",
      slug: "moroccan-cuisine-hidden-gems",
    },
    {
      title: "The Art of Moroccan Hospitality: Tea Ceremony Traditions",
      category: "Culture",
      readTime: "5 min read",
      image: "/moroccan-tea-ceremony.png",
      slug: "moroccan-tea-ceremony-traditions",
    },
    {
      title: "Chefchaouen Photography: Capturing the Blue Pearl",
      category: "Photography",
      readTime: "7 min read",
      image: "/chefchaouen-photography-tips.png",
      slug: "chefchaouen-photography-guide",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-serif text-2xl font-bold text-primary">
              MIDNIGHT ESCALES
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/experiences" className="text-foreground hover:text-primary transition-colors">
                Experiences
              </Link>
              <Link href="/destinations" className="text-foreground hover:text-primary transition-colors">
                Destinations
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/journal" className="text-primary font-medium">
                Journal
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <Button className="bg-primary hover:bg-primary/90">Book Experience</Button>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${article.image}')`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Link
            href="/journal"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Journal
          </Link>
          <Badge className="bg-primary text-primary-foreground mb-4">{article.category}</Badge>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">{article.title}</h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">{article.excerpt}</p>
          <div className="flex items-center justify-center text-sm text-white/80 mb-8">
            <div className="flex items-center mr-6">
              <User className="h-4 w-4 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center mr-6">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{article.readTime}</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
            >
              <Bookmark className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Beyond the bustling main thoroughfares of Marrakech's famous souks lies a hidden world of master artisans,
              exclusive boutiques, and centuries-old workshops that most visitors never discover. As someone who has
              spent over a decade curating authentic Moroccan experiences, I'm sharing the secret locations that even
              seasoned travelers miss.
            </p>

            <h2 className="font-serif text-3xl font-bold text-foreground mb-6 mt-12">The Hidden Leather Quarter</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              While everyone knows about the famous tanneries, few realize that the most skilled leather craftsmen work
              in small ateliers tucked away in the Bab Debbagh quarter. Here, master artisans like Hajj Mohammed create
              bespoke leather goods using techniques passed down through five generations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The secret? Look for the narrow alley marked only by a small blue door, about 200 meters past the main
              tannery viewing point. Inside, you'll find workshops where artisans hand-stitch bags, belts, and shoes
              with a level of craftsmanship that rivals European luxury brands—at a fraction of the price.
            </p>

            <div className="bg-card p-8 rounded-lg my-12">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Insider Tip</h3>
              <p className="text-muted-foreground leading-relaxed">
                Visit these workshops in the early morning (8-10 AM) when the artisans are most receptive to visitors
                and you can watch the intricate process of hand-tooling leather. Bring a small gift like mint tea or
                pastries to show respect for their craft.
              </p>
            </div>

            <h2 className="font-serif text-3xl font-bold text-foreground mb-6 mt-12">Contemporary Moroccan Design</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The new generation of Moroccan designers is revolutionizing traditional crafts, and their studios are
              scattered throughout the medina's quieter quarters. Designers like Lalla Hasna and Youssef Benali are
              creating contemporary pieces that honor traditional techniques while appealing to modern sensibilities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Their showrooms, often hidden behind unmarked doors in residential areas, showcase everything from
              modernist ceramics to avant-garde textiles. These pieces aren't available in tourist shops—they're
              destined for galleries in Paris, New York, and Tokyo.
            </p>

            <h2 className="font-serif text-3xl font-bold text-foreground mb-6 mt-12">
              The Spice Masters' Secret Stalls
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              While the main spice market caters to tourists with pre-packaged blends, the real spice masters operate
              from tiny stalls in the Rahba Kedima's back corners. These vendors source directly from Atlas Mountain
              cooperatives and create custom blends for Marrakech's top restaurants.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Ask for "Amm Hassan" at the third stall from the fountain—he speaks perfect French and can create
              personalized spice blends based on your cooking preferences. His saffron, sourced from Taliouine, is
              considered among the world's finest.
            </p>

            <div className="bg-primary text-primary-foreground p-8 rounded-lg my-12">
              <h3 className="font-serif text-2xl font-bold mb-4">Planning Your Secret Souk Adventure?</h3>
              <p className="mb-6 opacity-90">
                Our Marrakech experiences include exclusive access to these hidden workshops and private introductions
                to master artisans. Let us guide you beyond the tourist trails.
              </p>
              <Link href="/experiences/marrakech">
                <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Explore Marrakech Experiences
                </Button>
              </Link>
            </div>

            <h2 className="font-serif text-3xl font-bold text-foreground mb-6 mt-12">Navigating Like a Local</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The key to finding these hidden gems is understanding the medina's organic layout. Unlike European cities
              with their grid systems, Marrakech's medina evolved organically around family compounds and trade routes.
              The most authentic workshops are often in residential areas, accessible through narrow passages that seem
              to lead nowhere.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Trust your instincts, follow the sound of hammering or weaving, and don't be afraid to ask locals for
              directions. Most importantly, approach these spaces with respect—you're entering working environments, not
              tourist attractions.
            </p>

            <div className="border-l-4 border-primary pl-6 my-12">
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "The real magic of Marrakech isn't in the grand palaces or famous landmarks—it's in these quiet corners
                where centuries-old traditions continue to thrive, largely unchanged by the modern world."
              </p>
              <p className="text-sm text-muted-foreground mt-4">— Amina Benali, Cultural Curator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Continue Reading</h2>
            <p className="text-xl text-muted-foreground">More insights from our Morocco travel experts.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    <Link href={`/journal/${article.slug}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
