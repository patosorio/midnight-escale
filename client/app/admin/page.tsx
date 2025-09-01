"use client"

import { useAuth } from '@/context/AuthContext'
import { useItineraries } from '@/hooks/use-itineraries'
import { useJournalPosts } from '@/hooks/use-journal'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function AdminDashboard() {
  const { user } = useAuth()
  const { itineraries, loading: loadingItineraries } = useItineraries()
  const { posts, loading: loadingPosts } = useJournalPosts()

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Itineraries Card */}
        <Card className="p-4">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Itineraries</h2>
          <p className="text-sm text-gray-600 mb-4">
            {loadingItineraries ? "Loading..." : `${itineraries.length} itineraries published`}
          </p>
          <Link href="/admin/itineraries">
            <Button className="w-full bg-[#2a4c61] hover:bg-[#9b847b]">
              Manage Itineraries
            </Button>
          </Link>
        </Card>

        {/* Journal Card */}
        <Card className="p-4">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Journal</h2>
          <p className="text-sm text-gray-600 mb-4">
            {loadingPosts ? "Loading..." : `${posts.length} posts published`}
          </p>
          <Link href="/admin/journal">
            <Button className="w-full bg-[#2a4c61] hover:bg-[#9b847b]">
              Manage Journal
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  )
}