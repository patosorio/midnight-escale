"use client"

import { useItineraries } from '@/hooks/use-itineraries'
import { FirestoreService } from '@/lib/firestore'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useState } from 'react'
import { ArrowUp, ArrowDown, Pencil, Trash2 } from 'lucide-react'

export default function AdminItinerariesPage() {
  const { itineraries, loading, refetch } = useItineraries()
  const [deleting, setDeleting] = useState<string | null>(null)

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this itinerary?')) {
      return
    }

    setDeleting(id)
    try {
      await FirestoreService.delete('itineraries', id)
      refetch()
    } catch (error) {
      console.error('Error deleting itinerary:', error)
      alert('Failed to delete itinerary')
    } finally {
      setDeleting(null)
    }
  }

  const handleReorder = async (id: string, newOrder: number) => {
    try {
      await FirestoreService.update('itineraries', id, { order: newOrder })
      refetch()
    } catch (error) {
      console.error('Error reordering itinerary:', error)
      alert('Failed to reorder itinerary')
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#454772]"></div>
      </div>
    )
  }

  const sortedItineraries = [...itineraries].sort((a, b) => a.order - b.order)

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Itineraries</h1>
          <p className="mt-1 text-sm text-gray-600">Manage your travel itineraries here.</p>
        </div>
        <Link href="/admin/itineraries/new">
          <Button className="bg-[#2a4c61] hover:bg-[#9b847b]">
            Add New Itinerary
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {sortedItineraries.map((itinerary, index) => (
          <Card key={itinerary.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">{itinerary.title}</h3>
                <p className="text-sm text-gray-600">{itinerary.subtitle}</p>
                <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                  <span>{itinerary.duration}</span>
                  <span>•</span>
                  <span>{itinerary.difficulty}</span>
                  <span>•</span>
                  <span>Order: {itinerary.order}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {/* Reorder buttons */}
                <div className="flex flex-col space-y-1 mr-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleReorder(itinerary.id, itinerary.order - 1)}
                    disabled={index === 0}
                  >
                    <ArrowUp className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleReorder(itinerary.id, itinerary.order + 1)}
                    disabled={index === sortedItineraries.length - 1}
                  >
                    <ArrowDown className="h-4 w-4" />
                  </Button>
                </div>
                {/* Edit button */}
                <Link href={`/admin/itineraries/${itinerary.id}/edit`}>
                  <Button variant="outline" size="icon" className="h-10 w-10">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </Link>
                {/* Delete button */}
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 text-red-600 hover:text-red-700"
                  onClick={() => handleDelete(itinerary.id)}
                  disabled={deleting === itinerary.id}
                >
                  {deleting === itinerary.id ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-red-600" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
