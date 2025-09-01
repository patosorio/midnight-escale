"use client"

import { useCurrentPage } from "@/hooks/use-current-page"
import { AuthProvider } from "@/context/AuthContext"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const currentPage = useCurrentPage()
  
  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col pt-14">
      <Navbar />
      {currentPage !== "home" && currentPage !== "" && <PageHeader />}
      <main className="flex-1 relative z-30">{children}</main>
      <Footer />
    </div>
    </AuthProvider>
  )
}
