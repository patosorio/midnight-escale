"use client"

import { Button } from "@/components/ui/button"
import CallToAction from "@/components/call-to-action"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

interface Experience {
  id: string;
  highlights?: string[];
  dayByDay?: Array<{
    day: number;
    title: string;
  }>;
}

function TabContent({ experience }: { experience: Experience }) {
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
  const experiences = [
    {
      id: "south-desert",
      order: 1,
      title: "South Desert Focus",
      subtitle: "Burnt Gold and Silence",
      duration: "7 Days",
      difficulty: "Moderate",
      difficultyStars: 3,
      tags: ["Desert", "Adventure", "Cultural"],
      cities: ["Marrakech", "Aït Benhaddou", "Todra Gorge", "Merzouga", "Agafay", "Draa Valley"],
      description:
        "Journey into the Sahara's golden dunes with camel rides at sunset, traditional music around desert fires, and nights under infinite stars.",
      highlights: [
        "Merzouga dunes exploration",
        "Draa Valley oases visits",
        "Tuareg music experiences",
        "Traditional bread baking in sand",
        "Desert yoga + full-moon rituals",
      ],
      image: {
        src: "/itineraries/south-desert-focus/dunes-at-sunset-morocco.png",
        alt: "Camel caravan silhouette crossing Sahara desert dunes at sunset",
        position: "object-bottom"
      },
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
      order: 4,
      title: "Beach and Desert Combo",
      subtitle: "Salt + Spice",
      duration: "7 Days",
      difficulty: "Easy",
      difficultyStars: 2,
      tags: ["Beach", "Cultural", "Relaxation"],
      cities: ["Marrakech", "Agafay", "Ourika", "Oualidia", "Essaouira"],
      description:
        "Perfect blend of cultural immersion in Marrakech and nearby desert with coastal relaxation along Morocco's Atlantic shores.",
      highlights: [
        "Essaouira Beach exploration",
        "Marrakech Medina tours",
        "Art gallery visits",
        "Traditional hammam experiences",
        "Scenic coastal drives",
      ],
      image: {
        src: "/essaouira-beach-morocco.png",
        alt: "Essaouira beach with traditional fishing boats and seagulls",
        position: "object-center"
      },
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
    {
      id: "beach-escape",
      order: 5,
      title: "Only Beach Escape",
      subtitle: "Coastal Rituals",
      duration: "5-7 Days",
      difficulty: "Easy",
      difficultyStars: 1,
      tags: ["Beach", "Surf", "Wellness"],
      cities: ["Essaouira", "Tafedna", "Taghazout", "Imsouane", "Oualidia"],
      description:
        "Pure coastal bliss with surf, yoga, and wellness retreats along Morocco's stunning Atlantic coastline.",
      highlights: [
        "Taghazout surf lessons",
        "Yoga and wellness retreats",
        "Oualidia oyster experiences",
        "Scenic coastal drives",
        "Beach wellness sessions",
      ],
      image: {
        src: "/itineraries/only-beach-escape/essaouira-beach-camels.png",
        alt: "Surfer walking on Taghazout beach at sunset with surfboard",
        position: "object-bottom"
      },
      dayByDay: [
        { day: 1, title: "Arrive in Essaouira", description: "Arrival + sea reset." },
        { day: 2, title: "Essaouira to Tafedna", description: "Beach walks, coastal drive." },
        { day: 3, title: "Taghazout or Imsouane", description: "Yoga, surf, wellness retreat." },
        { day: 4, title: "Agadir or Mirleft", description: "Explore coast, slow afternoon." },
        { day: 5, title: "Oualidia stop", description: "Optional oyster farm visit." },
      ],
    },
    {
      id: "eclectic-immersion",
      order: 2,
      title: "A Bit of Everything",
      subtitle: "Eclectic Immersion",
      duration: "7-14 Days",
      difficulty: "Challenging",
      difficultyStars: 4,
      tags: ["Complete", "Adventure", "Cultural"],
      cities: ["Fez", "Chefchaouen", "Essaouira", "Marrakech", "Ait Benhaddou","Merzouga"],
      description:
        "The ultimate Morocco experience combining desert adventures, mountain landscapes, coastal relaxation, and cultural immersion.",
      highlights: [
        "Desert camping under stars",
        "Atlas Mountains hiking",
        "Coastal town exploration",
        "Traditional craft workshops",
        "Local cuisine masterclass",
      ],
      dayByDay: [
        { day: 1, title: "Land in Marrakech", description: "Arrival and orientation in the red city." },
        { day: 2, title: "Atlas + Aït Benhaddou", description: "Mountain landscapes and ancient kasbahs." },
        { day: 3, title: "Merzouga", description: "Journey to the Sahara dunes." },
        { day: 4, title: "Desert Immersion", description: "Full day in the desert with activities." },
        { day: 5, title: "Draa Valley / Oases", description: "Explore palm groves and oasis towns." },
        { day: 6, title: "Essaouira / Beach Reset", description: "Coastal relaxation and sea breeze." },
        { day: 7, title: "Marrakech Wrap-Up", description: "Final day in Marrakech before departure." },
      ],
    },
    {
      id: "cultural-trail",
      order: 3,
      title: "Cultural Trail",
      subtitle: "Timeless Cities",
      duration: "7-12 Days",
      difficulty: "Moderate",
      difficultyStars: 3,
      tags: ["Cultural", "Cities", "Heritage"],
      cities: ["Fez", "Meknes", "Volubilis", "Chefchaouen", "Rabat", "Casablanca", "Marrakech"],
      description:
        "Journey through Morocco's imperial cities and cultural heartlands, from ancient medinas to modern architecture.",
      highlights: [
        "Fez medina exploration",
        "Chefchaouen blue city",
        "Casablanca architecture",
        "Imperial cities tour",
        "Cultural heritage sites",
      ],
      image: {
        src: "/fez-medina-architecture.png",
        alt: "Intricate architectural details of Fez medina with traditional moroccan tilework",
        position: "object-center"
      },
      dayByDay: [
        { day: 1, title: "Arrive in Fez", description: "Welcome to Morocco's spiritual capital." },
        { day: 2, title: "Fez medina immersion", description: "Deep dive into the ancient medina." },
        { day: 3, title: "Meknes / Volubilis", description: "Imperial city and Roman ruins." },
        { day: 4, title: "Chefchaouen day + night", description: "The blue pearl of Morocco." },
        { day: 5, title: "Rabat stop / transfer", description: "Capital city and coastal views." },
        { day: 6, title: "Casablanca architecture + souk", description: "Modern Morocco and traditional markets." },
        { day: 7, title: "Marrakech begins", description: "Transition to the red city." },
      ],
    },
    {
      id: "quick-escape",
      order: 6,
      title: "Quick Escape",
      subtitle: "Marrakech Intensive",
      duration: "3-4 Days",
      difficulty: "Easy",
      difficultyStars: 1,
      tags: ["Short", "Cultural", "Relaxation"],
      cities: ["Marrakech", "Atlas Valley"],
      description:
        "Perfect short getaway focusing on Marrakech's highlights with art, spa experiences, and Atlas mountain views.",
      highlights: [
        "Marrakech medina tours",
        "Art gallery visits",
        "Spa and wellness experiences",
        "Atlas mountain views",
        "Rooftop dining experiences",
      ],
      image: {
        src: "/marrakech-rooftop-sunset.png",
        alt: "Sunset view over Marrakech medina from a rooftop terrace",
        position: "object-center"
      },
      dayByDay: [
        { day: 1, title: "Arrival + rooftop reset", description: "Land and get oriented with rooftop views." },
        { day: 2, title: "Art tour + spa experience", description: "Cultural immersion and relaxation." },
        { day: 3, title: "Atlas valley half-day + dinner", description: "Mountain escape and special dinner." },
        { day: 4, title: "Brunch + medina stroll + depart", description: "Final moments in the medina." },
      ],
    },
  ]

  // Sort experiences by order
  const sortedExperiences = [...experiences].sort((a, b) => a.order - b.order)

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="pb-10 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedExperiences.map((experience) => (
              <div
                key={experience.id}
                className="group bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={experience.image?.src || "/placeholder.svg"}
                    alt={experience.image?.alt || `${experience.title} - ${experience.subtitle}`}
                    fill
                    className={`${experience.image?.position || 'object-center'} group-hover:scale-105 transition-transform duration-300`}
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
