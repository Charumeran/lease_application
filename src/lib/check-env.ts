/**
 * アプリケーション起動時に環境設定を確認するユーティリティ
 */
import { config } from './config';
import fs from 'fs';
import path from 'path';

// 環境変数ファイルが存在するかチェック
function checkEnvFileExists(fileName: string): boolean {
  const rootDir = process.cwd();
  const filePath = path.join(rootDir, fileName);
  return fs.existsSync(filePath);
}

// 文字列を安全にマスク
function maskString(str: string | undefined | null): string {
  if (!str) return 'not set';
  if (str.length <= 8) return '********';
  return str.substring(0, 4) + '****' + str.substring(str.length - 4);
}

export function checkEnvironment() {
  // 開発モードのみで実行
  if (!config.isDev) return;

  console.log('=== 環境設定チェック ===');
  console.log(`実行環境: ${config.nodeEnv}`);
  
  // 環境変数ファイルの確認
  const envFiles = [
    { name: '.env', exists: checkEnvFileExists('.env') },
    { name: '.env.local', exists: checkEnvFileExists('.env.local') },
  ];
  
  console.log('環境変数ファイル:');
  envFiles.forEach(file => {
    console.log(`- ${file.name}: ${file.exists ? '存在します' : '存在しません'}`);
  });
  
  // データベース接続確認
  try {
    const dbUrl = new URL(config.databaseUrl);
    console.log('データベース接続:');
    console.log(`- ホスト: ${dbUrl.hostname}`);
    console.log(`- ポート: ${dbUrl.port || 'デフォルト'}`);
    console.log(`- ユーザー: ${dbUrl.username}`);
    console.log(`- データベース: ${dbUrl.pathname.replace('/', '')}`);
  } catch (e) {
    console.error('データベースURL形式エラー:', e);
    console.error('設定されたURL:', config.databaseUrl);
  }
  
  console.log('認証設定:');
  console.log(`- NextAuth URL: ${config.nextAuthUrl || 'not set'}`);
  console.log(`- NextAuth Secret: ${maskString(config.nextAuthSecret)}`);
  
  console.log('====================');
}

export default checkEnvironment; 