"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FirestoreService } from '@/lib/firestore'
import type { JournalPost } from '@/types'
import JournalForm from '@/components/admin/journal-form'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

interface EditJournalPostPageProps {
  params: {
    id: string
  }
}

export default function EditJournalPostPage({ params }: EditJournalPostPageProps) {
  const router = useRouter()
  const [post, setPost] = useState<JournalPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await FirestoreService.getJournalPost(params.id)
        if (!data) {
          setError('Post not found')
          return
        }
        setPost(data)
      } catch (err) {
        console.error('Error fetching post:', err)
        setError('Failed to load post')
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.id])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#454772]"></div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{error}</h2>
        <Link href="/admin/journal">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Journal
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/journal">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Edit Post</h1>
          <p className="mt-1 text-sm text-gray-600">Make changes to {post.title}</p>
        </div>
      </div>

      <JournalForm mode="edit" initialData={post} />
    </div>
  )
}
