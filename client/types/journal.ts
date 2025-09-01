import { ImageInfo } from './itinerary';

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  content: string;
  publishedAt: string;
  author: string;
  thumbnail: ImageInfo;
  tags: string[];
  readingTime: string;
}
