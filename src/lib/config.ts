/**
 * アプリケーション設定ファイル
 * 環境変数と環境別の設定を一元管理します
 */

// 環境タイプの定義
type NodeEnv = 'development' | 'production' | 'test' | 'staging';

// 現在の環境を取得
const getNodeEnv = (): NodeEnv => {
  const env = process.env.NODE_ENV as string;
  if (['development', 'production', 'test', 'staging'].includes(env)) {
    return env as NodeEnv;
  }
  return 'development';
};

// データベース接続情報を取得
const getDatabaseUrl = (): string => {
  // Vercelの環境変数を優先
  if (process.env.POSTGRES_PRISMA_URL) {
    return process.env.POSTGRES_PRISMA_URL;
  }
  
  // 従来の環境変数もサポート
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }

  // 環境別のデフォルト値
  const env = getNodeEnv();
  switch (env) {
    case 'production':
      // 本番環境用のデータベースURLはVercelで環境変数として設定する
      return 'postgresql://postgres:postgres@localhost:5432/postgres';
    case 'test':
      return 'postgresql://postgres:postgres@localhost:5432/lease_test_db';
    case 'development':
    default:
      // 開発環境用のデータベースURL
      return 'postgresql://postgres:postgres@localhost:5432/lease_db';
  }
};

// Supabase URL を取得
const getSupabaseUrl = (): string => {
  if (process.env.SUPABASE_URL) {
    return process.env.SUPABASE_URL;
  }
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return process.env.NEXT_PUBLIC_SUPABASE_URL;
  }

  // 環境変数がない場合は空の文字列を返す
  return '';
};

// 認証URLを取得
const getNextAuthUrl = (): string => {
  if (process.env.NEXTAUTH_URL) {
    return process.env.NEXTAUTH_URL;
  }
  
  const env = getNodeEnv();
  switch (env) {
    case 'production':
      // 本番環境用の認証URLはVercelで環境変数として設定する
      return '';
    default:
      return 'http://localhost:3000';
  }
};

// 認証シークレットを取得
const getNextAuthSecret = (): string => {
  if (process.env.NEXTAUTH_SECRET) {
    return process.env.NEXTAUTH_SECRET;
  }
  
  return 'development-secret-key';
};

// アプリケーション設定
export const config = {
  // 環境
  nodeEnv: getNodeEnv(),
  isDev: getNodeEnv() === 'development',
  isProd: getNodeEnv() === 'production',
  isTest: getNodeEnv() === 'test',
  isStaging: getNodeEnv() === 'staging',

  // データベース
  databaseUrl: getDatabaseUrl(),
  
  // Supabase - 環境変数から取得
  supabaseUrl: getSupabaseUrl(),
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  
  // 認証
  nextAuthUrl: getNextAuthUrl(),
  nextAuthSecret: getNextAuthSecret(),
  
  // アプリケーション
  appName: 'リースシェア',
  apiTimeout: Number(process.env.API_TIMEOUT || 30000),
};

export default config; 