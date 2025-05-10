import '@/app/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import AuthProvider from '@/lib/auth-provider';

export const metadata: Metadata = {
  title: 'リースシェア - 建設資材リースプラットフォーム',
  description: '建設会社間で余剰資材をリースし合うことで、資材の有効活用とコスト削減を実現するプラットフォームです。',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
