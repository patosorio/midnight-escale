"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FirestoreService } from '@/lib/firestore'
import type { JournalPost } from '@/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Plus, Minus, Save } from 'lucide-react'
import ImageUpload from '@/components/ui/image-upload'
import { StorageService } from '@/lib/storage'

interface JournalFormProps {
  initialData?: JournalPost
  mode: 'create' | 'edit'
}

export default function JournalForm({ initialData, mode }: JournalFormProps) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState<Partial<JournalPost>>(
    initialData || {
      title: '',
      subtitle: '',
      description: '',
      content: '',
      publishedAt: new Date().toISOString(),
      author: '',
      thumbnail: {
        src: '',
        alt: '',
        position: 'object-center'
      },
      tags: [],
      readingTime: ''
    }
  )

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleThumbnailChange = (thumbnail: any) => {
    setFormData(prev => ({ ...prev, thumbnail }))
  }

  const handleArrayInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: 'tags'
  ) => {
    const { value } = e.target
    setFormData(prev => ({
      ...prev,
      [field]: prev[field]?.map((item, i) => (i === index ? value : item))
    }))
  }

  const addArrayItem = (field: 'tags') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field] || []), '']
    }))
  }

  const removeArrayItem = (index: number, field: 'tags') => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field]?.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      if (mode === 'create') {
        await FirestoreService.create('journal', formData as JournalPost)
      } else {
        await FirestoreService.update('journal', initialData!.id, formData)
      }
      router.push('/admin/journal')
    } catch (error) {
      console.error('Error saving journal post:', error)
      alert('Failed to save journal post')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
            <Input
              name="subtitle"
              value={formData.subtitle}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
            <Input
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Reading Time</label>
            <Input
              name="readingTime"
              value={formData.readingTime}
              onChange={handleInputChange}
              placeholder="e.g., 5 min read"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Published At</label>
            <Input
              type="datetime-local"
              name="publishedAt"
              value={formData.publishedAt?.slice(0, 16)}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </Card>

      {/* Thumbnail */}
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Thumbnail Image</h3>
        <ImageUpload
          value={formData.thumbnail}
          onChange={handleThumbnailChange}
          storagePath={StorageService.getStoragePath('journal')}
          slug={formData.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}
        />
      </Card>

      {/* Description */}
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Description</h3>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows={3}
          required
        />
      </Card>

      {/* Content */}
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Content</h3>
        <Textarea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          rows={10}
          required
        />
      </Card>

      {/* Tags */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Tags</h3>
          <Button
            type="button"
            onClick={() => addArrayItem('tags')}
            variant="outline"
            size="sm"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Tag
          </Button>
        </div>
        <div className="space-y-2">
          {formData.tags?.map((tag, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={tag}
                onChange={(e) => handleArrayInputChange(e, index, 'tags')}
                placeholder="Enter tag"
              />
              <Button
                type="button"
                onClick={() => removeArrayItem(index, 'tags')}
                variant="outline"
                size="icon"
                className="shrink-0"
              >
                <Minus className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button
          type="submit"
          className="bg-[#2a4c61] hover:bg-[#454772]"
          disabled={saving}
        >
          {saving ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2" />
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Post
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
