import { PrismaClient } from "../../src/generated/prisma";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  try {
    console.log("シードデータの作成を開始します...");

    // カテゴリの作成
    console.log("カテゴリを作成中...");
    const categories = await Promise.all([
      prisma.equipmentCategory.upsert({
        where: { name: "足場材" },
        update: {},
        create: {
          name: "足場材",
          description: "建設現場で使用される足場用の資材",
        },
      }),
      prisma.equipmentCategory.upsert({
        where: { name: "仮設資材" },
        update: {},
        create: {
          name: "仮設資材",
          description: "仮設工事で使用される各種資材",
        },
      }),
      prisma.equipmentCategory.upsert({
        where: { name: "荷役機器" },
        update: {},
        create: {
          name: "荷役機器",
          description: "物資の運搬や積み降ろしに使用される機器",
        },
      }),
      prisma.equipmentCategory.upsert({
        where: { name: "電気機器" },
        update: {},
        create: {
          name: "電気機器",
          description: "建設現場で使用される電気関連の機器",
        },
      }),
      prisma.equipmentCategory.upsert({
        where: { name: "清掃機器" },
        update: {},
        create: {
          name: "清掃機器",
          description: "現場の清掃に使用される機器",
        },
      }),
    ]);

    console.log(`${categories.length}件のカテゴリを作成しました`);

    // 会社の作成
    console.log("会社データを作成中...");
    const company1 = await prisma.company.upsert({
      where: { id: "company-1" },
      update: {},
      create: {
        id: "company-1",
        name: "山田建設株式会社",
        prefecture: "東京都",
        city: "千代田区",
        address: "丸の内1-1-1",
        zipCode: "100-0001",
        phone: "03-1234-5678",
        description: "創業50年の総合建設会社です。",
      },
    });

    const company2 = await prisma.company.upsert({
      where: { id: "company-2" },
      update: {},
      create: {
        id: "company-2",
        name: "佐藤工業株式会社",
        prefecture: "大阪府",
        city: "大阪市中央区",
        address: "本町1-2-3",
        zipCode: "541-0053",
        phone: "06-1234-5678",
        description: "関西を中心に展開する建設会社です。",
      },
    });

    console.log("2件の会社データを作成しました");

    // ユーザーの作成
    console.log("ユーザーデータを作成中...");
    const hashedPassword = await bcrypt.hash("password123", 10);

    const user1 = await prisma.user.upsert({
      where: { email: "yamada@example.com" },
      update: {},
      create: {
        name: "山田太郎",
        email: "yamada@example.com",
        password: hashedPassword,
        phone: "090-1234-5678",
        role: "ADMIN",
        companyId: company1.id,
      },
    });

    const user2 = await prisma.user.upsert({
      where: { email: "sato@example.com" },
      update: {},
      create: {
        name: "佐藤次郎",
        email: "sato@example.com",
        password: hashedPassword,
        phone: "090-8765-4321",
        role: "ADMIN",
        companyId: company2.id,
      },
    });

    console.log("2件のユーザーデータを作成しました");

    // 資材の作成
    console.log("資材データを作成中...");
    const equipment1 = await prisma.equipment.upsert({
      where: { id: "equipment-1" },
      update: {},
      create: {
        id: "equipment-1",
        name: "単管パイプ 1.5m",
        description: "建設現場で使用される標準的な単管パイプです。サイズは直径48.6mm×長さ1.5mとなります。防錆加工済みで、状態は良好です。",
        quantity: 120,
        available: 80,
        daily_rate: 150,
        location: "第一倉庫 A棚",
        status: "AVAILABLE",
        categoryId: categories[0].id,
        companyId: company1.id,
      },
    });

    const equipment2 = await prisma.equipment.upsert({
      where: { id: "equipment-2" },
      update: {},
      create: {
        id: "equipment-2",
        name: "発電機 2.0kVA",
        description: "小型で持ち運びに便利な発電機です。騒音が少なく、長時間の使用も可能です。",
        quantity: 5,
        available: 3,
        daily_rate: 2500,
        location: "電気機器倉庫",
        status: "AVAILABLE",
        categoryId: categories[3].id,
        companyId: company1.id,
      },
    });

    const equipment3 = await prisma.equipment.upsert({
      where: { id: "equipment-3" },
      update: {},
      create: {
        id: "equipment-3",
        name: "高圧洗浄機",
        description: "強力な水圧で汚れを落とせる高圧洗浄機です。建物の外壁清掃や現場の洗浄に最適です。",
        quantity: 8,
        available: 5,
        daily_rate: 1800,
        location: "清掃機器コーナー",
        status: "AVAILABLE",
        categoryId: categories[4].id,
        companyId: company2.id,
      },
    });

    console.log("3件の資材データを作成しました");

    // リースデータの作成
    console.log("リースデータを作成中...");
    const lease1 = await prisma.lease.upsert({
      where: { id: "lease-1" },
      update: {},
      create: {
        id: "lease-1",
        equipmentId: equipment3.id,
        quantity: 2,
        lenderCompanyId: company2.id,
        lenderUserId: user2.id,
        borrowerCompanyId: company1.id,
        borrowerUserId: user1.id,
        startDate: new Date("2024-05-15"),
        endDate: new Date("2024-06-15"),
        status: "ACTIVE",
        totalPrice: 1800 * 2 * 31, // 日額 × 数量 × 日数
      },
    });

    console.log("1件のリースデータを作成しました");

    // チャットメッセージの作成
    console.log("チャットメッセージを作成中...");
    const message1 = await prisma.chatMessage.upsert({
      where: { id: "message-1" },
      update: {},
      create: {
        id: "message-1",
        senderId: user1.id,
        receiverId: user2.id,
        content: "高圧洗浄機のレンタルについて相談したいのですが、可能でしょうか？",
        read: true,
      },
    });

    const message2 = await prisma.chatMessage.upsert({
      where: { id: "message-2" },
      update: {},
      create: {
        id: "message-2",
        senderId: user2.id,
        receiverId: user1.id,
        content: "はい、可能です。現在5台ご用意できます。いつ頃からのご利用をお考えですか？",
        read: true,
      },
    });

    const message3 = await prisma.chatMessage.upsert({
      where: { id: "message-3" },
      update: {},
      create: {
        id: "message-3",
        senderId: user1.id,
        receiverId: user2.id,
        content: "5月15日から約1ヶ月間、2台お借りしたいと思います。",
        read: true,
      },
    });

    console.log("3件のチャットメッセージを作成しました");

    console.log("シードデータの作成が完了しました！");
  } catch (error) {
    console.error("シードデータの作成中にエラーが発生しました:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main(); 