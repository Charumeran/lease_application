import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { Prisma } from "@prisma/client";

// リース詳細の取得
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

    // リースの詳細取得
    const lease = await prisma.lease.findUnique({
      where: { id },
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
    });

    if (!lease) {
      return NextResponse.json(
        { error: "指定されたリースが見つかりません" },
        { status: 404 }
      );
    }

    // 自社が関係するリースかどうかチェック
    const companyId = session.user.companyId;
    if (lease.lenderCompanyId !== companyId && lease.borrowerCompanyId !== companyId) {
      return NextResponse.json(
        { error: "このリースを閲覧する権限がありません" },
        { status: 403 }
      );
    }

    return NextResponse.json({ lease });
  } catch (error) {
    console.error("リース詳細取得エラー:", error);
    return NextResponse.json(
      { error: "リース詳細の取得に失敗しました" },
      { status: 500 }
    );
  }
}

// リースのステータス更新
export async function PATCH(
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
    const { status, notes } = body;

    // リースの存在確認
    const lease = await prisma.lease.findUnique({
      where: { id },
      include: {
        equipment: true,
      },
    });

    if (!lease) {
      return NextResponse.json(
        { error: "指定されたリースが見つかりません" },
        { status: 404 }
      );
    }

    // 自社が関係するリースかどうかチェック
    const companyId = session.user.companyId;
    if (lease.lenderCompanyId !== companyId && lease.borrowerCompanyId !== companyId) {
      return NextResponse.json(
        { error: "このリースを更新する権限がありません" },
        { status: 403 }
      );
    }

    // ステータスの検証
    const validStatuses = ['REQUESTED', 'APPROVED', 'ACTIVE', 'COMPLETED', 'CANCELLED'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { error: "無効なステータスです" },
        { status: 400 }
      );
    }

    // ステータス変更の権限チェック
    if (status === 'APPROVED' || status === 'CANCELLED') {
      // 貸し手のみが承認またはキャンセルできる
      if (lease.lenderCompanyId !== companyId) {
        return NextResponse.json(
          { error: "このステータスへの変更権限がありません" },
          { status: 403 }
        );
      }
    } else if (status === 'ACTIVE') {
      // 貸し手のみがアクティブに変更できる
      if (lease.lenderCompanyId !== companyId) {
        return NextResponse.json(
          { error: "このステータスへの変更権限がありません" },
          { status: 403 }
        );
      }
      
      // APPROVEDからのみACTIVEに変更可能
      if (lease.status !== 'APPROVED') {
        return NextResponse.json(
          { error: "承認済みのリースのみアクティブに変更できます" },
          { status: 400 }
        );
      }
    } else if (status === 'COMPLETED') {
      // いずれかの会社が完了できる
      if (lease.status !== 'ACTIVE') {
        return NextResponse.json(
          { error: "アクティブなリースのみ完了に変更できます" },
          { status: 400 }
        );
      }
    }

    // トランザクションでリースステータスと資材の利用可能数を更新
    const updatedLease = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // リースの更新
      const updatedLease = await tx.lease.update({
        where: { id },
        data: {
          status,
          notes: notes !== undefined ? notes : undefined,
        },
        include: {
          equipment: true,
          lenderCompany: true,
          borrowerCompany: true,
          lenderUser: true,
          borrowerUser: true,
        },
      });

      // 資材の利用可能数を更新（ステータスに応じて）
      if (status === 'ACTIVE') {
        // リース開始時に利用可能数を減らす
        await tx.equipment.update({
          where: { id: lease.equipmentId },
          data: {
            available: {
              decrement: lease.quantity
            }
          }
        });
      } else if (status === 'COMPLETED' || status === 'CANCELLED') {
        // リース終了または取り消し時に利用可能数を元に戻す（アクティブだった場合のみ）
        if (lease.status === 'ACTIVE') {
          await tx.equipment.update({
            where: { id: lease.equipmentId },
            data: {
              available: {
                increment: lease.quantity
              }
            }
          });
        }
      }

      return updatedLease;
    });

    return NextResponse.json({
      message: "リースのステータスが更新されました",
      lease: updatedLease,
    });
  } catch (error) {
    console.error("リースステータス更新エラー:", error);
    return NextResponse.json(
      { error: "リースのステータス更新に失敗しました" },
      { status: 500 }
    );
  }
} 