import { Role } from '@prisma/client'

import { prisma } from '@/libs/prisma'
import { NotFoundError } from '@/libs/error'

interface UserData {
  clerkId: string
  email: string
  imageUrl: string
  username: string
  firstname: string
  lastname: string
  role?: Role
}

export class UserService {
  static async createOrUpdate(userData: UserData) {
    const user = await prisma.user.findFirst({ where: { clerkId: userData.clerkId } })

    if (!user) return await prisma.user.create({ data: userData })

    return await prisma.user.update({ where: { id: user.id }, data: userData })
  }

  static async findFirstByClerkId(clerkId: string) {
    const user = await prisma.user.findFirst({ where: { clerkId } })

    if (!user) throw new NotFoundError('User not found')

    return user
  }

  static async findMany() {
    return await prisma.user.findMany({ orderBy: { createdAt: 'desc' } })
  }
}
