import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth-options";
import '@/lib/init'; // アプリケーション初期化処理をインポート

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 