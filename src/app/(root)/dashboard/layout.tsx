import { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'

interface AuthLayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: AuthLayoutProps) {
  const user = await currentUser()

  if (!user) return redirect('/sign-in')

  return { children }
}
