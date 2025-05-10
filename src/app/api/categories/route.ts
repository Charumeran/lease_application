import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

// カテゴリ一覧の取得
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: "認証が必要です" },
        { status: 401 }
      );
    }

    // すべてのカテゴリを取得
    const categories = await prisma.equipmentCategory.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    return NextResponse.json({ categories });
  } catch (error) {
    console.error("カテゴリ一覧取得エラー:", error);
    return NextResponse.json(
      { error: "カテゴリ一覧の取得に失敗しました" },
      { status: 500 }
    );
  }
}

// カテゴリの新規登録
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: "認証が必要です" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { name, description } = body;

    // 入力検証
    if (!name) {
      return NextResponse.json(
        { error: "カテゴリ名を入力してください" },
        { status: 400 }
      );
    }

    // 既存カテゴリのチェック
    const existingCategory = await prisma.equipmentCategory.findUnique({
      where: { name },
    });

    if (existingCategory) {
      return NextResponse.json(
        { error: "同じ名前のカテゴリが既に存在します" },
        { status: 400 }
      );
    }

    // カテゴリの登録
    const newCategory = await prisma.equipmentCategory.create({
      data: {
        name,
        description,
      },
    });

    return NextResponse.json(
      { 
        message: "カテゴリが登録されました",
        category: newCategory 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("カテゴリ登録エラー:", error);
    return NextResponse.json(
      { error: "カテゴリの登録に失敗しました" },
      { status: 500 }
    );
  }
} 