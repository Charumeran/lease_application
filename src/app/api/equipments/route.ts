import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

// 資材一覧の取得
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: "認証が必要です" },
        { status: 401 }
      );
    }

    const searchParams = req.nextUrl.searchParams;
    const companyId = searchParams.get("companyId");
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("pageSize") || "10");
    const status = searchParams.get("status");
    
    // クエリの構築
    const query: any = {
      where: {},
      include: {
        category: true,
        company: true,
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    };

    // フィルター条件
    if (companyId) {
      query.where.companyId = companyId;
    }
    
    if (category) {
      query.where.categoryId = category;
    }
    
    if (status) {
      query.where.status = status;
    }
    
    if (search) {
      query.where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    // データ取得
    const [equipments, total] = await Promise.all([
      prisma.equipment.findMany(query),
      prisma.equipment.count({ where: query.where }),
    ]);

    return NextResponse.json({
      equipments,
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    console.error("資材一覧取得エラー:", error);
    return NextResponse.json(
      { error: "資材一覧の取得に失敗しました" },
      { status: 500 }
    );
  }
}

// 資材の新規登録
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
    const { 
      name, 
      categoryId, 
      description, 
      quantity, 
      dailyRate, 
      location, 
      image 
    } = body;

    // 入力検証
    if (!name || !categoryId || !quantity) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // カテゴリの存在確認
    const categoryExists = await prisma.equipmentCategory.findUnique({
      where: { id: categoryId },
    });

    if (!categoryExists) {
      return NextResponse.json(
        { error: "指定されたカテゴリが存在しません" },
        { status: 400 }
      );
    }

    // 資材の登録
    const newEquipment = await prisma.equipment.create({
      data: {
        name,
        description,
        quantity: parseInt(quantity.toString()),
        available: parseInt(quantity.toString()), // 初期値として全数量を利用可能に設定
        daily_rate: dailyRate ? parseFloat(dailyRate.toString()) : null,
        categoryId,
        companyId: session.user.companyId,
        image,
        location,
      },
      include: {
        category: true,
        company: true,
      },
    });

    return NextResponse.json(
      { 
        message: "資材が登録されました",
        equipment: newEquipment 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("資材登録エラー:", error);
    return NextResponse.json(
      { error: "資材の登録に失敗しました" },
      { status: 500 }
    );
  }
} 