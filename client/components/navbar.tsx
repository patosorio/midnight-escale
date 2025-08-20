"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-8">
            <div className="font-sans text-lg font-medium tracking-[0.1em] text-[#2a4c61]">
              <Link href="/" className="hover:text-[#9b847b] transition-colors">MIDNIGHT ESCALE</Link>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="/experiences" className="text-sm text-[#2a4c61] hover:text-[#9b847b] transition-colors font-medium">
                Experiences
              </Link>
              <Link href="/itineraries" className="text-sm text-[#2a4c61] hover:text-[#9b847b] transition-colors font-medium">
                Itineraries
              </Link>
              <Link href="/services" className="text-sm text-[#2a4c61] hover:text-[#9b847b] transition-colors font-medium">
                Services
              </Link>
              <Link href="/journal" className="text-sm text-[#2a4c61] hover:text-[#9b847b] transition-colors font-medium">
                Journal
              </Link>
              <Link href="/contact" className="text-sm text-[#2a4c61] hover:text-[#9b847b] transition-colors font-medium">
                Contact
              </Link>
            </div>
          </div>
          <Button className="bg-[#2a4c61] hover:bg-[#9b847b] text-white text-sm px-4 py-2 h-8">Start Journey</Button>
        </div>
      </div>
    </nav>
  )
}
