import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

// チャットメッセージの取得
export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json(
        { error: "認証が必要です" },
        { status: 401 }
      );
    }

    const userId = session.user.id;
    const searchParams = req.nextUrl.searchParams;
    const recipientId = searchParams.get("recipientId");
    
    if (!recipientId) {
      return NextResponse.json(
        { error: "受信者IDが指定されていません" },
        { status: 400 }
      );
    }

    // チャット履歴の取得
    const messages = await prisma.chatMessage.findMany({
      where: {
        OR: [
          {
            senderId: userId,
            receiverId: recipientId,
          },
          {
            senderId: recipientId,
            receiverId: userId,
          },
        ],
      },
      orderBy: {
        createdAt: 'asc',
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            email: true,
            companyId: true,
            company: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        receiver: {
          select: {
            id: true,
            name: true,
            email: true,
            companyId: true,
            company: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    // 未読メッセージを既読に更新
    await prisma.chatMessage.updateMany({
      where: {
        senderId: recipientId,
        receiverId: userId,
        read: false,
      },
      data: {
        read: true,
      },
    });

    return NextResponse.json({ messages });
  } catch (error) {
    console.error("チャット履歴取得エラー:", error);
    return NextResponse.json(
      { error: "チャット履歴の取得に失敗しました" },
      { status: 500 }
    );
  }
}

// チャットメッセージの送信
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
    const { receiverId, content } = body;

    // 入力検証
    if (!receiverId || !content) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // 受信者の存在確認
    const receiver = await prisma.user.findUnique({
      where: { id: receiverId },
    });

    if (!receiver) {
      return NextResponse.json(
        { error: "指定された受信者が存在しません" },
        { status: 400 }
      );
    }

    // 自分自身にはメッセージを送れない
    if (receiverId === session.user.id) {
      return NextResponse.json(
        { error: "自分自身にメッセージを送ることはできません" },
        { status: 400 }
      );
    }

    // メッセージの作成
    const message = await prisma.chatMessage.create({
      data: {
        senderId: session.user.id,
        receiverId,
        content,
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            email: true,
            companyId: true,
            company: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        receiver: {
          select: {
            id: true,
            name: true,
            email: true,
            companyId: true,
            company: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(
      { 
        message: "メッセージが送信されました",
        chatMessage: message 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("メッセージ送信エラー:", error);
    return NextResponse.json(
      { error: "メッセージの送信に失敗しました" },
      { status: 500 }
    );
  }
} 