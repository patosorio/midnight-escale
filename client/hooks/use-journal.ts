"use client"

import { useState, useEffect } from 'react'
import { FirestoreService } from '@/lib/firestore'
import type { JournalPost } from '@/types'

interface UseJournalOptions {
  limit?: number
  tag?: string
}

export function useJournalPosts(options: UseJournalOptions = {}) {
  const [posts, setPosts] = useState<JournalPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await FirestoreService.getJournalPosts()
        
        // Filter by tag if specified
        let filteredData = options.tag
          ? data.filter(post => post.tags.includes(options.tag!))
          : data
        
        // Limit results if specified
        if (options.limit && options.limit > 0) {
          filteredData = filteredData.slice(0, options.limit)
        }
        
        setPosts(filteredData)
        setError(null)
      } catch (err) {
        console.error('Error fetching journal posts:', err)
        setError(err instanceof Error ? err : new Error('Failed to fetch journal posts'))
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [options.tag, options.limit])

  return {
    posts,
    loading,
    error,
    refetch: () => {
      setLoading(true)
      FirestoreService.getJournalPosts()
        .then(data => {
          let filteredData = options.tag
            ? data.filter(post => post.tags.includes(options.tag!))
            : data
          
          if (options.limit && options.limit > 0) {
            filteredData = filteredData.slice(0, options.limit)
          }
          
          setPosts(filteredData)
          setError(null)
        })
        .catch(err => {
          console.error('Error refetching journal posts:', err)
          setError(err instanceof Error ? err : new Error('Failed to fetch journal posts'))
        })
        .finally(() => setLoading(false))
    }
  }
}

// Hook for fetching a single journal post by ID
export function useJournalPost(id: string) {
  const [post, setPost] = useState<JournalPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await FirestoreService.getJournalPost(id)
        setPost(data)
        setError(null)
      } catch (err) {
        console.error('Error fetching journal post:', err)
        setError(err instanceof Error ? err : new Error('Failed to fetch journal post'))
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchPost()
    }
  }, [id])

  return {
    post,
    loading,
    error,
    refetch: () => {
      setLoading(true)
      FirestoreService.getJournalPost(id)
        .then(data => {
          setPost(data)
          setError(null)
        })
        .catch(err => {
          console.error('Error refetching journal post:', err)
          setError(err instanceof Error ? err : new Error('Failed to fetch journal post'))
        })
        .finally(() => setLoading(false))
    }
  }
}
