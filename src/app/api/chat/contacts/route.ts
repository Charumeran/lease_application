import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

// チャット連絡先一覧の取得
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
    
    // 最新のメッセージ相手を取得
    const contactsWithMessages = await prisma.$queryRaw`
      WITH UserContacts AS (
        SELECT DISTINCT
          CASE
            WHEN sender_id = ${userId} THEN receiver_id
            ELSE sender_id
          END AS contact_id,
          MAX(created_at) AS last_message_at
        FROM ChatMessage
        WHERE sender_id = ${userId} OR receiver_id = ${userId}
        GROUP BY contact_id
      )
      SELECT 
        u.id,
        u.name,
        u.email,
        c.name AS company_name,
        (
          SELECT content
          FROM ChatMessage
          WHERE (sender_id = u.id AND receiver_id = ${userId}) OR (sender_id = ${userId} AND receiver_id = u.id)
          ORDER BY created_at DESC
          LIMIT 1
        ) AS last_message,
        (
          SELECT created_at
          FROM ChatMessage
          WHERE (sender_id = u.id AND receiver_id = ${userId}) OR (sender_id = ${userId} AND receiver_id = u.id)
          ORDER BY created_at DESC
          LIMIT 1
        ) AS last_message_time,
        (
          SELECT COUNT(*)
          FROM ChatMessage
          WHERE sender_id = u.id AND receiver_id = ${userId} AND read = false
        ) AS unread_count
      FROM User u
      JOIN Company c ON u.company_id = c.id
      JOIN UserContacts uc ON u.id = uc.contact_id
      ORDER BY last_message_time DESC
    `;

    // リース取引のある相手も連絡先に加える
    const leaseContacts = await prisma.$queryRaw`
      WITH LeaseContacts AS (
        SELECT DISTINCT
          CASE
            WHEN lender_user_id = ${userId} THEN borrower_user_id
            ELSE lender_user_id
          END AS contact_id
        FROM Lease
        WHERE lender_user_id = ${userId} OR borrower_user_id = ${userId}
      )
      SELECT 
        u.id,
        u.name,
        u.email,
        c.name AS company_name,
        NULL AS last_message,
        NULL AS last_message_time,
        0 AS unread_count
      FROM User u
      JOIN Company c ON u.company_id = c.id
      JOIN LeaseContacts lc ON u.id = lc.contact_id
      WHERE u.id NOT IN (
        SELECT contact_id FROM UserContacts
      )
    `;

    // 両方の結果を統合
    const contacts = [...contactsWithMessages, ...leaseContacts];
    
    return NextResponse.json({ contacts });
  } catch (error) {
    console.error("連絡先一覧取得エラー:", error);
    return NextResponse.json(
      { error: "連絡先一覧の取得に失敗しました" },
      { status: 500 }
    );
  }
} 