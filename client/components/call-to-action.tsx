"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-16 bg-[#9b847b] text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans text-2xl font-medium mb-4">Ready to Discover Morocco?</h2>
        <p className="text-sm mb-8 opacity-90 max-w-2xl mx-auto">
          Let us craft your perfect Moroccan journey. Every detail curated, every moment extraordinary.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-[#2a4c61] text-white hover:bg-white hover:text-[#2a4c61] text-sm px-6 py-2 transition-colors"
            onClick={() => window.location.href = "/contact"}
          >
            Get a quote
          </Button>
        </div>
      </div>
    </section>
  )
}
