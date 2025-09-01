import { Button } from "@/components/ui/button"
import CallToAction from "@/components/call-to-action"
import { Car, Gift, Home, Route, Sparkles, Users, ShoppingBag, ChefHat, Plane } from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {
  const coreServices = [
    {
      icon: <Car className="h-8 w-8" />,
      title: "24/7 Personal Driver",
      subtitle: "Always Included",
      description:
        "Your dedicated driver and vehicle for the entire journey, ensuring seamless transportation and local insights.",
      features: [
        "Professional multilingual driver",
        "Premium air-conditioned vehicle",
        "Flexible scheduling",
        "Local expertise and recommendations",
      ],

    },
    {
      icon: <Gift className="h-8 w-8" />,
      title: "Curated Welcome Pack",
      subtitle: "Always Included",
      description:
        "Thoughtfully selected Moroccan products to enhance your arrival and introduce you to local craftsmanship.",
      features: [
        "Artisanal Moroccan products",
        "Local delicacies and treats",
        "Cultural guidebook",
        "Personalized welcome note",
      ],

    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Premium Accommodations",
      subtitle: "Curated Selection",
      description:
        "Exclusive access to Morocco's finest riads, luxury lodges, and boutique hotels with preferential rates.",
      features: [
        "Luxury riads and hotels",
        "Desert camps and lodges",
        "Preferential booking rates",
        "Quality guarantee",
      ],

    },
    {
      icon: <Route className="h-8 w-8" />,
      title: "Tailor-Made Routes",
      subtitle: "Personalized Planning",
      description:
        "Custom itineraries designed around your interests, pace, and preferences for a truly personal journey.",
      features: [
        "Personalized route planning",
        "Flexible scheduling options",
        "Interest-based recommendations",
        "Pace adjustment capabilities",
      ],

    },
  ]

  const premiumServices = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Wellness Integration",
      description: "Spa treatments, yoga sessions, and wellness retreats seamlessly woven into your journey.",
      examples: [
        "Traditional hammam experiences",
        "Desert yoga sessions",
        "Argan oil treatments",
        "Meditation retreats",
      ],

    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Cultural Immersion",
      description: "Authentic encounters with local artisans, musicians, and cultural experts.",
      examples: [
        "Artisan workshop visits",
        "Traditional music sessions",
        "Local family dinners",
        "Cultural ceremonies",
      ],

    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Premium Shopping Access",
      description: "Exclusive access to Morocco's finest boutiques, artisan workshops, and luxury brands.",
      examples: [
        "Private boutique access",
        "Artisan workshop visits",
        "Luxury brand partnerships",
        "Custom piece commissioning",
      ],

    },
    {
      icon: <ChefHat className="h-8 w-8" />,
      title: "Private Chef Options",
      description: "Personal chefs for intimate dining experiences in riads or special locations.",
      examples: [
        "In-riad private dining",
        "Desert feast preparation",
        "Cooking demonstrations",
        "Market-to-table experiences",
      ],

    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Logistics & Coordination",
      description: "Complete travel coordination including flights, transfers, and special arrangements.",
      examples: [
        "Flight coordination assistance",
        "Airport transfer arrangements",
        "Special dietary accommodations",
        "Accessibility arrangements",
      ],

    },
  ]

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1920px] mx-auto">
          <div className="space-y-16">
            {/* Row 1: Included Services */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-light text-black mb-4">Included Services</h2>
                <p className="text-gray-600">
                  Core services that come standard with every journey, ensuring a premium experience.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="w-16 h-16 bg-[#f9d597] rounded-full flex items-center justify-center mb-4">
                        <div className="text-[#2a4c61]">{service.icon}</div>
                      </div>
                      <h3 className="text-lg font-medium text-black mb-1">{service.title}</h3>
                      <p className="text-[#9b847b] font-medium text-sm">{service.subtitle}</p>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 text-center">{service.description}</p>
                    <ul className="text-sm text-gray-500 space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-[#f9d597] rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Premium Services */}
            <div className="bg-white p-8 rounded-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-light text-black mb-4">Premium Add-Ons</h2>
                <p className="text-gray-600">
                  Elevated experiences and exclusive access that transform your journey into something extraordinary.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {premiumServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="w-12 h-12 bg-[#f9d597] rounded-full flex items-center justify-center mb-3">
                        <div className="text-[#2a4c61]">{service.icon}</div>
                      </div>
                      <h3 className="text-lg font-medium text-black">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 text-center">{service.description}</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      {service.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-[#f9d597] rounded-full mr-3 flex-shrink-0"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How Our Service Works - Horizontal Layout */}
      <div className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-black mb-4">How Our Service Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our seamless process ensures every detail is perfectly orchestrated for your Moroccan adventure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#f9d597] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-semibold text-black">1</span>
              </div>
              <h3 className="text-xl font-medium text-black mb-3">Share Your Vision</h3>
              <p className="text-gray-600 text-sm">
                Tell us about your interests, travel style, and dream experiences. We listen to every detail to
                understand your perfect Morocco.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f9d597] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-semibold text-black">2</span>
              </div>
              <h3 className="text-xl font-medium text-black mb-3">We Design & Coordinate</h3>
              <p className="text-gray-600 text-sm">
                Our experts craft a personalized itinerary with premium services, exclusive access, and seamless
                logistics handled by our team.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#f9d597] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-semibold text-black">3</span>
              </div>
              <h3 className="text-xl font-medium text-black mb-3">Experience Excellence</h3>
              <p className="text-gray-600 text-sm">
                Enjoy your bespoke journey with 24/7 support, premium accommodations, and our signature level of service
                throughout.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  )
}
