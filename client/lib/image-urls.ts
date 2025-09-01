/**
 * Image URL management utility
 * Handles switching between local public assets and Google Cloud Storage URLs
 */

const isProduction = process.env.NODE_ENV === 'production'
const GCS_BASE_URL = process.env.NEXT_PUBLIC_GCS_BASE_URL || 'https://storage.googleapis.com/midnight-escales-images'

/**
 * Get the appropriate URL for static images
 * In development: uses local public folder
 * In production: uses Google Cloud Storage
 */
export function getStaticImageUrl(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  if (isProduction) {
    return `${GCS_BASE_URL}/${cleanPath}`
  }
  
  return `/${cleanPath}`
}

/**
 * Static image paths mapping
 * These are the images that will be uploaded to GCS
 */
export const STATIC_IMAGES = {
  // Main images
  main: {
    hero: '/main/main-hero.png',
    heroHorizontal: '/main/hero-horizontal.png',
    heroVerticalCamels: '/main/hero-vertical-camels.png',
    heroVerticalPalmTree: '/main/hero-vertical-palm-tree.png',
  },
  
  // Experience images
  experiences: {
    artDesign: '/experiences/art-medina/art-design.png',
    coastalEscape: '/experiences/coastal-escape/coastal-escape.png',
    moroccoHammam: '/experiences/nature-wellness/morocco-hammam.png',
    nomadicAccommodations: '/experiences/nomadic/nomadic-accomodations-morocco.png',
    dunesAtSunset: '/experiences/nomadic/dunes-at-sunset-morocco.png',
    foodAndTea: '/experiences/sacred-morocco/food-and-tea-morocco-experience.png',
  }
} as const

/**
 * Helper function to get static image URL by key
 */
export function getStaticImage(key: keyof typeof STATIC_IMAGES.main | keyof typeof STATIC_IMAGES.experiences): string {
  const imagePath = STATIC_IMAGES.main[key as keyof typeof STATIC_IMAGES.main] || 
                   STATIC_IMAGES.experiences[key as keyof typeof STATIC_IMAGES.experiences]
  
  if (!imagePath) {
    throw new Error(`Static image key "${key}" not found`)
  }
  
  return getStaticImageUrl(imagePath)
}
