import { PrismaClient } from '@prisma/client'

import { IS_PROD } from '@/libs/env'

const prismaClientSingleton = () => new PrismaClient()

declare const globalThis: { prismaGlobal: ReturnType<typeof prismaClientSingleton> } & typeof global

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

if (!IS_PROD) globalThis.prismaGlobal = prisma
