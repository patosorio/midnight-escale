import { NextRequest, NextResponse } from 'next/server'
import { Storage } from '@google-cloud/storage'
import path from 'path'
import { verifyIdToken } from '@/lib/firebase/admin'

// Initialize Google Cloud Storage
const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: path.join(process.cwd(), 'google-credentials.json'),
})

const bucketName = process.env.GCS_BUCKET_NAME || 'midnight-escales-images'
const bucket = storage.bucket(bucketName)

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const token = request.cookies.get('firebase-auth-token')?.value
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
      await verifyIdToken(token)
    } catch (error) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('file') as File
    const path = formData.get('path') as string

    if (!file || !path) {
      return NextResponse.json(
        { error: 'File and path are required' },
        { status: 400 }
      )
    }

    console.log('Uploading file:', file.name, 'to path:', path)
    console.log('Bucket name:', bucketName)

    // Check if bucket exists
    const [exists] = await bucket.exists()
    if (!exists) {
      console.error('Bucket does not exist:', bucketName)
      return NextResponse.json(
        { error: `Bucket ${bucketName} does not exist` },
        { status: 500 }
      )
    }

    // Convert File to Buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload to Google Cloud Storage
    const fileUpload = bucket.file(path)
    await fileUpload.save(buffer, {
      metadata: {
        contentType: file.type,
      },
    })

    // Use public URL (bucket should be made public)
    const publicUrl = `https://storage.googleapis.com/${bucketName}/${path}`
    console.log('Upload successful, public URL:', publicUrl)

    return NextResponse.json({ url: publicUrl })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: `Failed to upload file: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}
