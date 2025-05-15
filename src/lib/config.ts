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
  // 環境変数から直接取得 (.env.localや.envファイルから読み込まれる)
  if (process.env.DATABASE_URL) {
    return process.env.DATABASE_URL;
  }

  // 環境別のデフォルト値
  const env = getNodeEnv();
  switch (env) {
    case 'production':
      // 本番環境用のデータベースURL
      return 'postgresql://postgres:KAT*bqn9ntf9hbg-mey@db.pvgidfopxijmgzedqpht.supabase.co:5432/postgres';
    case 'staging':
      return 'postgresql://postgres:[PASSWORD]@staging-db.supabase.co:5432/postgres';
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
  // 環境変数優先 - Vercelによって自動設定される可能性がある
  if (process.env.SUPABASE_URL) {
    return process.env.SUPABASE_URL;
  }
  // Next.js用の公開環境変数
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return process.env.NEXT_PUBLIC_SUPABASE_URL;
  }

  const env = getNodeEnv();
  switch (env) {
    case 'production':
      return 'https://pvgidfopxijmgzedqpht.supabase.co';
    case 'staging':
      return 'https://staging-project-id.supabase.co';
    case 'development':
    case 'test':
    default:
      return 'http://localhost:54321';
  }
};

// Supabase Anon Keyを取得
const getSupabaseAnonKey = (): string => {
  // 環境変数優先 - Vercelによって自動設定される可能性がある
  if (process.env.SUPABASE_ANON_KEY) {
    return process.env.SUPABASE_ANON_KEY;
  }
  // Next.js用の公開環境変数
  if (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  }
  
  return '';
};

// Supabase Service Role Keyを取得
const getSupabaseServiceRoleKey = (): string => {
  if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return process.env.SUPABASE_SERVICE_ROLE_KEY;
  }
  return '';
};

// 認証URLを取得
const getNextAuthUrl = (): string => {
  // .env, .env.local, または .env.production から読み込まれる
  if (process.env.NEXTAUTH_URL) {
    return process.env.NEXTAUTH_URL;
  }
  
  const env = getNodeEnv();
  switch (env) {
    case 'production':
      return 'https://your-production-domain.vercel.app';
    default:
      return 'http://localhost:3000';
  }
};

// 認証シークレットを取得
const getNextAuthSecret = (): string => {
  // .env, .env.local, または .env.production から読み込まれる
  if (process.env.NEXTAUTH_SECRET) {
    return process.env.NEXTAUTH_SECRET;
  }
  
  const env = getNodeEnv();
  switch (env) {
    case 'production':
      return 'production-secret-key-replace-this';
    default:
      return 'development-secret-key';
  }
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
  
  // Supabase
  supabaseUrl: getSupabaseUrl(),
  supabaseAnonKey: getSupabaseAnonKey(),
  supabaseServiceRoleKey: getSupabaseServiceRoleKey(),
  supabaseJwtSecret: process.env.SUPABASE_JWT_SECRET || '',
  
  // 認証
  nextAuthUrl: getNextAuthUrl(),
  nextAuthSecret: getNextAuthSecret(),
  
  // アプリケーション
  appName: 'リースシェア',
  apiTimeout: Number(process.env.API_TIMEOUT || 30000),
};

export default config; 