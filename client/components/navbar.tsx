"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

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
          
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-[#2a4c61] hover:bg-[#9b847b] text-white px-4 py-2 h-8"
            >
              Start Journey
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-[#2a4c61] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#2a4c61] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#2a4c61] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="absolute top-14 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
              <div className="px-4 py-6 space-y-4">
                <Link 
                  href="/experiences" 
                  className="block text-sm text-[#2a4c61] hover:text-[#9b847b] transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Experiences
                </Link>
                <Link 
                  href="/itineraries" 
                  className="block text-sm text-[#2a4c61] hover:text-[#9b847b] transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Itineraries
                </Link>
                <Link 
                  href="/services" 
                  className="block text-sm text-[#2a4c61] hover:text-[#9b847b] transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
                <Link 
                  href="/journal" 
                  className="block text-sm text-[#2a4c61] hover:text-[#9b847b] transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Journal
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-sm text-[#2a4c61] hover:text-[#9b847b] transition-colors font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
                <div className="pt-4 border-t border-gray-200">
                  <Link 
                    href="/contact" 
                    onClick={closeMobileMenu}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all w-full bg-[#2a4c61] hover:bg-[#9b847b] text-white px-4 py-2 h-10"
                  >
                    Start Journey
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
