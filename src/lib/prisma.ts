import { PrismaClient } from '../generated/prisma'
import { config } from './config'

// PrismaClientをグローバルにキャッシュするための変数
const globalForPrisma = global as unknown as { prisma: PrismaClient }

// クライアントのグローバルインスタンスを作成
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: config.isDev ? ['query', 'error', 'warn'] : ['error'],
    datasources: {
      db: {
        url: config.databaseUrl,
      },
    },
  })

// 開発モード以外ではグローバルオブジェクトにキャッシュ
if (!config.isDev) globalForPrisma.prisma = prisma

export default prisma 