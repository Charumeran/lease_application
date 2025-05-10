import { PrismaClient } from '../generated/prisma'

// PrismaClientをグローバルにキャッシュするための変数
const globalForPrisma = global as unknown as { prisma: PrismaClient }

// クライアントのグローバルインスタンスを作成
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })

// 開発モード以外ではグローバルオブジェクトにキャッシュ
if (process.env.NODE_ENV !== 'development') globalForPrisma.prisma = prisma

export default prisma 