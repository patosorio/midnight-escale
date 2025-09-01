/**
 * Google Cloud Storage Service
 * Handles image uploads to Google Cloud Storage bucket
 */

export class StorageService {
  private static bucketName = process.env.NEXT_PUBLIC_GCS_BUCKET_NAME || 'midnight-escales-images'
  private static baseUrl = `https://storage.googleapis.com/${this.bucketName}`

  /**
   * Upload an image file to Google Cloud Storage
   * @param file - The file to upload
   * @param path - The storage path (e.g., 'itineraries/{slug}/')
   * @param filename - Optional custom filename, defaults to file name with timestamp
   * @returns Promise with the download URL
   */
  static async uploadImage(
    file: File, 
    path: string, 
    filename?: string
  ): Promise<string> {
    try {
      // Generate unique filename if not provided
      const timestamp = Date.now()
      const fileExtension = file.name.split('.').pop()
      const finalFilename = filename || `${timestamp}.${fileExtension}`
      
      // Create FormData for upload
      const formData = new FormData()
      formData.append('file', file)
      formData.append('path', `${path}${finalFilename}`)
      
      // Upload to your backend API endpoint
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      })
      
      if (!response.ok) {
        throw new Error('Upload failed')
      }
      
      const result = await response.json()
      return result.url
    } catch (error) {
      console.error('Error uploading image:', error)
      throw new Error('Failed to upload image')
    }
  }

  /**
   * Delete an image from Google Cloud Storage
   * @param url - The full download URL of the image
   */
  static async deleteImage(url: string): Promise<void> {
    try {
      // Extract the path from the URL
      const path = url.replace(this.baseUrl + '/', '')
      
      // Delete via your backend API endpoint
      const response = await fetch('/api/delete-image', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path }),
      })
      
      if (!response.ok) {
        throw new Error('Delete failed')
      }
    } catch (error) {
      console.error('Error deleting image:', error)
      throw new Error('Failed to delete image')
    }
  }

  /**
   * Get storage path for different content types
   */
  static getStoragePath(contentType: 'itineraries' | 'experiences' | 'journal'): string {
    return `${contentType}/`
  }

  /**
   * Get storage path for specific content item
   */
  static getItemStoragePath(contentType: 'itineraries' | 'experiences' | 'journal', slug: string): string {
    return `${contentType}/${slug}/`
  }

  /**
   * Get the full URL for a given path
   */
  static getImageUrl(path: string): string {
    return `${this.baseUrl}/${path}`
  }
}
