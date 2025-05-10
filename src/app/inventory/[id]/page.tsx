'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, Edit, Trash2, Calendar, Package, MapPin,
  Tag, CircleDollarSign, User, Building, CircleCheck,
  AlertTriangle, Clock
} from 'lucide-react';

// モックデータ
const equipmentMockData = {
  id: 1,
  name: '単管パイプ 1.5m',
  category: '足場材',
  description: '建設現場で使用される標準的な単管パイプです。サイズは直径48.6mm×長さ1.5mとなります。防錆加工済みで、状態は良好です。',
  quantity: 120,
  available: 80,
  daily_rate: 150,
  location: '第一倉庫 A棚',
  status: 'AVAILABLE',
  image: null,
  createdAt: '2024-03-15',
  lastUpdated: '2024-05-01',
};

// リース履歴のモックデータ
const leaseHistoryMockData = [
  {
    id: 1,
    company: '山田建設株式会社',
    user: '山田太郎',
    quantity: 15,
    startDate: '2024-05-15',
    endDate: '2024-06-15',
    status: 'ACTIVE',
    direction: 'out', // 貸出
  },
  {
    id: 2,
    company: '佐藤工業株式会社',
    user: '佐藤次郎',
    quantity: 25,
    startDate: '2024-04-10',
    endDate: '2024-04-30',
    status: 'COMPLETED',
    direction: 'out', // 貸出
  },
  {
    id: 3,
    company: '鈴木建設株式会社',
    user: '鈴木三郎',
    quantity: 10,
    startDate: '2024-03-20',
    endDate: '2024-04-10',
    status: 'COMPLETED',
    direction: 'out', // 貸出
  },
];

export default function EquipmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [activeTab, setActiveTab] = useState('details');
  const [id, setId] = useState<string>('');

  // パラメータをロード
  useEffect(() => {
    const loadParams = async () => {
      const paramsData = await params;
      setId(paramsData.id);
    };
    loadParams();
  }, [params]);

  // 削除処理
  const handleDelete = () => {
    // 実際の削除処理をここに実装
    console.log(`資材ID: ${id}を削除します`);
    // 削除後は一覧ページに遷移
    window.location.href = '/inventory';
  };

  return (
    <div>
      {/* 戻るボタンとアクション */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/inventory"
          className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          在庫一覧に戻る
        </Link>
        <div className="flex space-x-2">
          <Link
            href={`/inventory/${id}/edit`}
            className="flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            <Edit className="mr-1.5 h-4 w-4 text-gray-500" />
            編集
          </Link>
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="flex items-center rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 shadow-sm hover:bg-red-50"
          >
            <Trash2 className="mr-1.5 h-4 w-4 text-red-500" />
            削除
          </button>
        </div>
      </div>

      {/* 資材名とステータス */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">{equipmentMockData.name}</h1>
          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
            <CircleCheck className="mr-1 h-4 w-4" />
            利用可能
          </span>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          最終更新: {equipmentMockData.lastUpdated}
        </p>
      </div>

      {/* タブナビゲーション */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('details')}
            className={`flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
              activeTab === 'details'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            <Package className="mr-2 h-5 w-5" />
            資材詳細
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium ${
              activeTab === 'history'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            <Calendar className="mr-2 h-5 w-5" />
            リース履歴
          </button>
        </nav>
      </div>

      {/* 削除確認モーダル */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setShowDeleteConfirm(false)}></div>
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle">&#8203;</span>
            <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <Trash2 className="h-6 w-6 text-red-600" />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">資材の削除</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      この資材を削除しますか？この操作は取り消せません。
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleDelete}
                >
                  削除する
                </button>
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={() => setShowDeleteConfirm(false)}
                >
                  キャンセル
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* タブコンテンツ */}
      <div className="mb-8">
        {activeTab === 'details' && (
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* 画像セクション */}
              <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="aspect-square w-full rounded-lg bg-gray-100 flex items-center justify-center">
                  {equipmentMockData.image ? (
                    <img
                      src={equipmentMockData.image}
                      alt={equipmentMockData.name}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  ) : (
                    <Package className="h-24 w-24 text-gray-400" />
                  )}
                </div>
              </div>

              {/* 詳細情報 */}
              <div className="p-6 md:col-span-2">
                <h3 className="text-lg font-medium text-gray-900 mb-4">基本情報</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex items-start">
                    <Tag className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">カテゴリ</p>
                      <p className="text-sm text-gray-900">{equipmentMockData.category}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Package className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">総数量</p>
                      <p className="text-sm text-gray-900">{equipmentMockData.quantity} 個</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Package className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">利用可能数量</p>
                      <div>
                        <p className="text-sm text-gray-900">
                          {equipmentMockData.available} 個
                          <span className="ml-1 text-xs text-gray-500">
                            ({Math.round((equipmentMockData.available / equipmentMockData.quantity) * 100)}%)
                          </span>
                        </p>
                        <div className="mt-1 h-1.5 w-32 rounded-full bg-gray-200">
                          <div 
                            className="h-1.5 rounded-full bg-blue-600" 
                            style={{ width: `${(equipmentMockData.available / equipmentMockData.quantity) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CircleDollarSign className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">日額レート</p>
                      <p className="text-sm text-gray-900">
                        {equipmentMockData.daily_rate ? `${equipmentMockData.daily_rate.toLocaleString()} 円/日` : '未設定'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">保管場所</p>
                      <p className="text-sm text-gray-900">{equipmentMockData.location || '未設定'}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                    <div>
                      <p className="text-sm font-medium text-gray-500">登録日</p>
                      <p className="text-sm text-gray-900">{equipmentMockData.createdAt}</p>
                    </div>
                  </div>
                </div>

                {/* 説明 */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-500">説明</h3>
                  <p className="mt-1 text-sm text-gray-900">{equipmentMockData.description || '説明はありません'}</p>
                </div>

                {/* 利用状況アラート */}
                {equipmentMockData.available < equipmentMockData.quantity * 0.2 && (
                  <div className="mt-6 rounded-md bg-yellow-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <AlertTriangle className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800">在庫が少なくなっています</h3>
                        <div className="mt-2 text-sm text-yellow-700">
                          <p>利用可能数が全体の20%を下回っています。リース予定を確認してください。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">リース履歴</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">この資材のリース履歴を表示しています。</p>
            </div>
            <div className="border-t border-gray-200">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">取引先</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">担当者</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">数量</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">期間</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">ステータス</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {leaseHistoryMockData.map((lease) => (
                      <tr key={lease.id}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                          <div className="flex items-center">
                            <div className="h-8 w-8 flex-shrink-0 rounded-full bg-blue-100 flex items-center justify-center">
                              <Building className="h-4 w-4 text-blue-600" />
                            </div>
                            <div className="ml-4">
                              <div className="font-medium text-gray-900">{lease.company}</div>
                              <div className="text-gray-500 text-xs">
                                {lease.direction === 'out' ? '貸出先' : '借入先'}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <User className="h-4 w-4 text-gray-400 mr-1" />
                            {lease.user}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {lease.quantity} 個
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <div className="flex flex-col">
                            <span>{lease.startDate} 〜</span>
                            <span>{lease.endDate}</span>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          {lease.status === 'ACTIVE' && (
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                              リース中
                            </span>
                          )}
                          {lease.status === 'COMPLETED' && (
                            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                              完了
                            </span>
                          )}
                          {lease.status === 'CANCELLED' && (
                            <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                              キャンセル
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 