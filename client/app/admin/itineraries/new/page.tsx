"use client"

import ItineraryForm from '@/components/admin/itinerary-form'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function NewItineraryPage() {
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/itineraries">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Create New Itinerary</h1>
          <p className="mt-1 text-sm text-gray-600">Add a new travel itinerary to your collection.</p>
        </div>
      </div>

      <ItineraryForm mode="create" />
    </div>
  )
}
