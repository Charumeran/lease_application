import type { NextConfig } from "next";

// 環境変数のログは削除 - Next.jsがすでに適切に環境変数を読み込みます

const nextConfig: NextConfig = {
  /* config options here */
  // 環境変数をクライアントに公開する設定
  env: {
    // クライアント側で利用可能な環境変数
    // NODE_ENVはNext.jsで内部管理されているため、ここでは設定しない
    // 他の公開する環境変数をここに追加
    APP_ENV: process.env.APP_ENV || 'development',
  },
  // 実験的機能の有効化
  experimental: {
    // 必要に応じて実験的機能を追加
  },
};

export default nextConfig;
