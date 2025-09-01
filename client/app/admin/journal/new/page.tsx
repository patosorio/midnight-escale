"use client"

import JournalForm from '@/components/admin/journal-form'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function NewJournalPostPage() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/journal">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Create New Post</h1>
          <p className="mt-1 text-sm text-gray-600">Add a new blog post to your journal.</p>
        </div>
      </div>

      <JournalForm mode="create" />
    </div>
  )
}
