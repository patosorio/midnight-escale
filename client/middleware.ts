import { NextRequest, NextResponse } from 'next/server'
import { verifyIdToken } from '@/lib/firebase/admin'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the request is for admin routes or protected API routes
  const isAdminRoute = pathname.startsWith('/admin')
  const isProtectedApiRoute = pathname.startsWith('/api/upload-image') || pathname.startsWith('/api/delete-image')
  
  // Allow login page to pass through
  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  // For admin routes and protected API routes, check authentication
  if (isAdminRoute || isProtectedApiRoute) {
    // Get the Firebase ID token from cookies
    const token = request.cookies.get('firebase-auth-token')?.value
    
    if (!token) {
      // Redirect to login for admin routes
      if (isAdminRoute) {
        return NextResponse.redirect(new URL('/admin/login', request.url))
      }
      // Return 401 for API routes
      if (isProtectedApiRoute) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
    }

    // Verify the token using Firebase Admin SDK
    try {
      const decodedToken = await verifyIdToken(token!)
      if (!decodedToken) {
        throw new Error('Invalid token')
      }
    } catch (error) {
      if (isAdminRoute) {
        return NextResponse.redirect(new URL('/admin/login', request.url))
      }
      if (isProtectedApiRoute) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/upload-image',
    '/api/delete-image'
  ]
}
