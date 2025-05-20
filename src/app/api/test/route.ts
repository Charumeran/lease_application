import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    console.log('データベース接続テスト開始...');
    
    // 基本的な接続テスト - カテゴリ数を取得
    const categoryCount = await prisma.equipmentCategory.count();
    
    // ユーザー数を取得
    const userCount = await prisma.user.count();
    
    // 会社数を取得
    const companyCount = await prisma.company.count();
    
    // 資材数を取得
    const equipmentCount = await prisma.equipment.count();
    
    // リース数を取得
    const leaseCount = await prisma.lease.count();
    
    // 接続情報（機密情報を除く）
    const dbInfo = {
      nodeEnv: process.env.NODE_ENV,
      hasPoolingUrl: !!process.env.POSTGRES_PRISMA_URL,
      hasDirectUrl: !!process.env.POSTGRES_URL_NON_POOLING,
      hasSupabaseUrl: !!process.env.SUPABASE_URL || !!process.env.NEXT_PUBLIC_SUPABASE_URL
    };

    console.log('データベース接続テスト完了');
    
    return NextResponse.json({
      status: 'success',
      message: 'データベース接続テスト成功',
      data: {
        counts: {
          categories: categoryCount,
          users: userCount,
          companies: companyCount,
          equipments: equipmentCount,
          leases: leaseCount
        },
        dbInfo
      }
    });
  } catch (error) {
    console.error("データベース接続テストエラー:", error);
    
    return NextResponse.json({
      status: 'error',
      message: 'データベース接続テスト失敗',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
} 