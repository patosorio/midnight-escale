import type { Itinerary, JournalPost } from '../types';
import { getStaticImageUrl } from './image-urls';



export const HARDCODED_ITINERARIES: Itinerary[] = [
  {
    id: "beach-marrakech",
    order: 2,
    title: "Beach + Marrakech Combo",
    subtitle: "Salt + Spice",
    duration: "7 Days",
    difficulty: "Easy",
    difficultyStars: 2,
    tags: ["Beach", "Cultural", "Relaxation"],
    cities: ["Marrakech", "Oualidia", "Essaouira"],
    description: "Perfect blend of cultural immersion in Marrakech and coastal relaxation along Morocco's Atlantic shores.",
    highlights: [
      "Essaouira Beach exploration",
      "Marrakech Medina tours",
      "Art gallery visits",
      "Traditional hammam experiences",
      "Scenic coastal drives",
    ],
    thumbnail: {
      src: getStaticImageUrl("/essaouira-beach-morocco.png"),
      alt: "Essaouira beach with traditional fishing boats and seagulls",
      position: "object-center"
    },
    dayByDay: [
      { day: 1, title: "Marrakech Arrival", description: "Land + reset. Optional dinner in hidden courtyard." },
      { day: 2, title: "Art Loop + Spa", description: "Museum, gallery walk. Hammam. Evening in the medina." },
      { day: 3, title: "Essaouira via Oualidia", description: "Drive coastal route. Stop for seafood. Reach the Atlantic." },
      { day: 4, title: "Surf + Sea Walk", description: "Beach day. Optional surf session or hammam." },
      { day: 5, title: "Return Marrakech", description: "Chill day. Rooftop meal." },
      { day: 6, title: "Flexible Medina Day", description: "Tailored activities or chill." },
      { day: 7, title: "Departure", description: "Final moments before departure." },
    ],
  },
];
