"use client"

import { useAuth } from '@/context/AuthContext'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import PageHeader from '@/components/page-header'

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const { user, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== '/admin/login' && !loading && !user) {
      router.push('/admin/login')
    }
  }, [user, loading, router, pathname])

  if (loading) {
    return (
      <div className="min-h-screen bg-white font-sans flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#454772]"></div>
      </div>
    )
  }

  // Don't apply auth protection to login page
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  if (!user) {
    return null
  }

  return (
    <div className="bg-gray-100">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>
    </div>
  )
}