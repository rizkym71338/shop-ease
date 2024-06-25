'use client'

import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { Role } from '@prisma/client'

import { useSessionStore } from '@/stores'
import { DashboardSidebar } from '@/components'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { session } = useSessionStore((state) => state)

  const { replace } = useRouter()

  if (session?.role !== Role.admin) return replace('/')

  return (
    <div className='ml-72 flex min-h-screen flex-col bg-gray-50'>
      <DashboardSidebar />
      <div className='flex flex-col p-3'>{children}</div>
    </div>
  )
}
