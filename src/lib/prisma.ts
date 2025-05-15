import { PrismaClient } from '../generated/prisma'
import { config } from './config'

// PrismaClientをグローバルにキャッシュするための変数
const globalForPrisma = global as unknown as { prisma: PrismaClient }

// 接続URLのデバッグ情報（機密情報は隠す）
const debugConnectionUrl = (url: string): string => {
  try {
    if (!url) return 'URL未設定';
    const parsedUrl = new URL(url);
    // ホスト名とデータベース名のみ表示（パスワードは隠す）
    return `${parsedUrl.protocol}//${parsedUrl.host}${parsedUrl.pathname}`;
  } catch (e) {
    return 'URLの解析に失敗';
  }
};

console.log('Prismaクライアント初期化...');
console.log('環境:', process.env.NODE_ENV);
console.log('接続URL:', debugConnectionUrl(config.databaseUrl));
console.log('POSTGRES_PRISMA_URL設定:', process.env.POSTGRES_PRISMA_URL ? '設定あり' : '未設定');
console.log('DATABASE_URL設定:', process.env.DATABASE_URL ? '設定あり' : '未設定');

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