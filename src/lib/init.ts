/**
 * アプリケーション初期化スクリプト
 * サーバーサイドのエントリーポイントで実行される
 */

import { checkEnvironment } from './check-env';
import { config } from './config';

// 環境変数チェック
checkEnvironment();

// 本番環境でない場合は警告
if (!config.isProd) {
  console.log(`警告: アプリケーションは${config.nodeEnv}環境で実行されています`);
}

// データベース接続情報をマスク処理して表示
const maskDatabaseUrl = (url: string): string => {
  try {
    const dbUrl = new URL(url);
    const username = dbUrl.username;
    // パスワードが含まれる場合はマスク
    if (dbUrl.password) {
      dbUrl.password = '******';
    }
    return dbUrl.toString();
  } catch (e) {
    return 'Invalid database URL format';
  }
};

console.log(`データベース接続先: ${maskDatabaseUrl(config.databaseUrl)}`);

export default function initializeApp() {
  // アプリケーション初期化処理がある場合はここに追加
  return {
    initialized: true,
    timestamp: new Date().toISOString(),
  };
} 