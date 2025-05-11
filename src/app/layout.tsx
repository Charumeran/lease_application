import '@/app/globals.css';
import { Noto_Sans_JP } from 'next/font/google';
import type { Metadata } from 'next';
import AuthProvider from '@/lib/auth-provider';

export const metadata: Metadata = {
  title: 'リースシェア - 建設資材リースプラットフォーム',
  description: '建設会社間で余剰資材をリースし合うことで、資材の有効活用とコスト削減を実現するプラットフォームです。',
};

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className={`min-h-screen flex flex-col ${notoSansJP.className}`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
