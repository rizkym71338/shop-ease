import { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'

import { AuthProvider } from '@/providers'
import { UserService } from '@/services'

interface RootLayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const user = await currentUser()

  if (!user) return redirect('/sign-in')

  UserService.createOrUpdate({
    clerkId: user.id,
    email: user.emailAddresses[0].emailAddress!,
    imageUrl: user.imageUrl,
    username: user.username!,
    firstname: user.firstName!,
    lastname: user.lastName!,
  })

  return <AuthProvider>{children}</AuthProvider>
}
