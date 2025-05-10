import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, Prisma } from "@prisma/client";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { 
      name, 
      email, 
      password, 
      phone,
      companyName,
      prefecture,
      city,
      address,
      zipCode,
      companyPhone,
      description
    } = body;

    // 入力検証
    if (!name || !email || !password || !companyName || !prefecture || !city || !address) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // メールアドレスの重複チェック
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "このメールアドレスは既に使用されています" },
        { status: 400 }
      );
    }

    // パスワードのハッシュ化
    const hashedPassword = await bcrypt.hash(password, 10);

    // トランザクションでの会社とユーザーの作成
    const result = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      // 会社の作成
      const company = await tx.company.create({
        data: {
          name: companyName,
          prefecture,
          city,
          address,
          zipCode,
          phone: companyPhone,
          description,
        },
      });

      // ユーザーの作成
      const user = await tx.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          phone,
          companyId: company.id,
          role: "ADMIN", // 最初のユーザーは管理者として登録
        },
      });

      return { user, company };
    });

    // パスワードを除外して返却
    const { password: _, ...userWithoutPassword } = result.user;

    return NextResponse.json(
      { 
        message: "ユーザー登録が完了しました",
        user: userWithoutPassword,
        company: result.company
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("ユーザー登録エラー:", error);
    return NextResponse.json(
      { error: "ユーザー登録に失敗しました" },
      { status: 500 }
    );
  }
} 