"use client"

import { useState, useRef } from 'react'
import { Button } from './button'
import { Input } from './input'
import { Upload, X } from 'lucide-react'
import { StorageService } from '@/lib/storage'
import type { ImageInfo } from '@/types'

interface ImageUploadProps {
  value?: ImageInfo
  onChange: (imageInfo: ImageInfo | undefined) => void
  storagePath: string
  slug?: string
  className?: string
}

export default function ImageUpload({ value, onChange, storagePath, slug, className = '' }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(value?.src || null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file')
      return
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB')
      return
    }

    setUploading(true)
    try {
      // Create preview
      const previewUrl = URL.createObjectURL(file)
      setPreview(previewUrl)

      // Create the full path with slug if provided
      const fullPath = slug ? `${storagePath}${slug}/` : storagePath
      
      // Upload to Google Cloud Storage
      const downloadURL = await StorageService.uploadImage(file, fullPath)
      
      // Update form with new image info
      onChange({
        src: downloadURL,
        alt: file.name,
        position: 'object-center'
      })

      // Clean up preview URL
      URL.revokeObjectURL(previewUrl)
    } catch (error) {
      console.error('Upload failed:', error)
      alert('Failed to upload image. Please try again.')
      setPreview(null)
    } finally {
      setUploading(false)
    }
  }

  const handleRemove = async () => {
    if (value?.src) {
      try {
        await StorageService.deleteImage(value.src)
      } catch (error) {
        console.error('Failed to delete image from storage:', error)
      }
    }
    
    setPreview(null)
    onChange(undefined)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleAltChange = (alt: string) => {
    if (value) {
      onChange({ ...value, alt })
    }
  }

  const handlePositionChange = (position: string) => {
    if (value) {
      onChange({ ...value, position })
    }
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* File Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Thumbnail Image
        </label>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        <Button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          variant="outline"
          className="w-full"
        >
          {uploading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900 mr-2"></div>
              Uploading...
            </div>
          ) : (
            <div className="flex items-center">
              <Upload className="h-4 w-4 mr-2" />
              {preview ? 'Change Image' : 'Upload Image'}
            </div>
          )}
        </Button>
      </div>

      {/* Preview */}
      {preview && (
        <div className="relative">
          <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
            <Button
              type="button"
              onClick={handleRemove}
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Image Info Fields */}
      {value && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Alt Text
            </label>
            <Input
              value={value.alt}
              onChange={(e) => handleAltChange(e.target.value)}
              placeholder="Describe the image for accessibility"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Position
            </label>
            <select
              value={value.position || 'object-center'}
              onChange={(e) => handlePositionChange(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#2a4c61] focus:border-[#2a4c61] sm:text-sm rounded-md"
            >
              <option value="object-center">Center</option>
              <option value="object-top">Top</option>
              <option value="object-bottom">Bottom</option>
              <option value="object-left">Left</option>
              <option value="object-right">Right</option>
            </select>
          </div>
        </div>
      )}

      {/* Current Image Display (for editing) */}
      {value?.src && !preview && (
        <div className="relative">
          <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={value.src}
              alt={value.alt}
              className="w-full h-full object-cover"
            />
            <Button
              type="button"
              onClick={handleRemove}
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
