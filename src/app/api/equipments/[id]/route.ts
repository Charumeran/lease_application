import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

// 資材詳細の取得
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: "認証が必要です" },
        { status: 401 }
      );
    }

    const id = params.id;

    // 資材の詳細取得
    const equipment = await prisma.equipment.findUnique({
      where: { id },
      include: {
        category: true,
        company: true,
        leases: {
          include: {
            borrowerCompany: true,
            borrowerUser: true,
            lenderCompany: true,
            lenderUser: true,
          },
          orderBy: {
            createdAt: 'desc',
          },
          take: 10, // 最新の10件のみ取得
        },
      },
    });

    if (!equipment) {
      return NextResponse.json(
        { error: "指定された資材が見つかりません" },
        { status: 404 }
      );
    }

    return NextResponse.json({ equipment });
  } catch (error) {
    console.error("資材詳細取得エラー:", error);
    return NextResponse.json(
      { error: "資材詳細の取得に失敗しました" },
      { status: 500 }
    );
  }
}

// 資材の更新
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: "認証が必要です" },
        { status: 401 }
      );
    }

    const id = params.id;
    const body = await req.json();
    const { 
      name, 
      categoryId, 
      description, 
      quantity, 
      available,
      dailyRate, 
      location, 
      image,
      status
    } = body;

    // 資材の存在確認
    const equipment = await prisma.equipment.findUnique({
      where: { id },
    });

    if (!equipment) {
      return NextResponse.json(
        { error: "指定された資材が見つかりません" },
        { status: 404 }
      );
    }

    // 自社の資材かどうかチェック
    if (equipment.companyId !== session.user.companyId) {
      return NextResponse.json(
        { error: "この資材を編集する権限がありません" },
        { status: 403 }
      );
    }

    // 資材の更新
    const updatedEquipment = await prisma.equipment.update({
      where: { id },
      data: {
        name: name || undefined,
        description: description !== undefined ? description : undefined,
        quantity: quantity !== undefined ? parseInt(quantity.toString()) : undefined,
        available: available !== undefined ? parseInt(available.toString()) : undefined,
        daily_rate: dailyRate !== undefined ? parseFloat(dailyRate.toString()) : undefined,
        categoryId: categoryId || undefined,
        image: image !== undefined ? image : undefined,
        location: location !== undefined ? location : undefined,
        status: status || undefined,
      },
      include: {
        category: true,
        company: true,
      },
    });

    return NextResponse.json({
      message: "資材が更新されました",
      equipment: updatedEquipment,
    });
  } catch (error) {
    console.error("資材更新エラー:", error);
    return NextResponse.json(
      { error: "資材の更新に失敗しました" },
      { status: 500 }
    );
  }
}

// 資材の削除
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: "認証が必要です" },
        { status: 401 }
      );
    }

    const id = params.id;

    // 資材の存在確認
    const equipment = await prisma.equipment.findUnique({
      where: { id },
      include: {
        leases: {
          where: {
            status: {
              in: ['REQUESTED', 'APPROVED', 'ACTIVE']
            }
          }
        }
      }
    });

    if (!equipment) {
      return NextResponse.json(
        { error: "指定された資材が見つかりません" },
        { status: 404 }
      );
    }

    // 自社の資材かどうかチェック
    if (equipment.companyId !== session.user.companyId) {
      return NextResponse.json(
        { error: "この資材を削除する権限がありません" },
        { status: 403 }
      );
    }

    // アクティブなリースがある場合は削除不可
    if (equipment.leases.length > 0) {
      return NextResponse.json(
        { error: "現在リース中またはリクエスト中の資材は削除できません" },
        { status: 400 }
      );
    }

    // 資材の削除
    await prisma.equipment.delete({
      where: { id },
    });

    return NextResponse.json({
      message: "資材が削除されました",
    });
  } catch (error) {
    console.error("資材削除エラー:", error);
    return NextResponse.json(
      { error: "資材の削除に失敗しました" },
      { status: 500 }
    );
  }
} 