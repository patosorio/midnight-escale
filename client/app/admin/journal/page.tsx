"use client"

import { useJournalPosts } from '@/hooks/use-journal'
import { FirestoreService } from '@/lib/firestore'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import { Pencil, Trash2, Calendar, Clock } from 'lucide-react'

export default function AdminJournalPage() {
  const { posts, loading, refetch } = useJournalPosts()
  const [deleting, setDeleting] = useState<string | null>(null)

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) {
      return
    }

    setDeleting(id)
    try {
      await FirestoreService.delete('journal', id)
      refetch()
    } catch (error) {
      console.error('Error deleting post:', error)
      alert('Failed to delete post')
    } finally {
      setDeleting(null)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#454772]"></div>
      </div>
    )
  }

  // Sort posts by publishedAt in descending order
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Journal</h1>
          <p className="mt-1 text-sm text-gray-600">Manage your blog posts here.</p>
        </div>
        <Link href="/admin/journal/new">
          <Button className="bg-[#2a4c61] hover:bg-[#454772]">
            Add New Post
          </Button>
        </Link>
      </div>

      <div className="space-y-6">
        {sortedPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="flex">
              <div className="relative w-48 h-48 flex-shrink-0">
                <Image
                  src={post.thumbnail.src}
                  alt={post.thumbnail.alt}
                  fill
                  className={`object-cover ${post.thumbnail.position}`}
                />
              </div>
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{post.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{post.subtitle}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Link href={`/admin/journal/${post.id}/edit`}>
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 text-red-600 hover:text-red-700"
                      onClick={() => handleDelete(post.id)}
                      disabled={deleting === post.id}
                    >
                      {deleting === post.id ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-red-600" />
                      ) : (
                        <Trash2 className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readingTime}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
