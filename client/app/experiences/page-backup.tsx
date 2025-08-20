import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin, Camera, Mountain, Waves, Building, Palmtree, Sun, Lightbulb, Compass } from 'lucide-react'
import Link from "next/link"

export default function ExperiencesPage() {
  const experienceIdeas = [
    {
      id: "wellness-retreat",
      title: "Wellness & Spa Retreats",
      subtitle: "Rejuvenation & Relaxation",
      description: "Combine traditional hammams, yoga sessions, and spa treatments in Morocco's most serene locations.",
      icon: <Sun className="h-8 w-8" />,
      image: "/morocco-wellness-spa.png",
      activities: ["Hammam Rituals", "Yoga Sessions", "Herbal Treatments", "Meditation"],
      featured: true,
    },
    {
      id: "culinary-journey",
      title: "Culinary Adventures",
      subtitle: "Taste & Tradition",
      description: "Discover Morocco's rich culinary heritage through cooking classes, market tours, and fine dining.",
      icon: <Building className="h-8 w-8" />,
      image: "/morocco-cooking-class.png",
      activities: ["Cooking Classes", "Market Tours", "Wine Tastings", "Private Chef"],
      featured: true,
    },
    {
      id: "adventure-sports",
      title: "Adventure & Sports",
      subtitle: "Thrill & Excitement",
      description: "From surfing the Atlantic waves to trekking the Atlas Mountains, adventure awaits.",
      icon: <Mountain className="h-8 w-8" />,
      image: "/morocco-adventure-sports.png",
      activities: ["Surfing", "Trekking", "Rock Climbing", "Quad Biking"],
      featured: false,
    },
    {
      id: "cultural-immersion",
      title: "Cultural Immersion",
      subtitle: "Heritage & Tradition",
      description: "Deep dive into Moroccan culture through art, music, crafts, and local community experiences.",
      icon: <Compass className="h-8 w-8" />,
      image: "/morocco-cultural-arts.png",
      activities: ["Art Workshops", "Music Sessions", "Craft Learning", "Local Visits"],
      featured: false,
    },
    {
      id: "photography-tours",
      title: "Photography Expeditions",
      subtitle: "Capture & Create",
      description: "Professional photography tours to Morocco's most photogenic locations with expert guidance.",
      icon: <Camera className="h-8 w-8" />,
      image: "/morocco-photography-tour.png",
      activities: ["Golden Hour Shoots", "Portrait Sessions", "Landscape Photography", "Street Photography"],
      featured: false,
    },
    {
      id: "luxury-shopping",
      title: "Luxury Shopping",
      subtitle: "Style & Sophistication",
      description: "Curated shopping experiences in Morocco's finest boutiques, artisan workshops, and luxury stores.",
      icon: <Lightbulb className="h-8 w-8" />,
      image: "/morocco-luxury-shopping.png",
      activities: ["Boutique Tours", "Artisan Visits", "Personal Shopping", "Custom Tailoring"],
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <Link href="/" className="font-sans text-lg font-bold text-black tracking-wide">
              MIDNIGHT ESCALES
            </Link>
            <div className="hidden md:flex space-x-6">
              {/* <CHANGE> Updated navigation links */}
              <Link href="/itineraries" className="text-sm text-black hover:text-steel transition-colors font-medium">
                Itineraries
              </Link>
              <Link href="/experiences" className="text-sm text-black hover:text-steel transition-colors font-medium">
                Experiences
              </Link>
              <Link href="/services" className="text-sm text-black hover:text-steel transition-colors font-medium">
                Services
              </Link>
              <Link href="/journal" className="text-sm text-black hover:text-steel transition-colors font-medium">
                Journal
              </Link>
              <Link href="/contact" className="text-sm text-black hover:text-steel transition-colors font-medium">
                Contact
              </Link>
            </div>
            <Button className="bg-steel hover:bg-steel/90 text-white text-sm px-4 py-2 h-8">Start Journey</Button>
          </div>
        </div>
      </nav>

      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-14">
        <div className="absolute inset-0 bg-[#2a4c61]"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          {/* <CHANGE> Updated title and description for custom experiences */}
          <h1 className="font-sans text-4xl md:text-5xl font-bold mb-6 tracking-wide">Custom Experiences</h1>
          <p className="text-lg md:text-xl font-light">
            Personalized experiences tailored to your interests. Tell us what inspires you, and we'll create your perfect Moroccan adventure.
          </p>
        </div>
      </section>

      {/* Experience Ideas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-black mb-6">Experience Ideas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get inspired by these experience themes. We'll customize each one to match your preferences and create something uniquely yours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experienceIdeas.map((idea, index) => (
              <Card
                key={index}
                className={`group cursor-pointer hover:shadow-xl transition-all duration-300 ${
                  idea.featured ? "lg:col-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={idea.image || "/placeholder.svg"}
                    alt={idea.title}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      idea.featured ? "h-64" : "h-48"
                    }`}
                  />
                  {idea.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#f9d597] text-black text-xs">Popular</Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2a4c61] text-white rounded-full mr-4">
                      {idea.icon}
                    </div>
                    <div>
                      <h3 className="font-sans text-xl font-bold text-black">{idea.title}</h3>
                      <p className="text-[#9b847b] font-medium text-sm">{idea.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{idea.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {idea.activities.slice(0, 3).map((activity, actIndex) => (
                      <Badge key={actIndex} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        {activity}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-[#2a4c61] hover:bg-[#2a4c61]/90 text-white transition-colors text-sm"
                  >
                    Customize This Experience
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-black mb-6">How Custom Experiences Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our process ensures every detail is tailored to your preferences and travel style.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2a4c61] text-white rounded-full mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-sans text-xl font-bold text-black mb-4">Tell Us Your Dreams</h3>
              <p className="text-gray-600 text-sm">
                Share your interests, preferences, and travel style. What experiences inspire you most?
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2a4c61] text-white rounded-full mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-sans text-xl font-bold text-black mb-4">We Design & Propose</h3>
              <p className="text-gray-600 text-sm">
                Our experts craft a personalized itinerary combining your interests with our local knowledge.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#2a4c61] text-white rounded-full mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-sans text-xl font-bold text-black mb-4">Perfect & Experience</h3>
              <p className="text-gray-600 text-sm">
                We refine every detail until it's perfect, then you enjoy your unique Moroccan adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <CHANGE> Updated CTA section with new background color and button colors */}
      <section className="py-20 bg-[#2a4c61] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Experience?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's design something extraordinary together. Share your vision and we'll make it reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#f9d597] text-black hover:bg-[#f9d597]/90">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#2a4c61] bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
