"use client"

import LoginCard from "@/components/auth/login-card"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function LoginPage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push("/admin")
    }
  }, [user, router])

  return (
    <div className="min-h-screen bg-gray-50 grid place-items-center px-4">
      <div className="w-full max-w-md -mt-32">
        <LoginCard />
      </div>
    </div>
  )
}