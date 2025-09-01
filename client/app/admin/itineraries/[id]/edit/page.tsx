"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FirestoreService } from '@/lib/firestore'
import type { Itinerary } from '@/types'
import ItineraryForm from '@/components/admin/itinerary-form'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

interface EditItineraryPageProps {
  params: {
    id: string
  }
}

export default function EditItineraryPage({ params }: EditItineraryPageProps) {
  const router = useRouter()
  const [itinerary, setItinerary] = useState<Itinerary | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const data = await FirestoreService.getItinerary(params.id)
        if (!data) {
          setError('Itinerary not found')
          return
        }
        setItinerary(data)
      } catch (err) {
        console.error('Error fetching itinerary:', err)
        setError('Failed to load itinerary')
      } finally {
        setLoading(false)
      }
    }

    fetchItinerary()
  }, [params.id])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#454772]"></div>
      </div>
    )
  }

  if (error || !itinerary) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{error}</h2>
        <Link href="/admin/itineraries">
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Itineraries
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/itineraries">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Edit Itinerary</h1>
          <p className="mt-1 text-sm text-gray-600">Make changes to {itinerary.title}</p>
        </div>
      </div>

      <ItineraryForm mode="edit" initialData={itinerary} />
    </div>
  )
}
