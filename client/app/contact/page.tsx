import { Button } from "@/components/ui/button"
import CallToAction from "@/components/call-to-action"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+351 96 14 05 314"],
      description: "Available 24/7 for our travelers",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["hi@midnightescale.com"],
      description: "Response within 2 hours",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Offices",
      details: ["Marrakech, Morocco", "Barcelona, Spain"],
      description: "Local expertise, global reach",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      details: ["24/7 Traveler Support", "9AM-7PM Consultation"],
      description: "Morocco time (GMT+1)",
    },
  ]

  const faqs = [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking 4-8 weeks in advance for optimal availability, especially during peak seasons (October-April). However, we can accommodate last-minute requests subject to availability.",
    },
    {
      question: "What's included in the welcome pack?",
      answer:
        "Our curated welcome pack includes artisanal Moroccan products, local delicacies, a personalized cultural guidebook, and a handwritten welcome note from our team.",
    },
    {
      question: "Can you accommodate dietary restrictions?",
      answer:
        "Absolutely. We work with all our restaurant and accommodation partners to ensure dietary requirements are met, including vegetarian, vegan, gluten-free, and religious dietary needs.",
    },
    {
      question: "What happens if weather affects my itinerary?",
      answer:
        "Our team monitors weather conditions and has contingency plans for all experiences. We'll seamlessly adjust your itinerary to ensure you have an amazing experience regardless of conditions.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Contact Form & Info */}
      <section className="pb-10 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                          First Name *
                        </Label>
                        <Input id="firstName" className="mt-2" placeholder="Your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                          Last Name *
                        </Label>
                        <Input id="lastName" className="mt-2" placeholder="Your last name" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </Label>
                      <Input id="email" type="email" className="mt-2" placeholder="your@email.com" />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number
                      </Label>
                      <Input id="phone" type="tel" className="mt-2" placeholder="+1 (555) 123-4567" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="travelers" className="text-sm font-medium text-foreground">
                          Number of Travelers
                        </Label>
                        <Select>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select travelers" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Traveler</SelectItem>
                            <SelectItem value="2">2 Travelers</SelectItem>
                            <SelectItem value="3-4">3-4 Travelers</SelectItem>
                            <SelectItem value="5-8">5-8 Travelers</SelectItem>
                            <SelectItem value="9+">9+ Travelers</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="duration" className="text-sm font-medium text-foreground">
                          Trip Duration
                        </Label>
                        <Select>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3-4">3-4 Days</SelectItem>
                            <SelectItem value="5-7">5-7 Days</SelectItem>
                            <SelectItem value="8-10">8-10 Days</SelectItem>
                            <SelectItem value="11-14">11-14 Days</SelectItem>
                            <SelectItem value="15+">15+ Days</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="interests" className="text-sm font-medium text-foreground">
                        Interests & Preferences
                      </Label>
                      <div className="mt-3 space-y-3">
                        {[
                          "Desert Adventures",
                          "Cultural Immersion",
                          "Beach & Coast",
                          "Wellness & Spa",
                          "Gastronomy",
                          "Shopping & Crafts",
                          "Photography",
                          "Adventure Sports",
                        ].map((interest) => (
                          <div key={interest} className="flex items-center space-x-2">
                            <Checkbox id={interest.toLowerCase().replace(/\s+/g, "-")} />
                            <Label
                              htmlFor={interest.toLowerCase().replace(/\s+/g, "-")}
                              className="text-sm text-muted-foreground"
                            >
                              {interest}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="budget" className="text-sm font-medium text-foreground">
                        Budget Range (per person)
                      </Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1500-2500">€1,500 - €2,500</SelectItem>
                          <SelectItem value="2500-4000">€2,500 - €4,000</SelectItem>
                          <SelectItem value="4000-6000">€4,000 - €6,000</SelectItem>
                          <SelectItem value="6000+">€6,000+</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-foreground">
                        Tell Us About Your Dream Trip
                      </Label>
                      <Textarea
                        id="message"
                        className="mt-2"
                        rows={4}
                        placeholder="Share your vision, special occasions, must-see places, or any specific requirements..."
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" />
                      <Label htmlFor="newsletter" className="text-sm text-muted-foreground">
                        Subscribe to our newsletter for travel inspiration and exclusive offers
                      </Label>
                    </div>

                    <Button className="w-full bg-[#2a4c61] hover:bg-[#454772]/90 text-white text-lg py-6">
                      Send My Request
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="font-sans text-4xl font-light text-foreground mb-4">Get in Touch</h2>
                <p className="text-lg text-muted-foreground">
                  Multiple ways to reach our team of Morocco travel experts.
                </p>
              </div>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full mr-4">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-sans text-xl font-light text-foreground mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground mb-1">
                              {detail.includes('@') ? (
                                <a href={`mailto:${detail}`} className="hover:text-primary transition-colors">
                                  {detail}
                                </a>
                              ) : (
                                detail
                              )}
                            </p>
                          ))}
                          <p className="text-sm text-primary font-medium">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Response Promise */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-sans text-2xl font-light mb-4">Our Promise</h3>
                  <p className="text-lg opacity-90 mb-4">
                    We respond to all inquiries within 2 hours during business hours, and provide 24/7 support for our
                    travelers.
                  </p>
                  <p className="text-sm opacity-75">Your dream Moroccan journey is just one conversation away.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl md:text-5xl font-light text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about planning your Moroccan adventure.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-sans text-xl font-light text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Have a different question?</p>
            <Button variant="outline" className="bg-transparent">
              View All FAQs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  )
}
