"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/context/AuthContext"

export default function LoginCard() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      console.log('Submitting login form with email:', email);
      await login(email, password)
      console.log('Login successful, redirecting...');
      router.push("/admin")
    } catch (err: any) {
      console.error('Login error:', err);
      // Extract the error message
      const errorMessage = err.message || "Invalid credentials"
      // Clean up Firebase error message
      const cleanError = errorMessage
        .replace('Firebase: ', '')
        .replace('Error (auth/', '')
        .replace(').', '')
        .replace(/-/g, ' ')
      setError(cleanError)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md p-8 shadow-lg">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-semibold text-[#2a4c61]">Welcome Back</h1>
        <p className="mt-2 text-sm text-gray-600">Sign in to access your dashboard</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full"
          />
        </div>

        {error && (
          <div className="text-sm text-red-500 text-center">{error}</div>
        )}

        <div className="flex justify-center pt-2">
          <Button
            type="submit"
            disabled={loading}
            className="bg-[#2a4c61] hover:bg-[#9b847b] text-white text-sm px-4 py-2 h-8"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                <span className="ml-2">Signing in...</span>
              </div>
            ) : (
              "Sign In"
            )}
          </Button>
        </div>
      </form>
    </Card>
  )
}