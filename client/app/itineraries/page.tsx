"use client"

import { Button } from "@/components/ui/button"
import CallToAction from "@/components/call-to-action"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Itinerary } from '@/types'
import { useItineraries } from '@/hooks/use-itineraries'

function TabContent({ experience }: { experience: Itinerary }) {
  const [activeTab, setActiveTab] = useState('highlights')
  
  return (
    <div className="mb-6">
      <div className="border-b border-gray-200 mb-4">
        <div className="flex space-x-4">
          <button 
            onClick={() => setActiveTab('highlights')}
            className={`pb-2 border-b-2 ${
              activeTab === 'highlights' 
                ? 'border-[#454772] text-[#454772]' 
                : 'border-transparent text-gray-500'
            } text-sm font-medium`}
          >
            Highlights
          </button>
          <button 
            onClick={() => setActiveTab('overview')}
            className={`pb-2 border-b-2 ${
              activeTab === 'overview' 
                ? 'border-[#454772] text-[#454772]' 
                : 'border-transparent text-gray-500'
            } text-sm font-medium`}
          >
            Overview
          </button>
        </div>
      </div>
      {activeTab === 'highlights' ? (
        <ul className="text-sm text-gray-600 space-y-1">
          {(experience.highlights || []).slice(0, 4).map((highlight, index) => (
            <li key={index}>• {highlight}</li>
          ))}
        </ul>
      ) : (
        <div className="relative pl-2 border-l-2 border-[#f9d597] space-y-3">
          {(experience.dayByDay || []).slice(0, 3).map((day) => (
            <div key={day.day} className="relative">
              <p className="text-sm font-bold text-[#454772]">Day {day.day}</p>
              <p className="text-xs text-gray-600">{day.title}</p>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6">
        <Link href={`/itineraries/${experience.id}`}>
          <Button className="bg-[#2a4c61] hover:bg-[#9b847b] text-white text-sm">Learn more</Button>
        </Link>
      </div>
    </div>
  )
}

export default function ItinerariesPage() {
  const { itineraries, loading } = useItineraries({ activeOnly: true })

  if (loading) {
    return (
      <div className="min-h-screen bg-white font-sans flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#454772]"></div>
      </div>
    )
  }

  // Sort itineraries by order
  const sortedItineraries = [...itineraries].sort((a, b) => a.order - b.order)

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="pb-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedItineraries.map((experience) => (
              <div
                key={experience.id}
                className="group bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={experience.thumbnail?.src || "/placeholder.svg"}
                    alt={experience.thumbnail?.alt || `${experience.title} - ${experience.subtitle}`}
                    fill
                    className={`${experience.thumbnail?.position || 'object-center'} group-hover:scale-105 transition-transform duration-300`}
                  />
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {experience.duration}
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    {(experience.tags || []).slice(0, 2).map((tag) => (
                      <span key={tag} className="bg-[#f9d597]/90 text-black px-2 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-xl font-medium text-black mb-2">{experience.title}</h3>
                    <p className="text-[#9b847b] font-medium text-lg mb-4">{experience.subtitle}</p>
                    <p className="text-gray-600 text-sm mb-4">{experience.description}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-sm text-gray-600">Difficulty:</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${i < experience.difficultyStars ? "text-[#f9d597]" : "text-gray-300"}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">({experience.difficulty})</span>
                    </div>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {(experience.cities || []).map((city) => (
                          <span key={city} className="bg-[#f9d597] text-black px-3 py-1 rounded-full text-xs font-medium">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                    <TabContent experience={experience} />
                  </div>
                  <div className="mt-auto space-y-2">
                    <Link href={`/itineraries/${experience.id}`}>
                      <Button className="w-full bg-[#9b847b] hover:bg-[#9b847b]/90 text-white">Know More</Button>
                    </Link>
                    <Button className="w-full bg-[#454772] hover:bg-[#454772]/90 text-white">Get a Quote</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  )
}