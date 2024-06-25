'use client'

import { User } from '@prisma/client'

import { useFetch } from '@/hooks'

export default function DashboardPage() {
  const users = useFetch<User[]>({ path: '/api/users', initialData: [] })

  const headers = ['Fullname', 'Email', 'Username', 'Role', 'Action']

  return (
    <div className=''>
      <h1 className='mb-3 text-xl font-bold text-gray-950'>User Management</h1>
      <div className='relative overflow-x-auto rounded border border-gray-200'>
        <table className='w-full text-left text-xs text-gray-500'>
          <thead className='bg-gray-50 text-xs uppercase text-gray-700'>
            <tr>
              {headers.map((header) => (
                <th key={header} className='px-6 py-3'>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.data.map((user) => (
              <tr key={user.id} className='bg-white dark:border-gray-700'>
                <td className='px-6 py-4'>
                  {user.firstname} {user.lastname}
                </td>
                <td className='px-6 py-4'>{user.email}</td>
                <td className='px-6 py-4'>{user.username}</td>
                <td className='px-6 py-4'>{user.role}</td>
                <td className='px-6 py-4'>
                  <div className='flex items-center gap-1.5 text-sm'>
                    <button>
                      <i className='bx bx-edit transition-all hover:text-yellow-600' />
                    </button>
                    <button>
                      <i className='bx bx-trash transition-all hover:text-red-600' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
