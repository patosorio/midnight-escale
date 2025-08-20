import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import LayoutContent from "@/components/layout-content"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Midnight Escale - Luxury Morocco Travel Experiences",
  description:
    "Bespoke luxury travel experiences offering seamless, curated journeys through Morocco. Discover authentic refinement in the heart of Morocco.",
  authors: [{ name: "Midnight Escale", url: "https://midnightescale.com" }],
  creator: "Patricia Osorio",
  publisher: "Patricia Osorio",
  metadataBase: new URL("https://midnightescale.com"),
  openGraph: {
    title: "Midnight Escale - Luxury Morocco Travel Experiences",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} antialiased`}>
      <body className="font-sans">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  )
}
