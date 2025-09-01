"use client"

import { useState, useEffect } from 'react'
import { FirestoreService } from '@/lib/firestore'
import type { Itinerary } from '@/types'

interface UseItinerariesOptions {
  activeOnly?: boolean
}

export function useItineraries(options: UseItinerariesOptions = {}) {
  const [itineraries, setItineraries] = useState<Itinerary[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const data = await FirestoreService.getItineraries()
        
        // If activeOnly is true, filter out inactive itineraries
        const filteredData = options.activeOnly
          ? data.filter(itinerary => itinerary.order > 0)
          : data
        
        // Sort by order
        const sortedData = [...filteredData].sort((a, b) => a.order - b.order)
        
        setItineraries(sortedData)
        setError(null)
      } catch (err) {
        console.error('Error fetching itineraries:', err)
        setError(err instanceof Error ? err : new Error('Failed to fetch itineraries'))
      } finally {
        setLoading(false)
      }
    }

    fetchItineraries()
  }, [options.activeOnly])

  return {
    itineraries,
    loading,
    error,
    refetch: () => {
      setLoading(true)
      FirestoreService.getItineraries()
        .then(data => {
          const filteredData = options.activeOnly
            ? data.filter(itinerary => itinerary.order > 0)
            : data
          const sortedData = [...filteredData].sort((a, b) => a.order - b.order)
          setItineraries(sortedData)
          setError(null)
        })
        .catch(err => {
          console.error('Error refetching itineraries:', err)
          setError(err instanceof Error ? err : new Error('Failed to fetch itineraries'))
        })
        .finally(() => setLoading(false))
    }
  }
}
