import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">リースシェア</h1>
              <p className="text-xl md:text-2xl mb-6">建設資材を簡単に借りる・貸すプラットフォーム</p>
              <p className="mb-8">必要な時に必要な資材を。建設業界の新しいリースの形。</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/auth/login" 
                  className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg text-center"
                >
                  ログイン
                </Link>
                <Link 
                  href="/auth/signup" 
                  className="bg-transparent hover:bg-blue-500 text-white border border-white font-bold py-3 px-6 rounded-lg text-center"
                >
                  新規登録
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/construction.jpg" 
                alt="建設現場イメージ" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">リースシェアの特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">簡単な在庫管理</h3>
              <p className="text-gray-600">所有している建設資材を簡単に登録・管理できます。利用可能な数量や貸出状況もリアルタイムで確認可能。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">迅速な資材検索</h3>
              <p className="text-gray-600">必要な建設資材をカテゴリや地域から素早く検索。近隣の企業が提供する資材をすぐに見つけられます。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">シームレスなコミュニケーション</h3>
              <p className="text-gray-600">リース申請から承認まで、アプリ内チャットで直接やり取り。スムーズな取引をサポートします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} リースシェア - 建設資材リースプラットフォーム</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
