"use client"

import { Button } from "@/components/ui/button"
import CallToAction from "@/components/call-to-action"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useJournalPosts } from "@/hooks/use-journal"
import type { JournalPost } from "@/types"

export default function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const { posts, loading, error } = useJournalPosts()
  
  // Filter posts by selected category
  const filteredPosts = selectedCategory 
    ? posts.filter(post => post.tags.includes(selectedCategory))
    : posts

  // All posts are displayed uniformly
  const displayPosts = filteredPosts

  // Generate categories dynamically from posts
  const allTags = posts.flatMap(post => post.tags)
  const uniqueTags = Array.from(new Set(allTags))
  const categoryCounts = uniqueTags.reduce((acc, tag) => {
    acc[tag] = posts.filter(post => post.tags.includes(tag)).length
    return acc
  }, {} as Record<string, number>)

  const categories = [
    { name: "All Articles", count: posts.length, active: !selectedCategory },
    ...uniqueTags.map(tag => ({
      name: tag,
      count: categoryCounts[tag],
      active: selectedCategory === tag
    }))
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
                <div className="flex flex-col">
                  {categories.map((category, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      onClick={() => setSelectedCategory(category.name === "All Articles" ? null : category.name)}
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
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2a4c61] mx-auto mb-4"></div>
                    <p className="text-muted-foreground">Loading articles...</p>
                  </div>
                </div>
              ) : error ? (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <p className="text-red-600 mb-4">Error loading articles: {error.message}</p>
                    <Button onClick={() => window.location.reload()} variant="outline">
                      Try Again
                    </Button>
                  </div>
                </div>
              ) : posts.length === 0 ? (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">No articles found.</p>
                    <p className="text-sm text-muted-foreground">Check back later for new content!</p>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {/* All Articles - Uniform Size */}
                  {displayPosts.map((post, index) => (
                    <Card key={post.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.thumbnail?.src || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-[250px] object-cover"
                          loading="lazy"
                          width={400}
                          height={250}
                        />
                        <div className="absolute top-4 left-4">
                          {post.tags.length > 0 && (
                            <Badge variant="secondary" className="bg-white">{post.tags[0]}</Badge>
                          )}
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex-1">
                          <h3 className="font-serif text-xl font-bold text-foreground mb-3 line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-1 leading-relaxed text-sm line-clamp-3">{post.description}</p>
                        </div>
                        <div className="mt-auto pt-1 border-t border-gray-100">
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <User className="h-4 w-4 mr-2" />
                              <span className="truncate">{post.author}</span>
                            </div>
                            <Link href={`/journal/${post.slug}`} className="text-[#15222C] hover:text-[#9b847b] font-medium transition-colors">
                              Read More <ArrowRight className="ml-1 h-4 w-4 inline" />
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* Load More - Only show if there are more posts to load */}
              {posts.length > 0 && (
                <div className="text-center mt-12">
                  <Button 
                    variant="ghost"
                    className="bg-[#2a4c61] hover:bg-[#9b847b] text-white transition-colors"
                  >
                    Load More Articles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}
