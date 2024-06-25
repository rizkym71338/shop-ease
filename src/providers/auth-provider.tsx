'use client'

import { ReactNode, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'

import { LoaderScreen } from '@/components'
import { useSessionStore } from '@/stores'
import { fetcher } from '@/libs'

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { user } = useUser()

  const { session, setSession } = useSessionStore((state) => state)

  useEffect(() => {
    const fetch = async () => {
      const response = await fetcher(`/api/users/${user?.id}`)
      if (response.status === 200) setSession(response.data)
    }

    user?.id && fetch()
  }, [setSession, user?.id])

  if (!session) return <LoaderScreen />

  return children
}
