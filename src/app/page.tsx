import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-[#1e3278] text-white py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                建設資材の<span className="text-secondary">シェアリング</span>で<br />
                業界の未来を変える
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90">必要な時に、必要な資材を</p>
              <p className="mb-8 text-gray-200 max-w-lg">
                リースシェアは建設会社間の資材シェアリングを簡単にする革新的なプラットフォームです。
                コスト削減と資源の有効活用を同時に実現します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/auth/login" 
                  className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-center transition-colors duration-200 shadow-lg"
                >
                  ログイン
                </Link>
                <Link 
                  href="/auth/signup" 
                  className="bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg text-center transition-colors duration-200 shadow-lg"
                >
                  新規登録
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image 
                  src="/construction.jpg" 
                  alt="建設現場イメージ" 
                  width={600} 
                  height={400}
                  className="rounded-lg object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white p-4 rounded-lg shadow-lg">
                <p className="text-lg font-bold">資材コスト</p>
                <p className="text-2xl font-bold">最大40%削減</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">リースシェアの特徴</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">建設業界のための、より効率的で持続可能なリースシステム</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md card">
              <div className="text-primary dark:text-accent text-4xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">簡単な在庫管理</h3>
              <p className="text-gray-600 dark:text-gray-400">建設資材を簡単に登録・管理し、リアルタイムで利用状況を把握できます。使っていない資材を有効活用しましょう。</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md card">
              <div className="text-primary dark:text-accent text-4xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">迅速な資材検索</h3>
              <p className="text-gray-600 dark:text-gray-400">スマートな検索機能で、必要な資材を素早く見つけることができます。地域やカテゴリでフィルタリングも可能です。</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md card">
              <div className="text-primary dark:text-accent text-4xl mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">スムーズなコミュニケーション</h3>
              <p className="text-gray-600 dark:text-gray-400">アプリ内チャット機能で、リース前の確認や詳細条件の交渉がスムーズに。業者間のやり取りをシンプルに。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-gradient-to-r from-secondary to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">今すぐ始めましょう</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            リースシェアに参加して、建設資材の新しい活用方法を見つけましょう。
            登録は簡単2ステップで完了します。
          </p>
          <Link 
            href="/auth/signup" 
            className="inline-block bg-white text-secondary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
          >
            無料で始める
          </Link>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                  <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
                  <path fillRule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clipRule="evenodd" />
                </svg>
                リースシェア
              </h3>
              <p className="text-gray-400 max-w-xs">建設会社間の資材シェアリングプラットフォーム。持続可能な建設業界を目指して。</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">リンク</h4>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white">会社概要</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">お問い合わせ</Link></li>
                  <li><Link href="/help" className="text-gray-400 hover:text-white">ヘルプセンター</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">法的情報</h4>
                <ul className="space-y-2">
                  <li><Link href="/terms" className="text-gray-400 hover:text-white">利用規約</Link></li>
                  <li><Link href="/privacy" className="text-gray-400 hover:text-white">プライバシーポリシー</Link></li>
                  <li><Link href="/legal" className="text-gray-400 hover:text-white">特定商取引法</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} リースシェア - 建設資材リースプラットフォーム</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
