import { Button } from "@/components/ui/button"
import CallToAction from "@/components/call-to-action"
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { notFound } from "next/navigation"

// This would typically come from a database or API
const experiences = [
  {
    id: "south-desert",
    title: "South Desert Focus",
    subtitle: "Burnt Gold and Silence",
    duration: "7 Days",
    difficulty: "Moderate",
    difficultyStars: 3,
    tags: ["Desert", "Adventure", "Cultural"],
    cities: ["Marrakech", "Telouet", "Aït Benhaddou", "Todra Gorge", "Merzouga", "Agafay"],
    description:
      "Journey into the Sahara's golden dunes with camel rides at sunset, traditional music around desert fires, and nights under infinite stars.",
    highlights: [
      "Merzouga dunes exploration",
      "Draa Valley oases visits",
      "Tuareg music experiences",
      "Traditional bread baking in sand",
      "Desert yoga + full-moon rituals",
    ],
    image: "/sahara-caravan-sunset.png",
    dayByDay: [
      {
        day: 1,
        title: "Marrakech Arrival",
        description:
          "Land, private driver waiting. Quick espresso at a medina rooftop. Optional Hammam + welcome dinner.",
      },
      {
        day: 2,
        title: "Into the Mountains",
        description: "Drive via Tizi n'Tichka. Stop in Telouet. Explore Aït Benhaddou. Sleep in nearby kasbah.",
      },
      {
        day: 3,
        title: "Into the Dunes",
        description: "Todra Gorge route. Camel ride at sunset. Music, desert fire. Night in dunes.",
      },
      {
        day: 4,
        title: "Desert Rituals",
        description: "Hike or quad. Nomadic tea stop. Optional stargazing guide. Sleep under stars.",
      },
      {
        day: 5,
        title: "Oases Return",
        description: "Drive back via Fint or Draa Valley. Local meal + night outside Agafay.",
      },
      { day: 6, title: "Slow Marrakech", description: "Chill, shop, visit boutique galleries. Rooftop dinner." },
      { day: 7, title: "Departure", description: "Final moments in Morocco before departure." },
    ],
  },
  {
    id: "beach-marrakech",
    title: "Beach + Marrakech Combo",
    subtitle: "Salt + Spice",
    duration: "7 Days",
    difficulty: "Easy",
    difficultyStars: 2,
    tags: ["Beach", "Cultural", "Relaxation"],
    cities: ["Marrakech", "Oualidia", "Essaouira"],
    description:
      "Perfect blend of cultural immersion in Marrakech and coastal relaxation along Morocco's Atlantic shores.",
    highlights: [
      "Essaouira Beach exploration",
      "Marrakech Medina tours",
      "Art gallery visits",
      "Traditional hammam experiences",
      "Scenic coastal drives",
    ],
    image: "/essaouira-beach-morocco.png",
    dayByDay: [
      { day: 1, title: "Marrakech Arrival", description: "Land + reset. Optional dinner in hidden courtyard." },
      { day: 2, title: "Art Loop + Spa", description: "Museum, gallery walk. Hammam. Evening in the medina." },
      {
        day: 3,
        title: "Essaouira via Oualidia",
        description: "Drive coastal route. Stop for seafood. Reach the Atlantic.",
      },
      { day: 4, title: "Surf + Sea Walk", description: "Beach day. Optional surf session or hammam." },
      { day: 5, title: "Return Marrakech", description: "Chill day. Rooftop meal." },
      { day: 6, title: "Flexible Medina Day", description: "Tailored activities or chill." },
      { day: 7, title: "Departure", description: "Final moments before departure." },
    ],
  },
]

export default function IndividualItineraryPage({ params }: { params: { id: string } }) {
  const experience = experiences.find((exp) => exp.id === params.id)

  if (!experience) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

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

      <Footer />
    </div>
  )
}
