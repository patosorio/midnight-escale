import { Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-[41] bg-[#2a4c61] text-white py-12">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/4 mb-8 md:mb-0 text-center md:text-left px-4 sm:px-0">
            <div className="font-sans text-base sm:text-lg font-medium mb-3">MIDNIGHT ESCALE</div>
            <p className="text-white/80 mb-3 text-xs sm:text-sm leading-relaxed max-w-[250px] mx-auto md:mx-0">
              The feeling that you have always something new to discover.
            </p>
            <p className="text-white/60 text-[10px] sm:text-xs">WWW.MIDNIGHTESCALE.COM</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-end gap-8 md:gap-0 md:space-x-12 md:w-2/3">
            <div>
              <h4 className="font-semibold mb-3 text-[11px] sm:text-sm text-center md:text-right">Experiences</h4>
              <ul className="space-y-2 text-white/80 text-[10px] sm:text-xs text-center md:text-right">
                <li>
                  <a href="/experiences" className="hover:text-white transition-colors">
                    Desert Adventures
                  </a>
                </li>
                <li>
                  <a href="/experiences" className="hover:text-white transition-colors">
                    Coastal Retreats
                  </a>
                </li>
                <li>
                  <a href="/experiences" className="hover:text-white transition-colors">
                    Cultural Immersion
                  </a>
                </li>
                <li>
                  <a href="/experiences" className="hover:text-white transition-colors">
                    Wellness Journeys
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-[11px] sm:text-sm text-center md:text-right">Resources</h4>
              <ul className="space-y-2 text-white/80 text-[10px] sm:text-xs text-center md:text-right">
                <li>
                  <a href="/journal" className="hover:text-white transition-colors">
                    Travel Journal
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:text-white transition-colors">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/itineraries" className="hover:text-white transition-colors">
                    Custom Itineraries
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-[11px] sm:text-sm text-center md:text-right">Contact</h4>
              <ul className="space-y-2 text-white/80 text-[10px] sm:text-xs text-center md:text-right">
                <li>
                  <a href="tel:+351961405314" className="hover:text-white transition-colors">
                    +351 96 14 05 314
                  </a>
                </li>
                <li>
                  <a href="mailto:hi@midnightescale.com" className="hover:text-white transition-colors">
                    hi@midnightescale.com
                  </a>
                </li>
                <li className="flex space-x-4 pt-2 justify-center md:justify-end">
                  <a href="https://www.instagram.com/midnightescale" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60 text-xs">
        <p>&copy; {new Date().getFullYear()} Midnight Escale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
