"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import CallToAction from "@/components/call-to-action"
import { getStaticImageUrl } from "@/lib/image-urls"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">

      <section className="relative min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left side with background image */}
          <div 
            className="relative flex flex-col justify-center px-6 lg:px-10 py-16 overflow-hidden"
            style={{
              backgroundImage: `url("${getStaticImageUrl('/main/main-hero.png')}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>

            <div className="max-w-lg relative z-10">
              <h1 className="font-sans text-3xl lg:text-4xl text-white mb-12 tracking-wide font-medium">

              </h1>

              <div className="space-y-8">
                <div>
                  <h2 className="font-sans text-md font-bold text-black mb-4">What</h2>
                  <p className="text-white text-sm leading-relaxed font-light">
                    A bespoke luxury travel experience offering seamless, curated journeys through Morocco. Our service
                    provides exclusive access to accommodations, dining, shopping, and activities designed for
                    discerning travelers seeking authenticity and refinement.
                  </p>
                </div>

                <div>
                  <h2 className="font-sans text-md font-bold text-black mb-4">Where</h2>
                  <p className="text-white text-sm leading-relaxed font-light">
                    Across Morocco's most iconic and hidden gems: Marrakech, Fez, the Sahara, the coastal retreats of
                    Essaouira and Oualidia, and beyond. We craft experiences in riads, desert lodges, luxury camps, top
                    starred restaurants, and private boutiques.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Light with images */}
          <div className="bg-white hidden lg:flex flex-col justify-center p-8 lg:p-16">
            <div className="space-y-6">
                              <div className="grid grid-cols-2 gap-4">
                  <img
                    src={getStaticImageUrl('/main/hero-vertical-palm-tree.png')}
                    alt="Palm tree in the moroccan desert"
                    className="w-50 h-70 rounded-sm ml-20 mt-20"
                  />
                  <img
                    src={getStaticImageUrl('/main/hero-vertical-camels.png')}
                    alt="Berber desert with camels at fullmoonlight"
                    className="w-60 h-80 rounded-sm -mt-10"
                  />
              </div>
              
              <div className="relative">
                <img
                  src={getStaticImageUrl('/main/hero-horizontal.png')}
                  alt="Moroccan desert landscape with berber tents"
                  className="w-7/12 h-48 object-cover rounded-sm ml-50"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl font-light text-black mb-6">Signature Experiences</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Choose your perfect Moroccan journey from our curated offerings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Custom Trip Card */}
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#f9d597] rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="h-8 w-8 text-[#2a4c61]" />
                </div>
                <h3 className="font-sans text-xl font-light text-black mb-4">Custom Experiences</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Craft your unique Moroccan adventure with our bespoke experience ideas and personalized planning
                </p>
                <Button
                  className="w-full bg-[#2a4c61] hover:bg-[#2a4c61]/90 text-white"
                  onClick={() => (window.location.href = "/experiences")}
                >
                  Explore Ideas
                </Button>
              </CardContent>
            </Card>

            {/* Fixed Itineraries Card */}
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-[#2a4c61]">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#f9d597] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-[#2a4c61]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="font-sans text-xl font-light text-white mb-4">Fixed Itineraries</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Ready-to-book curated journeys with detailed day-by-day planning across Morocco's highlights
                </p>
                <Button
                  className="w-full bg-white hover:bg-white/90 text-[#2a4c61] font-medium"
                  onClick={() => (window.location.href = "/itineraries")}
                >
                  View Itineraries
                </Button>
              </CardContent>
            </Card>

            {/* Premium Services Card */}
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#f9d597] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-[#2a4c61]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="font-sans text-xl font-light text-black mb-4">Premium Services</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Luxury add-ons and exclusive services to elevate your Moroccan journey to extraordinary heights
                </p>
                <Button
                  className="w-full bg-[#2a4c61] hover:bg-[#2a4c61]/90 text-white"
                  onClick={() => (window.location.href = "/services")}
                >
                  Discover Services
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl font-light text-black mb-6">Traveler Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover what makes our Moroccan journeys unforgettable through the eyes of our guests
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-[#f9d597]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "The desert experience was absolutely magical. Every detail was perfectly orchestrated, from the camel
                  trek to the luxury camp under the stars."
                </p>
                <div className="text-sm">
                  <p className="font-medium text-black">Sarah & James</p>
                  <p className="text-gray-500">South Desert Focus Journey</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-[#f9d597]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">
                  "Midnight Escales created the perfect balance of adventure and luxury. The cultural immersion in Fez
                  was extraordinary."
                </p>
                <div className="text-sm">
                  <p className="font-medium text-black">Maria & Carlos</p>
                  <p className="text-gray-500">Cultural Trail Experience</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="border-[#2a4c61] text-[#2a4c61] hover:bg-[#2a4c61] hover:text-white bg-transparent"
              onClick={() => (window.location.href = "/journal")}
            >
              Read More Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}
