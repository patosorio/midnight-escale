export interface DayByDay {
  day: number;
  title: string;
  description?: string;
}

export interface ImageInfo {
  src: string;
  alt: string;
  position?: string;
}

export interface Itinerary {
  id: string;
  order: number;
  title: string;
  subtitle: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  difficultyStars: number;
  tags: string[];
  cities: string[];
  description: string;
  highlights: string[];
  thumbnail?: ImageInfo;
  dayByDay: DayByDay[];
}