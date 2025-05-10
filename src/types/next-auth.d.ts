import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    companyId: string;
    companyName: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      companyId: string;
      companyName: string;
    };
  }
}

// next-auth/jwtのインターフェースを拡張
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    companyId: string;
    companyName: string;
  }
} 