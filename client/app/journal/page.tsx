"use client"

import { Button } from "@/components/ui/button"
import CallToAction from "@/components/call-to-action"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function JournalPage() {
  const featuredArticle = {
    title: "The Secret Souks of Marrakech: A Curator's Guide",
    excerpt:
      "Discover the hidden artisan workshops and exclusive boutiques that most travelers never find, from master leather craftsmen to contemporary Moroccan designers.",
    author: "Amina Benali",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Insider Guide",
    image: "/marrakech-secret-souks.png",
    slug: "secret-souks-marrakech-guide",
  }

  const articles = [
    {
      title: "Best Surf Spots in Taghazout: Beyond the Crowds",
      excerpt:
        "Local surfers reveal their favorite breaks along Morocco's Atlantic coast, from beginner-friendly waves to challenging reef breaks.",
      author: "Hassan Alami",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Adventure",
      image: "/taghazout-surf-spots.png",
      slug: "best-surf-spots-taghazout",
    },
    {
      title: "Desert Stargazing: A Guide to Morocco's Night Sky",
      excerpt:
        "Learn about the constellations visible from the Sahara and the best times and locations for astronomical photography.",
      author: "Dr. Youssef Benkirane",
      date: "December 10, 2024",
      readTime: "10 min read",
      category: "Culture",
      image: "/sahara-stargazing-guide.png",
      slug: "desert-stargazing-guide",
    },
    {
      title: "The Art of Moroccan Hospitality: Tea Ceremony Traditions",
      excerpt:
        "Understanding the cultural significance of mint tea and the proper etiquette for participating in this cherished tradition.",
      author: "Fatima Zahra",
      date: "December 8, 2024",
      readTime: "5 min read",
      category: "Culture",
      image: "/moroccan-tea-ceremony.png",
      slug: "moroccan-tea-ceremony-traditions",
    },
    {
      title: "Chefchaouen Photography: Capturing the Blue Pearl",
      excerpt:
        "Professional photography tips for getting the perfect shots in Morocco's most photogenic mountain town.",
      author: "Omar Benali",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Photography",
      image: "/chefchaouen-photography-tips.png",
      slug: "chefchaouen-photography-guide",
    },
    {
      title: "Atlas Mountains Hiking: Essential Trails and Tips",
      excerpt:
        "From day hikes to multi-day treks, discover the most rewarding trails in Morocco's High Atlas Mountains.",
      author: "Rachid Amellal",
      date: "December 3, 2024",
      readTime: "12 min read",
      category: "Adventure",
      image: "/atlas-mountains-hiking.png",
      slug: "atlas-mountains-hiking-guide",
    },
    {
      title: "Moroccan Cuisine Beyond Tagine: Hidden Culinary Gems",
      excerpt:
        "Explore lesser-known Moroccan dishes and the best local restaurants where authentic flavors come alive.",
      author: "Chef Aicha Benali",
      date: "November 30, 2024",
      readTime: "9 min read",
      category: "Gastronomy",
      image: "/moroccan-cuisine-hidden-gems.png",
      slug: "moroccan-cuisine-hidden-gems",
    },
  ]

  const categories = [
    { name: "All Articles", count: 24, active: true },
    { name: "Insider Guide", count: 8, active: false },
    { name: "Culture", count: 6, active: false },
    { name: "Adventure", count: 5, active: false },
    { name: "Gastronomy", count: 3, active: false },
    { name: "Photography", count: 2, active: false },
  ]

  useEffect(() => {
    const handleResizeObserverError = (e: ErrorEvent) => {
      if (e.message === "ResizeObserver loop completed with undelivered notifications.") {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    window.addEventListener("error", handleResizeObserverError)

    return () => {
      window.removeEventListener("error", handleResizeObserverError)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <section className="pb-10">
        <div className="container-fluid px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-72">
              <div className="sticky top-24">
                <h2 className="font-serif text-2xl font-bold mb-6">Categories</h2>
                <div className="flex flex-col">
                  {categories.map((category, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className={`w-full justify-between rounded-none border-0 h-12 px-4 ${
                        category.active
                          ? "bg-[#2a4c61] text-white hover:bg-[#9b847b]"
                          : "text-[#2a4c61] hover:bg-[#2a4c61] hover:text-white"
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="ml-2 opacity-60">({category.count})</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="flex-1">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* Featured Article */}
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredArticle.image || "/placeholder.svg"}
                      alt={featuredArticle.title}
                      className="w-full h-[400px] object-cover"
                      loading="lazy"
                      width={800}
                      height={400}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-[#15222C] text-white">Featured</Badge>
                      <Badge variant="secondary" className="bg-white">{featuredArticle.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                      {featuredArticle.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <Link href={`/journal/${featuredArticle.slug}`} className="text-[#15222C] hover:opacity-80">
                        Read More <ArrowRight className="ml-1 h-4 w-4 inline" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Regular Articles */}
                {articles.map((article, index) => (
                  <Card key={index} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-[250px] object-cover"
                        loading="lazy"
                        width={400}
                        height={250}
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white">{article.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          <span className="truncate">{article.author}</span>
                        </div>
                        <Link href={`/journal/${article.slug}`} className="text-[#15222C] hover:opacity-80">
                          Read More <ArrowRight className="ml-1 h-4 w-4 inline" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button 
                  variant="ghost"
                  className="bg-[#2a4c61] hover:bg-[#9b847b] text-white transition-colors"
                >
                  Load More Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}
