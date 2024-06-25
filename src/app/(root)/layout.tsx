import { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { currentUser } from '@clerk/nextjs/server'

import { UserService } from '@/services/user-service'
import { AuthProvider } from '@/providers'

interface AuthLayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: AuthLayoutProps) {
  const user = await currentUser()

  if (!user) return redirect('/sign-in')

  await UserService.createOrUpdate({
    clerkId: user.id,
    email: user.emailAddresses[0].emailAddress!,
    username: user.username!,
    firstname: user.firstName!,
    lastname: user.lastName!,
  })

  return <AuthProvider>{children}</AuthProvider>
}
