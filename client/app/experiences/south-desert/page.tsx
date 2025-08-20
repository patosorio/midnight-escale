import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, MapPin, Users, Star } from "lucide-react"
import Link from "next/link"

export default function SouthDesertPage() {
  const itinerary = [
    {
      day: 1,
      title: "Marrakech Arrival",
      description:
        "Land, private driver waiting. Quick espresso at a medina rooftop. Optional Hammam + welcome dinner.",
      highlights: ["Airport Transfer", "Medina Introduction", "Welcome Dinner"],
      accommodation: "Luxury Riad Marrakech",
    },
    {
      day: 2,
      title: "Into the Mountains",
      description: "Drive via Tizi n'Tichka. Stop in Telouet. Explore Aït Benhaddou. Sleep in nearby kasbah.",
      highlights: ["Atlas Mountains", "Telouet Kasbah", "Aït Benhaddou UNESCO Site"],
      accommodation: "Historic Kasbah Lodge",
    },
    {
      day: 3,
      title: "Into the Dunes",
      description: "Todra Gorge route. Camel ride at sunset. Music, desert fire. Night in dunes.",
      highlights: ["Todra Gorge", "Camel Trekking", "Desert Camp", "Traditional Music"],
      accommodation: "Luxury Desert Camp",
    },
    {
      day: 4,
      title: "Desert Rituals",
      description: "Hike or quad. Nomadic tea stop. Optional stargazing guide. Sleep under stars.",
      highlights: ["Desert Activities", "Nomadic Culture", "Stargazing", "Desert Silence"],
      accommodation: "Desert Camp Under Stars",
    },
    {
      day: 5,
      title: "Oases Return",
      description: "Drive back via Fint or Draa Valley. Local meal + night outside Agafay.",
      highlights: ["Draa Valley", "Palm Oases", "Local Cuisine", "Agafay Desert"],
      accommodation: "Agafay Luxury Camp",
    },
    {
      day: 6,
      title: "Slow Marrakech",
      description: "Chill, shop, visit boutique galleries. Rooftop dinner.",
      highlights: ["Art Galleries", "Shopping", "Relaxation", "Rooftop Dining"],
      accommodation: "Luxury Riad Marrakech",
    },
    {
      day: 7,
      title: "Departure",
      description: "Final breakfast, last-minute shopping, departure transfer.",
      highlights: ["Final Breakfast", "Shopping", "Airport Transfer"],
      accommodation: "Day Use Until Departure",
    },
  ]

  const included = [
    "24/7 Personal Driver & Vehicle",
    "Curated Welcome Pack",
    "All Accommodations (Luxury Riads & Desert Camps)",
    "Daily Breakfast & Select Meals",
    "Camel Trekking Experience",
    "Desert Camp with Traditional Music",
    "Professional Stargazing Guide",
    "All Entrance Fees & Activities",
    "Airport Transfers",
  ]

  const notIncluded = [
    "International Flights",
    "Travel Insurance",
    "Personal Expenses",
    "Alcoholic Beverages",
    "Optional Activities",
    "Tips & Gratuities",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-serif text-2xl font-bold text-primary">
              MIDNIGHT ESCALES
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/experiences" className="text-primary font-medium">
                Experiences
              </Link>
              <Link href="/destinations" className="text-foreground hover:text-primary transition-colors">
                Destinations
              </Link>
              <Link href="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/journal" className="text-foreground hover:text-primary transition-colors">
                Journal
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <Button className="bg-primary hover:bg-primary/90">Book Now</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/sahara-caravan-sunset.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="bg-primary text-primary-foreground mb-4">7-Day Journey</Badge>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">South Desert Focus</h1>
          <p className="text-2xl md:text-3xl mb-4 font-light italic">Burnt Gold and Silence</p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Journey into the Sahara's golden dunes with camel rides at sunset, traditional music around desert fires,
            and nights under infinite stars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Book This Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
            >
              Download Itinerary
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Overview */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                The Ultimate Desert Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                This carefully crafted 7-day journey takes you deep into Morocco's most mystical landscapes. From the
                bustling souks of Marrakech to the infinite silence of the Sahara, experience the profound beauty of
                Morocco's desert regions.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Sleep under a canopy of stars, ride camels across golden dunes, and connect with nomadic traditions that
                have endured for centuries. This is more than a trip—it's a transformative journey into the heart of
                Morocco.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full mb-3">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="font-semibold text-foreground">7 Days</div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full mb-3">
                    <Users className="h-6 w-6" />
                  </div>
                  <div className="font-semibold text-foreground">2-8 People</div>
                  <div className="text-sm text-muted-foreground">Group Size</div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full mb-3">
                    <Star className="h-6 w-6" />
                  </div>
                  <div className="font-semibold text-foreground">Moderate</div>
                  <div className="text-sm text-muted-foreground">Difficulty</div>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full mb-3">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="font-semibold text-foreground">From €3,500</div>
                  <div className="text-sm text-muted-foreground">Per Person</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/desert-camp-luxury.png" alt="Luxury desert camp" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Day-by-Day Itinerary</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every moment carefully curated to reveal the magic of Morocco's desert landscapes.
            </p>
          </div>

          <div className="space-y-8">
            {itinerary.map((day, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                        <span className="text-2xl font-bold">{day.day}</span>
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{day.title}</h3>
                      <p className="text-sm text-muted-foreground">{day.accommodation}</p>
                    </div>
                    <div className="lg:w-3/4">
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{day.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {day.highlights.map((highlight, highlightIndex) => (
                          <Badge key={highlightIndex} variant="secondary" className="text-sm">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">What's Included</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-3">
                  ✓
                </div>
                Included in Your Journey
              </h3>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className="w-8 h-8 bg-muted text-muted-foreground rounded-full flex items-center justify-center mr-3">
                  ✗
                </div>
                Not Included
              </h3>
              <ul className="space-y-3">
                {notIncluded.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready for Your Desert Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">
            Limited availability. Book now to secure your transformative journey into Morocco's golden heart.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Book This Experience
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Customize This Journey
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
