'use client'

import { SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const dashboardSidebarItems = [
  { name: 'Dashboard', href: '/dashboard', icon: 'bxs-dashboard' },
  { name: 'Products', href: '/dashboard/products', icon: 'bxs-package' },
  { name: 'Users', href: '/dashboard/users', icon: 'bxs-group' },
]

export const DashboardSidebar = () => {
  const pathname = usePathname()

  return (
    <div className='fixed left-0 top-0 flex h-screen w-72 flex-col overflow-y-auto bg-gray-950 p-3 text-gray-50'>
      <div className='mb-3 flex flex-col border-b border-gray-900 pb-3'>
        <h1 className='py-3 text-center text-xl font-bold'>Admin Panel</h1>
      </div>
      <div className='flex flex-1 flex-col gap-1.5 text-sm font-medium'>
        {dashboardSidebarItems.map(({ href, name, icon }, index) => (
          <Link key={index} href={href} className={`rounded p-3 transition-all hover:bg-gray-900 ${pathname === href && 'bg-gray-900'}`}>
            <i className={`bx ${icon} mr-1.5`} />
            {name}
          </Link>
        ))}
      </div>
      <div className='mt-3 flex flex-col border-t border-gray-900 pt-3'>
        <SignOutButton>
          <button className='w-full rounded bg-gray-50 p-3 text-sm font-semibold text-gray-950 transition-all hover:bg-gray-300'>Sign out</button>
        </SignOutButton>
      </div>
    </div>
  )
}
