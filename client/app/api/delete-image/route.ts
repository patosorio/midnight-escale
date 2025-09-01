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

export async function DELETE(request: NextRequest) {
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

    const { path } = await request.json()

    if (!path) {
      return NextResponse.json(
        { error: 'Path is required' },
        { status: 400 }
      )
    }

    // Delete from Google Cloud Storage
    const file = bucket.file(path)
    await file.delete()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete error:', error)
    return NextResponse.json(
      { error: 'Failed to delete file' },
      { status: 500 }
    )
  }
}
