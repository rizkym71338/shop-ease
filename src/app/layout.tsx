import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShopEase',
  description: 'ShopEase is a Shopify clone built with Next.js and Prisma.',
}

interface AppLayoutProps {
  children: ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <head>
          <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
