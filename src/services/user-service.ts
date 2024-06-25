import { Role } from '@prisma/client'

import { prisma } from '@/libs/prisma'
import { NotFoundError } from '@/libs/error'

export class UserService {
  static async createOrUpdate(userData: { clerkId: string; email: string; username: string; firstname: string; lastname: string; role?: Role }) {
    if (!userData.role) userData.role = Role.member

    const user = await prisma.user.findFirst({ where: { clerkId: userData.clerkId } })

    if (!user) return await prisma.user.create({ data: userData })

    return await prisma.user.update({ where: { id: user.id }, data: userData })
  }

  static async findFirstByClerkId(clerkId: string) {
    const user = await prisma.user.findFirst({ where: { clerkId } })

    if (!user) throw new NotFoundError('User not found')

    return user
  }
}
