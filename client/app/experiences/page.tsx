"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import CallToAction from "@/components/call-to-action"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* First Row - Sticky */}
      <div className="sticky top-[220px] z-[38] grid grid-cols-1 md:grid-cols-2 h-[66vh] md:h-[66vh] bg-white">
        {/* Nomadic Echoes - White Background */}
        <div className="bg-[#2a4c61] p-8 flex flex-col h-full">
          <div className="flex flex-col md:flex-row gap-8 h-full">
            <div className="flex-1 flex flex-col">
              <div>
                <h3 className="text-xl font-medium text-white mb-4">"Nomadic Echoes" – Desert + Silence</h3>
                <p className="text-white/80 text-sm mb-6">
                  Embark on a transformative journey through Morocco's diverse desert landscapes. Choose your perfect desert experience: 
                  venture into the towering dunes of Merzouga for an authentic Sahara experience, explore the wild terrains of Zagora, 
                  or escape to the nearby Agafay desert for a quick desert retreat.
                </p>
                <p className="text-white/80 text-sm mb-6">
                  Each destination offers its own unique charm - from the mystical silence of deep desert nights to the rich cultural 
                  heritage of oasis valleys. Experience traditional Berber hospitality, sunset camel treks, starlit dinners, and 
                  the timeless rhythm of desert life.
                </p>
              </div>
              <div className="mt-auto">
                <Button className="bg-[#f9d597] hover:bg-[#9b847b] text-[#2a4c61]">
                  Plan Your Trip
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-1/2 h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/experiences/nomadic/nomadic-accomodations-morocco.png"
                  alt="Luxury nomadic accommodations in Morocco"
                  fill
                  className="object-cover rounded-lg"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Art Medina - Blue Background */}
        <div className="bg-white p-8 flex flex-col h-full">
          <div className="flex flex-col md:flex-row gap-8 h-full">
            <div className="flex-1 flex flex-col">
              <div>
                <h3 className="text-xl font-medium text-[#2a4c61] mb-4">"Art Medina" – Urban Creative Pulse</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Immerse yourself in Morocco's vibrant artistic heritage through curated gallery visits and hands-on experiences. 
                  Discover contemporary Moroccan art at the renowned Jajjah by Hajjaj and Loft Gallery, where traditional meets modern.
                </p>
                <p className="text-gray-600 text-sm mb-6">
                  Engage with local artisans in intimate calligraphy workshops and explore hidden ateliers tucked away in the medina's 
                  labyrinthine streets. Each visit is carefully curated to showcase the dynamic evolution of Moroccan artistry.
                </p>
              </div>
              <div className="mt-auto">
                <Button className="bg-[#f9d597] hover:bg-[#9b847b] text-[#2a4c61]">
                  Plan Your Trip
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/experiences/art-medina/art-design.png"
                  alt="Art Medina - Urban Creative Pulse"
                  fill
                  className="object-cover rounded-lg"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row - Sticky */}
      <div className="sticky top-[220px] z-[39] grid grid-cols-1 md:grid-cols-2 h-[66vh] md:h-[66vh] bg-white">
        {/* Raw Luxury - White Background */}
        <div className="bg-white p-8 flex flex-col h-full">
          <div className="flex flex-col md:flex-row gap-8 h-full">
            <div className="flex-1 flex flex-col">
              <div>
                <h3 className="text-xl font-medium text-[#2a4c61] mb-4">"Raw Luxury" – Nature + Wellness</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Discover Morocco's hidden natural sanctuaries: from the lush Ourika Valley and serene Bin El Ouidane to the 
                  majestic Akchour Waterfalls, Paradise Valley, and the stunning Ouzoud cascades. Each location offers a unique 
                  blend of natural beauty and wellness experiences.
                </p>
                <p className="text-gray-600 text-sm mb-6">
                  Immerse yourself in forest walks and plant-based retreats, engage in deep herbalist sessions, and unwind with 
                  traditional hammam treatments. Rest in carefully selected eco-lodges and spa hotels that complement the natural 
                  surroundings while providing modern comforts.
                </p>
              </div>
              <div className="mt-auto">
                <Button className="bg-[#f9d597] hover:bg-[#9b847b] text-[#2a4c61]">
                  Plan Your Trip
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/experiences/nature-wellness/morocco-hammam.png"
                  alt="Raw Luxury - Moroccan Hammam"
                  fill
                  className="object-cover rounded-lg"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Coastal Escape - Brown Background */}
        <div className="bg-[#847166] p-8 flex flex-col h-full">
          <div className="flex flex-col md:flex-row gap-8 h-full">
            <div className="flex-1 flex flex-col">
              <div>
                <h3 className="text-xl font-medium text-white mb-4">"Coastal Escape" – Surf + Yoga</h3>
                <p className="text-white/80 text-sm mb-6">
                  Follow the rhythm of the Atlantic waves on our signature coastal route: Essaouira → Tafedna → Taghazout → 
                  Imsouane → Sidi Kaoki → Mirleft → Oualidia. Each stop offers its own unique blend of surf culture and 
                  coastal charm.
                </p>
                <p className="text-white/80 text-sm mb-6">
                  Immerse yourself in surf lessons for all levels, explore vibrant seafood markets, and unwind with traditional 
                  herbal treatments and slow hammam sessions. Optional extensions include a Dakhla leg with outbound from Agadir, 
                  and exclusive private cooking sessions focusing on slow cooking and raw food preparation.
                </p>
              </div>
              <div className="mt-auto">
                <Button className="bg-[#f9d597] hover:bg-[#9b847b] text-[#2a4c61]">
                  Plan Your Trip
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/experiences/coastal-escape/coastal-escape.png"
                  alt="Coastal Escape - Surf and Yoga"
                  fill
                  className="object-cover rounded-lg"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* Third Row - Fixed */}
      <div className="relative z-[40] grid grid-cols-1 md:grid-cols-2 h-[66vh] md:h-[66vh]">
        {/* Sacred Morocco - Purple Background */}
        <div className="bg-[#2a4c61] p-8 flex flex-col h-full">
          <div className="flex flex-col md:flex-row gap-8 h-full">
            <div className="flex-1 flex flex-col">
              <div>
                <h3 className="text-xl font-medium text-white mb-4">"Sacred Morocco" – Spiritual Routes</h3>
                <p className="text-white/80 text-sm mb-6">
                  Embark on a spiritual journey through Morocco's most sacred cities: Fez, Meknes, Rabat, Casablanca, and Marrakech. 
                  Each destination offers unique insights into Morocco's rich spiritual heritage through visits to historic Zawiyas 
                  and immersion in Sufi practices.
                </p>
                <p className="text-white/80 text-sm mb-6">
                  Explore ancient medina mosques and discover the depth of Islamic art through expert-led tours. Enhance your 
                  experience with optional scholar-led Quranic calligraphy sessions or deep-dive medina history walks, connecting 
                  with centuries of spiritual wisdom.
                </p>
              </div>
              <div className="mt-auto">
                <Button className="bg-[#f9d597] hover:bg-[#9b847b] text-[#2a4c61]">
                  Plan Your Trip
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/experiences/sacred-morocco/food-and-tea-morocco-experience.png"
                  alt="Sacred Morocco - Spiritual Routes"
                  fill
                  className="object-cover rounded-lg"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Timeless Cities - White Background */}
        <div className="bg-white p-8 flex flex-col h-full">
          <div className="flex flex-col md:flex-row gap-8 h-full">
            <div className="flex-1 flex flex-col">
              <div>
                <h3 className="text-xl font-medium text-[#2a4c61] mb-4">"Timeless Cities" – Cultural Core</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Journey through Morocco's most iconic cities: Fez, Meknes, Rabat, Casablanca, Marrakech, and the blue pearl 
                  Chefchaouen. Each city tells its own story through centuries-old architecture, bustling markets, and living 
                  traditions.
                </p>
                <p className="text-gray-600 text-sm mb-6">
                  Choose between our carefully crafted 7-day or 14-day itineraries, each offering an immersive experience into 
                  Morocco's rich cultural heritage. Enhance your journey with an optional desert extension, perfectly complementing 
                  your urban exploration.
                </p>
              </div>
              <div className="mt-auto">
                <Button className="bg-[#f9d597] hover:bg-[#9b847b] text-[#2a4c61]">
                  Plan Your Trip
                </Button>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 h-full">
              <div className="relative w-full h-full">
                <Image
                  src="/fez-medina-architecture.png"
                  alt="Timeless Cities - Cultural Core"
                  fill
                  className="object-cover rounded-lg"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="relative z-[41]">
        <CallToAction />
      </div>
    </div>
  )
}