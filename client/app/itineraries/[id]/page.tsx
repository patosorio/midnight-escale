import { Button } from "@/components/ui/button"
import CallToAction from "@/components/call-to-action"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { FirestoreService } from '@/lib/firestore'
import type { Itinerary } from '@/types'

interface IndividualItineraryPageProps {
  params: Promise<{ id: string }>
}

export default async function IndividualItineraryPage({ params }: IndividualItineraryPageProps) {
  const { id } = await params
  
  // Fetch the specific itinerary from Firestore
  const experience = await FirestoreService.getItinerary(id)

  if (!experience) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Itinerary Details */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link href="/itineraries" className="inline-flex items-center text-[#454772] hover:text-[#454772]/80">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Itineraries
            </Link>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-2xl font-light text-black mb-2">{experience.duration}</div>
              <div className="text-sm text-gray-600">Duration</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${i < experience.difficultyStars ? "text-[#f9d597]" : "text-gray-300"}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="text-sm text-gray-600">{experience.difficulty}</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-2xl font-light text-black mb-2">{experience.cities.length}</div>
              <div className="text-sm text-gray-600">Destinations</div>
            </div>
          </div>

          {/* Cities & Tags */}
          <div className="mb-12">
            <h3 className="text-xl font-medium text-black mb-4">Destinations</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {experience.cities.map((city) => (
                <span key={city} className="bg-[#f9d597] text-black px-4 py-2 rounded-full text-sm font-medium">
                  {city}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <span key={tag} className="bg-[#454772] text-white px-3 py-1 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Day by Day Itinerary */}
          <div className="mb-12">
            <h3 className="text-2xl font-light text-black mb-8">Complete Day-by-Day Itinerary</h3>
            <div className="space-y-6">
              {experience.dayByDay.map((day, index) => (
                <div key={day.day} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#f9d597] rounded-full flex items-center justify-center">
                      <span className="text-black font-medium">{day.day}</span>
                    </div>
                    {index < experience.dayByDay.length - 1 && <div className="w-px h-16 bg-gray-200 mx-auto mt-4" />}
                  </div>
                  <div className="flex-1 pb-8">
                    <h4 className="text-lg font-medium text-black mb-2">
                      Day {day.day}: {day.title}
                    </h4>
                    <p className="text-gray-600">{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-12">
            <h3 className="text-2xl font-light text-black mb-6">Experience Highlights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {experience.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#f9d597] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking CTA */}
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-light text-black mb-4">Ready to Book This Journey?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us to customize this itinerary or book as-is. Our team will handle every detail for your perfect
              Moroccan adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#454772] hover:bg-[#454772]/90 text-white px-8">Book This Journey</Button>
              <Button
                variant="outline"
                className="border-[#454772] text-[#454772] hover:bg-[#454772] hover:text-white px-8 bg-transparent"
              >
                Customize Itinerary
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  )
}
