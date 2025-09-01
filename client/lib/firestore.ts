import { 
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  type DocumentData,
  type QueryDocumentSnapshot,
  type DocumentReference
} from 'firebase/firestore';
import { db } from './firebase/firebase';
import type { Itinerary, JournalPost } from '../types';
import { HARDCODED_ITINERARIES } from './constants';

// Generic type for our collections
type Collection = 'itineraries' | 'journal';

// Helper to convert Firestore timestamp to ISO string
const convertTimestamps = (data: DocumentData) => {
  const result = { ...data };
  for (const [key, value] of Object.entries(data)) {
    if (value?.toDate instanceof Function) {
      result[key] = value.toDate().toISOString();
    }
  }
  return result;
};

// Generic CRUD operations
export class FirestoreService {
  // CREATE
  static async create<T extends DocumentData>(
    collectionName: Collection,
    data: T
  ): Promise<string> {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      return docRef.id;
    } catch (error) {
      console.error(`Error creating ${collectionName} document:`, error);
      throw error;
    }
  }

  // READ (single document)
  static async get<T>(
    collectionName: Collection,
    id: string
  ): Promise<T | null> {
    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef as any);
      
      if (!docSnap.exists()) {
        return null;
      }
      
      return {
        id: docSnap.id,
        ...convertTimestamps(docSnap.data() as DocumentData)
      } as T;
    } catch (error) {
      console.error(`Error getting ${collectionName} document:`, error);
      throw error;
    }
  }

  // READ (all documents)
  static async getAll<T>(
    collectionName: Collection,
    orderByField?: string
  ): Promise<T[]> {
    try {
      const q = orderByField 
        ? query(collection(db, collectionName), orderBy(orderByField))
        : collection(db, collectionName);
        
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        // Return hardcoded data as fallback
        switch (collectionName) {
          case 'itineraries':
            return HARDCODED_ITINERARIES as T[];
          default:
            return [];
        }
      }
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...convertTimestamps(doc.data())
      })) as T[];
    } catch (error) {
      console.error(`Error getting all ${collectionName} documents:`, error);
      // Return hardcoded data on error
      switch (collectionName) {
        case 'itineraries':
          return HARDCODED_ITINERARIES as T[];
        default:
          return [];
      }
    }
  }

  // UPDATE
  static async update<T extends DocumentData>(
    collectionName: Collection,
    id: string,
    data: Partial<T>
  ): Promise<void> {
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef as any, data as any);
    } catch (error) {
      console.error(`Error updating ${collectionName} document:`, error);
      throw error;
    }
  }

  // DELETE
  static async delete(
    collectionName: Collection,
    id: string
  ): Promise<void> {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef as any);
    } catch (error) {
      console.error(`Error deleting ${collectionName} document:`, error);
      throw error;
    }
  }

  // Specific collection methods with proper typing
  static async getItineraries(): Promise<Itinerary[]> {
    return this.getAll<Itinerary>('itineraries', 'order');
  }

  static async getItinerary(id: string): Promise<Itinerary | null> {
    return this.get<Itinerary>('itineraries', id);
  }



  static async getJournalPosts(): Promise<JournalPost[]> {
    return this.getAll<JournalPost>('journal', 'publishedAt');
  }

  static async getJournalPost(id: string): Promise<JournalPost | null> {
    return this.get<JournalPost>('journal', id);
  }
}
