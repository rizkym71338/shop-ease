'use client'

import { UserButton } from '@clerk/nextjs'

import { useSessionStore } from '@/stores'

export default function RootPage() {
  const { session } = useSessionStore((state) => state)

  if (!session) return

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl'>{session.username}</h1>
      <UserButton signInUrl='/sign-in' afterSignOutUrl='/sign-in' afterSwitchSessionUrl='/' afterMultiSessionSingleSignOutUrl='/' />
    </main>
  )
}
