import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

// リース一覧の取得
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
    const userId = session.user.id;
    const companyId = session.user.companyId;
    const status = searchParams.get("status");
    const type = searchParams.get("type"); // 'lender' or 'borrower'
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("pageSize") || "10");
    
    // クエリの構築
    const query: any = {
      where: {},
      include: {
        equipment: {
          include: {
            category: true,
          }
        },
        lenderCompany: true,
        borrowerCompany: true,
        lenderUser: true,
        borrowerUser: true,
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        createdAt: 'desc',
      },
    };

    // タイプによるフィルタリング
    if (type === 'lender') {
      // 自社が貸し手の場合
      query.where.lenderCompanyId = companyId;
    } else if (type === 'borrower') {
      // 自社が借り手の場合
      query.where.borrowerCompanyId = companyId;
    } else {
      // どちらかに該当する場合
      query.where.OR = [
        { lenderCompanyId: companyId },
        { borrowerCompanyId: companyId },
      ];
    }
    
    // ステータスによるフィルタリング
    if (status) {
      query.where.status = status;
    }

    // データ取得
    const [leases, total] = await Promise.all([
      prisma.lease.findMany(query),
      prisma.lease.count({ where: query.where }),
    ]);

    return NextResponse.json({
      leases,
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    console.error("リース一覧取得エラー:", error);
    return NextResponse.json(
      { error: "リース一覧の取得に失敗しました" },
      { status: 500 }
    );
  }
}

// リースリクエストの作成
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
      equipmentId,
      quantity,
      startDate,
      endDate,
      notes,
    } = body;

    // 入力検証
    if (!equipmentId || !quantity || !startDate || !endDate) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // 資材の存在確認と所有者情報の取得
    const equipment = await prisma.equipment.findUnique({
      where: { id: equipmentId },
      include: {
        company: {
          include: {
            users: {
              where: {
                role: "ADMIN" // 管理者ユーザーを取得
              },
              take: 1
            }
          }
        }
      }
    });

    if (!equipment) {
      return NextResponse.json(
        { error: "指定された資材が存在しません" },
        { status: 400 }
      );
    }

    // 自社の資材はリースできない
    if (equipment.companyId === session.user.companyId) {
      return NextResponse.json(
        { error: "自社の資材はリースできません" },
        { status: 400 }
      );
    }

    // 利用可能数量のチェック
    if (equipment.available < parseInt(quantity.toString())) {
      return NextResponse.json(
        { error: "要求された数量が利用可能数量を超えています" },
        { status: 400 }
      );
    }

    // 貸し手のユーザーID（資材所有会社の管理者）を取得
    const lenderUserId = equipment.company.users[0]?.id;
    if (!lenderUserId) {
      return NextResponse.json(
        { error: "資材所有会社の管理者が見つかりません" },
        { status: 400 }
      );
    }

    // リース日数の計算
    const start = new Date(startDate);
    const end = new Date(endDate);
    const durationInDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    
    // 料金計算
    const totalPrice = equipment.daily_rate ? equipment.daily_rate * parseInt(quantity.toString()) * durationInDays : null;

    // リースリクエストの作成
    const lease = await prisma.lease.create({
      data: {
        equipmentId,
        quantity: parseInt(quantity.toString()),
        lenderCompanyId: equipment.companyId,
        lenderUserId,
        borrowerCompanyId: session.user.companyId,
        borrowerUserId: session.user.id,
        startDate: start,
        endDate: end,
        notes,
        totalPrice,
        status: "REQUESTED", // 初期ステータスはリクエスト中
      },
      include: {
        equipment: true,
        lenderCompany: true,
        borrowerCompany: true,
      },
    });

    return NextResponse.json(
      { 
        message: "リースリクエストが送信されました",
        lease 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("リースリクエスト作成エラー:", error);
    return NextResponse.json(
      { error: "リースリクエストの作成に失敗しました" },
      { status: 500 }
    );
  }
} 