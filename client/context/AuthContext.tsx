"use client"

import { createContext, useContext, type ReactNode } from 'react'
import { User } from 'firebase/auth'
import { signIn, logOut } from '../lib/api/auth'
import { useAuthStatus } from '../hooks/use-auth-status'

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function useAuth() {
  return useContext(AuthContext)
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { user, loading } = useAuthStatus()

  const login = async (email: string, password: string) => {
    const user = await signIn(email, password)
    if (user) {
      const token = await user.getIdToken()
      document.cookie = `firebase-auth-token=${token}; path=/; max-age=3600; secure; samesite=strict`
    }
  }

  const logout = async () => {
    await logOut()
    // Clear authentication cookie
    document.cookie = 'firebase-auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  }

  const value: AuthContextType = {
    user,
    loading,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
