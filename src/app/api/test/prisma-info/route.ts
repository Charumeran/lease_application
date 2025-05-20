import { prisma } from "@/lib/prisma";
import { config } from "@/lib/config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // 接続情報（機密情報を除く）
    const connectionInfo = {
      nodeEnv: process.env.NODE_ENV,
      // 環境変数の存在確認
      envVars: {
        POSTGRES_PRISMA_URL: !!process.env.POSTGRES_PRISMA_URL,
        POSTGRES_URL_NON_POOLING: !!process.env.POSTGRES_URL_NON_POOLING,
        DATABASE_URL: !!process.env.DATABASE_URL,
        POSTGRES_USER: !!process.env.POSTGRES_USER,
        POSTGRES_PASSWORD: !!process.env.POSTGRES_PASSWORD,
        POSTGRES_HOST: !!process.env.POSTGRES_HOST,
        POSTGRES_DATABASE: !!process.env.POSTGRES_DATABASE,
        SUPABASE_URL: !!process.env.SUPABASE_URL,
        NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      },
      // configの値
      config: {
        nodeEnv: config.nodeEnv,
        isDev: config.isDev,
        isProd: config.isProd,
        // データベースURLの一部（機密情報を除く）
        databaseUrlHostname: (() => {
          try {
            const url = new URL(config.databaseUrl);
            return url.hostname;
          } catch (e) {
            return null;
          }
        })(),
        directDatabaseUrlHostname: (() => {
          try {
            const url = new URL(config.directDatabaseUrl);
            return url.hostname;
          } catch (e) {
            return null;
          }
        })(),
        // Supabase情報
        hasSupabaseUrl: !!config.supabaseUrl,
        hasSupabaseAnonKey: !!config.supabaseAnonKey,
      }
    };

    return NextResponse.json({
      status: 'success',
      message: 'Prisma接続情報取得成功',
      data: connectionInfo
    });
  } catch (error) {
    console.error("Prisma接続情報取得エラー:", error);
    
    return NextResponse.json({
      status: 'error',
      message: 'Prisma接続情報取得失敗',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
} 