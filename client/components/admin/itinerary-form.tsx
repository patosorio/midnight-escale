"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FirestoreService } from '@/lib/firestore'
import type { Itinerary, DayByDay } from '@/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Plus, Minus, Save } from 'lucide-react'
import ImageUpload from '@/components/ui/image-upload'
import { StorageService } from '@/lib/storage'

interface ItineraryFormProps {
  initialData?: Itinerary
  mode: 'create' | 'edit'
}

export default function ItineraryForm({ initialData, mode }: ItineraryFormProps) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState<Partial<Itinerary>>(
    initialData || {
      order: 999, // High number to put at end by default
      title: '',
      subtitle: '',
      duration: '',
      difficulty: 'Easy',
      difficultyStars: 1,
      tags: [],
      cities: [],
      description: '',
      highlights: [],
      dayByDay: []
    }
  )

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleThumbnailChange = (thumbnail: any) => {
    setFormData(prev => ({ ...prev, thumbnail }))
  }

  const handleArrayInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: 'tags' | 'cities' | 'highlights'
  ) => {
    const { value } = e.target
    setFormData(prev => ({
      ...prev,
      [field]: prev[field]?.map((item, i) => (i === index ? value : item))
    }))
  }

  const handleDayByDayChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    field: keyof DayByDay
  ) => {
    const { value } = e.target
    setFormData(prev => ({
      ...prev,
      dayByDay: prev.dayByDay?.map((day, i) => 
        i === index ? { ...day, [field]: field === 'day' ? parseInt(value) : value } : day
      )
    }))
  }

  const addArrayItem = (field: 'tags' | 'cities' | 'highlights') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field] || []), '']
    }))
  }

  const removeArrayItem = (index: number, field: 'tags' | 'cities' | 'highlights') => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field]?.filter((_, i) => i !== index)
    }))
  }

  const addDayByDay = () => {
    setFormData(prev => ({
      ...prev,
      dayByDay: [
        ...(prev.dayByDay || []),
        { day: (prev.dayByDay?.length || 0) + 1, title: '', description: '' }
      ]
    }))
  }

  const removeDayByDay = (index: number) => {
    setFormData(prev => ({
      ...prev,
      dayByDay: prev.dayByDay?.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      if (mode === 'create') {
        await FirestoreService.create('itineraries', formData as Itinerary)
      } else {
        await FirestoreService.update('itineraries', initialData!.id, formData)
      }
      router.push('/admin/itineraries')
    } catch (error) {
      console.error('Error saving itinerary:', error)
      alert('Failed to save itinerary')
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
            <Input
              name="subtitle"
              value={formData.subtitle}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
            <Input
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#2a4c61] focus:border-[#2a4c61] sm:text-sm rounded-md"
            >
              <option value="Easy">Easy</option>
              <option value="Moderate">Moderate</option>
              <option value="Challenging">Challenging</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty Stars (1-5)</label>
            <Input
              type="number"
              name="difficultyStars"
              value={formData.difficultyStars}
              onChange={handleInputChange}
              min="1"
              max="5"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
            <Input
              type="number"
              name="order"
              value={formData.order}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </Card>

      {/* Description */}
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Description</h3>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows={4}
          required
        />
      </Card>

      {/* Thumbnail */}
      <Card className="p-6">
        <h3 className="text-lg font-medium mb-4">Thumbnail Image</h3>
        <ImageUpload
          value={formData.thumbnail}
          onChange={handleThumbnailChange}
          storagePath={StorageService.getStoragePath('itineraries')}
          slug={formData.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}
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

      {/* Cities */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Cities</h3>
          <Button
            type="button"
            onClick={() => addArrayItem('cities')}
            variant="outline"
            size="sm"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add City
          </Button>
        </div>
        <div className="space-y-2">
          {formData.cities?.map((city, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={city}
                onChange={(e) => handleArrayInputChange(e, index, 'cities')}
                placeholder="Enter city"
              />
              <Button
                type="button"
                onClick={() => removeArrayItem(index, 'cities')}
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

      {/* Highlights */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Highlights</h3>
          <Button
            type="button"
            onClick={() => addArrayItem('highlights')}
            variant="outline"
            size="sm"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Highlight
          </Button>
        </div>
        <div className="space-y-2">
          {formData.highlights?.map((highlight, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={highlight}
                onChange={(e) => handleArrayInputChange(e, index, 'highlights')}
                placeholder="Enter highlight"
              />
              <Button
                type="button"
                onClick={() => removeArrayItem(index, 'highlights')}
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

      {/* Day by Day */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Day by Day</h3>
          <Button
            type="button"
            onClick={addDayByDay}
            variant="outline"
            size="sm"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Day
          </Button>
        </div>
        <div className="space-y-4">
          {formData.dayByDay?.map((day, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">Day {day.day}</h4>
                <Button
                  type="button"
                  onClick={() => removeDayByDay(index)}
                  variant="outline"
                  size="icon"
                >
                  <Minus className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <Input
                    value={day.title}
                    onChange={(e) => handleDayByDayChange(e, index, 'title')}
                    placeholder="Day title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <Textarea
                    value={day.description}
                    onChange={(e) => handleDayByDayChange(e, index, 'description')}
                    placeholder="Day description"
                  />
                </div>
              </div>
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
              Save Itinerary
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
